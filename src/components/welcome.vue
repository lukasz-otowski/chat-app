<template>
  <div class="welcome container">
    <div class="card">
        <div class="card-content center-align">
            <h2 class="teal-text">Welcome</h2>
            <form @submit.prevent="enterChat">
                <label for="name">Enter your name:</label>
                <input type="text" name="name" v-model="name">
                <!--show message only when 'feedback' is true-->
                <p v-if="feedback" class="red-text">{{feedback}}</p>
                <button class="btn teal">Enter chat</button>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Welcome',
        data() {
            return {
                name:null,
                feedback:null
            }
        },
        methods:{
            //onlick event in main screen
            enterChat(){
                if(this.name){
                    //send values via router
                    this.$router.push({name:'chat', params:{name: this.name} })
                }else{
                    this.feedback = 'You must enter a name to join'
                }
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .welcome{
        max-width: 600px;
        margin-top: 100px;
    }
    .welcome h2{
        font-size: 3em;
    }
    .welcome button{
        margin: 30px auto;
    }
</style>
