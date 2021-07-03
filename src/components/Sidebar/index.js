import React from "react";

import styled from "styled-components";
import { ItemTask, AddItem } from "../";

import { Row, Col } from "antd";

const Sidebar = ({
  setActiveList,
  deleteItem,
  isListData,
  postItem,
  patchText,
}) => {
  return (
    <Wrapper>
      <Row className='sidebar-row'>
        <Col>
          {isListData &&
            isListData.map((item) => (
              <ItemTask
                key={item.id}
                list={true}
                iconSize='18px'
                text={item.name}
                itemInfo={item}
                setActiveList={setActiveList}
                deleteItem={deleteItem}
                patchText={patchText}
              />
            ))}
        </Col>
        <Col>
          <AddItem postItem={postItem} list={true} />
        </Col>
      </Row>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .sidebar-row {
    flex-direction: column;
  }
`;

export default Sidebar;
