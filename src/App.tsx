import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Message from "./components/Message";

function App() {
  let items = ["New York", "Tokyo", "China", "Myanmar", "Landon", "Thailand"];

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <Message/>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
      <ListGroup items={items} heading="Cities" onSelectItem={(event) => console.log(event)}/>
    </div>
  );
}

export default App;
