import { Link } from '@mui/material'
import { motion } from 'framer-motion'

export default function WhatsAppWidget() {
	return (
		<motion.div
			whileHover={{ scale: 1.05 }}
			className='fixed bottom-4 right-4 w-[70px] cursor-pointer'
			title='WhatsApp'
		>
			<Link href='#'>
				<img
					src='https://media.graphassets.com/FBQy6QhtSySLS2oPzXKw'
					alt='WhatsApp'
				/>
			</Link>
		</motion.div>
	)
}
