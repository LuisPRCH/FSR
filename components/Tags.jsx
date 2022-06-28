import Link from 'next/link'

export default function Tags({ tagsToUse }) {
	return (
		<ul className='w-full flex flex-wrap gap-2 justify-center items-center'>
			{tagsToUse.map(categorie => {
				return (
					<li key={categorie.id}>
						<Link href={`/categoria/${categorie.slug}`}>
							<span className='font-light text-sm tracking-[1px] px-[0.75rem] py-[0.375rem] rounded-3xl bg-[#07245616] text-[#0f172773] transition-colors hover:bg-[#e83d42] hover:text-white cursor-pointer'>
								{categorie.nombre}
							</span>
						</Link>
					</li>
				)
			})}
		</ul>
	)
}
