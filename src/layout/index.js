import React from "react";
import styled from "styled-components";

import axios from "axios";

import { Main, Sidebar } from "../components";

import { Row, Col } from "antd";

const Layout = () => {
  const [isListData, setIsListData] = React.useState();
  const [isTaskData, setIsTaskData] = React.useState();

  const [isActiveList, setActiveList] = React.useState(1);

  const getDataList = () => {
    axios.get("http://localhost:3001/lists").then(({ data }) => {
      setIsListData(data);
    });
  };

  const getDataTask = () => {
    axios.get("http://localhost:3001/tasks?_expand=list").then(({ data }) => {
      setIsTaskData(data);
    });
  };
  React.useEffect(() => {
    getDataList();
    getDataTask();
  }, []);

  const deleteItem = (value, list) => {
    const result = window.confirm(
      `Вы действительно хотите удалить – ${value.name || value.text}?`
    );
    if (result) {
      if (list === true) {
        const newData = isListData.filter((item) => item.id !== value.id);
        axios.delete("http://localhost:3001/lists/" + value.id).then(() => {
          setIsListData(newData);
          getDataTask();
        });
      } else {
        const newData = isTaskData.filter((item) => item.id !== value.id);
        axios.delete("http://localhost:3001/tasks/" + value.id).then(() => {
          setIsTaskData(newData);
        });
      }
    }
  };

  const postItem = (value, list) => {
    if (list === true) {
      axios
        .post("http://localhost:3001/lists", {
          name: value,
        })
        .then(() => {
          getDataList();
        });
    } else {
      axios
        .post("http://localhost:3001/tasks", {
          text: value,
          listId: isActiveList.id,
          checked: false,
        })
        .then(() => {
          getDataTask();
        });
    }
  };

  const patchCheckedStatus = (obj, e) => {
    const target = e.target.checked;

    const newDataWithChecked = isTaskData.map((item) => {
      if (item.id === obj.id) {
        item.checked = target;
      }
      return item;
    });
    setIsTaskData(newDataWithChecked);

    axios.patch("http://localhost:3001/tasks/" + obj.id, {
      checked: target,
    });
  };

  const patchText = (obj, list) => {
    if (list === true) {
      const result = window.prompt("Название списка", obj.name);
      if (result) {
        const newLists = isListData.map((item) => {
          if (item.id === obj.id) {
            item.name = result;
          }
          return item;
        });
        setIsTaskData(newLists);
        axios.patch("http://localhost:3001/lists/" + obj.id, {
          name: result,
        });
        getDataTask();
      }
    } else {
      const result = window.prompt("Название списка", obj.text);
      if (result) {
        const newTasks = isTaskData.map((item) => {
          if (item.id === obj.id) {
            item.text = result;
          }
          return item;
        });
        setIsTaskData(newTasks);
        axios.patch("http://localhost:3001/tasks/" + obj.id, {
          text: result,
        });
      }
    }
  };

  return (
    <Wrapper>
      {
        (isListData,
        isTaskData && (
          <Row>
            <Col span={12}>
              <Sidebar
                isListData={isListData}
                isActiveList={isActiveList}
                deleteItem={deleteItem}
                setActiveList={setActiveList}
                postItem={postItem}
                patchText={patchText}
              />
            </Col>
            <Col span={12}>
              <Main
                isTaskData={isTaskData}
                isActiveList={isActiveList}
                setActiveList={setActiveList}
                postItem={postItem}
                deleteItem={deleteItem}
                patchCheckedStatus={patchCheckedStatus}
                patchText={patchText}
              />
            </Col>
          </Row>
        ))
      }
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Layout;
