import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEY as todosQueryKey } from '../queries/useTodosQuery';
import { SERVER_URL } from '../../../config';

const fetcher = (todo: any) => axios.post(`${SERVER_URL}/todo/create`, todo);

const useTodosMutation = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: fetcher,
		onSuccess: () => {
			queryClient.invalidateQueries(todosQueryKey);
		}
	})
}

export default useTodosMutation;