import Link from 'next/link'
import { motion } from 'framer-motion'
import { Tags } from '../components'
import Image from 'next/image'

export default function CartOfProduct({ productToUse }) {
	return (
		<motion.div
			whileHover={{ y: -5 }}
			animate={{ opacity: 1 }}
			className={`gap-2 relative opacity-0 w-[360px] rounded-md overflow-hidden flex justify-between items-start flex-col ${
				productToUse.destacado ? 'border-[1px] border-[#0d4899]' : null
			} `}
		>
			{productToUse.destacado ? (
				<div className='z-[10] absolute top-6 left-0 w-6 py-1 bg-[#0d4899] flex justify-center rounded-r'>
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
			<Link passHref href={`/producto/${productToUse.slug}`}>
				<a>
					<Image
						width={productToUse.imagen.width}
						height={productToUse.imagen.height}
						className='cursor-pointer'
						src={productToUse.imagen.url}
						alt={productToUse.nombre}
					/>
				</a>
			</Link>
			<Tags tagsToUse={productToUse.categorias} />
			<div className='flex w-full items-center gap-2'>
				<h2 className='ml-6 text-xl text-[#333]'>{productToUse.nombre}</h2>
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
			<h5 className='ml-6 text-sm text-[#999]'>{productToUse.publicado}</h5>
			<h4 className='ml-6 text-sm text-[#333] uppercase tracking-[1px]'>
				{productToUse.codigo}
			</h4>
			<div className='px-6 border-t-2 border-[#07245616] text-[#333] font-medium h-[60px] w-full flex justify-between items-center text-xl'>
				<h3>{`₡ ${productToUse.precio} i.v.a`}</h3>
				<Link href={`/producto/${productToUse.slug}`}>
					<svg
						className='cursor-pointer w-8 opacity-50 hover:opacity-100'
						fill='#0d4899'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 576 512'
					>
						<path d='M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z' />
					</svg>
				</Link>
			</div>
		</motion.div>
	)
}
