function toggleMode() {
	const html = document.documentElement;
	const img = document.querySelector('#profile img');

	const imageDark = 'https://avatars.githubusercontent.com/u/50345399?v=4';
	const imageLight = 'https://media.licdn.com/dms/image/C4D03AQF9l20PGST0MA/profile-displayphoto-shrink_800_800/0/1657730635241?e=2147483647&v=beta&t=_ix16McyXBu76LwiTX9GCenETVwZG0aTwHk0YfjSkUY';

	const isLight = html.classList.toggle('light');

	if (isLight) img.setAttribute('src', imageLight);
	else img.setAttribute('src', imageDark);
}
