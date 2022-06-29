import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function WhatsAppWidget() {
	return (
		<motion.div
			whileHover={{ scale: 1.05 }}
			className='fixed bottom-4 right-4 w-[50px] cursor-pointer'
			title='WhatsApp'
		>
			<Link passHref href='#'>
				<a>
					<Image
						width={101}
						height={101}
						src='https://media.graphassets.com/E2xWXa1qS9aIfsUvr0m7'
						alt='WhatsApp'
					/>
				</a>
			</Link>
		</motion.div>
	)
}
