function getimg() {
  const recentUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ca370d51a054836007519a00ff4ce59e&per_page=10&format=json&nojsoncallback=1';

  fetch(recentUrl)
    .then(response => response.json())
    .then(data => {
      const photos = data.photos.photo;
      const gallery = document.getElementById("gallery");

      photos.forEach(photo => {
        const sizeUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=ca370d51a054836007519a00ff4ce59e&photo_id=${photo.id}&format=json&nojsoncallback=1`;

        fetch(sizeUrl)
          .then(response => response.json())
          .then(sizeData => {
            const sizes = sizeData.sizes.size;
            const preferredSize = sizes.find(s => s.label === "Medium") || sizes[sizes.length - 1];

            const img = document.createElement("img");
            img.src = preferredSize.source;
            img.alt = photo.title;
            gallery.appendChild(img);
          });
      });
    });
}