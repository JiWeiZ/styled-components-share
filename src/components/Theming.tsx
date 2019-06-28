import styled, { ThemeProvider } from 'styled-components'
import React from 'react';

// Define our button, but with the use of props.theme this time
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  background-color: transparent;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    main: "palevioletred"
  }
}

// Define what props.theme will look like
const theme = {
  main: "mediumseagreen"
};


const Button2 = styled.button`
  color: ${props => props.theme.fg};
  border: 2px solid ${props => props.theme.fg};
  background: ${props => props.theme.bg};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

// Define our `fg` and `bg` on the theme
const theme2 = {
  fg: "palevioletred",
  bg: "white"
};
// This theme swaps `fg` and `bg`
const invertTheme = ({ fg, bg }) => ({
  fg: bg,
  bg: fg
});

export const Theming = () => (
  <div>
    <div>
      <Button>Normal</Button>

      <ThemeProvider theme={theme}>
        <Button>Themed</Button>
      </ThemeProvider>
    </div>
    <br />
    <div>
      <ThemeProvider theme={theme2}>
        <div>
          <Button2>Default Theme</Button2>
          <ThemeProvider theme={invertTheme}>
            <Button2>Inverted Theme</Button2>
          </ThemeProvider>
        </div>
      </ThemeProvider>
    </div>
    <br />
    <div>
    </div>
  </div>
)

