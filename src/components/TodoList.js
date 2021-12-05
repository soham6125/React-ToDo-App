
const TodoList = (props) => {
    let todos = props.todos;
    let setTodos = props.setTodos;

    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id) {
                    return {...item, completed: !item.complete}
                }
                return item;
            })
        )
    }

    return ( 
        <div>
            {todos.map((todo) => (
                <div className="list-item" key={todo.id}>
                    <div className={`list ${todo.completed ? 'complete' : "" }`}>{ todo.title }</div>
                    <div>
                        <button className="check-button" onClick={() => handleComplete(todo)}>
                            <i className="fas fa-check-circle"></i>
                        </button>
                        <button className="delete-button" onClick={() => handleDelete(todo)}>
                            <i className="fas fa-times-circle"></i>
                        </button>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default TodoList;