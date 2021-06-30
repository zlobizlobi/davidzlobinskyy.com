import { createGlobalStyle } from 'styled-components';
import Hairline from '../fonts/Jost100Hairline.woff';
import Thin from '../fonts/Jost200Thin.woff';
import Light from '../fonts/Jost300Light.woff';
import Book from '../fonts/Jost400Book.woff';
import Medium from '../fonts/Jost500Medium.woff';
import Semi from '../fonts/Jost600Semi.woff';
import Bold from '../fonts/Jost700Bold.woff';

export const GlobalStyle = createGlobalStyle`
    @font-face{
        font-family: "Jost";
        src: url(${Hairline});
        font-weight: 100;
    }

    @font-face{
        font-family: "Jost";
        src: url(${Thin});
        font-weight: 200;
    }


    @font-face{
        font-family: "Jost";
        src: url(${Light});
        font-weight: 300;
    }

    @font-face{
        font-family: "Jost";
        src: url(${Book});
        font-weight: 400;
    }

    @font-face{
        font-family: "Jost";
        src: url(${Medium});
        font-weight: 500;
    }

    @font-face{
        font-family: "Jost";
        src: url(${Semi});
        font-weight: 600;
    }

    @font-face{
        font-family: "Jost";
        src: url(${Bold});
        font-weight: 700;
    }

    * {
        margin: 0;
        padding: 0;
    }

    *,
    *::after,
    *::before {
    box-sizing: border-box;
  }

  body {
    min-height: calc(100vh);
  }
  
  html, body  {
        font-family: Jost, sans-serif;
        background-color: #f6f6f6;
        transition: all 0.25s ease;
        
       * >  ::selection {
            background-color: #fff;
            color: #ed1c24;
        }
    }

    html {
        position: relative;
        min-height: 100%;
    }

    button, textarea, input {
        font-family: inherit;
    }
    
    textarea {
        resize: none;
        min-height: 130px;
    }

    body.using-mouse :focus {
     outline: none;
    }
`;
