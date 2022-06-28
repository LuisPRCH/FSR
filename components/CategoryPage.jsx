import { Nav, Footer, HeaderOfCategory, CartOfProduct, Search } from './index'
import { motion } from 'framer-motion'

export default function CategoryPage({ objectToUse }) {
	return (
		<>
			<Nav />
			<HeaderOfCategory title={objectToUse[0].node.nombre} />
			<motion.main
				animate={{ opacity: [0, 1], y: [50, 0] }}
				className='opacity-0 w-full flex flex-col justify-start items-center gap-8 md:flex-row md:items-start md:justify-center md:gap-0'
			>
				<Search />
				<section className='mb-8 p-8 flex flex-wrap w-full justify-center items-center gap-8'>
					{objectToUse[0].node.productos.map(producto => {
						return <CartOfProduct productToUse={producto} />
					})}
				</section>
			</motion.main>
			<Footer />
		</>
	)
}
