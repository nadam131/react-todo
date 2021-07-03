import React from "react";
import styled from "styled-components";
import { Checkbox } from "antd";
import { Row, Col } from "antd";

import { TagTwoTone, CloseSquareTwoTone, EditTwoTone } from "@ant-design/icons";

const ItemTask = ({
  text = "Тут будет некоторый текст",
  list,
  iconSize = "18px",
  setActiveList,
  itemInfo,
  deleteItem,
  patchCheckedStatus,
  patchText,
}) => {
  const onClick = () => {
    if (list) {
      setActiveList(itemInfo);
    }
  };

  return (
    <Wrapper>
      <Row className='itemtask-row' onClick={onClick}>
        {list && (
          <Col className='list-col'>
            <TagTwoTone style={{ fontSize: iconSize }} />
            <Text>{text}</Text>
          </Col>
        )}
        {!list && (
          <Col>
            <Checkbox
              onChange={(e) => patchCheckedStatus(itemInfo, e)}
              checked={itemInfo.checked}
              onClick={onClick}
            >
              <Text>{text}</Text>
            </Checkbox>
          </Col>
        )}
        <Col className='close-icon-col'>
          <EditTwoTone
            onClick={() => patchText(itemInfo, list)}
            style={{ fontSize: iconSize }}
          />
          <CloseSquareTwoTone
            style={{ fontSize: iconSize }}
            onClick={() => deleteItem(itemInfo, list)}
          />
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  :hover {
    cursor: pointer;
  }

  :active {
    background-color: ${(p) => p.theme.color.primary};
  }

  .itemtask-row {
    align-items: center;
    justify-content: space-between;
  }
  .list-col {
    display: flex;
    align-items: center;
  }

  .ant-input,
  .ant-input:focus,
  .ant-input-focused {
    border: none;
    box-shadow: none;
  }
  .anticon-close-square {
    cursor: pointer;
    color: ${(p) => p.theme.color.primary};
  }
  .close-icon-col {
    display: flex;
    align-items: center;
  }
`;

const Text = styled.div`
  margin-left: 10px;
`;

export default ItemTask;
