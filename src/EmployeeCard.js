import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./styles.scss";

function EmployeeCard({ employee }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header>{employee.username}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>{employee.id}</ListGroup.Item>
        <ListGroup.Item>{employee.lastVisit}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default EmployeeCard;
