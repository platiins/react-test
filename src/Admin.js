import "./styles.scss";
import StaffList from "./StaffList";

function Admin() {
  return (
    <main>
      <h1 className="admin-title">OUR EMPLOYEES:</h1>
      <StaffList/>
    </main>
  );
}
export default Admin;
