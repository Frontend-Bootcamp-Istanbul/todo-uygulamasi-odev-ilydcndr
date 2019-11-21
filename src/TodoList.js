import React from 'react';
import Todo from './Todo';



function TodoList(props){
        return (
            <div className="todo-list">
                <h3>{props.title} {props.todos.length>0 && props.todos.length}</h3>
                {
                    props.todos.map((todo) => {
                        return <Todo
                            {...todo}
                            key={todo.id}
                            onTodoRemove={props.onTodoRemove}
                            onCheckedToggle={props.onCheckedToggle}
                        />
                    })
                }
            </div>
        );
    
}

export default TodoList;
