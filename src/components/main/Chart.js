import React from 'react'
import CanvasJSReact from '../../lib/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = () => {
    
    CanvasJS.addColorSet("chartColors",
    [//colorSet Array

    "#818d91",
    "#818d91F2",
    "#818d91E6",
    "#818d91D9",
    "#818d91CC",
    "#818d91BF",
    "#818d91B3",
    "#818d91A6",
    "#818d9199",
    "#818d918C",
    "#818d9180",
    "#818d9173",
    "#818d9166"                
    ]);

    const options = {
        animationEnabled: true,
        theme: "light1",
        colorSet:  "chartColors",
        title:{
            text: ""
        },
        axisX: {
            title: "",
            reversed: true,
            titleFontFamily: "verdana",
            labelFontSize: 19,
            labelFontWeight: "bold",
        },
        axisY: {
            title: "",
            includeZero: true,
            gridThickness: 0,
        },
        data: [{
            type: "bar",
            dataPoints: [
                { y:  9, label: "HTML" },
                { y:  9, label: "CSS" },
                { y:  8, label: "JavaScript" },
                { y:  8, label: "ReactJS" },
                { y:  5, label: "TypeScript" },
                { y:  9, label: "AmpScript" },
                { y:  7, label: "Ruby on Rails" },
                { y:  7, label: "SQL" },
                { y:  8, label: "RESTful APIs" }
            ]
        }]
    }
    return (
		<div>
			<CanvasJSChart options = {options} />
		</div>
		);
	}
export default Chart