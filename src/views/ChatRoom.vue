<template>
  <div>
    <com-nav />
    <div id="mid">
      <div class="count">
        인원 {{ personCnt }}명
      </div>
      <div
        v-for="(val, index) in list"
        :key="index"
        class="con"
        :style="val.name===name ? 'text-align:right;' : 'text-align:left;'"
      >
        <div class="con_name">
          {{ val.name }}
        </div>
        <div class="con_message">
          <span>
            {{ val.message }}
          </span>
        </div>
      </div>
      <div
        v-show="isTyping"
        class="typing"
      >
        상대방이 메시지를 입력중입니다...
      </div>           
    </div>
    <div id="bottom">
      <input
        v-model="name"
        type="text"
        placeholder="닉네임을 입력해주세요"
        class="bottom_nickname"
      >
      <div id="bottom_content">
        <input
          type="text"
          :value="message"
          placeholder="메세지를 입력해주세요"
          class="bottom_message"
          @input="message = $event.target.value"
          @keyup.enter="sendMessage"
        >
        <button
          class="bottom_btn"
          :disabled="message == ''"
          @click="sendMessage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import nav from '../components/nav.vue'

export default {
    name: 'ChatRoom',
    components: {
      'com-nav': nav
    },
    data () {
      return {
        personCnt: 0,
        name: '',
        message: '',
        list: [],
        prevDomHeight: 0,
        curDomHeight: 0,
        status: '',
        logs: [],
        isTyping: false,
      }
    },
    watch: {
      message (val) {
        if(val.length > 0){
          this.$socket.emit('type')
        }
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

      // this.sockets.subscribe('enter', () => {
      //   console.log('새로운 분이 입장하셨습니다.')
      //   this.list.push({'name': '', 'message': '새로운 분이 입장하셨습니다.'})
      // });

      this.sockets.subscribe('personCnt', (data) => {
        this.personCnt = data
      });

      this.sockets.subscribe('otherTyping', () => {
        this.isTyping = true;
        var vm = this
        window.setTimeout(() => {
          vm.isTyping = false
        }, 2000);
      });      

      console.log('this.socket', this.sockets)
    },
    mounted(){
      this.$socket.emit('returnPersonCnt')
      var container = this.$el.querySelector("#mid");
      console.log(container.scrollHeight);
      container.scrollTop = container.scrollHeight

      // this.$socket.emit('newenter')
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
      sendMessage () {
        if(this.name !== '' && this.message !== ''){
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
  height: calc((var(--vh, 1vh) * 100) - 220px);  
  background-color: #ececec;
  padding-left: 20px;
  padding-right: 20px;
  overflow:scroll;
  margin-left:auto;
  margin-right:auto;
  position:relative;
}
.count {
  width: 100px;
  position: absolute;
  top:0;
  right:0;
  background: rgba(255, 0, 140, 0.3);
  height: 30px;
  line-height: 30px;
  text-align: center;
}
.typing{
  width: 300px;
  height: 40px;
  line-height: 40px;
  position: absolute;
  bottom:0;
  color: rgba(0, 0, 0, 0.3);
  font-size: 15px;
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

.con_message span {
  background-color: aquamarine;
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

#bottom_content {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #ececec;
  box-sizing: initial;
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
  width: calc(80% - 40px);
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  height: 80px;
  font-size: 15px;
  border: 1px solid #ececec;
  border-top: none;
  box-sizing:inherit;
  float: left;
}

.bottom_btn {
  display: block;
  width: calc(18% - 40px);
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  height: 80px;
  font-size: 15px;
  border: 1px solid #ececec;
  border-top: none;
  box-sizing:inherit;
  float: right;
  background-color: #00cb71;
}

.bottom_btn:disabled {
  background-color: #8ECCB1;
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
