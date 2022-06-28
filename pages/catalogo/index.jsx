import { CatalogPage } from '../../components'
import useQuery from '../../hooks/useQuery'

export default function catalogo() {
	const { allProducts } = useQuery()

	return <>{!allProducts[0] ? null : <CatalogPage />}</>
}
