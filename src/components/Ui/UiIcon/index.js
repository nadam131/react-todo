import React from "react";
import styled from "styled-components";

import Icon from "@ant-design/icons";

const UiIcon = ({ className, iconSize = "10px", colorOfIcon, ...props }) => {
  return (
    <Wrapper className='uiicon__wrapper'>
      <Icon
        className={className}
        {...props}
        style={{ color: colorOfIcon, fontSize: iconSize }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.i`
  path {
    /* fill: inherit;  */
    /* transition: fill 1s; */
  }

  &:hover {
    /* path {
      fill: ${(p) => p.hoverColor || "inherit"};
    } */
  }
`;

export default UiIcon;
