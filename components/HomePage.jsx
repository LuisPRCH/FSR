import { Header, PopularCategories, LastProducts, Nav, Footer } from './index'

export default function HomePage() {
	return (
		<>
			<Nav />
			<main className='min-h-screen w-full flex flex-col justify-start items-center'>
				<Header title='Toda clase de necesidades para el hogar en un mismo lugar.' />
				<PopularCategories />
				<LastProducts />
			</main>
			<Footer />
		</>
	)
}
