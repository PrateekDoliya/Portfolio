import styled from 'styled-components';

export const NameContainer = styled.div`
    width: 55%;
    height: 400px;
    /* background: red; */
    position: relative;
    top: 36%;
    left: 50%;;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    
    h1 {
        color: #fff;
        margin-bottom: 0.5rem;
    }

    h5 {
        font-size: 1.8rem;
        color: rgb(119, 119, 121);
        margin-bottom: 1rem;
        font-weight: 400;
        /* fontFamily:'Dongle, sans-serif'; */
    }

    .name {
        /* font-size:3rem; */
        color: rgb(255, 153, 0);
        font-weight: 500;
    }

    nav ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    nav ul li {
        --c: rgb(255, 153, 0);
        color: var(--c);
        font-size: 16px;
        border: 0.3em solid var(--c);
        border-radius: 0.5em;
        width: 12em;
        height: 3em;
        text-transform: uppercase;
        font-weight: bold;
        font-family: sans-serif;
        letter-spacing: 0.1em;
        text-align: center;
        line-height: 2.5em;
        position: relative;
        overflow: hidden;
        z-index: 1;
        transition: 0.5s;
        margin: 1em;
    }

    nav ul li span {
        position: absolute;
        width: 25%;
        height: 100%;
        background-color: var(--c);
        transform: translateY(150%);
        border-radius: 50%;
        left: calc((var(--n) - 1) * 25%);
        transition: 0.5s;
        transition-delay: calc((var(--n) - 1) * 0.1s);
        z-index: -1;
    }

    nav ul li:hover {
        color: black;
    }

    nav ul li:hover span {
        transform: translateY(0) scale(2);
    }

    nav ul li span:nth-child(1) {
        --n: 1;
    }

    nav ul li span:nth-child(2) {
        --n: 2;
    }

    nav ul li span:nth-child(3) {
        --n: 3;
    }

    nav ul li span:nth-child(4) {
        --n: 4;
    }

    @media screen and (max-width:768px) {
        width: 90%;

        h5 {
            padding: 0 1rem;
        }
    }
    

`;

export const ScrollBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    animation: ScrollAnimate 2s linear 0s infinite;
    /* background: red; */
    position: absolute;
    bottom:50px;
    left:150px;
    color: #fff;
    font-weight: 500;
    font-size: 1.2rem;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;

    span {
        color:rgb(255, 153, 0);
    }

    @media screen and (max-width:768px) {
        left:50px;
    }
`;