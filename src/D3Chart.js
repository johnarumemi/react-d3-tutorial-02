import * as d3 from 'd3'; // grab every module from d3 library


const url = 'https://udemy-react-d3.firebaseio.com/ages.json'

export default class D3Chart {
    constructor(element) { // HTML element
        console.log('hello world')

        const svg = d3.select(element)
            .append('svg')
                .attr('width', 500)
                .attr('height', 500)

        d3.json(url).then(jsonResponse => {

            console.log(jsonResponse)

            // using data join
            const rect = svg.selectAll('rect')
                .data(jsonResponse) // associates selection with array of data

            // can use a constant or a callback that is passed each data point and its index
            rect.enter()
                .append('rect')
                .attr('x', (dp, i) => i * 100)
                .attr('y', 50)
                .attr('width', 50)
                .attr('height', (d, i) => parseFloat(d.age) * 10)
                .attr('fill', (d, i) => d.age > 10 ? 'red': 'green')
        })

    }

    update(){
        console.log('chart updated')
    }
}