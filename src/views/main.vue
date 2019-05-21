<template>
  <div>
    <!-- <div id="nav">
      <div class="nav_inner">
        <div
          class="nav_title"
          @click="$router.push({'name': 'main'})"
        >
          urman
        </div>
        <div
          class="nav_auth"
          @click="warn"
        >
          로그인
        </div>
      </div>
    </div> -->
    <com-nav />
    <div id="top">
      <iframe
        width="100%"
        src="https://www.youtube.com/embed/xamJq1OrQ-M"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
    <div id="mid">
      <div class="mid_title">
        채팅방 목록 
      </div>
      <div class="mid_list">
        <div
          class="room"
          @click="$router.push({'name':'ChatRoom'})"
        >
          <div
            class="room_image"
            style="background-image:url('https://cdn.lezhin.com/v2/comics/6750118146342912/images/wide?updated=1557406458513&width=688');"
          />
          <div class="room_info">
            <div class="room_title">
              항상 열려있는 익명 게시판
            </div>
            <div class="room_subinfo">
              <div class="room_auth">
                습습후후
              </div>
              <div class="room_genre">
                전체 게시판
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="room">
          <div
            class="room_image"
            style="background-image:url('https://upload.wikimedia.org/wikipedia/ko/9/92/%EC%96%B4%EB%B2%A4%EC%A0%B8%EC%8A%A4_%EC%9D%B8%ED%94%BC%EB%8B%88%ED%8B%B0_%EC%9B%8C.jpg');"
          />
          <div class="room_info">
            <div class="room_title">
              어디서든 신경안쓰고 습습후후
            </div>
            <div class="room_subinfo">
              <div class="room_auth">
                사유
              </div>
              <div class="room_genre">
                익명게시판
              </div>
            </div>
          </div>
        </div>

        <div class="room">
          <div
            class="room_image"
            style="background-image:url('https://cdn.lezhin.com/v2/comics/6750118146342912/images/wide?updated=1557406458513&width=688');"
          />
          <div class="room_info">
            <div class="room_title">
              어디서든 신경안쓰고 습습후후
            </div>
            <div class="room_subinfo">
              <div class="room_auth">
                사유
              </div>
              <div class="room_genre">
                익명게시판
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
    <div id="bottom">
      <div class="bottom_word">
        언제나 어디서나 I am urman~
      </div>
      <div class="bottom_writter">
        prod.by SKYEPODUM
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import nav from '../components/nav.vue'
// import Vue from 'vue'
// import VueSocketIO from 'vue-socket.io'
// import { store } from '../store/index.js'

// Vue.use(new VueSocketIO({
//     debug: true,
//     connection: 'http://localhost:3000',
//     vuex: {
//         store,
//         actionPrefix: 'SOCKET_',
//         mutationPrefix: 'SOCKET_'
//     }
// }))

export default {
    components: {
        'com-nav': nav
    },
    created() {
        let uri = 'http://localhost:3000/'
        // let uri = 'http://localhost:8000/api'
        axios.get(uri)
        .then((response) => {
            console.log(response)
        })
        .catch((error) => {
            console.log(error)
        })
    }
}
</script>

<style scoped>
#nav {
    width: 100%;
}

.nav_inner {
    width: calc(100% - 40px);
    margin-left:auto;
    margin-right: auto;
    height: 50px;
}

.nav_title {
    line-height: 50px;
    font-size: 30px;
    float:left;
    color: #00cb71;
    font-family: 'Baloo Bhai', cursive;
}

.nav_auth {
    float: right;
    line-height: 40px;
    border: 1px solid #00cb71;
    padding-left: 10px;
    padding-right: 10px;
    height: 40px;
    margin-top: 5px;
    box-sizing: border-box;
    border-radius: 5px;
    color:white;
    background-color: #00cb71;
    font-weight: 500;
    font-size: 15px;
}

#mid {
    width: calc(100% - 16px);    
    margin-left: auto;
    margin-right: auto;
}

.mid_title {
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
}

.mid_list {
    width: 100%;
}

.room {
    width: 100%;
    margin-bottom: 16px;
}

.room_image { 
    border-radius: 2px;
    width: 100%;
    height: 180px;
    overflow: hidden;
    background-position: center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -ms-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

.room_info{
    padding: 0 0 8px 4px;
}

.room_title {
    margin-top: 8px;
    width: 100%;
    height: 25px;
    line-height: 25px;
    color: #000;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 400;
    font-size: 16px;
}

.room_subinfo {
    width: 100%;
    height: 16px;
}

.room_auth {
    float: left;
    max-width: 40%;
    padding-right: 8px;
    margin-top: 4px;
    line-height: 16px;
    font-size: 12px;
    color: #585858;
}

.room_genre {
    float: left;
    max-width: 40%;
    padding-right: 8px;
    margin-top: 4px;
    line-height: 16px;
    font-size: 12px;    
    color: #acb4bf;
}

#bottom {
    padding-top: 30px;
    width: 100%;
    height: 150px;
    background-color: #f7f8f9;
    color: #727272;
}

.bottom_word{
    width: 320px;
    margin-left:auto;
    margin-right:auto;
    text-align: center;
    font-size: 23px;
}

.bottom_writter {
    width: 320px;
    margin-left:auto;
    margin-right:auto;
    text-align: center;
    margin-top: 25px;
    font-size: 15px;
}
</style>
