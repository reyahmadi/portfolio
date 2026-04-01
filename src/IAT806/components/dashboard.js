import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Chart from './chart';
import DataTable from './table';
import {
    currentAverage, 
    classAverageGrade, 
    grades, 
    yourAverageGrade, 
    times, 
    classAverageTime, 
    yourAverageTime,
    currentTimeAverage} from '../data/grades'
const IATDashboard = props => {

    // data used for grade charts
    const [data, setData] = useState([classAverageGrade, yourAverageGrade])
    // data used for time charts
    const [timeData, setTimeData] = useState([classAverageTime, yourAverageTime])
    // current view of the dashboard which can be: overview, A1, A2, A3
    const [view, setView] = useState("overview");
    // data for ranking table
    const [gradeTableData, setGradeTableData] = useState(currentAverage)

    useEffect(() => {
        // when view is changed to one of the assignments, fetch the data for that
        // asignment and sort it ascendingly
        if(view != "overview"){
            setData(grades[[view]].sort((a,b) => a.y - b.y))
            setTimeData(times[[view]].sort((a,b) => a.y - b.y))
        }
        // when "overview" is chosen, set chart data to average grade and time
        else{
            setData([classAverageGrade, yourAverageGrade])
            setTimeData([classAverageTime, yourAverageTime])
        }
    }, [view])
    return (
        // <Box sx={{ flexGrow: 1 }}>
        <Grid container>

        <Grid size={{ md: 7, xs: 12}}  className="dashboard-card">
        <Paper className="dashboard-paper">
        {/* dropdown for choosing the view*/}
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          className='dashboard-dropdown'
          value={view}
          onChange={(e) => {
            setView(e.target.value);
        }}
        >
          <MenuItem value={"overview"}>Current Performance</MenuItem>
          {yourAverageGrade.map(d => 
            <MenuItem value={d.x}>
                {d.x}
            </MenuItem>)}
        </Select>
            <Paper className="dashboard-paper">
            <strong>
                {view=="overview" ? "Grades: You vs Class" : "Grades: You vs Similar Peers"}
            </strong>
                <Chart 
                chartType={ view != "overview" ? "bar" :"line"}
                xLabel="x" 
                yLabel="y"
                color= { ["#52a3fa", "#000ba6"]}
                names={ view == "overview" ? ["Class", "You"] : "grade"}
                data={data}/>
            
            </Paper>

            <Paper className="dashboard-paper">
            <strong>
                {view=="overview" ? "Time spent: You vs Class" : "Time spent: You vs Similar Peers"}
            </strong>
                <Chart 
                chartType={ view != "overview" ? "bar" :"line"}
                xLabel="x" 
                yLabel="y"
                color= { ["#fa8d5a", "#db3e00"]}
                names={ view == "overview" ? ["Class", "You"] : "time"}
                data={timeData}/>
            </Paper>
            </Paper>
        </Grid>

        <Grid size={{ md: 5, xs: 12}} className="dashboard-card">
            <Paper>
                <DataTable
                    data={gradeTableData}
                    labels={[
                        {label: 'Student', value: 'x', type: 'string'}, 
                        {label: 'Current Grade', value: 'grade', type: 'number'},
                        {label: 'Total Time', value: 'time', type: 'number'}
                    ]}
                />
            </Paper>
        </Grid>
        </Grid>
        //  {/* </Box> */}
    );
};



export default IATDashboard;