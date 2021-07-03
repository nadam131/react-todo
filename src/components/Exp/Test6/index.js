import React from "react";
import styled from "styled-components";

import { Checkbox } from "antd";

const Test6 = () => {
  const [isChange, setIsChange] = React.useState(false);

  const onChange = (e) => {
    setIsChange(e.target.checked);
  };

  return (
    <Wrapper>
      <Checkbox checked={isChange} onChange={onChange} />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Test6;
