// import { Button } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./styles.scss";

function Header() {
  return (
    <header>
      <h3 className="header-title">this is header of the page</h3>
      <Button variant="secondary">click me</Button> 
    </header>
  );
}

export default Header;
