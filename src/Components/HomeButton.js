import React from 'react';
import { IoLogOutOutline } from 'react-icons/io5';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  border: none;
  background: linear-gradient(to left, #ec008c, #fc6767);
  cursor: pointer;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-left: 20px;
  transition: all 0.3s linear;
  svg {
    font-size: 24px;
  }
  &:hover {
    color: #fbca36;
  }
`;

const HomeButton = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/');
  };

  return (
    <Button onClick={handleClick}>
      <IoLogOutOutline />
      Home
    </Button>
  );
};

export default HomeButton;
