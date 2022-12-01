import React from "react";
import styled from "styled-components";

//importing images
import logo from "../images/radicalxLogo.png";

const NavBar = () => {
    return(
        <StyledNav>
            <Navigation>
                <img src={logo} alt="" id="logo" />
                <StyledLinks>
                    <li><h4>Dashboard</h4></li>
                    <li><h4>Apprenterships</h4></li>
                    <li><h4>Internships</h4></li>
                    <li><h4>Jobs</h4></li>
                    <li><h4>Settings</h4></li>
                </StyledLinks>
            </Navigation>
            <Profile>
                <div className="image"></div>
                <h4 className="username">Adam Scott</h4>
            </Profile>
        </StyledNav>
    )
}

const StyledNav = styled.div`
    min-height: 98vh;
    border-radius: 1rem;
    padding: 2rem;
    background: white;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;
`;
const StyledLinks = styled.ul`
    list-style: none;
    li{
        margin: 1rem 0rem;
        padding: 0.5rem;
        border: 1px solid white;
        border-radius: 1rem;
        cursor: pointer;
        transition: all 0.5s ease;
        &:hover{
            border: 1px solid #793EF5;
            color: #793EF5;
            background: rgba(102, 85, 239, 0.2);
        }
    }
`;
const Navigation = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    img{
        width: 10rem;
    }

`;
const Profile = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    .image{
        width: 50px;
        height: 50px;
        border-radius: 1rem;
        background: #E2E6EB;
    }
    

`;

export default NavBar;