import axios from "axios";
import React from "react";
import styled from "styled-components";

import { Checkbox } from "antd";

const Test4 = () => {
  const [isData, setIsData] = React.useState();

  React.useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("http://localhost:3001/tasks").then(({ data }) => {
      setIsData(data);
    });
  };

  const patchData = (item, e) => {
    const target = e.target.checked;
    axios.patch("http://localhost:3001/tasks/" + item.id, {
      checked: target,
    });
  };

  return (
    <Wrapper>
      {isData &&
        isData.map((item) => (
          <Task>
            <Checkbox
              onChange={(e) => patchData(item, e)}
              defaultChecked={item.checked}
            />
            <div>{item.text}</div>
          </Task>
        ))}
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const Task = styled.div``;

export default Test4;
