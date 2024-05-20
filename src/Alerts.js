import Alert from "react-bootstrap/Alert";

// function AlertNoAccess() {
//   return (
//     <Alert className="mt-3" variant="danger">
//       <Alert.Heading>no access</Alert.Heading>
//       <p className="mb-0">login as admin to access the library</p>
//     </Alert>
//   );
// }

// export default AlertNoAccess;

function AlertMessage({ accessMessage }) {
  switch (accessMessage) {
    case "not-admin":
      return (
        <Alert className="mt-3" variant="danger">
          <Alert.Heading>no access</Alert.Heading>
          <p className="mb-0">login as admin to access the library</p>
        </Alert>
      );
  }
}

export default AlertMessage;
