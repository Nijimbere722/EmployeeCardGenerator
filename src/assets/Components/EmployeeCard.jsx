import React from "react";

function EmployeeCard({ employee }) {

  const printCard = () => {
    const cardContent = document.getElementById(`card-${employee.id}`).innerHTML;

    const printWindow = window.open("", "", "width=600,height=600");

    printWindow.document.write(`
      <html>
        <head>
          <title>Print Employee Card</title>
        </head>
        <body>
          ${cardContent}
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div
      id={`card-${employee.id}`}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
    >
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

      <p className="text-sm text-gray-600 mb-3">
        <strong>Company:</strong> {employee.company.name}
      </p>

      {/* Print Button */}
      <button
        onClick={printCard}
        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700 transition"
      >
        Print Card
      </button>
    </div>
  );
}

export default EmployeeCard;