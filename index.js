document.addEventListener('DOMContentLoaded', () => {
    Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges', 'Cherry', 'grapefruit']
        },
        series: [
            {
                name: 'John',
                data: [1, 2, 3, 5, 6, 7, 9]

            },
            {
                name: 'Bananas',
                data: [2, 4, 8, 9, 11, 11.5, 12]

            },
            {
                name: 'Oranges',
                data: [2.1, 6, 9, 9.5, 11, 12, 12.5]
            },
            {
                name: 'Cherry',
                data: [2.1, 4, 6, 8, 8.7, 9, 12]
            },
            {
                name: 'grapefruit',
                data: [2.1, 3, 4, 6, 6.5, 7.5, 9]
            }
        ]
    });
});