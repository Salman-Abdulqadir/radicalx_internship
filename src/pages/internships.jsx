import React from "react";
import styled from "styled-components";

//importing pages
import NavBar from "../components/navBar";
import Dashboard from "../components/dashboard";

const Internships = () => {
  return (
    <StyledInternships>
      <NavBar />
      <Dashboard />
    </StyledInternships>
  );
};

const StyledInternships = styled.div`
  display: flex;
  gap: 2rem;
  background: #f1f4f8;
`;
export default Internships;
