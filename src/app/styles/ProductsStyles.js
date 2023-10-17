import styled from 'styled-components'

export const ProductContainer = styled.div`
    padding: 16px;
    background-color: #f5f5f5;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 330px;
    justify-content: center;
    background-color: white;
    color: black;
    border-radius: 20px;
    height: 350px;

`;

export const ProductsCont = styled.div`
    align-items: center;
    margin: 0 5px 10px;
    border-radius: 22px;

`;

export const ProductImage = styled.img`
    width: 150px;
    height: 150px;
`;

export const CardButton = styled.button`
    background-color: yellowgreen;
    color: black;
    border: none;
    padding: 8px 16px;
    cursor: pointer;

    &:hover{
        background-color: greenyellow;
    }
`;

