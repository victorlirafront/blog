"use client"
import styled from 'styled-components';

const StyledHeader = styled.header`
    position: relative;
    padding: 20px 60px;
    background: #121212;
    max-width: 1000px;
    margin: 0 auto;
    z-index: 3;

    .container {
        margin: 0 auto;
        max-width: 1200px;

        nav {
            width: 100%;
            display: flex;

            .header-icon {
                    width: 40px;
                    margin-right: 15px;
                }

        .menu-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            list-style: none;
            color: white;
            width: 100%;

            .div-left {
                .anchor {

                    &.active{
                        border-bottom: 3px solid #0beeb2;
                        padding-bottom: 6px;
                    }
                }

                cursor: pointer;
                
                a {
                    color: #fff;
                    text-decoration: none;
                    &:hover {
                        color: #c5c5c5;
                    }
                }

                display: flex;
                min-width: 250px;
                justify-content: space-between;
            }

            .category {
                width: 150px;
                text-align: center;
                position: relative;
                padding: 7px 0;

                &:hover {
                        color: #c5c5c5;
                }

                a {
                    color: #fff;
                    text-decoration: none;
                }

                .category-conteiner {
                    display: flex;
                    justify-content: space-between;

                    .arrow {
                        height: 30px;
                        margin-left: 10px;
                        max-width: 27px;
                        transform: scale(0.7);
                    }
                }

                .category-options {
                    width: 150px;
                    position: absolute;
                    z-index: 2 !important;
                    top: 64px;
                    list-style: none;
                    text-align: center;
                    background: #1fb28b;

                    &.active{
                        display: flex;
                        flex-direction: column;
                        border-radius: 4px;
                    }

                    a{
                        padding: 7px;
                    }
                    display: none;

                    .option {
                        &:hover {
                            filter: brightness(1.1);
                        }
                    }
                }
            }
        }
    }
    }
`;

export default StyledHeader