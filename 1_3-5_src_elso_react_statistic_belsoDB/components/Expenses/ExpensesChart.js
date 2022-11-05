import React from 'react'

import Chart from '../Chart/Chart'

export const ExpensesChart = (props) => {
    const chartDataPoints=[
        {label:'Jan', value : 0},
        {label:'Feb', value : 0},
        {label:'Mar', value : 0},
        {label:'Apr', value : 0},
        {label:'May', value : 0},
        {label:'Jun', value : 0},
        {label:'Jul', value : 0},
        {label:'Aug', value : 0},
        {label:'Szep', value : 0},
        {label:'Okt', value : 0},
        {label:'Nov', value : 0},
        {label:'Dec', value : 0}
];
    for (const expense of props.expenses){
        const expenseMounth = expense.date.getMonth();//starting at 0 => Január => 0 getMount()kírja hányadi hónap (0 val kezd)
        chartDataPoints[expenseMounth].value += expense.amount;/* += operátor hozzá adja a kívánt értéket */
    }

  return (
    <Chart dataPoint={chartDataPoints}/>
  )
}
export default ExpensesChart;