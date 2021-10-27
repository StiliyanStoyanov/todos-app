import styled from "@emotion/styled";
import {clearSelection, pickSelected} from "../todosSlice";
import {useMediaQuery} from "../../../hooks";
import {Overlay} from "../Overlay";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import TagSelect from "./TagSelect";
import Note from "./Note";
import DueDate from "./DueDate";

const TodoDetails = () => {
    const dispatch = useAppDispatch();
    const todo = useAppSelector(pickSelected);
    const matches = useMediaQuery('(max-width: 800px)');
    const clear = () => dispatch(clearSelection());
    if (!todo) return null;
    return (
        <>
            <Container>
                <button onClick={() => clear()}>X</button>
                <span>{todo.body}</span>
                <ItemsContainer>
                    <TagSelect/>
                    <Note/>
                    <DueDate/>
                </ItemsContainer>
            </Container>
            {matches && <Overlay onClick={clear} zIndex={200}/>}
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

export default TodoDetails