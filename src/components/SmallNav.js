import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaTimesCircle } from 'react-icons/fa';

const SmallNav = ({ isNavOpen, setIsNavOpen }) => {
  const Navigation = [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'mint', link: '/mint' },
    { id: 3, name: 'road map', link: '/faq' },
    { id: 4, name: 'about', link: '/about' },
    // { id: 5, name: 'contact', link: '/contact' },
  ];
  return (
    <Container isNavOpen={isNavOpen}>
      <Wrapper>
        <div className="close__btn">
          <FaTimesCircle className="" onClick={() => setIsNavOpen(false)} />
        </div>
        <div className="nav__list">
          {Navigation.map((e, index) => {
            const { link, name, id } = e;
            return (
              <NavLink
                to={link}
                className={index === id ? 'nav__link active' : 'nav__link'}
                onClick={() => setIsNavOpen(false)}
              >
                {name}
              </NavLink>
            );
          })}
        </div>
      </Wrapper>
    </Container>
  );
};

export default SmallNav;
const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ isNavOpen }) => (isNavOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  transition: var(--transition);
  .close__btn {
    text-align: right;
  }
  .nav__list {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .nav__link {
    text-transform: uppercase;
    margin: 1rem;
    padding: 1rem 0;
    cursor: pointer;
    line-height: 1;
    letter-spacing: 2px;
    font-weight: 900;
    border-radius: var(--borderRadius);
    color: var(--primary-500);
    background-color: var(--grey-700);
    width: 50%;
    &:hover {
      opacity: 0.8;
    }
  }
  .active {
    color: black;
    background-color: var(--primary-500);
  }
`;
const Wrapper = styled.div`
  margin: auto;
  max-width: 600px;
  background-color: var(--grey-700);
  color: var(--white);
  width: 80%;
  padding: 1rem;
  border-radius: 1rem;
`;
