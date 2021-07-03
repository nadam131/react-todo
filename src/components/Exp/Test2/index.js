import React from "react";
import styled from "styled-components";

import { Row, Col, Input } from "antd";

import axios from "axios";
import { UiButton } from "../../Ui";

const Test2 = () => {
  const [isData, setIsData] = React.useState();

  const [inputValue, setInputValue] = React.useState();

  React.useEffect(() => {
    axios.get("http://localhost:3001/lists").then(({ data }) => {
      setIsData(data);
    });
  }, []);

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  // All Request
  const addPostRequest = () => {
    axios
      .post("http://localhost:3001/lists", {
        name: inputValue,
      })
      .then(() => {
        axios.get("http://localhost:3001/lists").then(({ data }) => {
          setIsData(data);
        });
      });
  };

  const addDeleteRequest = (value) => {
    //  TODO понять эту запись
    const newData = isData.filter((item) => item.id !== value);

    axios.delete("http://localhost:3001/lists/" + value).then(() => {
      setIsData(newData);
    });
  };

  return (
    <Wrapper>
      <Row>
        <Col span={12}>
          {isData && (
            <ul>
              {isData.map((item) => (
                <List>
                  <li style={{ display: "flex", flexDirection: "row" }}>
                    {item.name}
                  </li>
                  <UiButton onClick={() => addDeleteRequest(item.id)}>
                    Delete
                  </UiButton>
                </List>
              ))}
            </ul>
          )}
        </Col>
        <Col span={12}>
          <Input onChange={onChange}></Input>
          <UiButton onClick={addPostRequest}>Добавить в список</UiButton>
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const List = styled.div`
  display: flex;
  flex-direction: row;
  li {
    margin-right: 50px;
  }
  div {
    cursor: pointer;
  }
`;

export default Test2;
