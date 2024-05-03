const places = [
    {
        "name": "LuLu International Shopping Mall",
        "point": { "latitude": 10.0274, "longitude": 76.3086 },
        "image": [
            { "link": "LuLu International Shopping Mall 1.jpg", "title": "LuLu International Shopping Mall 1" },
            { "link": "LuLu International Shopping Mall 2.jpg", "title": "LuLu International Shopping Mall 2" }
        ]
    },
    {
        "name": "Santa Cruz Cathedral Basilica",
        "point": { "latitude": 9.9660, "longitude": 76.2428 },
        "image": [
            { "link": "Santa Cruz Cathedral Basilica 1.jpg", "title": "Santa Cruz Cathedral Basilica 1" },
            { "link": "Santa Cruz Cathedral Basilica 2.jpg", "title": "Santa Cruz Cathedral Basilica 2" }
        ]
    },
    {
        "name": "Mattancherry Palace",
        "point": { "latitude": 9.9574, "longitude": 76.2590 },
        "image": [
            { "link": "Mattancherry Palace 1.jpg", "title": "Mattancherry Palace 1" },
            { "link": "Mattancherry Palace 2.jpg", "title": "Mattancherry Palace 2" }
        ]
    },
    {
        "name": "Kerala Folklore Museum",
        "point": { "latitude": 9.9386, "longitude": 76.2595 },
        "image": [
            { "link": "Kerala Folklore Museum 1.jpg", "title": "Kerala Folklore Museum 1" },
            { "link": "Kerala Folklore Museum 2.jpg", "title": "Kerala Folklore Museum 2" }
        ]
    },
    {
        "name": "Paradesi Synagogue",
        "point": { "latitude": 9.9579, "longitude": 76.2598 },
        "image": [
            { "link": "Paradesi Synagogue 1.jpg", "title": "Paradesi Synagogue 1" },
            { "link": "Paradesi Synagogue 2.jpg", "title": "Paradesi Synagogue 2" }
        ]
    },
    {
        "name": "Marine Drive, Kochi",
        "point": { "latitude": 9.9702, "longitude": 76.2847 },
        "image": [
            { "link": "Marine Drive, Kochi 1.jpg", "title": "Marine Drive, Kochi 1" },
            { "link": "Marine Drive, Kochi 2.jpg", "title": "Marine Drive, Kochi 2" }
        ]
    },
    {
        "name": "Chottanikkara Bhagavathy Temple",
        "point": { "latitude": 9.9345, "longitude": 76.3881 },
        "image": [
            { "link": "Chottanikkara Bhagavathy Temple 1.jpg", "title": "Chottanikkara Bhagavathy Temple 1" },
            { "link": "Chottanikkara Bhagavathy Temple 2.jpg", "title": "Chottanikkara Bhagavathy Temple 2" }
        ]
    },
    {
        "name": "Wonderla Amusement Park, Kochi",
        "point": { "latitude": 10.0553, "longitude": 76.3901 },
        "image": [
            { "link": "Wonderla Amusement Park, Kochi 1.jpg", "title": "Wonderla Amusement Park, Kochi 1" },
            { "link": "Wonderla Amusement Park, Kochi 2.jpg", "title": "Wonderla Amusement Park, Kochi 2" }
        ]
    },
    {
        "name": "Hill Palace Museum",
        "point": { "latitude": 9.9397, "longitude": 76.3437 },
        "image": [
            { "link": "Hill Palace Museum 1.jpg", "title": "Hill Palace Museum 1" },
            { "link": "Hill Palace Museum 2.jpg", "title": "Hill Palace Museum 2" }
        ]
    },
    {
        "name": "Cherai Beach",
        "point": { "latitude": 10.1456, "longitude": 76.1816 },
        "image": [
            { "link": "Cherai Beach 1.jpg", "title": "Cherai Beach 1" },
            { "link": "Cherai Beach 2.jpg", "title": "Cherai Beach 2" }
        ]
    },
    {
        "name": "Kerala Kathakali Centre",
        "point": { "latitude": 9.9668, "longitude": 76.2431 },
        "image": [
            { "link": "Kerala Kathakali Centre 1.jpg", "title": "Kerala Kathakali Centre 1" },
            { "link": "Kerala Kathakali Centre 2.jpg", "title": "Kerala Kathakali Centre 2" }
        ]
    },
    {
        "name": "Bolgatty Palace and Island Resort",
        "point": { "latitude": 9.9871, "longitude": 76.2756 },
        "image": [
            { "link": "Bolgatty Palace and Island Resort 1.jpg", "title": "Bolgatty Palace and Island Resort 1" },
            { "link": "Bolgatty Palace and Island Resort 2.jpg", "title": "Bolgatty Palace and Island Resort 2" }
        ]
    },
    {
        "name": "Ernakulam Shiva Temple",
        "point": { "latitude": 9.9816, "longitude": 76.2847 },
        "image": [
            { "link": "Ernakulam Shiva Temple 1.jpg", "title": "Ernakulam Shiva Temple 1" },
            { "link": "Ernakulam Shiva Temple 2.jpg", "title": "Ernakulam Shiva Temple 2" }
        ]
    },
    {
        "name": "Jew Town",
        "point": { "latitude": 9.9582, "longitude": 76.2606 },
        "image": [
            { "link": "Jew Town 1.jpg", "title": "Jew Town 1" },
            { "link": "Jew Town 2.jpg", "title": "Jew Town 2" }
        ]
    },
    {
        "name": "National Shrine Basilica of Our Lady of Ransom, Vallarpadam",
        "point": { "latitude": 9.9950, "longitude": 76.2673 },
        "image": [
            { "link": "National Shrine Basilica of Our Lady of Ransom, Vallarpadam 1.jpg", "title": "National Shrine Basilica of Our Lady of Ransom, Vallarpadam 1" },
            { "link": "National Shrine Basilica of Our Lady of Ransom, Vallarpadam 2.jpg", "title": "National Shrine Basilica of Our Lady of Ransom, Vallarpadam 2" }
        ]
    }
]

