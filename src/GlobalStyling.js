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
    h1,h2,h3{
        color: #1E1E1E;
    }
    h2{
        font-weight: 600;
        font-size: 2rem;
        line-height: 1.5rem;
    }
    h3{
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
    }
    h4{
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5rem;
    }
    h5{
        font-weight: 600;
        font-size: 20px;
        line-height: 1.5rem;
    }
   
    button, input{
        font-family: 'Space Grotesk', sans-serif;
        font-size: 1rem;
        padding: 12px 1rem;
        border-radius: 1rem;
        border: none;
        background-color: white;
        color: #1E1E1E;
    }
    input{
        background-color: #F5F5F7;
        color: rgba(47, 48, 49, 0.54);
        padding: 10px 1rem 10px 1rem;
    }
    .purple-btn{
        padding: 12px 1rem;
        border-radius: 12px;
        background-color: ${primary_color};
        color: white;
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
    .active-link{
        border: 1px solid ${primary_color}!important;
        color: ${primary_color};
        background: rgba(102, 85, 239, 0.2);
    }
`;
