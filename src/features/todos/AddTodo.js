import {useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "./todosSlice";

const AddTodo = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    return (
        <div>
            <input
                placeholder={'What needs doing?'}
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                onClick={() => {
                    setInput('')
                    dispatch(addTodo(input))
                }}
            >
                Add Todo
            </button>
        </div>
    )
}

export default AddTodo