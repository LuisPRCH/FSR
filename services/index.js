import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getDataQuery = async (queryToUse) => {
	const query = gql`${queryToUse}`

	const results = await request(graphqlAPI, query)

	return results
}
