import "../index.css";
import Employee from "../components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "../components/AddEmployee";
import EditEmployee from "../components/EditEmployee";
//import Header from "../components/Header";

function Employees() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Caleb",
      role: "Developer",
      img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    },
    {
      id: 2,
      name: "Sally",
      role: "Manager",
      img: "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg",
    },
    {
      id: 3,
      name: "Christopher",
      role: "Intern",
      img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    },
    {
      id: 4,
      name: "Wanda",
      role: "Wannabe",
      img: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg",
    },
    {
      id: 5,
      name: "Bobby",
      role: "Ceo",
      img: "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg",
    },
    {
      id: 6,
      name: "Corey",
      role: "New Hire",
      img: "https://images.pexels.com/photos/2380795/pexels-photo-2380795.jpeg",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployee = employees.map((employee) => {
      if (id === employee.id) {
        return { ...employee, name: newName, role: newRole };
      }

      return employee;
    });
    setEmployees(updatedEmployee);
  }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  }

  const showEmployees = true;
  return (
    <>
      <div className="bg-purple-300 min-h-screen">
        {showEmployees ? (
          <>
            <div className="flex flex-wrap justify-center">
              {employees.map((employee) => {
                const editEmployee = (
                  <EditEmployee
                    id={employee.id}
                    name={employee.name}
                    role={employee.role}
                    updateEmployee={updateEmployee}
                  />
                );
                return (
                  <Employee
                    key={employee.id}
                    id={employee.id}
                    name={employee.name}
                    role={employee.role}
                    img={employee.img}
                    editEmployee={editEmployee}
                  />
                );
              })}
            </div>
          </>
        ) : (
          <p>you can not see the employees</p>
        )}
        <AddEmployee newEmployee={newEmployee} />
      </div>
    </>
  );
}

export default Employees;
