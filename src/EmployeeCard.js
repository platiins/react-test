import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import "./styles.scss";

function EmployeeCard({ employee }) {
  return (
    <Card className="employee-card">
      <Card.Header className="employee-name">{employee.fullName}</Card.Header>
      <Card.Img variant="top" src={employee.img} />
      <ListGroup variant="flush">
        <ListGroup.Item>ID: {employee.id}</ListGroup.Item>
        <ListGroup.Item>Position: {employee.position}</ListGroup.Item>
        <ListGroup.Item>Last visit: {employee.lastVisit}</ListGroup.Item>
        <ListGroup.Item
          className={employee.isActive ? "active-user" : "not-active-user"}
        >
          {employee.isActive ? "Active" : "Inactive"}
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default EmployeeCard;
