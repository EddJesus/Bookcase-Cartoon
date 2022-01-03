import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
    height: 100vh;
    width: 100vw;
  }

  body {
    background: ${props => props.theme.colors.background};

    height: 100vh;
    width: 100vw;

    font: 1.6rem Raleway, sans-serif;

		h1 {
			color: ${props => props.theme.colors.heading};
			font-size: 3.2rem;
		}

		p{
			color: ${props => props.theme.colors.text};
			font-size: 1.6rem;
			line-height: 2.3rem;
		}
  }

`
