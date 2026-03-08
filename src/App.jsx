import react from 'react'
import { useState, useEffect } from "react";
import EmployeeCard from "./assets/Components/EmployeeCard";


function App() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true); // Requirement: Loading state [cite: 44, 48]
  const [error, setError] = useState(null);    // Requirement: Error state [cite: 45, 50]

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // Requirement: API Fetching [cite: 33, 38, 39]
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch data");
        return response.json();
      })
      .then((data) => {
        setEmployees(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase()) ||
    employee.email.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <div className="p-6">Loading employees...</div>;
  if (error) return <div className="p-6 text-red-500">Error: {error}</div>;

  return (
  <div className="min-h-screen bg-gray-100">

    {/* Hero Section */}
    <div className="bg-blue-600 text-white py-12 text-center">
      <h1 className="text-4xl font-bold">Employee Directory</h1>
      <p className="mt-2 text-lg">
        Search and explore employees in the company
      </p>
    </div>

    {/* Main Content */}
    <div className="max-w-6xl mx-auto p-8">

      {/* Search Bar */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search by name or email..."
          className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Employee Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredEmployees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
          />
        ))}
      </div>

    </div>
  </div>
); }

export default App;