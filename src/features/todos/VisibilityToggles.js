import React from "react";
import {useDispatch} from "react-redux";
import {showActive, showCompleted, showAll} from "./todosSlice";

const VisibilityToggles = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(showActive())}>Active</button>
            <button onClick={() => dispatch(showCompleted())}>Completed</button>
            <button onClick={() => dispatch(showAll())}>All</button>
        </div>
    )
}

export default VisibilityToggles