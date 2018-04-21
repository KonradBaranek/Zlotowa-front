<template>
    <div class="main">
       <div class="user-info">
           <img src="../assets/user.png" alt="Zdjęcie użytkownika">
           <h2>{{user.name}}</h2>
           <h2>Dług: {{user.debt}} PLN</h2>
       </div>
       <div class="blank-grid-item">

       </div>
       <div class="options">
           <button>Dodaj wydarzenie</button>
           <button>info</button>
           <button>opcje</button>
       </div>
       <div class="description">
           <h2>Twoje wydarzenia:</h2>
       </div>
       <div class="list-item" v-for="event in events" :key="event.id">
           <h2>{{event.name}}</h2>
       </div>
    </div>
</template>

<script>
export default {
   name: 'Login',
   data(){
       return {
            user: {name: 'Kermit Kowalski',
                debt: 100
            },
            events: [
                        {  
                            id: 0,
                            name:'impra u przemka', 
                            participants: [],
                            expenses:[],
                            cost: 123
                        },
                         {  
                            id: 1,
                            name:'impra u kondzia', 
                            participants: [],
                            expenses:[],
                            cost: 123
                        },
                        {   
                            id: 2,
                            name:'impra u konrada', 
                            participants: [],
                            expenses:[],
                            cost: 123
                        }
                    ]
       }
   }
}
</script>

<style scoped>

    .main{
        --img-size: 80px;
        --img-size-small: 40px;
        --theme-color: #0066ff;
        --theme-color-gray: #ACACAC;
        --theme-color-dark-gray: #707070;

        display: grid;
        grid-template-columns: auto auto auto;
    }

    .user-info, .blank-grid-item, .options{
        background: var(--theme-color);
    }

    .user-info{
        grid-column: 1/2;
    }

    .user-info img{
        height: var(--img-size);
        border-radius: 50%;
    }
    
    .description, .list-item{
        grid-column: 1/4;
    }

    .description{
        text-align: center;
        text-transform: uppercase;
    }

    .list-item:nth-child(odd){
        background: var(--theme-color-gray);
        color: white;
        text-transform: uppercase;
    }

    .list-item:nth-child(even){
        background: var(--theme-color-dark-gray);
        color: white;
        text-transform: uppercase;
    }



   


</style>