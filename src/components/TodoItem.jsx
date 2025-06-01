import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
    function handleDelete(itemToDelete) {
        console.log("Delete button clicked for item", itemToDelete);
        setTodos(todos.filter((todo) => todo !== itemToDelete)); // Filter out the item to delete
    }

    function handleClick(name) {
        const newArray = todos.map((todo) =>
            todo.name === name ? { ...todo, done: !todo.done } : todo
        );
        setTodos(newArray); // Update todos with the toggled state
        console.log(newArray); // Log the updated todos
    }

    return (
        <div className={styles.item}>
            <div className={styles.itemName}>
                <span
                    className={item.done ? styles.done : ""} // Apply strike-through if done
                    onClick={() => handleClick(item.name)} // Toggle done state on click
                >
                    {item.name}
                </span>
                <span>
                    <button
                        onClick={() => handleDelete(item)}
                        className={styles.deletebutton}
                    >
                        x
                    </button>
                </span>
            </div>
            <hr className={styles.line} />
        </div>
    );
}
