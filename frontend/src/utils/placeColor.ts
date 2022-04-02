export function placeColor(placeType: string) {
	let color = '';
	switch (placeType) {
		case 'Monument':
			color = '#6366f1';
			break;

		case 'Park':
			color = '#16a34a';
			break;

		case 'Restaurant':
			color = '#ef4444';
			break;

		case 'Touristic Attraction':
			color = '#f97316';
			break;

		default:
			break;
	}
	return color;
}
