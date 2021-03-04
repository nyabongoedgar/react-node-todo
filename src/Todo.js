function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
        {`${index + 1}. ${todo.text}`}
      </span>
      <div>
        <button
          className="success-button"
          variant="outline-success"
          onClick={() => markTodo(index)}
        >
          ✓
        </button>{" "}
        <button className="remove-button" onClick={() => removeTodo(index)}>
          ✕
        </button>
      </div>
    </div>
  );
}

export default Todo;
