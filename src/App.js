import "./App.css";
import { useEffect } from "react";
import Chart from "./components/Chart";
import { useSelector, useDispatch } from "react-redux";
import { fetchChartData } from "./features/chartService";
import { changeChartType, changeChartElememts } from "./features/chartSlice";

function App() {
  const { chartData, elements, type } = useSelector((state) => state.chart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChartData());
    // eslint-disable-next-line
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
              key={index}
              className="toggleButton"
              onClick={() => {
                dispatch(changeChartType(type));
                dispatch(changeChartElememts(elements));
              }}
            >
              {index + 1}
            </button>
          </>
        ))}
      </div>

      <div>
        <div
          style={{
            marginBottom: "2rem",
          }}
        >
          <div>
            <span style={{ fontWeight: "bolder", marginRight: ".5rem" }}>
              Type :{" "}
            </span>
            <span>{type}</span>
          </div>

          <div>
            <span
              style={{
                fontWeight: "bolder",
                marginRight: ".5rem",
              }}
            >
              elements :{" "}
            </span>
            <span>{elements.toString()}</span>
          </div>
        </div>

        <Chart type={type} elements={elements} />
      </div>
    </div>
  );
}

export default App;
