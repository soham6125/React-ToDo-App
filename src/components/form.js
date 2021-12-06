import {v4 as uuidv4} from 'uuid';

const Form = (props) => {
    let input = props.input;
    let setInput = props.setInput;
    let todos = props.todos;
    let setTodos = props.setTodos;

    const onFormSubmit = (e) => {
        e.preventDefault();
        const new_todo = {id: uuidv4(), title: input, completed: false};
        setTodos([...todos, new_todo]);
        setInput('');
    }

    return ( 
        <form onSubmit={onFormSubmit}> 
            <input 
             type='text'
             placeholder="Enter a Todo..."
             className="task-input"
             value={input}
             required
             onChange={(e) => setInput(e.target.value)}
            >
            </input>
            <button className="button-add" type='submit'>Add Todo</button>
        </form>
     );
}
 
export default Form;