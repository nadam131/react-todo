import React from "react";
import styled from "styled-components";
import { Input, Col, Row } from "antd";

import { UiButton } from "../../Ui";

import axios from "axios";

const Test = () => {
  const [inputValue, setInputValue] = React.useState();
  const [data, setData] = React.useState("");

  React.useEffect(() => {
    axios.get("http://localhost:3001/colors").then(({ data }) => {
      setData(data);
    });
  }, []);

  const lastItem = () => {
    return data[data.length - 1];
  };

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const addGetRequest = () => {
    axios.get("http://localhost:3001/colors").then(({ data }) => {
      alert("Дата получена", data);
    });
  };

  const addPostRequest = () => {
    axios
      .post("http://localhost:3001/colors", {
        newitem: inputValue,
      })
      .then(({ data }) => {
        alert("Инфа добавлена");
      });
  };

  const addDeleteRequest = () => {
    axios.get("http://localhost:3001/colors").then(({ data }) => {});
    axios
      .delete("http://localhost:3001/colors/" + lastItem(data).id)
      .then(() => {});
  };
  return (
    <Wrapper>
      <Row gutter={[30, 0]}>
        <Col span={4}>
          <UiButton type='primary' onClick={addGetRequest}>
            GET запрос
          </UiButton>
        </Col>

        <Col span={4}>
          <Input onChange={onChange}></Input>
          <UiButton onClick={addPostRequest} type='secondary'>
            POST запрос
          </UiButton>
        </Col>

        <Col span={4}>
          <UiButton>PUT запрос</UiButton>
        </Col>
        <Col span={4}>
          <UiButton onClick={addDeleteRequest}>DELETE запрос</UiButton>
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Test;
