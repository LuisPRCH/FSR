import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
	return (
		<motion.nav
			animate={{
				opacity: [0, 1],
				y: [-50, 0],
			}}
			className='opacity-0 flex-col gap-4 bg-white flex w-full justify-between items-center px-8 py-4 fixed top-0 left-0 md:flex-row z-[1000]'
		>
			<Link passHref href='/'>
				<a>
					<Image
						width={180}
						height={58}
						className='cursor-pointer'
						src='https://media.graphassets.com/75LwnmxVT0mory3n2s6x'
						alt='Feretería San Rafael'
					/>
				</a>
			</Link>
			<ul className='flex gap-4'>
				<motion.li whileHover={{ scale: 1.05 }}>
					<Link className='text-neutral-700' href='/'>
						<span>Inicio</span>
					</Link>
				</motion.li>
				<motion.li whileHover={{ scale: 1.05 }}>
					<Link className='text-neutral-700' href='/catalogo'>
						<span>Catálogo</span>
					</Link>
				</motion.li>
				<motion.li whileHover={{ scale: 1.05 }}>
					<Link className='text-neutral-700' href='/contacto'>
						<span>Contáctanos</span>
					</Link>
				</motion.li>
			</ul>
		</motion.nav>
	)
}
