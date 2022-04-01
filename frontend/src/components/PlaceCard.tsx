import { Place } from 'types/Place';
import { CheckIcon, XIcon } from '@heroicons/react/solid';

export const PlaceCard = ({ place }: { place: Place }) => {
	const { name, description, type, visited, country } = place;

	return (
		<button className='bg-white border-l-4 border-indigo-500 rounded-sm px-4 py-4 shadow hover:shadow-lg transition duration-300'>
			<div className='space-y-2'>
				<div className='flex items-center space-x-1'>
					{visited ? (
						<CheckIcon className='w-5 h-5 text-green-600' />
					) : (
						<XIcon className='w-5 h-5 text-red-500' />
					)}
					<h2 className='font-semibold'>{name}</h2>
				</div>
				<p className='text-left text-gray-400 text-sm'>{type}</p>
				<div>
					<p className='text-sm text-left text-gray-600'>{description}</p>
				</div>
			</div>
		</button>
	);
};
