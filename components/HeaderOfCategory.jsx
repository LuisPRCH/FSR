import { motion } from 'framer-motion'

export default function HeaderOfCategory({ title }) {
	return (
		<motion.header
			animate={{ opacity: [0, 1], y: [50, 0] }}
			className="opacity-0 mb-8 mt-[130px] md:mt-[90px] relative bg-[url('../public/img-header.jpg')] bg-cover bg-left w-full h-[250px] flex justify-center items-center"
		>
			<div className='w-full h-full absolute top-0 left-0 bg-gradient-to-r from-[#00000055] to-[#00000055] px-8 flex flex-col justify-center items-center'>
				<motion.h1
					transition={{ delay: 0.7, ease: 'easeInOut' }}
					animate={{ opacity: 1 }}
					className='opacity-0 text-white font-medium text-center text-7xl'
				>
					{title}
				</motion.h1>
			</div>
		</motion.header>
	)
}
