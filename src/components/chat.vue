<template>
    <div class="chat container">
        <div class="card">
        <h2 class="center teal-text">Brain chat</h2>
            <div class="card-content">
                <ul class="messages">
                    <li>
                        <span class="teal-text">Name</span>
                        <span class="grey-text text-darken-3">message</span>
                        <span class="grey-text time">time</span>
                    </li>
                </ul>
            </div>
            <div class="card-action">
                <input type="text">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'chat',
        props: ['name'],
        data() {
            return {

            }
        }
    }

</script>

<style>
    .chat {
        margin-top: 40px;
    }
    .chat .card {
        border: 3px solid #124770;
        -webkit-box-shadow: 0 0 10px 10px #0068b9;
        box-shadow: 0 0 10px 10px #0068b9;
    }
    .chat h2{
        font-size: 2.6em;
        padding-top: 20px;
    }
    .chat span{
        font-size: 1.4em;
    }
    .chat .time{
        display: block;
        font-size: 1.2em;
    }

</style>
