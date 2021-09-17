import React from 'react';
import AddTodo from "./AddTodo";
import TodosList from "./TodosList";
import VisibilityToggles from "./VisibilityToggles";

const Todos = () => {
    return (
        <div>
            <AddTodo/>
            <VisibilityToggles/>
            <TodosList/>
        </div>
    );
}

export default Todos
