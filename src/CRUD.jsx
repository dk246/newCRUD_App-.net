import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function CRUD() {
  const [show, setShow] = useState(false);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isActive, setIsActive] = useState(0);

  const [editID, setEditID] = useState("");
  const [editName, setEditName] = useState("");
  const [editAge, setEditAge] = useState("");
  const [editIsActive, setEditIsActive] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const empdata = [
    {
      id: 1,
      name: "manoj",
      age: 29,
      isActive: 1,
    },
    {
      id: 2,
      name: "suresh",
      age: 30,
      isActive: 1,
    },
    {
      id: 3,
      name: "ramesh",
      age: 31,
      isActive: 0,
    },
  ];
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(empdata);
  }, []);

  const handleEdit = (id) => {
    handleShow();
  };
  const handleDelete = (id) => {
    if (
      window.confirm(
        `Are you sure you want to delete employee with ID: ${id}`
      ) == true
    ) {
      alert(`Delete employee with ID: ${id}`);
    }
  };

  const handleUpdate = () => {
    alert("Update employee");
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <input
              type="text"
              className="form-control m-2"
              placeholder="Enter Employee Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Col>
          <Col>
            <input
              type="number"
              className="form-control m-2"
              placeholder="Enter Employee Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </Col>
          <Col>
            <input
              type="checkbox"
              className="form-check-input m-2"
              id="isActive"
              checked={isActive === 1 ? true : false}
              onChange={(e) => setIsActive(e)}
              value={isActive}
            />
            <label className="form-check-label" htmlFor="isActive">
              Active
            </label>
          </Col>
          <Col>
            <Button variant="primary" className="m-2">
              Add Employee
            </Button>
          </Col>
        </Row>
      </Container>
      <br />
      <table class="table table-striped-columns">
        <thead>
          <tr>
            <th scope="col">#</th>

            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">isActive</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0
            ? data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>

                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.isActive}</td>
                  <td>
                    <button
                      className="btn btn-primary m-2"
                      onClick={() => handleEdit(item.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            : "Loading"}
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modify / Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <input
                type="text"
                className="form-control m-2"
                placeholder="Enter Employee Name"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
            </Col>
            <Col>
              <input
                type="number"
                className="form-control m-2"
                placeholder="Enter Employee Age"
                value={editAge}
                onChange={(e) => setEditAge(e.target.value)}
              />
            </Col>
            <Col>
              <input
                type="checkbox"
                className="form-check-input m-2"
                id="isActive"
                checked={editIsActive === 1 ? true : false}
                onChange={(e) => setEditIsActive(e)}
                value={editIsActive}
              />
              <label className="form-check-label" htmlFor="isActive">
                Active
              </label>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CRUD;
