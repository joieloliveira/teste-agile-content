import styled from "styled-components";

export const MainBody = styled.div`
    * { margin: 0; padding: 0; }
    background-color: black;
    background-image: ${props => `url(${props.bg})`};
    h1{
        color: #000;
        opacity: 0.9;
    }
`;

