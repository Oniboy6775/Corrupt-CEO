import styled from 'styled-components';
const About = () => {
  return (
    <Container>
      <h1 className="title">About 9ft</h1>
      <div className="title-underline"></div>
      <p className="about">
        9FT Club is an initiative to launch useful utility NFT's. We focus on
        capturing markets and bring them on blockchain, where end users will
        have access to the flexible services that they have never experienced
        before.
      </p>
      <p className="about">
        The owner of the 9FT Club NFT will Have access to all the project &
        Events for ever for free.
      </p>
      <p className="about">
        To become a Owner of 9FT Club you will have to Mint a 9FT NFT, Each 9FT
        is a Lab Grown Diamond Jewellery. (Check FAQ For What are Lab Grown
        Diamonds?)
      </p>
      <p className="about">
        Mint price will Increase with Each Mint, and so will the size of the
        Diamond Jewellery.
      </p>
      <p className="about">Limited collection of only 61 NFT's</p>
      <p className="about">Airdrop to 7 Lucky users who own an NFT.</p>
    </Container>
  );
};

export default About;
const Container = styled.div`
  padding-top: 4rem;
  .about {
    font-size: min(2vw + 1rem, 2rem);
    padding-left: 2rem;
  }
`;
