import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { SERVER_URL } from '../../../config';


export const QUERY_KEY = ['todos'];

const fetcher = () => axios.get(`${SERVER_URL}/todo/list`).then(({ data }) => data);

const useTodosQuery = () => {
	return useQuery({
		queryKey: QUERY_KEY,
		queryFn: fetcher
	});
}

export default useTodosQuery;