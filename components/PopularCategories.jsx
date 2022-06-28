import { motion } from 'framer-motion'
import Link from 'next/link'
import useQuery from '../hooks/useQuery'

export default function PopularCategories() {
	const { popularCategories, loader } = useQuery()

	return (
		<section className='w-full min-h-[576px] p-8 flex flex-col justify-start items-center gap-8'>
			<div className='text-center w-full flex flex-col justify-center items-center gap-4'>
				<span className='w-12 h-1 bg-[#e83d42]' />
				<h2 className='text-3xl text-neutral-700'>Lo Más Visitado</h2>
			</div>

			<article className='flex flex-wrap w-full justify-center items-center gap-8'>
				{popularCategories &&
					popularCategories.map(category => {
						return (
							<motion.div
								key={category.node.id}
								whileHover={{ y: -5 }}
								animate={{ opacity: 1 }}
								className='opacity-0 relative w-[360px] h-[460px] rounded-md overflow-hidden'
							>
								<Link href={`/categoria/${category.node.slug}`}>
									<div className='w-full h-full rounded-md bg-gradient-to-b from-[#00000033] to-[#0d489966] flex justify-start items-end px-8 pb-12 cursor-pointer'>
										<h4 className='text-white text-3xl font-medium'>
											{category.node.nombre}
										</h4>
									</div>
								</Link>
								<img
									className='absolute top-0 left-0 w-full h-full object-cover z-[-10]'
									src={category.node.imagen.url}
									alt={category.node.nom}
								/>
							</motion.div>
						)
					})}
			</article>
		</section>
	)
}
