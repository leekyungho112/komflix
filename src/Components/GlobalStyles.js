import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
const globalStyles = createGlobalStyle`
    ${reset};
    a {
        text-decoration: none;
        color: inherit;
      }
    *{
        box-sizing: border-box;
    }
      
    body{
      font-family: 'Sunflower', sans-serif;
        font-size: 14px;
        background-color: rgba(20, 20, 20 ,1);
        color: white;
        padding-top: 50px;
        overflow-x: hidden ;
    }
 ::-webkit-scrollbar {
    width: 5px;
        
  }
  ::-webkit-scrollbar-track {
    border: 5px solid #232943;
    box-shadow: inset 0 0 2.5px 2px rgba(0, 0, 0, 0.5);
  }
  ::-webkit-scrollbar-thumb {
    background:linear-gradient(to left, #ec008c, #fc6767);
    border-radius: 3px;
  }
`;

export default globalStyles;
