import styled from "@emotion/styled";
import {FaTag} from "react-icons/fa";

const TagSelect = () => {
    return (
        <Container>
            <FaTag/>
            {/*Placeholder for tag selection*/}
            <input/>
        </Container>
    )
}


const Container = styled.div`
  display: flex;
  align-items: center;
  svg {
    flex-shrink: 0;
  }
  input {
    margin: 0 8px;
    width: 100%;
  }
`

export default TagSelect