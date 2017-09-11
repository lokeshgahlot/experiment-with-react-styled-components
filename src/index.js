import React from 'react';
import { render } from 'react-dom';
import styled, { injectGlobal, keyframes} from 'styled-components';


injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font: 15px helvetica, sans-serif;
  }
`

const Spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

const Main = styled.div`
  text-align: center;
  > h2 {
    color: palevioletred;
    font-size: 30px;
  }
`;

const Logo = styled.img`
  height: 100px;
  width: 100px;
  animation: ${Spin} 1s linear infinite;
`;

const MediaQuerySample = styled.div`
  width: 300px;
  height: 150px;
  background: lightblue;
  @media (max-width: 768px) {
    background: palevioletred;
  }
`


const App = () => (
  <Main>
    <Logo src={'https://cdn.worldvectorlogo.com/logos/react.svg'}/>
    <h2>Hello Styled Components</h2>
    <MediaQuerySample>Media query sample</MediaQuerySample>
  </Main>
);

render(<App />, document.getElementById('root'));
