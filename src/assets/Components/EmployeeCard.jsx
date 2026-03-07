function EmployeeCard({ employee }) {
  return (
    <div className="border p-4 rounded-lg shadow-md m-2">
      <h2 className="text-lg font-bold">{employee.name}</h2>
      <p><strong>ID:</strong> {employee.id}</p>
      <p><strong>Email:</strong> {employee.email}</p>
      <p><strong>Phone:</strong> {employee.phone}</p>
      <p><strong>Website:</strong> {employee.website}</p>
      <p><strong>Company:</strong> {employee.company.name}</p>
    </div>
  );
}

export default EmployeeCard;