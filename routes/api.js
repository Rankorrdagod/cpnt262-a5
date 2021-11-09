const express = require('express')
const app = express()

const travel = [
    {
        id: 1,
        title: 'New York Skyline',
        description: "Skyline of the beautiful big apple. What a view!",
        width: '480px',
        height: '300px',
        pathURL: 'image-1.jpg',
        linkURL: 'https://en.wikipedia.org/wiki/New_York_City',
        credit: 'Pixabay',
        creditURL: 'https://pixabay.com/photos/city-buildings-architecture-towers-336708/'
    },
    {
        id: 2,
        title: 'The Canals',
        description: "Look at the sunset over the canals.",
        width: '480px',
        height: '300px',
        pathURL: 'image-2.jpg',
        linkURL: 'https://en.wikipedia.org/wiki/Canal',
        credit: 'Pixabay',
        creditURL: 'https://pixabay.com/photos/canal-venice-italy-water-river-1209808/'
    },
    {
        id: 3,
        title: 'Santorini',
        description: "Villas overlooking the sea in Santorini",
        width: '480px',
        height: '300px',
        pathURL: 'image-3.jpg',
        linkURL: 'hhttps://en.wikipedia.org/wiki/Santorini',
        credit: 'Pixabay',
        creditURL: 'https://pixabay.com/photos/santorini-greece-buildings-houses-416136/'
    },
    {
        id: 4,
        title: 'Catacombs',
        description: "It may look creepy but its quite special!",
        width: '480px',
        height: '300px',
        pathURL: 'image-4.jpg',
        linkURL: 'https://en.wikipedia.org/wiki/Catacombs',
        credit: 'Pixabay',
        creditURL: 'https://pixabay.com/photos/vaulted-cellar-tunnel-arches-keller-247391/'
    },
    {
        id: 5,
        title: 'Mosque',
        description: "A Mosque used for prayer, prisitine white walls everywhere!",
        width: '480px',
        height: '300px',
        pathURL: 'image-5.jpg',
        linkURL: 'https://en.wikipedia.org/wiki/Mosque',
        credit: 'Pixabay',
        creditURL: 'https://pixabay.com/photos/mosque-abu-dhabi-to-travel-white-615415/'
    },
    {
        id: 6,
        title: 'City Street',
        description: "Twisting corridors in old Italian city!",
        width: '480px',
        height: '300px',
        pathURL: 'image-6.jpg',
        linkURL: 'https://en.wikipedia.org/wiki/Venice',
        credit: 'Pixabay',
        creditURL: 'https://pixabay.com/photos/street-architecture-city-road-3453557/'
    },
    {
        id: 7,
        title: 'Big Ben',
        description: "Big Ben looking out over the city.",
        width: '480px',
        height: '300px',
        pathURL: 'image-7.jpg',
        linkURL: 'https://en.wikipedia.org/wiki/Big_Ben',
        credit: 'Pixabay',
        creditURL: 'https://pixabay.com/photos/palace-london-parliament-big-ben-530055/'
    },
    {
        id: 8,
        title: 'Parthenon',
        description: "Old Roman architecture is still around today!",
        width: '480px',
        height: '300px',
        pathURL: 'image-8.jpg',
        linkURL: 'https://en.wikipedia.org/wiki/Parthenon',
        credit: 'Pixabay',
        creditURL: 'https://pixabay.com/photos/greece-parthenon-temple-ruins-1594689/'
    },
    {
        id: 9,
        title: 'Chicago',
        description: "The busy streets of Chicago, always moving!",
        width: '1000px',
        height: '600px',
        pathURL: 'image-9.jpg',
        linkURL: 'https://en.wikipedia.org/wiki/Chicago',
        credit: 'Pixabay',
        creditURL: 'https://pixabay.com/photos/pedestrians-crossing-traffic-1853552/'
    }
    ]
    module.exports = travel