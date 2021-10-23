import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, selectFilter, selectPlaceholder} from "./todosSlice";
import {Container} from "../../common/Containers/Container";
import {filters} from "./utils";

const AddTodo = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    const placeholder = useSelector(selectPlaceholder);
    const filter = useSelector(selectFilter);

    const handleAdd = () => {
        if (!input) return;
        const payload = {
            body: input,
            ...(filter === filters.important && {important: true}),
            ...(filter === filters.planned && {dueDate: new Date()})
        }
        dispatch(addTodo(payload))
        setInput('');
    }

    return (
        <Container padding={'0 20px'}>
            <input
                placeholder={placeholder}
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            {input && <button onClick={handleAdd}>Add</button>}

        </Container>
    )
}

export default AddTodo