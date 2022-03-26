import {Place} from 'types/Place';

export const PlaceCard = ({place} : {place: Place}) => {
  const {name, description, type, visited, country} = place;

  return (
    <button className='bg-white border-l-4 border-indigo-500 rounded-sm px-4 py-4 shadow hover:shadow-lg transition duration-300'>
      <div className='space-y-2'>
        <div className='flex items-center space-x-1'>
          {visited ?
            (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
             </svg>) :
              (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor" strokeWidth="3">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
               </svg>)
          }
          <h2 className='font-semibold'>{name}</h2>
        </div>
        <div className='flex items-center space-x-1'>
          <p className='text-gray-400 text-sm'>{type}</p>
          <div className='h-1 w-1 rounded-full bg-gray-400' />
          <p className='text-gray-400 text-sm'>{country}</p>
        </div>
        <div>
          <p className='text-sm text-left text-gray-600'>{description}</p>
        </div>
      </div>
    </button>
  )
}
