"use client"
import styled from 'styled-components';

const StyledMainPage = styled.div`
    padding: 60px;
    background: #121212;
    max-width: 1920px;
    margin: 0 auto;
    color: #fff;

    @media screen and (max-width: 750px){
        padding: 60px 20px;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: wrap;
        @media screen and (max-width: 1230px){
            margin-top: 300px;
        }

        @media screen and (max-width: 750px){
            margin-top: 230px;
        }

        @media screen and (max-width: 541px){
            margin-top: 100px;
        }
    }
`;

export default StyledMainPage