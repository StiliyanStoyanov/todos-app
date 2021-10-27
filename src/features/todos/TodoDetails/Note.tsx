import styled from "@emotion/styled";

const Note = () => {
    return (
        <TextArea placeholder={'Add note'}/>
    )
}


const TextArea = styled.textarea`
  width: 100%;
  resize: none;
  margin: 10px 0;
`

export default Note