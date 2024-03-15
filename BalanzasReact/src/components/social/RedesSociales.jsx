import React from 'react';
import styled from '@emotion/styled';
import { FaInstagram, FaTwitter, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const CardContainer = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px 25px;
  gap: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.055);
`;

const SocialContainer = styled.a`
  width: 52px;
  height: 52px;
  border-radius: 5px;
  background-color: rgb(44, 44, 44);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition-duration: 0.3s;
  &:hover {
    background-color: ${props => props.bgColor};
    transform: scale(0.9);
    transition-duration: 0.3s;
  }
`;

const SocialIcon = styled.svg`
  width: 23px;
  path {
    fill: rgb(255, 255, 255);
  }
`;

export const RedesSociales = () => {
  return (
    <CardContainer>
      <SocialContainer href="#" bgColor="#d62976">
        <SocialIcon as={FaInstagram} />
      </SocialContainer>
      <SocialContainer href="#" bgColor="#00acee">
        <SocialIcon as={FaTwitter} />
      </SocialContainer>
      <SocialContainer href="#" bgColor="#0072b1">
        <SocialIcon as={FaLinkedinIn} />
      </SocialContainer>
      <SocialContainer href="#" bgColor="green">
        <SocialIcon as={FaWhatsapp} />
      </SocialContainer>
    </CardContainer>
  );
};

