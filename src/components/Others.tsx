import styled, { ThemeProvider } from 'styled-components'
import React from 'react';

const MyComponent = styled.div`
  background-color: green;
  width: 200px;
  height: 100px;
  margin: 20px;
`;

export const Others = () => (
  <div>
    <div>
      <div>
      For some reason this component still has a green background,
      <br/>
      even though you're trying to override it with the "red-bg" class!
      </div>
      <MyComponent/>
      <MyComponent className="red-bg" />
    </div>
  </div>
)