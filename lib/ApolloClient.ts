import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = (url: string) =>
	new ApolloClient({
		uri: url,
		cache: new InMemoryCache(),
	});

export default client;
