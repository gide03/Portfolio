import styled from "styled-components";

export const Navbar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0.25em;

    .nav-item{
        padding: 5px;
        margin: 5px;
        font-size: 18px;
        font-weight: 800;

    }
    .nav-item:hover{
        cursor: pointer;
        color: white;
    }
`;