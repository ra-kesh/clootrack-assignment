import "./App.css";
import { useEffect, useState } from "react";
import Chart from "./components/Chart";
import axios from "axios";

function App() {
  const [chartData, setChartData] = useState([]);
  const [type, setType] = useState(null);
  const [elements, setElements] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/chart2986176.json"
      );
      setChartData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div>
        <h2>click on the buttons to load the chart</h2>
      </div>
      <div className="buttonRow">
        {chartData.map(({ type, elements }, index) => (
          <>
            <button
              className="toggleButton"
              onClick={() => {
                setType(type);
                setElements(elements);
              }}
            >
              {index + 1}
            </button>
          </>
        ))}
      </div>

      <div>
        <Chart type={type} elements={elements} />
      </div>
    </div>
  );
}

export default App;
