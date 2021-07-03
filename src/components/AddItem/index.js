import React from "react";
import styled from "styled-components";
import { UiButton } from "../Ui";
import { Input } from "antd";

import { Row, Col } from "antd";

import { PlusCircleTwoTone } from "@ant-design/icons";

const AddItem = ({ iconSize = "18px", postItem, list }) => {
  const [isShowBlock, setIsShowBlock] = React.useState(false);

  const [isValue, setValue] = React.useState("");

  const onChange = (e) => {
    setValue(e.target.value, "value");
  };

  const sendResult = () => {
    if (!isValue) {
      alert("Введите название списка!");
      return;
    }
    postItem(isValue, list);
    setValue("");
    setIsShowBlock(false);
  };

  return (
    <Wrapper>
      <Row>
        {!isShowBlock && (
          <Col
            className='text-col'
            onClick={() => setIsShowBlock(!isShowBlock)}
          >
            <UiButton>
              <PlusCircleTwoTone style={{ fontSize: iconSize }} />
              <Text>Добавить заметку</Text>
            </UiButton>
          </Col>
        )}
        {isShowBlock && (
          <Col span={18}>
            <Input placeholder='Введите название' onChange={onChange} />
            <UiButton onClick={sendResult}>Добавить</UiButton>
            <UiButton onClick={() => setIsShowBlock(!isShowBlock)}>
              Закрыть окно
            </UiButton>
          </Col>
        )}
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;

  .ant-btn {
    width: 100%;
  }

  .anticon {
    margin-right: 10px;
  }
  .text-col {
    cursor: pointer;
    .ant-btn {
      padding: 18px;
      display: flex;
      align-items: center;
    }
  }
`;

const Text = styled.div``;

export default AddItem;
