import React from 'react';
import styled from "styled-components";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {ButtonTemplate} from "../../mixines";
import {useDispatch} from "react-redux";
import img from '../../assets/images/thumb-1920-309983.jpeg'

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
  color: #282c34;
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

const Register = () => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirmation: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().min(6, 'Your password is too short.').required('Password is required'),
            passwordConfirmation:Yup.string().min(6, 'Your password is too short.')
                .oneOf([Yup.ref('password'),null], 'Passwords must match').required('Password confirmation is required')
        }),
        onSubmit: values => {
            delete values.passwordConfirmation
            alert(JSON.stringify(values, null, 2));
        },
    })

    return (
        <>
            <Header/>
            <Container>
                <ImgContainer>
                    <Image src={img}/>
                    <Wrapper>
                        <Title>Create an account</Title>
                        <Form onSubmit={formik.handleSubmit}>
                            <InputGroup>
                                <Input placeholder='Email' id='email' type='email' {...formik.getFieldProps('email')}/>
                                {formik.touched.email && formik.errors.email ? (
                                    <div>{formik.errors.email}</div>
                                ) : null}
                            </InputGroup>
                            <InputGroup>
                                <Input placeholder='Password' id='password' type='text' {...formik.getFieldProps('password')}/>
                                {formik.touched.password && formik.errors.password ? (
                                    <div>{formik.errors.password}</div>
                                ) : null}
                            </InputGroup>
                            <InputGroup>
                                <Input placeholder='Confirm password' id='passwordConfirmation' type='text' {...formik.getFieldProps('passwordConfirmation')}/>
                                {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation ? (
                                    <div>{formik.errors.passwordConfirmation}</div>
                                ) : null}
                            </InputGroup>
                            <Button type='submit'>Register</Button>
                        </Form>
                    </Wrapper>
                </ImgContainer>
            </Container>
            <Footer/>
        </>
    );
};

export default Register;