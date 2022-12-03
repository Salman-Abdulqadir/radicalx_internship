import React from "react";

import styled from "styled-components";

import InternshipEntry from "./internshipEntry";

const InternshipList = () =>{
    const internships = [
        {
            id: 1,
            name: "Product Design GUI",
            description: "This is a web development and graphic design internship",
            days: 120,
            total_enrolled: 20000,
            date: "10/12/2022"
        },
        {
            id: 2,
            name: "Graphic Design",
            description: "This is a web development and graphic design internship",
            days: 150,
            total_enrolled: 10000,
            date: "10/12/2022"
        },
        {
            id: 3,
            name: "Front-end Development",
            description: "This is a web development and graphic design internship",
            days: 420,
            total_enrolled: 370000,
            date: "10/12/2022"
        },
        {
            id: 4,
            name: "Back-end Development",
            description: "This is a web development and graphic design internship",
            days: 300,
            total_enrolled: 2000,
            date: "10/12/2022"
        },
        {
            id: 5,
            name: "Product Design GUI",
            description: "This is a web development and graphic design internship",
            days: 120,
            total_enrolled: 20000,
            date: "10/12/2022"
        },
    
    ]
    return(
        <StyledTable>
            <table cellSpacing={0}>
                <StyledHeader>
                    <th>Internship Title</th>
                    <th>Completion Period</th>
                    <th>Total Earned</th>
                    <th>Qualified candidates</th>
                    <th> </th>
                </StyledHeader>
                {internships.map(internship => {
                    console.log(internship);
                    return (<InternshipEntry 
                        name={internship.name}
                        description={internship.description}
                        days={internship.days}
                        date={internship.date}
                        total_enrolled={internship.total_enrolled}
                        key={internship.id}
                    />)
                })}
            </table>
        </StyledTable>
    )
}
const StyledTable = styled.div`
    table{
        width: 100%;
        postion: relative;
    }
    max-height: 65vh;
    overflow-y: scroll;
    background: white;

    ::-webkit-scrollbar {
    width: 7px;
    }

    /* Track */
    ::-webkit-scrollbar-track { 
    border-radius: 5px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #793EF5; 
    border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: rgba(102, 85, 239, 0.7);
    }
    
`
const StyledHeader = styled.tr`
    position: sticky;
    top: 0px;
    th{
        background: #f2f2f2;
        padding: 1rem 0.75rem;
        text-align: left;
    }
`
export default InternshipList;