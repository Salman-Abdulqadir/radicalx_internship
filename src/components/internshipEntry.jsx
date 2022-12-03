import React from "react";

import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarChart, faShareNodes, faUserGroup } from "@fortawesome/free-solid-svg-icons";

import barChart from "../images/barchart.jpeg";
const InternshipEntry = ({name, description, days, date, total_enrolled, qualified}) => {
    return(
        <StyledEntry>
            <td>
                <h4>{name}</h4>
                <p>{description}</p>
            </td>
            <td>
                <h4>{days} days</h4>
                <p>(created on {date})</p>
            </td>
            <td>
                <h5 className="active">{total_enrolled.toLocaleString("en-US")}</h5>
            </td>
            <td>
                <img src={barChart} alt="" />
            </td>
            <td>
                <div className="icons flex">
                    <FontAwesomeIcon icon={faBarChart} color={"#793EF5"} />
                    <FontAwesomeIcon icon={faShareNodes}color={"#793EF5"}/>
                    <FontAwesomeIcon icon={faUserGroup} color={"#793EF5"} />
                </div>
            </td>
            
        </StyledEntry>
    )
}
const StyledEntry = styled.tr`
    td{
        background-color: white;
        padding: 1rem;
        text-align: left;
        h5{
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            text-align: center;
        }
    }
    .icons{
        padding: 0rem 1rem;
    }
`

export default InternshipEntry;