import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from './Loader';
import Company from './Company';
import Detail from './Detail';
import Crew from './Crew';
import Country from './Country';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const TabBtnWrap = styled.ul`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  height: 50px;
`;

const Button = styled.li`
  width: 60px;
  list-style: none;
  text-align: center;
  cursor: pointer;
`;
const BtnText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #fbca36;
  border-bottom: 3px solid
    ${(props) => (props.active ? '#3498db' : 'transparent')};
  transition: border-bottom 0.5s ease-in-out;
`;

const Content = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Tab = ({ result, credits, loading, isMovie }) => {
  const [company] = useState(result.production_companies);
  const [country] = useState(result.production_countries);
  const [currentIndex, setCurrentIndex] = useState(0);

  const TabList = [
    {
      tab: '기본정보',
      content: <Detail result={result} isMovie={isMovie} />,
    },
    {
      tab: '배우',
      content: <Crew credits={credits} isMovie={isMovie} />,
    },
    {
      tab: '제작사',
      content: <Company company={company} />,
    },
    {
      tab: '국가',
      content: <Country country={country} />,
    },
  ];

  const changeItem = (index) => {
    setCurrentIndex(index);
  };
  return loading ? (
    <Loader />
  ) : (
    <Container>
      <TabBtnWrap>
        {TabList &&
          TabList.length > 0 &&
          TabList.map((section, index) => (
            <Button key={index} onClick={() => changeItem(index)}>
              <BtnText active={index === currentIndex}>{section.tab}</BtnText>
            </Button>
          ))}
      </TabBtnWrap>
      <Content>{TabList[currentIndex].content}</Content>
    </Container>
  );
};
Tab.propTypes = {
  result: PropTypes.object,
  credits: PropTypes.object,
  loading: PropTypes.bool.isRequired,
};
export default Tab;
