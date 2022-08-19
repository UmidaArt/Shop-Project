import React, {useEffect} from 'react';
import styled from "styled-components";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {ButtonTemplate} from "../../mixines";
import img from "../../assets/images/360_F_91356380_Ldrwb4ogss5TCU602w0r6sANvCFZhIyt.jpeg"
import {useDispatch, useSelector} from "react-redux";
import {signInUser} from "../../redux/slices/userSlice";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import Layout from "../../components/Layout/Layout";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgContainer = styled.div`
  height: 80%;
  position: relative;
`;

const Image = styled.img`
  width: 100vw;
  height: 500px;
  object-fit: cover;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 30px;
  position: absolute;
  right: 13%;
  top: 10%;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: normal;
  margin-bottom: 20px;
  color: #bebebf;
`;
const Form = styled.form`
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  ::placeholder {
    color: #e4e8ee;
    font-weight: bold;
  }
  width: 100%;
  padding: 20px;
  margin-bottom: 10px;
  background-color: transparent;
  border: 2px solid #d8e0e0;
`;

const Button = styled.button`
  ${ButtonTemplate};
  width: 100%;
  margin-bottom: 30px;
  background-color: transparent;
  border: 2px solid #d8e0e0;
  border-radius: 0;
  color: #e4e8ee;
  font-weight: bold;

  :hover {
    background: rgba(255, 255, 255, 0.2);
    color: white;
  }
`;

const Login = () => {
    const dispatch = useDispatch()
    const {isSuccess, isError, errorMessage} = useSelector(s => s.user)
    const navigation = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().min(6, 'Your password is too short.').required('Password is required'),
        }),
        onSubmit: values => {
           delete values.passwordConfirmation
           dispatch(signInUser(values))
        },
    })

    useEffect(() => {
        if (isError) {
            toast.error(errorMessage);
        }
        if (isSuccess) {
           navigation('/')
        }
    }, [isSuccess, isError]);

    return (
        <Layout>
            <Container>
                <ImgContainer>
                    <Image src={img}/>
                    <Wrapper>
                        <Title>Sign in</Title>
                        <Form onSubmit={formik.handleSubmit}>
                            <InputGroup>
                                <Input placeholder='Email' id='email' type='email' {...formik.getFieldProps('email')}/>
                                {formik.touched.email && formik.errors.email ? (
                                    <div>{formik.errors.email}</div>
                                ) : null}
                            </InputGroup>
                            <InputGroup>
                                <Input placeholder='Password' id='password' type='password' {...formik.getFieldProps('password')}/>
                                {formik.touched.password && formik.errors.password ? (
                                    <div>{formik.errors.password}</div>
                                ) : null}
                            </InputGroup>
                            <Button type='submit'>Sign in</Button>
                        </Form>
                    </Wrapper>
                </ImgContainer>
            </Container>
        </Layout>
    );
};

export default Login;
