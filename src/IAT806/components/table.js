import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

// props:
// data: the data of the table
// labels: an array of the label, value and type of the columns

// Some codes are taken from MUI documentation and altered afterwards:
// https://mui.com/material-ui/getting-started/overview/

const DataTable = props => {
    const [data, setData] = useState([])
    // ascending pr descnding
    const [order, setOrder] = useState("");
    // the name of the column chosen for sorting
    const [orderBy, setOrderBy] = useState("") 

    useEffect(() => {
      // whenerver data source changes, uodate the data state
        setData(props.data);
    }, [props.data])

    return (
        <TableContainer sx={{ maxHeight: 700 }} component={Paper}>
        <Table aria-label="simple table">

          <TableHead>
            <TableRow>
            <TableCell></TableCell>
              {props.labels.map(head => 
              <TableCell>
              {head.type!="string" ?
              <TableSortLabel
              active={orderBy === head.value}
              direction={orderBy === head.value ? order : 'asc'}
              onClick={() => {
                //If the header is clicked twice, change the order of sorting
                setOrder(order == 'asc' ? 'desc' : 'asc');
                setOrderBy(head.value);
                  //If the type of the column is numeric, sort by subtracting each pair of elements
                if (head.type === "number")
                  setData(data.sort((a,b) => {return (
                    order === 'asc' ? 
                    a[head.value] - b[head.value] : 
                    b[head.value] - a[head.value])}))
               }}
            >
              {head.label}
            </TableSortLabel> : head.label
            
            }
          </TableCell>
          )}
            </TableRow>
          </TableHead>
          <TableBody>
            {// iterate over the data to dynamically generate the rows of the tables
            // the backround of the row for the user will be highlighted by this color: #ccf3ff
            data.map((row, i) => (
                <TableRow
                style={{background: row.highlight ? "#ccf3ff" : ""}}
                key={i}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">{i+1}</TableCell>
                  { // iterate over the labels to dynamically generate the cells of the rows
                  props.labels.map(label => (
                    <TableCell component="th" scope="row">
                      {row[label.value]}
                    </TableCell>
                    ))}
                </TableRow>
            )
              
            )}
          </TableBody>
        </Table>
      </TableContainer>
    );
};

export default DataTable;