function addRandomAlbums () {
    const releasesGrid = document.getElementById('releases-grid');

    for (let i = 0; i < 3; i++) {
        const newAlbum = document.createElement('li');
        newAlbum.innerHTML = `https://loremflickr.com/480/480/cd,album,cover?random=1`
    }

}