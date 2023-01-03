import "./index.css";
import Employee from "./components/Employee";

function App() {
  const showEmployees = true;
  return (
    <div className="App bg-red-300">
      {showEmployees ? (
        <>
          <Employee name="caleb" role="intern"/>
          <Employee name="abby"/>
          <Employee name="Lindsey"/>
        </>
      ) : (
        <p>you can not see the employees</p>
      )}
    </div>
  );
}

export default App;
