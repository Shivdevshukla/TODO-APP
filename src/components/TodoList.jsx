import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";

export default function TodoList({ todos, setTodos }) {
    // for sorting
    const sortedTodos=todos.slice().sort((a,b)=>Number(a.done)-Number(b.done))
    return (
        <div className={styles.list}>
            {sortedTodos.map((item, index) => (
                <TodoItem 
                    key={`${item.name}-${index}`} // Ensures a unique key for each item
                    item={item} 
                    todos={todos} 
                    setTodos={setTodos} 
                />
            ))}
        </div>
    );
}
