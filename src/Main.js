import Login from "./Login";
import Admin from "./Admin";
import EmployeeCard from "./EmployeeCard";

function Main() {
  const isLoggedIn = true;
  return <div>{!isLoggedIn ? <Login /> : <Admin />}</div>;
}

export default Main;
