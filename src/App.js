import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    {
      name: "Caleb",
      role: "Developer",
      img: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg",
    },
    {
      name: "Caleb",
      role: "Manager",
      img: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg",
    },
    {
      name: "Caleb",
      role: "Intern",
      img: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg",
    },
    {
      name: "Caleb",
      role: "Wannabe",
      img: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg",
    },
    {
      name: "Caleb",
      role: "Ceo",
      img: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg",
    },
    {
      name: "Caleb",
      role: "New Hire",
      img: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg",
    },
  ]);
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employee
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>you can not see the employees</p>
      )}
    </div>
  );
}

export default App;
