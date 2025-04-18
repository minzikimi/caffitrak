import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper role="contentinfo">
      <FooterContent>
        <FooterText>
          By Minji K.
        </FooterText>
      </FooterContent>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  padding: 16px 20px;
  font-size: 1rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #FCFBF4;
  z-index: 999;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding:1rem;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterText = styled.p`
  margin: 4px 0;
  letter-spacing: 0.5px;
  font-size: 0.9rem;
`;

export default Footer;
