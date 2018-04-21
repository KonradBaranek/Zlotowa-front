<template>
    <div class="login">
        <h1>Zaloguj się przez google</h1>
        <div class="google-btn" v-on:click="authenticate">
            <div class="google-icon-wrapper">
                <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
            </div>
            <p class="btn-text"><b>Sign in with google</b></p>
        </div>
    </div>
</template>

<script>
import router from '../router'
export default {
   name: 'Login',
   data(){
       return {
           accessToken: ''
       }
   },
   methods:{
       
        authenticate() {
            router.push('/')
            // window.authenticateCallback = function(token) {
            //     this.accessToken = token;
            // };
            // window.open('http://100.64.12.65:3000/api/auth/google/start');
            // console.log(this.accessToken);
        },
        greet(){
            alert('hello');
        }
       
   }
}
</script>

<style scoped>
    .login{
        --google-blue: #4285f4;
        --button-active-blue: #1669F2;
        font-family: 'Roboto', 'sans serif';
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
   .google-btn {
        width: 184px;
        height: 42px;
        background-color: var(--google-blue);
        border-radius: 2px;
        box-shadow: 0 3px 4px 0 rgba(0,0,0,.25);
    }
    .google-icon-wrapper {
        position: absolute;
        margin-top: 1px;
        margin-left: 1px;
        width: 40px;
        height: 40px;
        border-radius: 2px;
        background-color: white;
    }
  .google-icon {
    position: absolute;
    margin-top: 11px;
    margin-left: 11px;
    width: 18px;
    height: 18px;
  }
  .btn-text {
    float: right;
    margin: 11px 11px 0 0;
    color: white;
    font-size: 14px;
    letter-spacing: 0.2px;
    font-family: "Roboto";
  }
  .google-btn:hover {
    box-shadow: 0 0 6px var(--google-blue);
  }
  .google-btn:active {
    background: var(--button-active-blue);
  
}
</style>
