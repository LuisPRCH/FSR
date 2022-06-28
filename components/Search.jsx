import Link from 'next/link'
import useQuery from '../hooks/useQuery'
import { motion } from 'framer-motion'

const MIN = 5000
const MAX = 100000

export default function Sarch() {
	const { allCategories } = useQuery()

	console.log(allCategories)

	return (
		<section className='px-8 w-[600px] gap-8 flex flex-col justify-center items-center md:sticky top-[122px]'>
			<article className='flex flex-col gap-4 justify-center items-center p-4 min-h-[10rem] w-full bg-slate-100 rounded-lg'>
				<div className='w-full flex flex-col justify-center items-center gap-2'>
					<span className='w-12 h-1 bg-[#e83d42]' />
					<h2 className='text-2xl text-neutral-700'>Categorías Disponibles</h2>
				</div>
				<ul className='w-full flex flex-wrap gap-y-4 gap-x-3 justify-center items-center'>
					{allCategories.map(categorie => {
						return (
							<li key={categorie.node.id}>
								<Link href={`/categoria/${categorie.node.slug}`}>
									<motion.span
										whileHover={{ y: -3, scale: 1.05 }}
										className='font-light text-sm tracking-[1px] px-[0.75rem] py-[0.375rem] rounded-3xl bg-[#07245616] text-[#0f172773] transition-colors hover:bg-[#e83d42] hover:text-white cursor-pointer'
									>
										{categorie.node.nombre}
									</motion.span>
								</Link>
							</li>
						)
					})}
				</ul>
				{/* AQUI IRIA EL FILTRO POR PRECIO DE ABAJO. */}
			</article>

			<article className='flex flex-col gap-4 justify-center items-center p-4 min-h-[10rem] w-full bg-slate-100 rounded-lg'>
				<div className='w-full flex flex-col justify-center items-center gap-2'>
					<span className='w-12 h-1 bg-[#e83d42]' />
					<h2 className='text-2xl text-neutral-700'>Contáctenos</h2>
				</div>
				<div className='text-center'>
					<p>¿Desea ser atendido de forma preferente?</p>
					<p className='font-medium'>¡NO PIERDA EL TIEMPO, LLÁMENOS YA!</p>
				</div>
				<Link href='#'>
					<motion.span
						whileHover={{ y: -3, scale: 1.05 }}
						className='cursor-pointer px-8 py-1 bg-[#e83d42] rounded-lg text-white font-bold'
					>
						AQUÍ
					</motion.span>
				</Link>
			</article>
		</section>
	)
}

// query MyQuery {
//   categoriasConnection(where: {slug: "venta"}) {
//     edges {
//       node {
//         id
//         nombre
//         slug
//         imagen {
//           url
//         }
//         productos(where: {precio_lte: 5000}) {
//           codigo
//           categorias {
//             nombre
//             slug
//           }
//           destacado
//           id
//           nombre
//           precio
//           publicado
//           slug
//           imagen {
//             url
//           }
//         }
//       }
//     }
//   }
// }

{
	/* <Slider
defaultValue={MAX / 2 + MIN}
max={MAX}
min={MIN}
aria-label='Default'
valueLabelDisplay='auto'
/> */
}
