import EmployeeCard from "./EmployeeCard";

function StaffList() {
  const employees = [
    {
      id: 67812,
      fullName: "Maria Rodriguez",
      isActive: false,
      lastVisit: "2024-03-17",
      position: "Nurse",
      img: "https://picsum.photos/200",
    },
    {
      id: 24579,
      fullName: "John Smith",
      isActive: true,
      lastVisit: "2024-05-12",
      position: "Surgeon",
      img: "https://picsum.photos/200",
    },
    {
      id: 35784,
      fullName: "Emma Brown",
      isActive: true,
      lastVisit: "2024-05-10",
      position: "Surgeon",
      img: "https://picsum.photos/200",
    },
    {
      id: 89234,
      fullName: "Michael Williams",
      isActive: false,
      lastVisit: "2024-04-20",
      position: "Pharmacist",
      img: "https://picsum.photos/200",
    },
    {
      id: 57129,
      fullName: "Olivia Davis",
      isActive: false,
      lastVisit: "2024-04-18",
      position: "Nurse",
      img: "https://picsum.photos/200",
    },
    {
      id: 65473,
      fullName: "Liam Martinez",
      isActive: true,
      lastVisit: "2024-05-19",
      position: "Pharmacist",
      img: "https://picsum.photos/200",
    },
    {
      id: 73956,
      fullName: "Sophia Garcia",
      isActive: true,
      lastVisit: "2024-05-14",
      position: "Nurse",
      img: "https://picsum.photos/200",
    },
    {
      id: 48267,
      fullName: "Ethan Hernandez",
      isActive: true,
      lastVisit: "2024-05-21",
      position: "Surgeon",
      img: "https://picsum.photos/200",
    },
  ];

  return (
    <ul className="employees-list">
      {employees.map((employee) => {
        return (
          <li key={employee.id}>
            <EmployeeCard employee={employee} />
          </li>
        );
      })}
    </ul>
  );
}

export default StaffList;
