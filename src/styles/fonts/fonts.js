import { createGlobalStyle } from 'styled-components';
import AppleSDGothicNeoL from './AppleSDGothicNeoL.ttf';

export default createGlobalStyle`
    @font-face {
      font-family: 'Font Name';
      src:local('Font Name'),
      url(${AppleSDGothicNeoL}) format('ttf');
      font-weight: 300;
      font-style: normal;
    }`;
