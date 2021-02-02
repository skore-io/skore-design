import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactChild;
}

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  align-items: center;
  display: flex;
  font-family: "Poppins", sans-serif;
  justify-content: center;
`;

const Styler: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Styler;
