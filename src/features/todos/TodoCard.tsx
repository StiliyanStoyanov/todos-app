import styled from "@emotion/styled";
import {toggleCompleted, toggleImportant, removeTodo, selectTodo, selectId} from "./todosSlice";
import {useDispatch, useSelector} from "react-redux";
import CheckmarkButton from "../../common/CheckmarkButton";
import {FaStar, FaRegStar, FaTrashAlt} from "react-icons/fa";
import {Container} from "@mui/material";

const TodoCard = ({id}: {id: string}) => {
    const dispatch = useDispatch();
    const todo = useSelector(selectId(id));
    const text = `${todo.body}, is completed: ${todo.completed?.toString()}`;
    const handleTodoClick = () => dispatch(selectTodo(id));
    const handleCheckmarkButton = () => dispatch(toggleCompleted(id));
    const handleStarButton = () => dispatch(toggleImportant(id));
    const handleDeleteButton = () => dispatch(removeTodo(id));

    return (
        <Li>
            <Container>
                <CheckmarkButton checked={todo.completed} onClick={handleCheckmarkButton}/>
                <span onClick={handleTodoClick}>
                    {todo.completed ? <s>{text}</s> : <span>{text}</span>}
                </span>
            </Container>
            <div>
                <button onClick={handleStarButton}>
                    {todo.important ? <FaStar/> : <FaRegStar/>}
                </button>
                <DeleteButton  onClick={handleDeleteButton}>
                    <FaTrashAlt/>
                </DeleteButton>
            </div>
        </Li>
    )
}
const DeleteButton = styled.button`
  position: relative;
`
const Li = styled.li`
  height: 53px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`



export default TodoCard