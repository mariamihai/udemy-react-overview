import "./Chart.css";

import ChartBar from "./ChartBar";

const Chart = (props) => {
  const a = props.dataPoints.map(dataPoint => dataPoint.value);
  const maxValue = Math.max(...a);
  //const maxValue = Math.max(...props.dataPoints.map(dataPoint => dataPoint.value));

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
