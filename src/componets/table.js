import React from "react";
import { Table } from "react-bootstrap";

export const UserTable = ({ userData }) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>age</th>
            <th>location</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((value, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{value.firstName}</td>
              <td>{value.lastName}</td>
              <td>{value.age}</td>
              <td>{value.location}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
