import { Disclosure, Transition } from '@headlessui/react';

export function Legend() {
	return (
		<div className='absolute z-10 top-4 left-4 w-48 bg-white border border-gray-200 shadow-lg rounded-md px-4'>
			<Disclosure>
				{({ open }) => (
					<>
						<Disclosure.Button className='py-2 z-10 w-full flex items-center justify-between'>
							<h2 className='font-semibold'>Legend</h2>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className={`h-4 w-4 ${open ? 'rotate-180' : ''}`}
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth='3'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M5 15l7-7 7 7'
								/>
							</svg>
						</Disclosure.Button>
						<Transition
							enter='transition duration-100 ease-out'
							enterFrom='transform scale-95 opacity-0'
							enterTo='transform scale-100 opacity-100'
							leave='transition duration-75 ease-out'
							leaveFrom='transform scale-100 opacity-100'
							leaveTo='transform scale-95 opacity-0'>
							<Disclosure.Panel className='py-4'>
								<ul className='space-y-1'>
									<li className='flex items-center space-x-2'>
										<div className='w-4 h-2 bg-green-500 rounded-sm' />
										<span className='font-medium'>Park</span>
									</li>
									<li className='flex items-center space-x-2'>
										<div className='w-4 h-2 bg-red-500 rounded-sm' />
										<span className='font-medium'>Restaurant</span>
									</li>
								</ul>
							</Disclosure.Panel>
						</Transition>
					</>
				)}
			</Disclosure>
		</div>
	);
}
