// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
	// We name our schema
	name: 'default',
	// Then proceed to concatenate our document type
	// to the ones provided by any plugins that are installed
	types: schemaTypes.concat([
		{
			name: 'place',
			type: 'document',
			title: 'Place',
			fields: [
				{
					name: 'name',
					type: 'string',
					title: 'Place Name',
				},
				{
					name: 'country',
					type: 'string',
					title: 'Country',
				},
				{
					name: 'description',
					type: 'string',
					title: 'Place Description',
				},
				{
					name: 'type',
					type: 'string',
					title: 'Place Type',
				},
				{
					name: 'coordinates',
					type: 'geopoint',
					title: 'Place Coordinates',
				},
				{
					name: 'visited',
					type: 'boolean',
					title: 'Visited ?',
				},
			],
		},
	]),
});
