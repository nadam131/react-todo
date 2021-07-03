import React from "react";
import styled from "styled-components";
import { Button } from "antd";

const UiButton = ({ children, ...props }) => {
  return (
    <Wrapper className='uibutton__wrapper'>
      <Button {...props}>{children}</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  &.uibutton__wrapper {
    .ant-btn {
      border-radius: 4px;
    }
    .ant-btn-secondary {
      background-color: ${(p) => p.theme.color.background_grey};
      color: ${(p) => p.theme.color.grey};
      :hover {
        border-color: ${(p) => p.theme.color.grey};
      }
    }
  }
`;

export default UiButton;
