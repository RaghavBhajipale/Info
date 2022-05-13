import React, { Component } from 'react';
import { render } from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import MediaQuery from 'react-responsive';
import WideScreenHero from './Slides/WideScreen/HeroSlide/Hero';
import WideScreenContact from './Slides/WideScreen/ContactSlide/Contact';
import MobileHero from './Slides/Mobile/HeroSlide/Hero';
import MobileContact from './Slides/Mobile/ContactSlide/Contact';
import './Assets/index.css';

const GlobalStyle = createGlobalStyle`
html, body { margin: 0;}
*, *:before, *:after { box-sizing: border-box; }
`;

class App extends Component {
  componentDidMount() {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }

  render() {
    return (
      <React.Fragment>
        <MediaQuery query="(min-device-width: 1224px)">
          <WideScreenHero />
          <WideScreenContact />
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
          <MobileHero />
          <MobileContact />
        </MediaQuery>
        <GlobalStyle />
      </React.Fragment>
    );
  }
}

render(React.createElement(App), document.getElementById('root'));
export default App;
