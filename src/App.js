import "./index.css";
import Employee from "./components/Employee";

function App() {
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <div className="flex flex-wrap justify-center">
            <Employee name="Caleb" role="intern" img="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg"/>
            <Employee name="Abby" role="dev" img="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg"/>
            <Employee name="Lindsey" img="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg"/>
            <Employee name="Caleb" role="intern" img="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg"/>
            <Employee name="Abby" role="dev" img="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg"/>
            <Employee name="Lindsey" img="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg"/>
            <Employee name="Caleb" role="intern" img="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg"/>
            <Employee name="Abby" role="dev" img="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg"/>
            <Employee name="Lindsey" img="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg"/>
          </div>
        </>
      ) : (
        <p>you can not see the employees</p>
      )}
    </div>
  );
}

export default App;
