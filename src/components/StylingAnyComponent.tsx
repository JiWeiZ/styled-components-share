import { Link } from "react-router-dom";
import styled from 'styled-components'
import React from 'react';
import './index.css'

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

const ColorSpan = (props) => (
  <span style={{ color: 'palevioletred' }}>
    {props.children}
  </span>
)

const ColorSpanPassClassName = (props) => (
  <span className={props.className} style={{ color: 'palevioletred' }}>
    {props.children}
  </span>)

export const StylingAnyComponent = () => (
  <div>
    <div>
      <StyledLink className="big" to="/GettingStarted">Getting Started</StyledLink>
    </div>
    <br />
    <div>
      <ColorSpan className="big">ColorSpan</ColorSpan>
    </div>
    <br />
    <div>
      <ColorSpanPassClassName className="big">ColorSpanPassClassName</ColorSpanPassClassName>
    </div>
  </div>
)