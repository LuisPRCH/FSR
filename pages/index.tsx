import type { NextPage } from 'next'
import Head from 'next/head'
import { HomePage, WhatsAppWidget } from '../components'

const Home: NextPage = () => {
	return (
		<div className='font-Ubuntu min-h-screen absolute top-0 left-0'>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<HomePage />
			<WhatsAppWidget />
		</div>
	)
}

export default Home
