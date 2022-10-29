import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
`

export const BoxMovies = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

export const Movie = styled.div`
    margin: 10px;
    width: 400px;
    height: 520px;
    background-color: #484848;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 5px;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    transition: 0.3s;
    /* box-shadow: 1px 1px 10px 1px red; */
    border: 10px solid transparent;

    &:hover {
        box-shadow: 2px 2px 10px 1px #1c1c1c;
        border-width: 0px 10px;
        border-color: transparent;
    }
`

export const MovieTitle = styled.span`
    display: block;
    font-size: 20pt;
`
export const MovieDescription = styled.span`
    display: block;
    font-size: 13pt;
    color: gray;
    flex: 1;
    margin: 20px 0;
    text-align: justify;
`
export const MovieDirector = styled.span`
    display: block;
    font-size: 12pt;
    text-align: right;
    font-style: italic;
`
export const MovieProducer = styled.span`
    display: block;
    font-size: 12pt;
    text-align: right;
    font-style: italic;
`

export const BoxInfo = styled.div`
    text-align: right;
`
export const InfoPage = styled.span`
    margin: 0 10px;
`

export const Button = styled.button`
   background-color: gray;
   border: none;
   border-radius: 3px;
   
   &:hover {
    cursor: pointer;
   }
`


const loadingAnimation = keyframes`
 0% { transform: rotateZ(0deg) }
 25% { transform: rotateZ(90deg) }
 50% { transform: rotateZ(180deg) }
 75% { transform: rotateZ(270deg) }
 100% { transform: rotateZ(360deg) }
`

export const Loading = styled.div`
    width: 50px;
    height: 50px;
    border-left: 10px solid #fff;
    border-top: 10px solid #fff;
    border-radius: 100%;
    animation-name: ${loadingAnimation};
    animation-duration: 0.5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
`
