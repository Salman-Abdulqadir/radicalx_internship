import { createGlobalStyle } from "styled-components";

let primary_color = "#793EF5";
export default createGlobalStyle`
    
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Space Grotesk', sans-serif;
    }
    h3{
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
        color: #1E1E1E;

    }
    button{
        background-color: ${primary_color};
        color: white;
    }
    button, input{
        font-size: 1rem;
        padding: 10px 1rem 10px 1rem;
        border-radius: 1rem;
        border: none;
    }
    input{
        font-family: 'Space Grotesk', sans-serif;
        background-color: #F5F5F7;
        color: rgba(47, 48, 49, 0.54);
    }
    .flex{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
    }
    .login-empty-div{
        background-color: ${primary_color};
    }
`;
