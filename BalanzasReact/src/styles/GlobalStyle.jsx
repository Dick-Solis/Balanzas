// GlobalStyle.jsx
import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';

export const GlobalStyle = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&family=Russo+One&display=swap');
      body {
        font-family: "Roboto Slab", serif;
      }
    `}
  />
);


