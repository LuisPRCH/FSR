export default function Footer() {
	return (
		<footer className='absolute bottom-[-1px] p-4 w-full gap-4 bg-gray-800 flex justify-between items-center flex-col md:flex-row'>
			<h2 className='text-white'>Ferretería San Rafael</h2>
			<ul className='text-sm text-gray-400 flex justify-center items-center gap-4'>
				<li>
					<a href='#' className='hover:underline'>
						About
					</a>
				</li>
				<li>
					<a href='#' className='hover:underline'>
						Privacy Policy
					</a>
				</li>
				<li>
					<a href='#' className='hover:underline'>
						Licensing
					</a>
				</li>
				<li>
					<a href='#' className='hover:underline'>
						Contact
					</a>
				</li>
			</ul>
		</footer>
	)
}
