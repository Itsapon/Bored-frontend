import React from "react";
import { Container } from "react-bootstrap";

export default function ActivityCard(props) {
  const { activity } = props;
  console.log("this is activity in article card: ", activity);
  return (
    <Container>
      <p style={{ width: "300px", margin: "auto" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus,
        nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem
        felis nec erat
      </p>
    </Container>
  );
}
/*
filter all people > 6 && type == relax
*/