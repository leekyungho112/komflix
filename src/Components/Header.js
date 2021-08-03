import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';
import { BsHouseDoor, BsFilm, BsTv } from 'react-icons/bs';
const Nav = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  background-color: rgba(25, 25, 25, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 5px solid
    ${(props) => (props.current ? ' #fc6767' : 'transparent')};
  color: ${(props) => (props.current ? '#fbca36' : 'white')};
  transition: all 0.5s ease-in-out;
  svg {
    vertical-align: middle;
    margin: 0 5px 0 0;
  }
`;
const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Tag = styled.span`
  vertical-align: middle;
  display: inline-block;
`;
const Header = ({ location: { pathname } }) => {
  return (
    <Nav>
      <List>
        <Item current={pathname === '/'}>
          <SLink to="/">
            <BsHouseDoor />
            <Tag>Home</Tag>
          </SLink>
        </Item>
        <Item current={pathname === '/movie'}>
          <SLink to="/movie">
            <BsFilm />
            <Tag>Movies</Tag>
          </SLink>
        </Item>
        <Item current={pathname === '/tv'}>
          <SLink to="/tv">
            <BsTv />
            <Tag>Tv</Tag>
          </SLink>
        </Item>
        <Item current={pathname === '/search'}>
          <SLink to="/search">
            <IoSearch />
            <Tag>Search</Tag>
          </SLink>
        </Item>
      </List>
    </Nav>
  );
};

export default withRouter(Header);
