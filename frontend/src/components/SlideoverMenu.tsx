import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export function SlideoverMenu({
	open,
	setOpen,
}: {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog
				as='div'
				className='fixed inset-0 z-50 overflow-hidden'
				onClose={setOpen}>
				<div className='absolute inset-0 overflow-hidden'>
					<Transition.Child
						as={Fragment}
						enter='ease-in-out duration-500'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in-out duration-500'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'>
						<Dialog.Overlay className='absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
					</Transition.Child>

					<div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
						<Transition.Child
							as={Fragment}
							enter='transform transition ease-in-out duration-500 sm:duration-700'
							enterFrom='translate-x-full'
							enterTo='translate-x-0'
							leave='transform transition ease-in-out duration-500 sm:duration-700'
							leaveFrom='translate-x-0'
							leaveTo='translate-x-full'>
							<div className='pointer-events-auto w-screen max-w-md'>
								<div className='flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl'>
									<div className='px-4 sm:px-6'>
										<div className='flex items-start justify-between'>
											<Dialog.Title className='text-lg font-semibold text-gray-900'>
												Places
											</Dialog.Title>
											<div className='ml-3 flex h-7 items-center'>
												<button
													type='button'
													className='rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2'
													onClick={() => setOpen(false)}>
													<span className='sr-only'>Close panel</span>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														className='h-6 w-6'
														fill='none'
														viewBox='0 0 24 24'
														stroke='currentColor'
														stroke-width='2'>
														<path
															stroke-linecap='round'
															stroke-linejoin='round'
															d='M6 18L18 6M6 6l12 12'
														/>
													</svg>
												</button>
											</div>
										</div>
									</div>
									<div className='relative mt-6 flex-1 px-4 sm:px-6'>
										{/* Replace with your content */}
										<div className='absolute inset-0 px-4 sm:px-6'>
											<div
												className='h-full border-2 border-dashed border-gray-200'
												aria-hidden='true'
											/>
										</div>
										{/* /End replace */}
									</div>
								</div>
							</div>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	);
}