import { createGlobalStyle } from 'styled-components';
import AppleSDGothicNeo from './AppleSDGothicNeo.woff';

export default createGlobalStyle`		      
  @font-face {
    font-family: 'Font Name';	
    src: local('Font Name'),    
    url(${AppleSDGothicNeo} format('woff');
    font-weight: 300; 		
    font-style: normal;
    `;
