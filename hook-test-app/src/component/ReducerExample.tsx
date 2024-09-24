import {useReducer, useState} from 'react';
import {
    TodoActionCreator,
    TodoItemType,
    TodoReducer,
} from '../reducer/TodoReducer';

const idNow = new Date().getTime();

const initialTodoList: Array<TodoItemType> = [
    {id: idNow, todo: '운동'},
    {id: idNow + 1, todo: '독서'},
    {id: idNow + 2, todo: '음악감삼'},
];

const ReducerExample = () => {
    const [todoList, disPatchTodoList] = useReducer(
        TodoReducer,
        initialTodoList
    );
    const [todo, setTodo] = useState('');

    const addTodo = () => {
        disPatchTodoList(TodoActionCreator.addTodo(todo));
        setTodo('');
    };

    const deleteTodo = (id: number) => {
        disPatchTodoList(TodoActionCreator.deleteTodo(id));
    };

    return (
        <div>
            <input
                type="text"
                onChange={(e) => setTodo(e.target.value)}
                value={todo}
            />

            <button onClick={addTodo}>할일 추가</button>

            <ul>
                {todoList.map((item) => {
                    return (
                        <li key={item.id}>
                            {item.todo} &nbsp; &nbsp;
                            <button onClick={() => deleteTodo(item.id)}>
                                {' '}
                                삭제
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ReducerExample;
