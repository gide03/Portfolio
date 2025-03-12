import styled from "styled-components";

export const SocialCard = styled.div`
    width: 100%;
    align-item: ceter;
    justify-content: center;
    display: flex;
    flex-direction: row;
`;

export const SkillCard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-item: ceter;
    justify-content: center;

    white-space: nowrap;
`;

export const CatalogCard = styled.div`
    width: 300px;
    max-width: 300px;
    
    background-image: url('/${(props) => props.bg}');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    height: 200px;
    border: 1px solid white;
    border-radius: 10px;
    margin: 0px 10px 0px 10px;
    
    text-wrap: wrap;
    text-align: left;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title{
        font-weight: 800;
    }
    .subtitle {
        text-size: smaller; 
    }
`;