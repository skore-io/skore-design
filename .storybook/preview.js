import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  align-items: center;
  display: flex;
  font-family: "Poppins", sans-serif;
  justify-content: center;
`;

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
  layout: 'centered',
  backgrounds: {
    values: [
      { name: 'Light', value: 'white'},
      { name: 'Dark', value: '#283344'},
      { name: 'Gray', value: '#f3f5f9'},
      { name: 'Teal', value: '#26e1cd'},
    ]
  }
}

export const decorators = [
  (Story) => <Container ><Story/></Container>
];
