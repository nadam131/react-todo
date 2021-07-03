import React from "react";
import styled from "styled-components";
import axios from "axios";

// import { Input } from "antd";

const Test3 = () => {
  const getData = () => {
    axios.get("http://localhost:3001/tasks").then(({ data }) => {
      setIsData(data);
    });
  };

  React.useEffect(() => {
    getData();
  }, []);

  const [isData, setIsData] = React.useState();

  const patchData = (obj) => {
    const result = window.prompt("Название списка", obj.text);
    if (result) {
      const newTasks = isData.map((item) => {
        if (item.id === obj.id) {
          item.text = result;
        }
        return item;
      });
      setIsData(newTasks);
      axios.patch("http://localhost:3001/tasks/" + obj.id, {
        text: result,
      });
    }
  };

  return (
    <Wrapper>
      {isData &&
        isData.map((item) => (
          <div onClick={() => patchData(item)}>{item.text}</div>
        ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  div {
    cursor: pointer;
  }
`;

export default Test3;