const Kochi = [9.9312, 76.2673];
const map = L.map('map').setView(Kochi, 8);
map.zoomControl.setPosition('topleft');
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution = '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const baseLayer = L.tileLayer(tileUrl, {
    attribution
});
baseLayer.addTo(map);

const geo_json_style = {
    "color": "black",
    "weight": 2,
    "opacity": 1
};
const geo_json_object = L.geoJSON(features, {
    style: geo_json_style
});
geo_json_object.addTo(map);

const ul = document.getElementById('menu');
places.forEach(function (place) {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.innerHTML = place.name;
    link.setAttribute('title', place.name);
    link.setAttribute('href', '#');
    li.appendChild(link)
    ul.appendChild(li);

    link.addEventListener('click', () => {
        fly_to_place(place);
    });

    const marking = L.marker(
        [place.point.latitude, place.point.longitude],
        { title: place.name, }
    ).addTo(map);
    marking.on('click', function (e) {
        var modal = document.createElement('div');
        modal.id = 'modal-box';
        modal.className = 'modal';
        var images = "";
        place.image.forEach(function (img) {
            images = images + `
            <br>
            <div class="image-box">
                <img src="${img.link}" alt="${img.title}">
                <div class="container">
                    <p>${img.title}</p>
                </div>
            </div>
            `;
        });

        modal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="this.parentElement.parentElement.style.display='none';">&times;</span>
            ${images}
        </div>
        `;
        document.body.appendChild(modal);
    });
});

function serach_place() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('input-box');
    filter = input.value.toUpperCase();
    ul = document.getElementById("menu");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function fly_to_place(place) {
    const lat = place.point.latitude;
    const lng = place.point.longitude;
    map.flyTo([lat, lng], 14, {
        duration: 3
    });
    setTimeout(() => {
        L.popup({ closeButton: true, offset: L.point(0, -8) })
            .setLatLng([lat, lng])
            .setContent(place.name)
            .openOn(map);
    }, 3000);
}