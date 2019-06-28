import { CSSProp } from 'styled-components';
import {HTMLProps} from 'react'
declare module 'styled-components' {
  interface IStyledComponentsProps extends HTMLProps<HTMLElement>{
    css?: CSSProp;
  }
}