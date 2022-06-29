import { Nav, Footer, HeaderOfCategory, CartOfProduct, Search } from './index'
import { motion } from 'framer-motion'

export default function CatalogPage({objectToUse}) {
	return (
		<div className='min-h-screen w-full absolute top-0 left-0 pb-[92px] md:pb-[55px]'>
			<Nav />
			<HeaderOfCategory title='Catálogo' />
			<motion.main
				animate={{ opacity: [0, 1], y: [50, 0] }}
				className='opacity-0 w-full flex flex-col justify-start items-center gap-8 md:flex-row md:items-start md:justify-center md:gap-0'
			>
				<Search />
				<section className='mb-8 px-8 flex flex-wrap w-full justify-center items-center gap-8'>
					{objectToUse.map(producto => {
						return <CartOfProduct productToUse={producto.node} />
					})}
				</section>
			</motion.main>
			<Footer />
		</div>
	)
}
