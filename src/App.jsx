import { useState, useEffect } from "react";
import EmployeeCard from "./assets/Components/EmployeeCard";
import react from 'react'

function App() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  }, []);

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase()) ||
    employee.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Employee Card Generator</h1>

      <input
        type="text"
        placeholder="Search by name or email..."
        className="border p-2 mb-4 w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredEmployees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
  );
}

export default App;