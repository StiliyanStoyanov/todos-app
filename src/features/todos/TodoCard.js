import {completeTodo, removeTodo} from "./todosSlice";
import {useDispatch} from "react-redux";


const TodoCard = ({todo}) => {
    const dispatch = useDispatch();
    return (
        <li>
            <p>{todo.body}, is completed: {todo.completed.toString()}</p>
            <button onClick={() => dispatch(completeTodo(todo))}>Complete</button>
            <button onClick={() => dispatch(removeTodo(todo))}>Delete</button>
        </li>
    )
}

export default TodoCard