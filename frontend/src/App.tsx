import { useEffect, useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import sanityClient from 'lib/sanityClient';
import { Place } from 'types/Place';
import { SlideoverMenu } from 'components/SlideoverMenu';
import { Legend } from 'components/Legend';

function App() {
	const [open, setOpen] = useState(false);
	const [viewport, setViewport] = useState({
		latitude: 51.509865,
		longitude: -0.118092,
		zoom: 12,
	});
	const [places, setPlaces] = useState<Place[]>([]);
	const [selectedPin, setSelectedPin] = useState<Place | null>(null);

	console.log(selectedPin);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "place"]{ _id, name, description, visited, country, type, country, coordinates}`
			)
			.then((data) => setPlaces(data))
			.catch(console.error);
	}, []);

	return (
		<div className='relative overflow-hidden'>
			<button
				className='absolute z-10 top-4 right-4 bg-white border border-gray-200 shadow-lg px-2 py-2 rounded-md'
				onClick={() => setOpen(!open)}
				type='button'
				title='Open Menu'
			>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-6 w-6'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
					strokeWidth='2'
				>
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
				>
					{places.map((place) => (
						<Marker
							key={place._id}
							latitude={place.coordinates.lat}
							longitude={place.coordinates.lng}
							anchor='bottom'
						>
							<button
								onClick={(e) => {
									e.preventDefault();
									setSelectedPin(place);
								}}
							>
								<img src='/pin.svg' alt='marker' />
							</button>
						</Marker>
					))}

					{selectedPin ? (
						<Popup
							latitude={selectedPin.coordinates.lat}
							longitude={selectedPin.coordinates.lng}
							onClose={() => {setSelectedPin(null)}}
              closeOnClick={false}
						>
							<div>
								<h2>{selectedPin.name}</h2>
								<p>{selectedPin.description}</p>
							</div>
						</Popup>
					) : null}
				</Map>
			</div>
		</div>
	);
}

export default App;
