import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEY as todosQueryKey } from '../queries/useTodosQuery';
import { SERVER_URL } from '../../../config';

const createTodoFetcher = (todo: any) => axios.post(`${SERVER_URL}/todo/create`, todo);
const updateTodoFetcher = ({id, editTodo}: any) => axios.put(`${SERVER_URL}/todo/${id}`, {content: editTodo});
const deleteTodoFetcher = (id: number) => axios.delete(`${SERVER_URL}/todo/${id}`);

export const useCreateTodo = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: createTodoFetcher,
		onSuccess: () => {
			queryClient.invalidateQueries();
		}
	})
}

export const useUpdateTodo = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: updateTodoFetcher,
		onSuccess: () => {
			queryClient.invalidateQueries();
		}
	})
}

export const useDeleteTodo = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: deleteTodoFetcher,
		onSuccess: () => {
			queryClient.invalidateQueries();
		}
	})
}