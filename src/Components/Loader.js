import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = styled.div`
  width: 200px;
  height: 200px;
  background: #1a1a1f;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0004);
  &:hover {
    background: #03e9f4;
    color: #050801;
  }
`;
const Span = styled.span`
  position: absolute;
  display: block;
  &:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: animate1 2s linear infinite;
    animation-delay: 0s;
  }
  @keyframes animate1 {
    0% {
      left: -100%;
    }
    50% {
      left: 100%;
    }
    100% {
      left: 100%;
    }
  }

  &:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 5px;
    background: linear-gradient(270deg, transparent, #03e9f4);
    animation: animate3 2s linear infinite;
    animation-delay: 1s;
  }
  @keyframes animate3 {
    0% {
      right: -100%;
    }
    50% {
      right: 100%;
    }
    100% {
      right: 100%;
    }
  }
  &:nth-child(2) {
    top: -100%;
    right: 0;
    width: 5px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #03e9f4);
    animation: animate2 2s linear infinite;
    animation-delay: 0.5s;
  }
  @keyframes animate2 {
    0% {
      top: -100%;
    }
    50% {
      top: 100%;
    }
    100% {
      top: 100%;
    }
  }
  &:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 5px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #03e9f4);
    animation: animate4 2s linear infinite;
    animation-delay: 1.5s;
  }
  @keyframes animate4 {
    0% {
      bottom: -100%;
    }
    50% {
      bottom: 100%;
    }
    100% {
      bottom: 100%;
    }
  }
`;

const Text = styled.h3`
  color: #03e9f4;
  overflow: hidden;
  letter-spacing: 2px;
  transition: 0.5s;
  border-right: 1px solid #03e9f4;
  animation: typing 3s steps(10) infinite;

  @keyframes typing {
    0% {
      width: 0px;
    }
    30% {
      width: 123px;
    }
    60% {
      width: 0px;
    }
    90% {
      width: 0px;
    }
    100% {
      width: 0px;
    }
  }
`;
const Loader = () => {
  return (
    <Container>
      <Loading>
        <Span></Span>
        <Span></Span>
        <Span></Span>
        <Span></Span>
        <Text>Loading...</Text>
      </Loading>
    </Container>
  );
};

export default Loader;
