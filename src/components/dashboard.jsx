import React from "react";
import styled from "styled-components";

import Insight from "./Insights";
import InternshipList from "./intershipList";


const Dashboard = () => {
  return (
    <StyledDashboard>
      <div className="flex">
        <h2>Internships</h2>
        <button className="purple-btn"> <strong>+</strong> Create New Internship</button>
      </div>
      <Insight />
      <InternshipList/>
    </StyledDashboard>
  );
};

const StyledDashboard = styled.div`
  margin: 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export default Dashboard;
