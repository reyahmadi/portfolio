import React, { useEffect, useRef, useState } from "react";
// Import Highcharts
import Highcharts, { chart, keys } from "highcharts";
import HighchartsReact from "highcharts-react-official";




// props explanation:
// - data: data, can be two data series
// - chartType: type of chart like line or bar - oveview: line otherwise: bar
// - xLabel: the kay of x axis values
// - yLabel: the key of y axis values
// - color: color of the class and the student
// - names: the legend values

//  Some of the parts of the code are retrieved from official Highcharts documentation:
// https://www.highcharts.com/docs/index

export default function Chart(props) {
    const [reload, setReload] =  useState(false)


    const currentChart = useRef()

    useEffect(() => {
        // if any of the props values changed, reload the component by changing the reload state
        setReload(!reload)
    }, [props.data.length, props.chartType, props.names])

    return (
            <HighchartsReact
              ref={currentChart}
              constructorType={"chart"}
              highcharts={Highcharts}
              containerProps = {{ id: props.chartId }}
              options={{
                chart: {
                  height: 230
              },

              
              title: {
                // do not show anything for the title
                  text: '',
              },
              xAxis: [{
                categories: 
                props.data.length ? 
                // when chart type is line, it means we have 2D array of data otherwise it is a 1D array
                // the data for each type looks like this:
                // data for line chart --> [[{x:1, y: 2}, ...], [{x:2, y: 3}, ...]]
                // data for bar chart --> [{x:1, y:2}, {x:2, y:3}, ...]
                      props.chartType === "line" && Array.isArray(props.data[0]) ?
                      props.data[0].map(d => d[[props.xLabel]]) :
                      props.data.map(d => d[[props.xLabel]]) : [],
                  crosshair: {
                      width: 1,
                      color: '#329bfc'
                  },                  
                labels:{
                    enabled: true
                }
            }],
              yAxis: [{ // Primary yAxis
                title: {
                    // text: props.dataLabel[0],
                    enabled: false

                }
            }],
              tooltip: {
                  shared: true,
                  useHTML: true,
                  shape: 'rect',
              },
              legend: {
                  enabled: true
              },
              exporting: {
                  enabled: false
              },
              plotOptions: {
                series: {
                    marker: {
                        enabled: false
                    }
                }
            },
              series: 
            
                    props.chartType === "line"  && Array.isArray(props.data[0]) ? 
                    props.data.map((d, i) => {
                        // for each line of the chart, there will be an object containing the name, color, type
                        // and the data of the line. The data will be a list of objects that looks like this [{y: 10}, {y: 15}, ...]
                        // If the the type is line, it means that we have 2 datasets to display otherwise there will be one dataset ( for the bar chart)
                        // that is why for the line chart, we iterate over each element of the props.data but for the bar chart, we
                        // only iterate over the props.data it self
                        // data for line chart --> [[{x:1, y: 2}, ...], [{x:2, y: 3}, ...]]
                        // data for bar chart --> [{x:1, y:2}, {x:2, y:3}, ...]
                            let serie = {
                                name: props.names[i], 
                                type:props.chartType, 
                                color: props.color[i],
                                data: [],
                            }
                            d.map((data, index) => {
                                serie.data.push({y: data[[props.yLabel]]})
                            })
                            return serie
                    }) :
                    {
                        name: props.names, 
                        type:props.chartType, 
                        data: props.data.map(d => {return {y: d[[props.yLabel]], color: d[[props.xLabel]]=="you" ? props.color[1] : props.color[0]} }),

                    }

              
              }}
            />

    );
}
