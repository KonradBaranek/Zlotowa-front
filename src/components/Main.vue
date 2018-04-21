<template>
    <div class="main">
       <div class="user-info">
           <img class="img" src="../assets/user.png" alt="Zdjęcie użytkownika">
           <div class="username-wrap">
            <h1 class="username">{{user.name}}</h1>
            <p class="debt">Dług: {{user.debt}} PLN</p>
           </div>
       </div>
       <div class="blank-grid-item">

       </div>
       <div class="options">
           <button><i class="material-icons">add</i></button>
           <button><i class="material-icons">info</i></button>
           <button><i class="material-icons">settings</i></button>
       </div>
       <div class="description">
           <h2>Twoje wydarzenia:</h2>
       </div>
       <div class="list-item" v-for="event in events" :key="event._id">
           <h2>{{event.name}}</h2>
           <h3>{{ event.cost }}</h3>
           <div class="user-small" v-for="user in event.participants" :key="user._id">
               <img class="small-img" :src="user.img" alt="">
               <p class="user">{{ user.name }}</p>
           </div>
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
    --img-size: 200px;
    --img-size-small: 100px;
    --theme-color: #d05a00;
    --theme-color-lighter: #da8920;
    --theme-color-gray: rgb(220, 220, 220);
    --theme-color-dark-gray: rgb(199, 199, 199);
}


.img {
    border-radius: 50%;
    height: var(--img-size);
}

.user-info {
    display: flex;
    padding-bottom: 30px;
    border-bottom: 3px solid black;
}

.username-wrap {
    margin-left: 40px;
}

.username {
    font-size: 3rem;
}

.debt {
    font-size: 2rem;
}

.options {
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;
}

.list-item {
    border-top: 2px solid black;
    padding: 10px;
}

.user-small {
    display: flex;
    font-size: 1.5rem;
}

.small-img {
    height: var(--img-size-small);
    border-radius: 50%;
    margin-right: 10px;
}
</style>