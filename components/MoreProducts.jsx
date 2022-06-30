import useQuery from '../hooks/useQuery'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Tags from './Tags'
import Image from 'next/image'

export default function MoreProducts() {
	const { allProducts } = useQuery()

	return (
		<article className='flex flex-wrap w-full justify-center items-center gap-8'>
			{allProducts[0] &&
				Array.from({ length: 3 }).map(() => {
					const ramdomNum = Math.floor(Math.random() * allProducts.length)
					return (
						<motion.div
							whileHover={{ y: -5 }}
							animate={{ opacity: 1 }}
							className={`relative opacity-0 w-[360px] h-[560px] rounded-md overflow-hidden flex justify-between items-start flex-col ${
								allProducts[ramdomNum].node.destacado
									? 'border-[1px] border-[#0d4899]'
									: null
							} `}
						>
							{allProducts[ramdomNum].node.destacado ? (
								<div className='absolute top-6 left-0 w-6 py-1 bg-[#0d4899] flex justify-center rounded-r'>
									<svg
										clipRule='evenodd'
										fillRule='evenodd'
										strokeLinejoin='round'
										strokeMiterlimit='2'
										fill='white'
										width='16'
										height='16'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z'
											fillRule='nonzero'
										/>
									</svg>
								</div>
							) : null}
							<Link  href={`/producto/${allProducts[ramdomNum].node.slug}`}>
								
									<Image
										width={allProducts[ramdomNum].node.imagen.width}
										height={allProducts[ramdomNum].node.imagen.height}
										className='cursor-pointer'
										src={allProducts[ramdomNum].node.imagen.url}
										alt={allProducts[ramdomNum].node.nombre}
									/>
								
							</Link>
							<Tags tagsToUse={allProducts[ramdomNum].node.categorias} />
							<div className='flex w-full items-center gap-2'>
								<h2 className='ml-6 text-xl text-[#333]'>
									{allProducts[ramdomNum].node.nombre}
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
							<h5 className='ml-6 text-sm text-[#0f172773]'>
								{allProducts[ramdomNum].node.publicado}
							</h5>
							<h4 className='ml-6 text-sm text-[#0f1727be] uppercase tracking-[1px]'>
								{allProducts[ramdomNum].node.codigo}
							</h4>
							<div className='px-6 border-t-2 border-[#07245616] text-[#333] font-medium h-[60px] w-full flex justify-start items-center'>
								<h3>{`₡ ${allProducts[ramdomNum].node.precio} i.v.a`}</h3>
							</div>
						</motion.div>
					)
				})}
		</article>
	)
}
