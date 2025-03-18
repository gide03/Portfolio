import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    
    box-sizing: border-box;
    border: 1px solid red;

    &.column{
        flex-direction: column;
    }
    
    &.justify-center{
        justify-content: center;
    }

    &.justify-space-between{
        justify-content: space-between;
    }

    &.align-center{
        align-items: center;
    }
        
`;