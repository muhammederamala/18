import React from 'react';

function StudentDetails({ student }) {
  return (
    <div className="card m-2" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{student.name}</h5>
        <p className="card-text"><strong>Email:</strong> {student.email}</p>
        <p className="card-text"><strong>Phone:</strong> {student.phone}</p>
        <p className="card-text"><strong>Grade:</strong> {student.standard}</p>
      </div>
    </div>
  );
}

export default StudentDetails;
