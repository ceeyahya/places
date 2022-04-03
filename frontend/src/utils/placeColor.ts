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
			color = '#eab308';
			break;

		case 'Spot':
			color = '#f97316';
			break;

		default:
			break;
	}
	return color;
}
