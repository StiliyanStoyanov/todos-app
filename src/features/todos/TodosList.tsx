import styled from "@emotion/styled";
import TodoCard from "./TodoCard";
import {useSelector} from "react-redux";
import {selectVisibleIds} from "./todosSlice";

const TodosList = () => {
    const visibleIds = useSelector(selectVisibleIds)

    if (visibleIds.length === 0) return null
    return (
        <Ul>
            {visibleIds.map(id => <TodoCard key={id} id={id}/>)}
        </Ul>
    );
};

const Ul = styled.ul`
  text-decoration: none;
  list-style: none;
  padding: 0;
  margin: 0;
  overflow: auto;
`

export default TodosList