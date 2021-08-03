import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import Loader from 'Components/Loader';
import Message from 'Components/Message';
import { Link } from 'react-router-dom';
import {
  IoInformationCircleOutline,
  IoArrowBackOutline,
  IoArrowForwardOutline,
} from 'react-icons/io5';

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow-x: hidden;
`;

const Track = styled.div`
  height: 100%;
  transform: translate3d(-${(p) => p.current * 40}vw, 0, 0);
  transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1) 0s;
`;

const MainSlide = styled.ul`
  display: flex;
  height: 100%;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  transform: translate3d(${(100 - 40) / 2}vw, 0, 0);
`;

const MainContent = styled.li`
  min-width: 40vw;
  max-width: 40vw;
  height: 50%;
  padding: 0 15px 15px;
  opacity: ${(props) => (props.className === 'active' ? 1 : 0.5)};
  transform: ${(props) =>
    props.className === 'active' ? `scale(0.98)` : `scale(0.65)`};
  transition: all 0.2s linear;
`;

const PrevButton = styled.button`
  z-index: 10;
  width: 40px;
  height: 40px;
  background: transparent;
  color: #fbca36;
  border: 1px solid #fbca36;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: calc(${(p) => (100 - p.sw) / 2}vw - 45px);
  transition: all 0.2s linear;
  &:hover {
    color: white;
    border: 1px solid white;
    transform: scale(0.9);
  }
`;

const MainImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgurl});
  background-size: cover;
  background-position: center center;
  border-radius: 5px;
  position: relative;
  -webkit-box-shadow: 0px 2px 15px 0px rgba(255, 255, 255, 0.22);
  box-shadow: 0px 2px 15px 0px rgba(255, 255, 255, 0.22);
`;

const slideIn = keyframes`
  0%{
    transform: translateY(-20px); 
    opacity: 0;
  }
 100%{
    transform: translateY(0px); 
    opacity: 1;
  }
`;

const MainPost = styled.div`
  position: relative;
  animation: ${slideIn} 0.7s ease-in forwards;
  transform: translateY(-20px);
  opacity: 0;
  padding: 10px 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const TopNumber = styled.div`
  position: absolute;
  top: 10px;
  left: -10px;
  height: 0;
  border-bottom: 40px solid red;
  border-left: 20px solid transparent;
  transform: rotate(270deg);
  span {
    writing-mode: vertical-lr;
    text-align: center;
    color: white;
    font-weight: 700;
    font-size: 20px;
  }
`;
const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 15px;
  color: #fbca36;
  font-weight: 700;
  letter-spacing: 1.1px;
`;
const Overview = styled.p`
  font-size: 12px;
  margin-bottom: 15px;
  color: #6b7b8c;
  font-weight: 500;
`;

const Category = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid #fbca36;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  top: -15px;
  right: -15px;
  background: linear-gradient(to left, #ec008c, #fc6767);
  span {
    font-size: 12px;
    font-weight: 500;
  }
`;

const Button = styled.button`
  background: linear-gradient(to left, #ec008c, #fc6767);
  border: none;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 5px;
  cursor: pointer;

  span {
    color: white;
    font-size: 12px;
    font-weight: 500;
    transition: all 0.2s linear;
  }
  svg {
    color: white;
    font-size: 20px;
    transition: all 0.2s linear;
  }
  &:hover {
    span {
      color: #fbca36;
    }
    svg {
      color: #fbca36;
    }
  }
`;
const NextButton = styled.button`
  z-index: 10;
  width: 40px;
  height: 40px;
  background: transparent;
  color: #fbca36;
  border: 1px solid #fbca36;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  right: calc(${(p) => (100 - p.sw) / 2}vw - 45px);
  transition: all 0.2s linear;
  &:hover {
    color: white;
    border: 1px solid white;
    transform: scale(0.9);
  }
`;
const HomePresenter = ({ trend, error, loading }) => {
  const [current, setCurrent] = useState(0);
  const length = trend.length;
  const slideRef = useRef(0);

  const handleSlide = (direction) => {
    if (direction === 'right') {
      setCurrent(current === length - 1 ? 0 : current + 1);
    } else if (direction === 'left') {
      setCurrent(current > 0 ? current - 1 : length - 1);
    }
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setCurrent(current === length - 1 ? 0 : current + 1);
  //   }, 5000);

  //   return () => clearTimeout(timer);
  // }, [current, length]);

  return loading ? (
    <Loader />
  ) : (
    <Container>
      <PrevButton sw={40} onClick={() => handleSlide('left')}>
        <IoArrowBackOutline />
      </PrevButton>

      <Track ref={slideRef} current={current}>
        <MainSlide>
          {trend && trend.length > 0 && (
            <>
              {trend.map((item, index) => (
                <MainContent
                  className={current === index ? 'active' : 'slide'}
                  key={index}
                >
                  <MainImage
                    bgurl={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                  >
                    {current === index && (
                      <MainPost className={current === index && 'current'}>
                        <TopNumber>
                          <span>{index + 1} TOP</span>
                        </TopNumber>
                        <Title>{item.title ? item.title : item.name}</Title>
                        <Category>
                          <span>{item.media_type}</span>
                        </Category>
                        <Overview>{item.overview.substring(0, 40)}...</Overview>
                        <Link
                          to={
                            item.media_type === 'movie'
                              ? `/movie/${item.id}`
                              : `/tv/${item.id}`
                          }
                        >
                          <Button>
                            <IoInformationCircleOutline />
                            <span>상세정보</span>
                          </Button>{' '}
                        </Link>
                      </MainPost>
                    )}
                  </MainImage>
                </MainContent>
              ))}
            </>
          )}
        </MainSlide>
        {error && <Message color="#e74c3c" text={error} />}
      </Track>
      <NextButton sw={40} onClick={() => handleSlide('right')}>
        <IoArrowForwardOutline />
      </NextButton>
    </Container>
  );
};

HomePresenter.propTypes = {
  trend: PropTypes.array,
  loading: PropTypes.bool.isRequired,
};
export default HomePresenter;
