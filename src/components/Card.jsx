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

export const ArticleCard = styled.div`
    width: 80%;
    margin: auto;
    margin-bottom: 1em;
    
    text-align: left;

    border: 1px solid rgba(255, 255, 255, .1);
    padding: 0.3em 1em 0.3em 1em;
    background: radial-gradient(150% 150% at 0% 100%, #261c45 0%, rgba(35, 25, 74, 0) 100%);     

    &:hover{
        margin-top: -5px;
    }
`;