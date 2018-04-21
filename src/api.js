const eventsMock = [
    {  
        _id: 0,
        name:'impra u przemka', 
        participants: [],
        expenses:[],
        cost: 123
    },
     {  
        _id: 1,
        name:'impra u kondzia', 
        participants: [],
        expenses:[],
        cost: 123
    },
    {   
        _id: 2,
        name:'impra u konrada', 
        participants: [],
        expenses:[],
        cost: 123
    }
]

export function getEvents () {
    return new Promise((resolve, reject) => {
        resolve(eventsMock)
    } )
}
