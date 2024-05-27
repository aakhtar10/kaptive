// BarChart.js

import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { data as chartData } from '../db';


const BarChart = () => {
  const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
 const limtedData = chartData.slice(0, 3);
  const datasets = limtedData.map((item )=> ({
    label: item.Overhead,
    data: months.map(month => item[month]),
    backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`,
    borderColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 1)`,
    borderWidth: 1
  }));

  const data = {
    labels: months,
    datasets: datasets
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div  className="bar-chart">
<Bar className='chart' data={data} options={options} />
    </div>
  
);
};

export default BarChart;
