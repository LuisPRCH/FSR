import { Nav, Footer, HeaderOfCategory, CartOfProduct, Search } from './index'
import { motion } from 'framer-motion'

export default function CategoryPage({ objectToUse }) {

	console.log(objectToUse[0].node.imagen.url)

	return (
		<div className='min-h-screen w-full absolute top-0 left-0'>
			<Nav />
			<HeaderOfCategory title={objectToUse[0].node.nombre} img={objectToUse[0].node.imagen.url} />
			<motion.main
				animate={{ opacity: [0, 1], y: [50, 0] }}
				className='opacity-0 w-full flex flex-col justify-start items-center gap-8 md:flex-row md:items-start md:justify-center md:gap-0'
			>
				<Search />
				<section className='mb-8 px-8 flex flex-wrap w-full justify-center items-center gap-8'>
					{objectToUse[0].node.productos.map(producto => {
						return <CartOfProduct productToUse={producto} />
					})}
				</section>
			</motion.main>
			<Footer />
		</div>
	)
}
