import type { NextPage } from 'next'
import Head from 'next/head'
import { HomePage } from '../components'

const Home: NextPage = () => {
	return (
		<div className='font-Ubuntu min-h-screen absolute top-0 left-0 pb-[92px] md:pb-[55px]'>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<HomePage />
		</div>
	)
}

export default Home
