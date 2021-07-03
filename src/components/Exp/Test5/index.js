import React from "react";
import styled from "styled-components";

import { Input } from "antd";
import axios from "axios";

const Test5 = () => {
  React.useEffect(() => {
    getData();
  }, []);

  const [isData, setIsData] = React.useState();

  const [isInputValue, setIsInputValue] = React.useState();

  const getData = () => {
    axios.get("http://localhost:3001/tasks").then(({ data }) => {
      setIsData(data);
    });
  };

  const patchData = (e, id) => {
    setIsInputValue(e.target.value);

    if (isInputValue) {
      const newData = isData.map((item) => {
        if (item.id === id) {
          item.text = isInputValue;
        }
        return item;
      });
      setIsData(newData);
    }
  };

  return (
    <Wrapper>
      {isData &&
        isData.map((item) => (
          <Input value={item.text} onChange={(e) => patchData(e, item.id)} />
        ))}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Test5;
