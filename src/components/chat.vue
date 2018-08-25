<template>
    <div class="chat container">
        <div class="card">
        <h2 class="center teal-text">Brain chat</h2>
            <div class="card-content">
                <ul class="messages" v-chat-scroll >
                    <li v-for="message in messages" :key="message.id">
                        <span class="teal-text">{{message.name}}</span>
                        <span class="grey-text text-darken-3">{{message.content}}</span>
                        <span class="grey-text time">{{message.timestamp}}</span>
                    </li>
                </ul>
            </div>
            <div class="card-action">
                <newMessage :name="name" />
            </div>
        </div>
    </div>
</template>

<script>
import newMessage from '@/components/newMessage'
import db from '@/firebase/init'
import moment from 'moment'
    
export default {
    name: 'chat',
    props: ['name'],
    components:{
        newMessage
    },
    data() {
        return {
            messages:[]
        }
    },
    created(){
        let ref = db.collection('messages').orderBy('timestamp')
        
        ref.onSnapshot(snapshot => {
            snapshot.docChanges.forEach(change => {
                if(change.type == 'added' ){
                    let doc = change.doc
                    this.messages.push({
                        id: doc.id,
                        name: doc.data().name,
                        content: doc.data().content,
                        timestamp: moment(doc.data().timestamp).format('lll')
                    })
                }
            })
        })
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
        font-size: .9em;
    }
    .messages {
        max-height: 300px;
        overflow: auto;
    }
    .messages::-webkit-scrollbar {
        width: 3px;
    }
    .messages::-webkit-scrollbar-track {
        background: #ddd;
    }
    .messages::-webkit-scrollbar-thumb {
        background: #aaa;
    }

</style>
