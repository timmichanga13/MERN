import React, { useState } from 'react';

const TodoList = () => {

    const [todo, setTodo] = useState("");
    const [hasBeenCompleted, setHasBeenCompleted] = useState(false);

    const createTodo = (e) => {
        e.preventDefault();
        const newTodo = { todo, hasBeenCompleted };
    };



    
    return (
        <div class="container">


            <form onSubmit={createTodo}>
                <div>
                    <label>Add something Todo: </label>
                    <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} />
                    {
                        todo.length < 3 && todo.length != 0 ?
                            <p style={{ color: 'red' }}>The first thing you must do is make sure your Todo is at least 3 characters!</p> :
                            ''
                    }
                </div>
                <input type="submit" value="Create Todo" />
            </form>
            <h2>Your Todo List:</h2>
            <ul>
                {TodoList.map((todo, i) =>
                    <li key={i}>{todo}</li>)}
            </ul>


        </div>
    );
}

export default TodoList;

