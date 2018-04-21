<template>
  <div>
      <div class="about-event">
          <div class="event-info">
             <h1>{{event.name}}</h1>
             <p>{{event.description}}</p>
             <h2>Łączny koszt: {{event.dept}} PLN</h2> 
          </div>
          <div class="party-members">
              <p v-for="participant in participants" :key="participants._id"></p>
          </div>
      </div>
      <div v-for="expense in event.expenses" :key="event.expenses._id" class="expense">
          <div>
              <h2>{{expense.name}}</h2>
              <h3>Cena: {{expense.cost}} PLN</h3>
          </div>
          <div>
              <div ></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            event: {},
            participants:[],
            expenses: []
        }
    },
    methods:{
        getEvent(){
            let mock = {
                _id:'asd',
                name:'Impra u pszemka',
                description: 'najlepsza impreza po tej stronie chujmiętek',
                creation:'29 luty',
                dept: 48,
                participants:[],
                expenses:[
                    {
                        _id:'1',
                        name: 'hop-cola',
                        description: 'najlepsza cola bo tania',
                        cost: 3
                    },
                    {
                        _id:'2',
                        name: 'pizza',
                        description: 'najlepsza pizza bo tłusta',
                        cost: 45
                    }
                ]
            }
            this.event = mock;
            this.participants = [
                {name: 'Kermit Kowalski',
                debt: 100},
                {name: 'Kermit Kowalski',
                debt: 100}
                ];
        }
    },
    mounted(){
        this.getEvent()
    }
}
</script>

<style scoped>
    .about-event, .expense{
        border: 1px solid black;
    }
</style>
