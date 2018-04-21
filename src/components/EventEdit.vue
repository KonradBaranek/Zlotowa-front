<template>
  <div>
      <div class="about-event">
          <div class="event-info">
             <h1>{{event.name}}</h1>
             <p>{{event.description}}</p>
             <h2>Łączna cena: {{event.dept}}</h2> 
          </div>
          <div class="party-members">

          </div>
      </div>
      <div class="expense">

      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            event:{
                name:'Impra u pszemka',
                description: 'najlepsza impreza po tej stronie chujmiętek',
                creation:'29 luty',
                dept: 48,
                participants:[],
                expenses:[
                    {
                        name: 'hop-cola',
                        description: 'najlepsza cola bo tania',
                        cost: 3
                    },
                    {
                        name: 'pizza',
                        description: 'najlepsza pizza bo tłusta',
                        cost: 45
                    }
                ]
            }
        }
    }
}
</script>

<style scoped>

</style>
