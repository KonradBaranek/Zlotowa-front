const users = [{
    name: 'Szymon',
    img: 'https://ih1.redbubble.net/image.96844397.1893/flat,800x800,070,f.jpg',
}, {
    name: 'Kszysztof Chouofczyc',
    img: 'https://lh3.googleusercontent.com/-qQqP36I2jMI/Vk_NYyk_ZxI/AAAAAAAAAQY/2jWU39fV6s4/w800-h800/minecraft_render___cow_by_danixoldier-d6t90b4.png',
}, {
    name: 'Lucynka',
    img: 'https://pbs.twimg.com/profile_images/464985549866950657/FPO5aj18.jpeg'
}]

const eventsMock = [
    {  
        _id: 0,
        name:'imprezka u przemka', 
        participants: users,
        expenses:[],
        cost: 123
    },
     {  
        _id: 1,
        name:'urodziny lucynki', 
        participants: users,
        expenses:[],
        cost: 123
    },
    {   
        _id: 2,
        name:'bal z okazji 100 lat oswojenia dzikiej pokrzywy', 
        participants: users,
        expenses:[],
        cost: 123
    }
]

export function getEvents () {
    return new Promise((resolve, reject) => {
        resolve(eventsMock)
    } )
}
