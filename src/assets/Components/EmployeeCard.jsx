import React from 'react';
function EmployeeCard({ employee }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
      <h2 className="text-xl font-bold mb-2">
        {employee.name}
      </h2>

      <p className="text-sm text-gray-600 mb-1">
        <strong>ID:</strong> {employee.id}
      </p>

      <p className="text-sm text-gray-600 mb-1">
        <strong>Email:</strong> {employee.email}
      </p>

      <p className="text-sm text-gray-600 mb-1">
        <strong>Phone:</strong> {employee.phone}
      </p>

      <p className="text-sm text-gray-600 mb-1">
        <strong>Website:</strong> {employee.website}
      </p>

      <p className="text-sm text-gray-600">
        <strong>Company:</strong> {employee.company.name}
      </p>
    </div>
  );
}

export default EmployeeCard;