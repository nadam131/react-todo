import React from "react";
import styled from "styled-components";
import { ItemTask, AddItem } from "../";
import { Row, Col } from "antd";

const Main = ({
  isActiveList,
  isTaskData,
  deleteItem,
  postItem,
  setIsChecked,
  isChecked,
  patchCheckedStatus,
  patchText,
}) => {
  const newData = isTaskData.filter((item) => item.listId === isActiveList.id);

  return (
    <Wrapper>
      <Row className='main-row' gutter={[0, 20]}>
        <Col>
          {newData.map((item) => (
            <ItemTask
              key={item.id}
              text={item.text}
              list={false}
              itemInfo={item}
              deleteItem={deleteItem}
              setIsChecked={setIsChecked}
              isChecked={isChecked}
              patchCheckedStatus={patchCheckedStatus}
              patchText={patchText}
            />
          ))}
        </Col>
        <Col>
          <AddItem postItem={postItem} list={false} />
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .main-row {
    flex-direction: column;
  }
`;

export default Main;
