const API = 'https://youtube-search-results.p.rapidapi.com/youtube-search/?q=Javascript'

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4fda4b8621msh4fe7fee49ad6920p16e88djsn51f387b4866e',
		'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
	}
};

async function fetchData(urlAPI) {
    const response = await fetch(urlAPI, options);
    const data = await response.json();
    return data
} 

(async () => {
    try {
        const videos = await fetchData(API);
        console.log(videos.items)
        let view = `
        ${videos.items.map(video =>
            `
        <div class="group relative">
            <div 
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <a href="${video.url}" target="_blank">
                <img src="${video.bestThumbnail?.url}" alt="${video.title}" class="w-full">
                </a>
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.title}
            </h3>
            </div>
        </div>
        `).slice(0,4).join('')}
        `; 
        content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();