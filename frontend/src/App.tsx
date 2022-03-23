import { useState, useEffect, useRef } from 'react';
import Map from 'react-map-gl';

import { SlideoverMenu } from 'components/SlideoverMenu';
import { Legend } from 'components/Legend';

function App() {
	const [open, setOpen] = useState(false);
	const [viewport, setViewport] = useState({
		latitude: 51.509865,
		longitude: -0.118092,
		zoom: 12,
	});

	return (
		<div className='relative overflow-hidden'>
			<button
				className='absolute z-10 top-4 right-4 bg-white border border-gray-200 shadow-lg px-2 py-2 rounded-md'
				onClick={() => setOpen(!open)}
				type='button'
				title='Open Menu'>
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
						d='M4 6h16M4 12h16M4 18h16'
					/>
				</svg>
			</button>
			<Legend />
			<SlideoverMenu open={open} setOpen={setOpen} />
			<div className='mapboxgl'>
				<Map
					mapboxAccessToken={process.env.REACT_APP_MAPBOX_API_TOKEN}
					initialViewState={viewport}
					mapStyle='mapbox://styles/ceeyahya/cl0zpa6jq00c914oeg3s8xxyr'
				/>
			</div>
		</div>
	);
}

export default App;
