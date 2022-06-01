import React, { useState } from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';
import SmallNav from '../components/SmallNav';
import BigNav from '../components/BigNav';

import { useEffect } from 'react';
import SocialLinks from '../components/SocialLinks';
const Landing = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  useEffect(() => {
    document.getElementById('background-video').play();
  }, []);
  return (
    <Container className="container">
      <video id="background-video" autoplay loop muted src="./assets/video.mp4">
        <source src="./assets/video.mp4" type="video/mp4" />
      </video>

      <header className="">
        <div className="header__container container">
          <div className="logo">
            <img src="./assets/logo.png" alt="logo" className="img " />
          </div>
          <FaAlignRight
            className="hamburger"
            onClick={() => setIsNavOpen(true)}
          />
          <SmallNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
          <BigNav />
        </div>
      </header>
      <Outlet />
      <SocialLinks />
    </Container>
  );
};

export default Landing;
const Container = styled.div`
  /* position: relative; */
  header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
  }
  .header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .hamburger,
  svg {
    font-size: 2rem;
  }
  .logo {
    display: flex;
    align-items: center;
    width: 4rem;
  }
  @media (min-width: 800px) {
    .hamburger {
      display: none;
    }
  }
`;
