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
       <div class="list-item" v-for="event in events" :key="event._id">
           <h2>{{event.name}}</h2>
           <button><i class="material-icons">edit</i></button>
           
       </div>
    </div>
</template>

<script>
import {getEvents} from '../api.js'
export default {
   name: 'Login',
   data(){
       return {
            user: {},
            events: []
       }
    },
    methods:{
        getUser(){
            // zrób zapytanie o usera i jego eventy

            getEvents().then(events=>{
                this.events = events
            })
            this.user = {name: 'Kermit Kowalski',
                debt: 100
            }
        }
    },
    mounted(){
        this.getUser()
    }
}

</script>

<style scoped>

    .main{
        --img-size: 80px;
        --img-size-small: 40px;
        --theme-color: #0066ff;
        --theme-color-lighter: #0091ff;
        --theme-color-gray: rgb(220, 220, 220);
        --theme-color-dark-gray: rgb(199, 199, 199);

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

    .list-item{
        display: grid;
        grid-template-columns: auto auto auto auto;
    }

    .list-item h2{
        grid-column: 1/2;
    }

    .list-item button{
        grid-column: 4/5;
        border: 2px solid var(--theme-color-lighter);
        border-radius: 50%;
        background: var(--theme-color-lighter);
        width: var(--img-size);
        height:var(--img-size);
    }
    .material-icons{
       font-size: 5em;
    }



   


</style>