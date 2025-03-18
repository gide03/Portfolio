import styled from "styled-components";

export const Navbar = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0.25em;

    .nav-item {
        padding: 5px;
        margin: 0px 0.5rem 0px 0.5rem;
        font-size: 18px;
        font-weight: 800;

        color: rgb(96 165 250 / var(--tw-text-opacity, 1));
    }
    .nav-item:hover {
        cursor: pointer;
        color: white;
    }
`;