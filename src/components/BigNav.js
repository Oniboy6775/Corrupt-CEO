import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const BigNav = () => {
  const Navigation = [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'mint', link: '/mint' },
    { id: 3, name: 'road map', link: '/faq' },
    { id: 4, name: 'about', link: '/about' },
    // { id: 5, name: 'contact', link: '/contact' },
  ];
  const navigate = useNavigate();
  return (
    <Container>
      <div className="nav__buttons__container">
        {Navigation.map((e, index) => {
          const { link, name, id } = e;
          return (
            <NavLink
              to={link}
              className={
                index === id ? 'nav__button btn active' : 'nav__button btn'
              }
              onClick={() => navigate(link)}
            >
              {name}
            </NavLink>
          );
        })}
      </div>
    </Container>
  );
};

export default BigNav;
const Container = styled.div`
  display: none;
  .nav__button {
    margin: 0 1rem;
    background-color: var(--grey-700);
  }
  .active {
    color: black;
    background-color: var(--primary-500);
  }
  @media (min-width: 800px) {
    display: flex;
  }
`;
