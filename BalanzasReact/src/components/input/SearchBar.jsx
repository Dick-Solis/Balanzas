import React from 'react';
import styled from '@emotion/styled';

const StyledGroup = styled.div`
  display: flex;
  line-height: 30px;
  align-items: center;
  position: relative;
  max-width: 100%;
`;

const StyledInput = styled.input`
font-size: 25px;
  width: 100%;
  height: 50px;
  line-height: 28px;
  padding: 0 1rem;
  padding-left: 2.5rem;
  border: 2px solid transparent;
  border-radius: 8px;
  outline: none;
  background-color: #f3f3f4;
  color: #0d0c22;
  transition: 0.3s ease;

  &::placeholder {
    margin-left: 2px;
    font-size: 25px;
    color: #707070;
    letter-spacing: 5px;
    margin-top: 2px;
  }

  &:focus,
  &:hover {
    outline: none;
    border: 1px solid black;
    background-color: #fff;
    box-shadow: 0 0 0 4px rgb(234 226 183 / 10%);
  }
`;

const StyledIcon = styled.svg`
  position: absolute;
  left: 1rem;
  fill: #000000;
  width: 1rem;
  height: 1rem;
  color: black;
  transform: scale(1.5)
`;
const Cpath = styled.div`
background-color: #525252;
border-radius: 50%;
`;

export const SearchBar = () => {
  return (
    <StyledGroup>
      <StyledIcon viewBox="0 0 24 24" aria-hidden="true">
        <g>
          <path
            d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
          ></path>
        </g>
      </StyledIcon>
      <StyledInput type="search" placeholder="Buscar" />
    </StyledGroup>
  );
};

