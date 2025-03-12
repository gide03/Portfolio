import styled from "styled-components";

export const SocialBt = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3px;

    margin: 5px;

    .social-icon {
        path{
            fill: #705df2;
            width: 33px;
            height: 33px;
            transition: fill 0.3s;
        }
    }
    .social-icon:hover{
        cursor: pointer;
        path{
            fill: white;
        }
    }
`;