import React from "react";
import styled from "styled-components";

const Container = ({ children }) => {
  return <Wrapper className='container'>{children}</Wrapper>;
};

const Wrapper = styled.div`
  max-width: 1340px;

  padding: 0px 40px;
  margin: 0 auto;
  box-sizing: border-box;
`;

export default Container;
