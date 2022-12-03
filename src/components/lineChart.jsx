import React from "react";
import {ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, Tooltip } from "recharts";

const data = [
    {name: "2017", react: 32},
    {name: "2019", react: 82},
    {name: "2020", react: 45},
    {name: "2021", react: 2},
    {name: "2022", react: 23},
]
const StatChart = () =>{
    return(
        <div>
            <ResponsiveContainer width={"100%"} height={200}>
                <AreaChart data={data}>
                    <Area type={"monotone"} dataKey={"react"} stroke={"#793EF5"} fill={"#793EF5"} strokeWidth={1}/>
                    <CartesianGrid horizontal={false} stroke="#ccc"/>
                    <XAxis dataKey={"name"}/>
                    <Tooltip/>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}
export default StatChart;