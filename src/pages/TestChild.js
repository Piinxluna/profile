import React from "react";
import Button from "react-bootstrap/Button";

export default function Child(props) {
  const data = "This is data from Child Component to the Parent Component.";

  return (
    <div>
      <Button primary onClick={() => props.childToParent(data)}>
        Click Child
      </Button>
    </div>
  );
}
