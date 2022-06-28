import { CategoryPage } from '../../components'
import { useRouter } from 'next/router'
import useQuery from '../../hooks/useQuery'

export default function categoria() {
	const {
		query: { slug },
	} = useRouter()
	const { singleCategory } = useQuery(slug)

	return (
		<>
			{!singleCategory[0] ? null : (
				<CategoryPage objectToUse={singleCategory} />
			)}
		</>
	)
}
