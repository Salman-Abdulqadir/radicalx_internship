import React from "react";
import styled from "styled-components";

//importing pages
import NavBar from "../components/navBar";

const Internships = () =>{
    return (
        <StyledInternships>
            <NavBar/>
        </StyledInternships>
    )
}

const StyledInternships = styled.div`
    display: flex;
    gap: 4rem;
    background: #F1F4F8;
`;
export default Internships;