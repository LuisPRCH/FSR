import { useEffect, useState } from 'react'
import { getDataQuery } from '../services'

export default function useQuery(slug = 'pistola-engrapadora') {
	const [allCategories, setAllCategories] = useState([])
	const [popularCategories, setPopularCategories] = useState([])
	const [singleCategory, setSingleCategory] = useState([])
	const [allProducts, setAllProducts] = useState([])
	const [lastProducts, setLastProducts] = useState([])
	const [singleProduct, setSingleProduct] = useState([])
	const [loader, setLoader] = useState(true)

	useEffect(() => {
		setLoader(true)

		// ------------------------- //

		getDataQuery(
			`query MyQuery {
      categoriasConnection(first: 4) {
        edges {
          node {
            id
            nombre
            slug
            imagen {
              url
              width
              height
            }
          }
        }
      }
    }
    `
		).then(data => setPopularCategories(data.categoriasConnection.edges))

		// ------------------------- //

		getDataQuery(
			`query MyQuery {
      productosConnection(first: 8) {
        edges {
          node {
            id
            nombre
            precio
            publicado
            slug
            imagen {
              url
              width
              height
            }
            categorias {
              nombre
              slug
              id
            }
            destacado
            codigo
          }
        }
      }
    }
    `
		).then(data => setLastProducts(data.productosConnection.edges))

		// ------------------------- //

		getDataQuery(`query MyQuery {
      productosConnection {
        edges {
          node {
            codigo
            destacado
            nombre
            precio
            publicado
            id
            categorias {
              slug
              nombre
              id
            }
            descripcion {
              html
            }
            imagen {
              url
              width
              height
            }
            slug
          }
        }
      }
    }
    
    `).then(data => setAllProducts(data.productosConnection.edges))

		// ------------------------- //

		getDataQuery(`query MyQuery {
      categoriasConnection {
        edges {
          node {
            id
            nombre
            slug
          }
        }
      }
    }
    `).then(data => setAllCategories(data.categoriasConnection.edges))

		// ------------------------- //

		setLoader(false)
	}, [])

	useEffect(() => {
		setLoader(true)

		// ------------------------- //

		getDataQuery(`query MyQuery {
      productosConnection(where: {slug: "${slug}"}) {
        edges {
          node {
            codigo
            destacado
            nombre
            precio
            publicado
            id
            categorias {
              slug
              nombre
              id
            }
            descripcion {
              html
            }
            imagen {
              url
              width
              height
            }
          }
        }
      }
    }`).then(data => setSingleProduct(data.productosConnection.edges))

		// ------------------------- //

		getDataQuery(`query MyQuery {
      categoriasConnection(where: {slug: "${slug}"}) {
        edges {
          node {
            id
            nombre
            slug
            imagen {
              url
              width
              height
            }
            productos {
              codigo
              categorias {
                nombre
                slug
                id
              }
              destacado
              id
              nombre
              precio
              publicado
              slug
              imagen {
                url
                width
                height
              }
            }
          }
        }
      }
    }
    `).then(data => setSingleCategory(data.categoriasConnection.edges))

		// ------------------------- //

		setLoader(false)
	}, [slug])

	return {
		loader,
		popularCategories,
		lastProducts,
		singleProduct,
		allProducts,
		singleCategory,
		allCategories,
	}
}
