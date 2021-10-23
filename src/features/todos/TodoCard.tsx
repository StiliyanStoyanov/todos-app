import styled from "styled-components";
import {toggleCompleted, toggleImportant, removeTodo, selectTodo, selectId} from "./todosSlice";
import {useDispatch, useSelector} from "react-redux";
import CheckmarkButton from "../../common/CheckmarkButton";
import {FaStar, FaRegStar, FaTrashAlt} from "react-icons/fa";
import {FlexContainer} from "../../common/Containers/FlexContainer";

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
            <FlexContainer>
                <CheckmarkButton checked={todo.completed} onClick={handleCheckmarkButton}/>
                <span onClick={handleTodoClick}>
                    {todo.completed ? <s>{text}</s> : <span>{text}</span>}
                </span>
            </FlexContainer>
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
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0;
  padding: 0 10px;
  overflow: hidden;
`



export default TodoCard