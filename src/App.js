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
      img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    },
    {
      name: "Sally",
      role: "Manager",
      img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg",
    },
    {
      name: "Christopher",
      role: "Intern",
      img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    },
    {
      name: "Wanda",
      role: "Wannabe",
      img: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg",
    },
    {
      name: "Bobby",
      role: "Ceo",
      img: "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg",
    },
    {
      name: "Corey",
      role: "New Hire",
      img: "https://images.pexels.com/photos/2380795/pexels-photo-2380795.jpeg",
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
