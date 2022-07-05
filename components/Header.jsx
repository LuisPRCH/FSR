import { motion } from 'framer-motion'

export default function Header({
	title,
	slogan = 'Ferretería San Rafael',
	plus = 'Todo para tu hogar',
}) {

	return (
		<motion.header
			animate={{ opacity: [0, 1], y: [50, 0] }}
			className="mt-[135px] opacity-0 relative bg-[url('https://media.graphassets.com/T04RbgjzSsScg07fziCF')] bg-cover bg-left w-full h-[250px] flex justify-center items-center sm:h-[500px] md:mt-[92px]"
		>
			<div className='w-full h-full absolute top-0 left-0 bg-gradient-to-r from-[#00000055] to-[#00000055] px-8 gap-6 flex flex-col justify-center items-center'>
				<motion.h2
					transition={{ delay: 0.7, ease: 'easeInOut' }}
					animate={{ opacity: 1 }}
					className='hidden opacity-0 text-white font-medium text-center text-3xl lg:text-5xl md:text-4xl sm:block'
				>
					{title}
				</motion.h2>
				<motion.h1
					transition={{ delay: 1, ease: 'easeInOut' }}
					animate={{ opacity: 1 }}
					className='hidden opacity-0 text-white text-xl lg:text-2xl sm:block'
				>
					Ferretería San Rafael. Todo para tu hogar.
				</motion.h1>
				<motion.h1
					transition={{ delay: 1, ease: 'easeInOut' }}
					animate={{ opacity: 1 }}
					className='opacity-0 flex flex-col gap-2 text-center text-white text-3xl font-medium sm:hidden'
				>
					{slogan}
					<span className='text-xl'>{plus}</span>
				</motion.h1>
			</div>
		</motion.header>
	)
}
