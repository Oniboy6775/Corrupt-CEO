import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <h1 className="website__name">
        9ft <br /> <span>Club</span>
      </h1>
      <h2 className="website__description">
        Making nft projects with useful utils
      </h2>
      <button
        className="btn-block btn mint__button"
        onClick={() => navigate('/mint')}
      >
        mint
      </button>
      <div className="mint__info">
        <p>mint live soon!</p>
        <p>Price of the mint increases with each mint</p>
      </div>
    </Wrapper>
  );
};

export default HomePage;
const Wrapper = styled.div`
  padding-top: 4rem;
  .website__name {
    color: var(--primary-500);
    font-size: min(10vw + 3rem, 8rem);
    font-weight: 900;
  }
  .website__description {
    text-transform: uppercase;
  }
  .mint__button {
    padding: 1rem;
    text-transform: uppercase;
    font-weight: 900;
    width: 90%;
  }
  .mint__info {
    text-align: center;
    text-transform: capitalize;
  }
  @media (min-width: 800px) {
    .mint__button {
      width: 50%;
    }
  }
`;
