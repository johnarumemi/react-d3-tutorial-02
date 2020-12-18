import React, {useState, useEffect, useRef} from 'react';
import D3Chart from './D3Chart'

const ChartWrapper = () => {
    const chartArea = useRef(null)      // this.ref
    const [chart, setChart] = useState(null)          // D3Chart instance

    useEffect(()=> {
        if (!chart) {
            // chart not available, create new D3Chart
            setChart(new D3Chart(chartArea.current)) // causes re-render and hence calls useEffect again
        } else {
            // chart available, update chart
            chart.update();
        }
    }, [chart])

    return (
        <div className={'chart-area'} ref={chartArea}></div>
    );
}

export default ChartWrapper;