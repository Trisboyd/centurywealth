import * as styled from 'styled-components';
//____________________________________________________Roboto
import Noto from '../../../fonts/NotoSerif-Regular.ttf';
import NotoBold from '../../../fonts/NotoSerif-Bold.ttf';

const FontStyles = styled.createGlobalStyle`
    //________________________________________________Roboto
    @font-face {
        font-family: 'Noto';
        src: url(${Noto}) format('truetype');
        font-weight: 400;
    }
    @font-face {
        font-family: 'NotoBold';
        src: url(${NotoBold}) format('truetype');
        font-weight: 500;
    }
`
export default FontStyles;