import React from 'react';
import styled from "styled-components";
import Sidebar from "./Sidebar/Sidebar";
import AddTodo from "./AddTodo";
import TodosList from "./TodosList";
import TodoDetails from "./TodoDetails";
import Heading from "./Heading";

const Todos = () => {
    return (
        <Layout>
            <Sidebar/>
            <main>
                <Heading/>
                <AddTodo/>
                <TodosList/>
                <BackgroundLines/>
            </main>
            <TodoDetails/>
        </Layout>
    );
}
const BackgroundLines = styled.div`
  flex-grow: 1;
  background: linear-gradient(to bottom, white 52px, #e5e5e5 52px);
  background-size: 100% 53px;
  box-shadow: inset 0 1px 0 0 #e5e5e5;
`
const Layout = styled.div`
  position: relative;
  display: flex;
  height: calc(100% - 48px);
  main {
    display: flex;
    flex-flow: column;
    flex-grow: 1;
  }
  
  @media screen and (max-width: 800px) {
    aside {
      position: absolute;
      z-index: 100;
      height: 100%;
    }
    section {
      position: absolute;
      z-index: 300;
      right: 0;
      height: 100%;
    }
    main {
      margin-left: 50px;
    }
  }
`

export default Todos
