<template>
  <div>
    <com-nav />
    <div id="mid">
      <div class="con">
        <div class="con_name">
          지나가던 관상가
        </div>
        <div class="con_message">
          안녕하세요 지나가던 관상가 입니다.
        </div>
      </div>

      <div class="con">
        <div class="con_name">
          인간지능
        </div>
        <div class="con_message">
          대세는 인간지능 외쳐 습습후후 습습후후 습습후후 습습후후 습습후후 습습후후 습습후후 습습후후 습습후후
        </div>
      </div>

      <div class="con">
        <div class="con_name">
          가나다라마바사 아자차카 타파하 가나다라마바사 아자차카 타파하 가나다라마바사 아자차카 타파하 가나다라마바사 아자차카 타파하 가나다라마바사 아자차카 타파하
        </div>
        <div class="con_message">
          안녕하세요 지나가던 관상가 입니다.
        </div>
      </div>

      <div class="con">
        <div class="con_name">
          인간지능
        </div>
        <div class="con_message">
          대세는 인간지능 외쳐 습습후후 습습후후 습습후후 습습후후 습습후후 습습후후 습습후후 습습후후 습습후후
        </div>
      </div>

      <div class="con">
        <div class="con_name">
          인간지능
        </div>
        <div class="con_message">
          대세는 인간지능 외쳐 습습후후 습습후후 습습후후 습습후후 습습후후 습습후후 습습후후 습습후후 습습후후
        </div>
      </div>

      <div class="con">
        <div class="con_name">
          인간지능
        </div>
        <div class="con_message">
          대세는 인간지능 외쳐 습습후후 습습후후 습습후후 습습후후 습습후후 습습후후 습습후후 습습후후 습습후후
        </div>
      </div>

      <div class="con">
        <div class="con_name">
          인간지능
        </div>
        <div class="con_message">
          대세는 인간지능 외쳐 습습후후 습습후후 습습후후 습습후후 습습후후 습습후후 습습후후 습습후후 습습후후
        </div>
      </div>
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
export default {
    name: 'ChatRoom',
    components: {
      'com-nav': nav
    },
    data () {
      return {
        name: '',
        message: '',
        list: []
      }
    },
    created(){
    },
    methods: {
      sendMessage (e) {
        if(e.keyCode === 13 && this.name !== '' && this.message !== ''){
          this.list.push({'name': this.name, 'message': this.message})
          this.message = ''
          var container = this.$el.querySelector("#mid");
          console.log(container.scrollHeight);
          container.scrollTop = container.scrollHeight
        }
      }
    }
}
</script>

<style scoped>

#mid {
  width: calc(100% - 40px);
  padding-top: 10px;
  padding-bottom: 10px;
  height: calc(100vh - 190px);
  background-color: #ececec;
  padding-left: 20px;
  padding-right: 20px;
  overflow:scroll;
}

.con {
  margin-bottom: 15px;
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
  line-height: 0px;
  font-size: 15px;
  border: 1px solid #ececec;
  border-top: none;
  box-sizing:inherit;
}

</style>
