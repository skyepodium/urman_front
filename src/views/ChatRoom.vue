<template>
  <div>
    <com-nav />
    <div id="mid">
      <div
        v-for="(val, index) in list"
        :key="index"
        class="con"
      >
        <div class="con_name">
          {{ val.name }}
        </div>
        <div class="con_message">
          {{ val.message }}
        </div>
      </div>          
    </div>
    <div id="bottom">
      <input
        v-model="name"
        type="text"
        placeholder="닉네임을 입력해주세요"
        class="bottom_nickname"
      >
      <input
        type="text"
        :value="message"
        placeholder="메세지를 입력해주세요"
        class="bottom_message"
        @input="message = $event.target.value"
        @keyup="sendMessage"
      >
    </div>
  </div>
</template>

<script>
import nav from '../components/nav.vue'
import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
    debug: true,
    connection: 'ws://localhost:3000',
}))

export default {
    name: 'ChatRoom',
    components: {
      'com-nav': nav
    },
    data () {
      return {
        name: '',
        message: '',
        list: [],
        prevDomHeight: 0,
        curDomHeight: 0,
        status: '',
        logs: []
      }
    },
    created () {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);      

      this.sockets.subscribe('chat', (data) => {
        let name = data.name
        let message = data.message
        this.list.push({'name': name, 'message': message})
        console.log(data)
      });   
    },
    mounted(){
      var container = this.$el.querySelector("#mid");
      console.log(container.scrollHeight);
      container.scrollTop = container.scrollHeight
    },
    beforeUpdate () {
      var container = this.$el.querySelector("#mid");
      this.prevDomHeight = container.scrollHeight
    },
    updated() {
      var container = this.$el.querySelector("#mid");
      this.curDomHeight = container.scrollHeight
      if(this.prevDomHeight !== this.curDomHeight){
        console.log('updated')
        container.scrollTop = container.scrollHeight
      }
    },
    methods: {
      sendMessage (e) {
        if(e.keyCode === 13 && this.name !== '' && this.message !== ''){
          let data = JSON.stringify({name: this.name, message: this.message})
          this.$socket.emit('chat', data)
          this.message = ''
        }
      }
    }
}
</script>

<style scoped>

#mid {
  width: calc(100% - 40px);
  padding-top: 20px;
  padding-bottom: 20px;
  height: calc(100vh - 220px);
  height: calc((var(--vh, 1vh) * 100) - 220px);  
  background-color: #ececec;
  padding-left: 20px;
  padding-right: 20px;
  overflow:scroll;
  margin-left:auto;
  margin-right:auto;
}

.con {
  margin-bottom: 20px;
}

.con_name {
  width: 100%;
  line-height: 20px;
  margin-bottom: 10px;
  font-weight: 600;
  color:steelblue;
}

.con_message {
  width: 100%;
  line-height: 20px;
}

#bottom{
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 130px;
  background-color: #ececec;
  box-sizing: initial;
  /* left: 50%; */
}

.bottom_nickname {
  display: block;
  width: calc(100% - 40px);
  height: 30px;
  font-size: 15px;
  line-height: 30px;
  padding-left: 20px;
  padding-right: 20px;
  border: 1px solid #ececec;
  box-sizing:inherit;
}

.bottom_message {
  display: block;
  width: calc(100% - 40px);
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  height: 80px;
  font-size: 15px;
  border: 1px solid #ececec;
  border-top: none;
  box-sizing:inherit;
}

@media (min-width: 640px) {
  #mid {
    width: 600px;
    height: calc(100vh - 250px);
    height: 550px;
  }

  #bottom {
    position:relative;
    width: 640px;
    /* left:50%;
    margin-left:-320px; */
    box-sizing: initial;
    margin-left:auto;
    margin-right:auto;
    margin-bottom: 50px;
  }
}

</style>
