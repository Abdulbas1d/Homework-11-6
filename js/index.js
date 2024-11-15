const button = document.querySelector('#getPhotos');
const container = document.querySelector('#container');

button && button.addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/photos', {
        method: "GET"
    })

        .then(response => {
            if (response.status == 200) {
                return response.json()
            }
        })

        .then(data => {
            container.innerHTML = '';
            for (let i = 0; i < 10; i++) {
                const content = data[i];
                const contentElement = document.createElement('div');
                contentElement.innerHTML = `
                    <h3>${content.title}</h3>
                    <img src="${content.thumbnailUrl}" alt="">
                `
                container.appendChild(contentElement)
            }
        })
        
        .catch(error => {
            console.error(error);
        });
});