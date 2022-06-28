import { ProductPage } from '../../components'
import { useRouter } from 'next/router'
import useQuery from '../../hooks/useQuery'

export default function producto() {
	const {
		query: { slug },
	} = useRouter()
	const { singleProduct } = useQuery(slug)

	return (
		<>
			{!singleProduct[0] ? null : <ProductPage objectToUse={singleProduct} />}
		</>
	)
}
