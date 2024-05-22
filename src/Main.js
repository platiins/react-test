import Login from "./Login";
import Admin from "./Admin";

function Main() {
  const isLoggedIn = false;
  return <div>{!isLoggedIn ? <Login /> : <Admin />}</div>;
}
export default Main;
