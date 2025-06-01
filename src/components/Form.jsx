import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
    const [todo, setTodo] = useState({ name: "", done: false }); // Ensure todo.name is always initialized as a string

    function handleSubmit(e) {
        e.preventDefault();
        if (todo.name.trim() === "") return; // Prevent empty todos
        setTodos([...todos, todo]); 
        setTodo({ name: "", done: false }); // Reset input field
    }

    return (
        <form className={styles.todoform} onSubmit={handleSubmit}>
            <div className={styles.inputcontainer}>
                <input
                    className={styles.modernInput}
                    onChange={(e) => setTodo({ ...todo, name: e.target.value })}
                    value={todo.name} // Ensure controlled input
                    type="text"
                    placeholder="Add a new task"
                />
                <button className={styles.modernButton} type="submit">Add</button>
            </div>
        </form>
    );
}
