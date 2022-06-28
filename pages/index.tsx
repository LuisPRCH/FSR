import type { NextPage } from 'next'
import Head from 'next/head'
import { HomePage } from '../components'

const Home: NextPage = () => {
	return (
		<div className='font-Ubuntu flex flex-col'>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<HomePage />
		</div>
	)
}

export default Home
