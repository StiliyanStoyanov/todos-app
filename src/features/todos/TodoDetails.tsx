import styled from "styled-components";
import {FaTag} from 'react-icons/fa'
import {useDispatch, useSelector} from "react-redux";
import {clearSelectedTodo, selectSelected} from "./todosSlice";
import {useMediaQuery} from "../../hooks";
import {Overlay} from "./Overlay";

const TodoDetails = () => {
    const dispatch = useDispatch();
    const todo = useSelector(selectSelected);
    const matches = useMediaQuery('(max-width: 800px)');
    const clearSelection = () => dispatch(clearSelectedTodo());

    if (!todo) return null;
    return (
        <>
            <Container>
                <button onClick={clearSelection}>X</button>
                Selected todo with id: {todo.id}
                <ItemsContainer>
                    <Category>
                        <FaTag/>
                        <CategoryInput/>
                    </Category>
                    <Note placeholder={'Add note'}/>
                </ItemsContainer>
            </Container>
            {matches && <Overlay onClick={clearSelection} zIndex={200}/>}
        </>
    );
}
const Container = styled.section`
  max-width: 380px;
  width: calc(100% - 50px);
  background-color: green;
  padding: 0 10px;
`

const ItemsContainer = styled.div`
  background-color: white;
  margin-top: 10px;
`

const Note = styled.textarea`
  width: 100%;
  resize: none;
  margin: 10px 0;
`

const Category = styled.div`
  display: flex;
  align-items: center;
`
const CategoryInput = styled.input`
  margin: 0 8px;
`
export default TodoDetails