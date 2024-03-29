// import React from 'react';
// import styled from '@emotion/styled';

// const Form = styled.form`
//   --timing: 0.3s;
//   --width-of-input: 200px;
//   --height-of-input: 40px;
//   --border-height: 2px;
//   --input-bg: #fff;
//   --border-color: #2f2ee9;
//   --border-radius: 30px;
//   --after-border-radius: 1px;

//   position: relative;
//   width: var(--width-of-input);
//   height: var(--height-of-input);
//   display: flex;
//   align-items: center;
//   padding-inline: 0.8em;
//   border-radius: var(--border-radius);
//   transition: border-radius 0.5s ease;
//   background: var(--input-bg, #fff);

//   &:before {
//     content: "";
//     position: absolute;
//     background: var(--border-color);
//     transform: scaleX(0);
//     transform-origin: center;
//     width: 100%;
//     height: var(--border-height);
//     left: 0;
//     bottom: 0;
//     border-radius: 1px;
//     transition: transform var(--timing) ease;
//   }

//   &:focus-within {
//     border-radius: var(--after-border-radius);
//   }
// `;

// const Input = styled.input`
//   font-size: 0.9rem;
//   background-color: transparent;
//   width: 100%;
//   height: 100%;
//   padding-inline: 0.5em;
//   padding-block: 0.7em;
//   border: none;

//   &:focus {
//     outline: none;
//   }
// `;

// const Button = styled.button`
//   border: none;
//   background: none;
//   color: #8b8ba7;
// `;

// const ResetButton = styled.button`
//   border: none;
//   background: none;
//   opacity: 0;
//   visibility: hidden;

//   &:not(:placeholder-shown) + ${Form}:focus-within & {
//     opacity: 1;
//     visibility: visible;
//   }
// `;

// const SvgIcon = styled.svg`
//   width: 17px;
//   margin-top: 3px;
// `;

// export const InputStyled = () => {
//   return (
//     <Form className="form">
//       <Button>
//         <SvgIcon width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
//           <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round"></path>
//         </SvgIcon>
//       </Button>
//       <Input className="input" placeholder="Type your text" required type="text" />
//       <ResetButton className="reset" type="reset">
//         <SvgIcon xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//           <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
//         </SvgIcon>
//       </ResetButton>
//     </Form>
//   );
// };
