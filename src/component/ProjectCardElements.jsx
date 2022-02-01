import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 100%;
    /* background-color: yellow; */
    display: flex;
    justify-content: space-evenly;
    
    

    @media (max-width: 768px) {
        justify-content: center;
        text-align: center;
        align-items: center;
        flex-direction: column;
    }
    
`;

export const ImgContainer = styled.div`
    width: 450px;
    /* background: green; */
    height: 250px;
    border-radius: 12px;
    border: 3px solid black;
    margin-right: 10px;
    @media screen and (max-width:448px) {
        width: 350px;
        height: 210px;
    }

    @media screen and (max-width:280px) {
        width: 230px;
        height: 150px;
    }
`;

export const ProjectDetailsContainer = styled.div`
    width: 450px;
    /* background: red; */
    /* padding-top:-10px; */
    display: flex;
    justify-content: center;
    /* align-items: center; */
    flex-direction: column;
    @media screen and (max-width:448px) {
        width: 350px;
    }

    @media screen and (max-width:280px) {
        width: 230px;
    }

    @media (max-width: 768px) {
        align-items: center;
        margin-top: 15px;
        padding-bottom:15px;
        border-bottom: 2px solid grey;
    }
`;

export const Button = styled.div`
    height: 50px;
    width: 150px;
    /* background: red; */
    border: 2px solid rgb(17, 17, 110);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight:600;
`;