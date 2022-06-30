import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
	return (
		<motion.nav
			animate={{
				opacity: [0, 1],
				y:[-50, 0]
			}}
			className='opacity-0 flex-col gap-4 bg-white flex w-full justify-between items-center px-8 py-4 absolute top-0 left-0 md:flex-row md:fixed z-[1000]'
		>
			<Link passHref href='/'>
				<a className='h-[58px]'>
					<Image
						width={180}
						height={58}
						src='https://media.graphassets.com/5idzsXDTtK6ZobgrX92U'
						alt='Feretería San Rafael'
					/>
				</a>
			</Link>
			<ul className='flex gap-4'>
				<li className='cursor-pointer'>
					<Link className='text-[#333]' href='/'>
						<span>Inicio</span>
					</Link>
				</li>
				<li className='cursor-pointer'>
					<Link className='text-[#333]' href='/catalogo'>
						<span>Catálogo</span>
					</Link>
				</li>
				<li className='cursor-pointer'>
					<Link className='text-[#333]' href='/contacto'>
						<span>Contáctanos</span>
					</Link>
				</li>
			</ul>
		</motion.nav>
	)
}
