import styled from 'styled-components';
import {
  FaTelegram,
  FaYoutube,
  FaDiscord,
  FaTwitter,
  FaSnapchat,
  FaInstagram,
  FaFacebook,
} from 'react-icons/fa';
const SocialLinks = () => {
  const socialLinks = [
    { icon: <FaFacebook />, link: 'https://facebook.com' },
    { icon: <FaTwitter />, link: 'https://facebook.com' },
    { icon: <FaInstagram />, link: 'https://facebook.com' },
    { icon: <FaSnapchat />, link: 'https://facebook.com' },
    { icon: <FaYoutube />, link: 'https://facebook.com' },
    { icon: <FaDiscord />, link: 'https://facebook.com' },
  ];
  const goToLink = link => (window.location.href = link);
  return (
    <Container>
      <div className="social__links">
        {socialLinks.map((e, index) => {
          const { link, icon } = e;
          return (
            <div key={index} onClick={() => goToLink(link)} className="links">
              {e.icon}
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default SocialLinks;
const Container = styled.div`
  position: fixed;
  right: 10px;
  top: 40%;
  .links {
    padding: 0.2rem 0;
    cursor: pointer;
    transition: var(--transition);
    &:hover {
      transform: translateY(-3px);
    }
  }
`;
