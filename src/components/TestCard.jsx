import React from 'react';

function TestCard({ title, description, icon, status }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-3">{icon}</span>
        <h3 className="text-xl font-semibold">{title}</h3>
        {status === 'success' && <span className="ml-auto text-green-500">✅</span>}
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default TestCard;