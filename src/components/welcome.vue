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
            <div class="container logo-choice z-depth-5">
                <h3>Choice logo</h3>
                <ul class="row">
                    <li class="col push-s2 s2 logo">
                        <img class="circle responsive-img" width="64" src="../assets/chat-logo-1.jpg" alt="logo">
                    </li>
                    <li class="col push-s2 s2 logo">
                        <img class="circle responsive-img" width="64" src="../assets/chat-logo-2.jpg" alt="logo">
                    </li>
                    <li class="col push-s2 s2 logo">
                        <img class="circle responsive-img" width="64" src="../assets/chat-logo-3.jpg" alt="logo">
                    </li>
                    <li class="col push-s2 s2 logo">
                        <img class="circle responsive-img" width="64" src="../assets/chat-logo-4.jpg" alt="logo">
                    </li>
                </ul>
            </div>
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
    }/*
    .welcome .logo-choice .logo:nth-child(odd){
        text-align: right;
    }
    .welcome .logo-choice .logo:nth-child(even){
        text-align: left;
    }*/
    .welcome .logo-choice {
        width:80%;
/*        border: 3px solid #124770;*/
        background-color: #00142c;
        border-radius: 20px 20px 50% 50% / 20px 20px 35% 35%;
        padding-bottom: 20px;
    }
    .welcome .logo-choice .logo:hover {
        cursor: pointer
    }
</style>
