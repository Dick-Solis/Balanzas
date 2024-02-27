// GlobalStyle.jsx
import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';

export const GlobalStyle = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
      body {
        font-family: 'Russo One', sans-serif;
      }
    `}
  />
);


