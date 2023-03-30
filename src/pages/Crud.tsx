import axios from "axios";
import { useEffect, useState } from "react"
import { SERVER_URL } from "../config";

export default function Crud() {
	const [ todo, setTodo ] = useState<Object>();
	const [ editTodo, setEditTodo ] = useState<string>();
	const [ data, setData ] = useState([]);
	const [ editable, setEditable ] = useState<number>();

	const changeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setTodo({content: e.target.value});
	}
	const changeEditTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		setEditTodo(e.target.value);
	}

	const clickTodo = (todoId: number) => {
		setEditable(todoId);
		setEditTodo(data.find(({id})=> id === todoId).content);
	}

	const createTodo = async() => {
		await axios.post(`${SERVER_URL}/todo/create`, todo);
		loadData();
	}

	const updateTodo = async(id: number) => {
		setEditable(0);
		await axios.put(`${SERVER_URL}/todo/${id}`, {content: editTodo});
		loadData();
	}

	const deleteTodo = async(id: number) => {
		await axios.delete(`${SERVER_URL}/todo/${id}`);
		loadData();
	}

	const loadData = () => {
		axios.get(`${SERVER_URL}/todo/list`)
			.then(res => {
				setData(res.data);
			})
			.catch((err) => {
				console.log(err);
			})
	}

	useEffect(() => {
		loadData();
	}, []);

	return(
		<div>
			{data.map((todo: any) => (
				<div key={todo.id}>
					{editable===todo.id? (
						<>
							<input
								type="text"
								value={editTodo}
								onChange={changeEditTodo}
							/>
							<button onClick={()=>updateTodo(todo.id)}>확인</button>
						</>
					):(
						<span onClick={()=>clickTodo(todo.id)}>
							{todo.content}
						</span>
					)}
					<button onClick={()=>deleteTodo(todo.id)}>x</button>
				</div>
			))}
			<input onChange={changeTodo}/>
			<button onClick={createTodo}>생성</button>
		</div>
	)
}