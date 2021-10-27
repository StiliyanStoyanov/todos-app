import styled from "@emotion/styled";
import {FaStar, FaHome, FaCalendarAlt, FaChevronRight, FaChevronLeft} from 'react-icons/fa'
import {useMediaQuery, useToggle} from "../../../hooks";
import {SidebarButton} from "./SidebarButton";
import {Overlay} from "../Overlay";
import {selectFilter, showAll, showImportant, showPlanned} from "../todosSlice";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";

const toggleValues:[boolean, boolean] = [true, false]
const Sidebar = () => {
    const dispatch = useAppDispatch();
    const [expanded, {toggle, setIndex1: collapse}] = useToggle(toggleValues)
    const matches = useMediaQuery('(max-width: 800px)', collapse);
    const filter = useAppSelector(selectFilter)
    return (
        <>
            <SidebarContainer expanded={expanded}>
                <ExpandCollapseButton onClick={toggle}>
                    {expanded ? <FaChevronLeft/> : <FaChevronRight/>}
                </ExpandCollapseButton>
                <div style={{paddingTop: '10px', borderBottom: '1px solid #eaeaea', marginBottom: '8px'}}>
                    <SidebarButton isActive={filter === 'all'} onClick={() => dispatch(showAll())}>
                        <FaHome size={30}/>
                        <span>All</span>
                    </SidebarButton>
                    <SidebarButton isActive={filter === 'important'} onClick={() => dispatch(showImportant())}>
                        <FaStar size={30}/>
                        <span>Important</span>
                    </SidebarButton>
                    <SidebarButton isActive={filter === 'planned'} onClick={() => dispatch(showPlanned())}>
                        <FaCalendarAlt size={30}/>
                        <span>Planned</span>
                    </SidebarButton>
                </div>
                <div style={{textAlign: 'center', marginTop: '8px'}}>Tags</div>
            </SidebarContainer>
            {matches && expanded && <Overlay onClick={collapse}/>}
        </>

    )
}
const SidebarContainer = styled.aside<{expanded: boolean}>`
  width: 50px;
  max-width: 50px;
  border-right: 1px solid #eaeaea;
  background: #d7d7d7;
  overflow-x: hidden;
  overflow-y: auto;
  transition: 300ms ease;
  ${({expanded}) => expanded && `
    width: 200px;
    max-width: 200px;
  `};
`
const ExpandCollapseButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  color: #465efc;
  justify-content: center;
  margin-top: 6px;
  padding: 0;
  margin-left: 6px;
  border: 1px solid transparent;
  border-radius: 4px;
  transition: background-color 0.1s linear;
  &:hover {
    background-color: #fafafa;
    box-shadow: 0 0 0 1px #ededed;
  }
  svg {
    min-width: 30px;
    min-height: 30px;
  }
`

export default Sidebar

