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

    border: 0px solid red;
    border-left-width: 4px;
    border-color: rgb(59 130 246 / var(--tw-border-opacity, 1));
    text-align: left;
    padding-left: 1rem;   

    transition: transform 0.3s ease, box-shadow 0.3s ease;

    .article-title{
        color: #fff;
    }
    .article-subtitle{
        color: rgb(147 197 253 / var(--tw-text-opacity, 1));
    }
    .article-description{
        color: rgb(209 213 219 / var(--tw-text-opacity, 1));
    }

    &:hover{
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0,0,0,0.2);
    }
`;