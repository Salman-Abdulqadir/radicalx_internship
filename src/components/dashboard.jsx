import React from "react";
import styled from "styled-components";

import Insight from "./Insights";

const Dashboard = () => {
  return (
    <StyledDashboard>
      <div className="flex">
        <h2>Internships</h2>
        <button className="purple-btn">Create New Internship</button>
      </div>
      <Insight />
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
