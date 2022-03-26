import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import sanityClient from 'lib/sanityClient';
import {PlaceCard} from 'components/PlaceCard'
import {Place} from 'types/Place'

export function SlideoverMenu({
	open,
	setOpen,
}: {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [places, setPlaces] = useState<Place[]>([])

  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "place"]{ _id, name, description, visited, country, type, country}`
    )
    .then((data) => setPlaces(data))
    .catch(console.error)
  }, [])

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
								<div className='flex h-full flex-col overflow-y-scroll bg-gray-50 py-6 shadow-xl'>
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
														strokeWidth='2'>
														<path
															strokeLinecap='round'
															strokeLinejoin='round'
															d='M6 18L18 6M6 6l12 12'
														/>
													</svg>
												</button>
											</div>
										</div>
									</div>
									<div className='relative mt-6 flex-1 px-4 sm:px-6'>
                    <div className='grid grid-cols-1 gap-y-4'>
                      {places.map((place: Place) => {
                        return (
                          <PlaceCard key={place._id} place={place}/>
                        )
                      })}
                    </div>
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
