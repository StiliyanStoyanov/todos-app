import styled from '@emotion/styled'
import {useSelector} from "react-redux";
import {selectFilter} from "./todosSlice";

const Heading = () => {
    const filter = useSelector(selectFilter);
    return <StyledHeading>{filter}</StyledHeading>
}

const StyledHeading = styled.h2`
  text-transform: capitalize;
  padding: 0 20px;
`

export default Heading