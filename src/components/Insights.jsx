import React from "react";
import styled from "styled-components";
import StatChart from "./lineChart";


const Insight = () => {
  return (
    <StyledInsight>
      <div className="intro">
        <h5>Internship Insights</h5>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
          quibusdam, facilis magni laborum quo ex consequatur veritatis corporis
          labore eligendi!
        </p>
      </div>
      <div className="stat">
        <header className="flex">
          <div>
            <button className="purple-btn">This Week</button>
            <button>This month</button>
          </div>
          <button>Select Dates</button>
        </header>
        <StatChart/>
      </div>
    </StyledInsight>
  );
};
const StyledInsight = styled.div`
  display: flex;
  gap: 1rem;
  background-color: white;
  padding: 1rem;
  .intro {
    flex: 1;
    background-color: #f2f2f2;
    padding: 1rem;
    h5 {
      margin-bottom: 1rem;
    }
  }
  .stat {
    flex: 3;
    header.flex {
      background-color: #f2f2f2;
      border-radius: 0.5rem;
      padding: 5px;
      div .purple-btn {
        margin-right: 1rem;
      }
    }
  }
`;

export default Insight;
