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
  color: white;
`;

const Wrapper =  styled.div`
  height: 100%;
  display: flex;
  transition: 0.8s;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  background-color: rgba(0,0,0,0.5);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const ImgContainer = styled.div`
  height: 100%;
`;

const Image = styled.img`
  width: 100vw;
  height: 100%;
  object-fit: cover;
`;

const  InfoContainer = styled.div`
  position: absolute;
  top: 25%;
  left: 30%;
  padding: 50px;
`;

const Title = styled.h1`
  font-family: 'Lora', serif;
  font-size: 60px;
`;

const Description = styled.p`
  font-family: 'Lora', serif;
  font-size: 40px;
  margin: 20px 0;
`;

const Button = styled.button`
  cursor: pointer;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  background: transparent;
  padding: 10px 20px;
  border-radius: 8px;
  border-color: #9ca3ad;

  :hover {
    background: rgba(0, 0, 0, 0.4);
  }
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
  color: #e8ded1;

  :hover {
    color: #faf6f1;
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
                    <i className='bx bxs-chevrons-left'/>
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
                    <i className='bx bxs-chevrons-right'/>
                </Arrow>
            </Container>
        </div>
    );
};

export default Slider;