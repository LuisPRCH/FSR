import { Nav, Footer, MoreProducts, Tags } from './index'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ProductPage({ objectToUse }) {
	return (
		<div className='min-h-screen w-full absolute top-0 left-0'>
			<Nav />
			<motion.main
				animate={{ opacity: [0, 1], y: [50, 0] }}
				className='opacity-0 px-8 pt-32 min-h-screen w-full flex flex-col gap-8 lg:px-3'
			>
				<div className='flex flex-col justify-start items-center md:flex-row-reverse md:items-start md:justify-center'>
					<div className='flex flex-col bg-slate-100 w-full max-w-[700px] rounded-lg'>
						<section className='w-full max-w-[700px] flex items-center justify-between p-8 flex-col gap-8 lg:flex-row lg:gap-0 lg:h-[170px]'>
							<div className='flex justify-center items-center'>
								<h3 className='text-[#333] text-2xl border-b-[1px] border-gray-300'>{`₡ ${objectToUse[0].node.precio} i.v.a`}</h3>
							</div>
							<div className='flex flex-col justify-center items-start gap-4'>
								<Tags tagsToUse={objectToUse[0].node.categorias} />
								<div className='text-center flex w-full items-center gap-2'>
									<h2 className='text-xl text-[#333]'>
										{objectToUse[0].node.nombre}
									</h2>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='16'
										height='16'
										fill='#0099ff'
										viewBox='0 0 24 24'
									>
										<path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z' />
									</svg>
								</div>
								<p className='text-xs text-[#999]'>
									AÑADIDO EL {objectToUse[0].node.publicado}
								</p>
							</div>
						</section>
						<section
							className='p-8 w-full max-w-[700px] hidden border-t-[1px] border-gray-300 text-[#333] md:block'
							dangerouslySetInnerHTML={{
								__html: `${objectToUse[0].node.descripcion.html}`,
							}}
						/>
					</div>
					<section className='w-full max-w-[700px] min-h-[10rem] flex justify-center items-center'>
						<Image
							width={objectToUse[0].node.imagen.width}
							height={objectToUse[0].node.imagen.height}
							className='h-full max-h-[500px]'
							src={objectToUse[0].node.imagen.url}
							alt={objectToUse[0].node.nombre}
						/>
					</section>
					<section
						className='p-4 w-full max-w-[700px] border-gray-300 bg-slate-100 rounded-lg text-[#333] md:hidden'
						dangerouslySetInnerHTML={{
							__html: `${objectToUse[0].node.descripcion.html}`,
						}}
					/>
				</div>

				<section className='w-full min-h-[500px] mb-8 flex flex-col justify-start items-center gap-8'>
					<div className='w-full flex flex-col justify-center items-center gap-4'>
						<span className='w-12 h-1 bg-[#e83d42]' />
						<h2 className='text-3xl text-[#333]'>Ultimos Productos</h2>
					</div>
					<MoreProducts />
				</section>
			</motion.main>
			<Footer />
		</div>
	)
}
