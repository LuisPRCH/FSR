import useQuery from '../hooks/useQuery'
import { CartOfProduct } from './index'

export default function LastPosts() {
	const { loader, lastProducts } = useQuery()

	return (
		<section className='w-full min-h-[500px] p-8 flex flex-col justify-start items-center gap-8'>
			<div className='text-center w-full flex flex-col justify-center items-center gap-4'>
				<span className='w-12 h-1 bg-[#e83d42]' />
				<h2 className='text-3xl text-neutral-700'>Ultimos Productos</h2>
			</div>
			<article className='flex flex-wrap w-full justify-center items-center gap-8'>
				{lastProducts.map(product => {
					return (
						<CartOfProduct key={product.node.id} productToUse={product.node} />
					)
				})}
			</article>
		</section>
	)
}
