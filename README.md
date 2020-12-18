# D3.js with React
Following Udemy Course - [Introduction to D3.js with React][1], [lesson 10][2].

## Introduction
using d3 (Data Driven Document)

```javascript
// using a for loop
data.forEach((dataPoint, index) => {
    svg.append('rect')
        .attr('x', index * 100)
        .attr('y', 50)
        .attr('width', 50)
        .attr('height', dataPoint * 10)
        .attr('fill', 'grey')
})
```
using a forEach loop will mean that every svg rect will be rendered every time data array changes.
However, using data joins in d3 will only update the elements when their corresponding dataPoint changes.

```javascript
// using data join
const rect = svg.selectAll('rect')
    .data(data) // associates selection with array of data

// can use a constant or a callback that is passed each data point and its index
rect.enter()        
    .append('rect')
    .attr('x', (dp, i) => i * 100)
    .attr('y', 50)
    .attr('width', 50)
    .attr('height', (dp, i) => dp * 10)
    .attr('fill', 'grey')
```
[1]: https://www.udemy.com/course/d3-react/ "Introduction to D3.js with React"
[2]: https://www.udemy.com/course/d3-react/learn/lecture/15942864#questions "Lesson 10"