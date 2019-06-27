// Create a Title component that'll render an <h1> tag with some styles
import styled from 'styled-components'
import React from 'react';

const Title = styled('h1')`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled('div')`
  padding: 4em;
  background: papayawhip;
`;
// Use Title and Wrapper like any other React component – except they're styled!
export const GettingStarted = () =>
  <Wrapper>
    <Title>
      Hello World!
    </Title>
  </Wrapper>
