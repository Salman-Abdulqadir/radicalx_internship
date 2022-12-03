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
        color: #333333;
    }
    h5{
        font-weight: 600;
        font-size: 20px;
        line-height: 1.5rem;
    }
    p{
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 1rem;
        color: #2f3031;
    }
    th{
        font-weight: 500;
        font-size: 14px;
        color: #2f3031;
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
        border: 1px solid ${primary_color};
        color: white;
        transition: all 0.5s ease;
        &:hover{
            background-color: rgba(102, 85, 239, 0.2);
            color: ${primary_color};
            
        }
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
    .active{
        color: ${primary_color};
        background: rgba(102, 85, 239, 0.2);
    }
    .active-link{
        border: 1px solid ${primary_color}!important;
        color: ${primary_color}!important;
        background: rgba(102, 85, 239, 0.2);
    }
`;
