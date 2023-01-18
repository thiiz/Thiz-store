import styled, { css } from 'styled-components'

const fancyStyles = css`
  background-color: transparent;
  border: 2px solid #000;
  border-radius: 0;
  box-sizing: border-box;
  color: ${props => props.theme.text.default};
  cursor: pointer;
  display: inline-block;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 1.35em 2em;
  max-width: 10.5rem;

  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  transition: all 0.3s ease-in-out;
  user-select: none;
  font-size: 13px;
  
  &::before {
    content: " ";
    width: 1.5625rem;
    height: 2px;
    background: ${props => props.theme.bg.contrast};
    top: 50%;
    left: 1.5em;
    position: absolute;
    transform: translateY(-50%);
    transform-origin: center;
    transition: background 0.3s linear, width 0.3s linear;
  }
  
  .text {
    font-size: 1.125em;
    font-family: 'Varela Round', Arial, Helvetica, sans-serif;
    line-height: 1.33333em;
    padding-left: 2em;
    display: block;
    text-align: left;
    transition: all 0.3s ease-in-out;
    text-transform: uppercase;
    text-decoration: none;
    color: ${props => props.theme.text.default};
  }
  
  .top-key {
    height: 2px;
    width: 1.5625rem;
    top: -2px;
    left: 0.625rem;
    position: absolute;
    background: #e8e8e8;
    transition: width 0.5s ease-out, left 0.3s ease-out;
  }
  
  .bottom-key-1 {
    height: 2px;
    width: 1.5625rem;
    right: 1.875rem;
    bottom: -2px;
    position: absolute;
    background: #e8e8e8;
    transition: width 0.5s ease-out, right 0.3s ease-out;
  }
  
  .bottom-key-2 {
    height: 2px;
    width: 0.625rem;
    right: 0.625rem;
    bottom: -2px;
    position: absolute;
    background: #e8e8e8;
    transition: width 0.5s ease-out, right 0.3s ease-out;
  }
  
  &:hover {
    color: ${props => props.theme.bg.default};
    background: ${props => props.theme.bg.contrast};
  }
  
  &:hover::before {
    width: 0.9375rem;
    background: ${props => props.theme.text.contrast};
  }
  
  &:hover .text {
    color: ${props => props.theme.text.contrast};
    padding-left: 1.5em;
  }
  
  &:hover .top-key {
    left: -2px;
    width: 0px;
  }
  &:hover .bottom-key-1,
  &:hover .bottom-key-2 {
    right: 0;
    width: 0;
  }
`;

const Button = styled.a`
  ${fancyStyles}
`;

export default Button