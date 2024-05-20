import EmployeeCard from "./EmployeeCard";

function StaffList() {
  const employees = [
    { id: 114, username: "Employee1", isActive: true, lastVisit: "20.05.2024" },
    {
      id: 117,
      username: "Employee2",
      isActive: false,
      lastVisit: "13.02.2022",
    },
    { id: 567, username: "Employee3", isActive: true, lastVisit: "19.05.2024" },
    { id: 100, username: "Employee4", isActive: true, lastVisit: "13.05.2024" },
    {
      id: 108,
      username: "Employee5",
      isActive: (false),
      lastVisit: "11.12.2022",
    },
    {
      id: 344,
      username: "Employee6",
      isActive: false,
      lastVisit: "09.08.2022",
    },
    { id: 966, username: "Employee7", isActive: true, lastVisit: "20.04.2024" },
    { id: 778, username: "Employee8", isActive: true, lastVisit: "15.05.2024" },
    { id: 300, username: "Employee9", isActive: true, lastVisit: "05.05.2024" },
  ];

  return (
    <ul>
      {employees.map((employee) => {
        console.log(employee);
        return (
          <li key={employee.id}>
            <EmployeeCard employee={employee} />
          </li>
        );
      })}
    </ul>
  );
}

export default StaffList();
