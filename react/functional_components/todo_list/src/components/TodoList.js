import React, { useState } from 'react';

const TodoList = () => {

    const [newTodo, setNewTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    const todoItem = {
        todo: newTodo,
        isComplete: false
    }

    const createTodo = (e) => {
        e.preventDefault();
        if (newTodo.length === 0) {
            return;
        }
        setTodoList([...todoList, todoItem]);
        setNewTodo("");
    };

    const deleteTodo = (index) => {
        const filteredTodoList = todoList.filter((todo, i) => {
            return i !== index;
        });
        setTodoList(filteredTodoList);
    }

    const completeTodo = (index) => {
        const updatedTodoList = todoList.map((todo, i) => {
            if (index === i) {
                // changes state directly, best practice to avoid
                // todo.isComplete = !todo.isComplete;

                // create a new state instead, return updatedTodo
                const updatedTodo = { ...todo, isComplete: !todo.isComplete };
                return updatedTodo
            }
            return todo;
        });
        setTodoList(updatedTodoList)
    }

    return (
        <div class="container">

            <h1>Add Something Todo</h1>
            <form onSubmit={createTodo}>
                <div>
                    <input type="text" onChange={(e) => setNewTodo(e.target.value)} value={newTodo} />
                    <input type="submit" value="Add" />
                </div>
            </form>


            <h2>Your Todo List:</h2>
            <ul>
                {todoList.map((todo, index) => {

                    const todoClasses = [];
                    if (todo.isComplete) {
                        todoClasses.push("line-through");
                    }

                    return <div key={index}>
                        <li>
                            {/* if completed, change text style to strikethru */}
                            <span className={todoClasses.join(" ")}>{todo.todo}</span>

                            {/* when checkbox is checked, change completed to true */}
                            <input style={{ marginLeft: "1em" }} type="checkbox" onChange={(e) => { completeTodo(index) }} checked={todo.complete}></input>

                            {/* if checked as completed, show delete button */}
                            {todo.isComplete ? <button style={{ marginLeft: "1em" }} onClick={(e) => { deleteTodo(index) }}>Delete</button> : ""}

                        </li>

                    </div>
                }
                )}
            </ul>


        </div>
    );
}

export default TodoList;

