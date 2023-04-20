import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { SERVER_URL } from '../config';
import { useCreateTodo, useDeleteTodo, useUpdateTodo } from '../hooks/services/mutations/useTodosMutation';

export default function Todo() {
	const [ todo, setTodo ] = useState<Object>();
	const [ editTodo, setEditTodo ] = useState<string>();
	const [ editable, setEditable ] = useState<number>();
	const createTodoMutation = useCreateTodo();
	const updateTodoMutation = useUpdateTodo();
	const deleteTodoMutation = useDeleteTodo();

	const queryClient = useQueryClient();

	const { isLoading, isError, data, error } = useQuery({
		queryKey: ['todo'],
		queryFn: async () => await axios.get(`${SERVER_URL}/todo/list`).then(res => res.data),
		refetchOnWindowFocus: false,
		retry: 0,
		onSuccess: (data: any) => {
			console.log(data);
		},
		onError: (e: any) => {
			console.log(e.message);
		}
	})
	

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
		setEditTodo(data.find(({id}: any)=> id === todoId).content);
	}

	const createTodo = async() => {
		createTodoMutation.mutate(todo);
	}

	const updateTodo = async(id: number) => {
		setEditable(0);
		updateTodoMutation.mutate({id, editTodo});
	}

	const deleteTodo = async(id: number) => {
		deleteTodoMutation.mutate(id);
	}


	if (isLoading) {
		return <span>Loading...</span>
	}

	if (isError) {
		return <span>Error: {error.message}</span>
	}

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