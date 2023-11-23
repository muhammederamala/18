import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Col, Row, Spinner } from "react-bootstrap";

import StudentDetails from "../components/StudentDetails";
import Navbar from "../components/Navbar";

function HomeScreen() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:4000/student/fetch-all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("Response:", response.data);
        setStudents(response.data.students);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
        setLoading(false);
      });
  }, [token]);

  return (
    <div>
      <Navbar />
      <div className="m-4">
        {loading ? (
          <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <Row xs={1} md={2} lg={3} className="g-4">
            {students.map((student) => (
              <Col key={student.id}>
                <StudentDetails student={student} />
              </Col>
            ))}
          </Row>
        )}

        {students.length === 0 && !loading && (
          <div className="text-center justify-content-center align-items-center vh-100">
            <p>You have no students.</p>
            <Link to="/add-student">
              <button className="btn btn-primary">Add Student</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomeScreen;
