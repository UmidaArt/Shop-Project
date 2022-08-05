import React, {useEffect, useState} from 'react';
import {slides} from "../../data";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  position: relative;
  margin-bottom: 20px;
`;

const Wrapper =  styled.div`
  height: 100%;
  display: flex;
  transition: 0.04s;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bg};
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Image = styled.img`
  width: 50vw;
  height: 100%;
  object-fit: contain;
`;

const  InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 60px;
`;

const Description = styled.p`
  font-size: 24px;
  margin: 40px 0;
`;

const Button = styled.button`
  padding: 10px;
  background: #e77ae1;
  cursor: pointer;
  color: #fff;
  border-radius: 8px;
  border: none;
`;

const Arrow = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  z-index: 1;
  top: 0;
  bottom: 0;
  font-size: 30px;
  left: ${(props) => props.direction === 'left' ? '30px' : 'unset'};
  right: ${(props) => props.direction === 'right' ? '30px' : 'unset'};
  cursor: pointer;
  transition: 1s;
  :hover {
    color: darkmagenta;
  }
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : slides.length - 1)
        }
        if (direction === 'right') {
            setSlideIndex(slideIndex < slides.length - 1 ? slideIndex + 1 : 0)
        }
    }

    // const startSlider = () => {
    //     setInterval(() => {
    //         handleClick('right')
    //     }, 3000)
    // }
    // useEffect(() => {
    //     startSlider()
    // }, [])

    return (
        <div>
            <Container>
                <Arrow onClick={() => handleClick('left')} direction='left'>
                    <i className='bx bxs-chevrons-left'></i>
                </Arrow>
                <Wrapper slideIndex={slideIndex}>
                    {
                        slides.map(slide => (
                            <Slide bg={slide.bgColor} key={slide.id}>
                                <ImgContainer>
                                    <Image src={slide.img}/>
                                </ImgContainer>
                                <InfoContainer>
                                    <Title>{slide.title}</Title>
                                    <Description>{slide.desc}</Description>
                                    <Button>Buy now</Button>
                                </InfoContainer>
                            </Slide>
                        ))
                    }
                </Wrapper>
                <Arrow onClick={() => handleClick('right')} direction="right">
                    <i className='bx bxs-chevrons-right'></i>
                </Arrow>
            </Container>
        </div>
    );
};

export default Slider;