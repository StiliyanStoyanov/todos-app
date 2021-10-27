import styled from "@emotion/styled";
import {FormEvent, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, selectFilter, selectPlaceholder} from "./todosSlice";
import {filters} from "./utils";
import {FaPlus} from "react-icons/all";

const AddTodo = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const placeholder = useSelector(selectPlaceholder);
    const filter = useSelector(selectFilter);

    const focusInput = () => inputRef.current && inputRef.current.focus()
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (!input) return;
        const payload = {
            body: input,
            ...(filter === filters.important && {important: true}),
            ...(filter === filters.planned && {
                dueDate: new Date().setHours(23, 59, 59)
            })
        }

        dispatch(addTodo(payload))
        setInput('');
        focusInput()
    }


    return (
        <Container>
            <IconButton onClick={focusInput}>
                <FaPlus/>
            </IconButton>
            <Form onSubmit={handleSubmit}>
                <input
                    ref={inputRef}
                    placeholder={placeholder}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onSubmit={e => console.log(e)}
                />
                {input && <button type={"submit"}>Add</button>}
            </Form>
        </Container>
    );
}
const IconButton = styled.button`
  display: flex;
  color: inherit;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 4px 12px;
  border: 0;
  font-size: 24px;
`
const Container = styled.div`
  display: flex;
  color:  #777777;
  box-shadow: 0 1px #e5e5e5;
  position: relative;
  flex-basis: 53px;
  &:focus-within {
    color: black;
    box-shadow: 0 1px #767678;
  }
`
const Form = styled.form`
  display: flex;
  flex-grow: 1;
  input {
    outline: none;
    border: 0;
    flex-grow: 1;
    padding: 12px 4px;
    font-size: 18px;
    ::placeholder {
      color: #777777;
    }
    &:focus {
      ::placeholder {
        color: inherit;
      }
    }
  }
`


export default AddTodo