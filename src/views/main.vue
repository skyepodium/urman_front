<template>
  <div>
    <com-nav />
    <div id="top">
      <iframe
        class="youtube"
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
        <router-link
          class="room"
          to="/ChatRoom"
        >
          <div
            class="room_image"
            :style="{ 'background-image': 'url(' + catUrl +')' }"
          />
          <div class="room_info">
            <div class="room_title">
              항상 열려있는 익명 게시판
            </div>
            <div class="room_subinfo">
              <div class="room_auth">
                핫식스킹
              </div>
              <div class="room_genre">
                전체 게시판
              </div>
            </div>
          </div>
        </router-link>

        <router-link
          class="room"
          to="ChatRoom"
        >
          <div
            class="room_image"
            :style="{ 'background-image': 'url(' + nightUrl +')' }"
          />
          <div class="room_info">
            <div class="room_title">
              디자인을 위해 대칭을 위해 있는 게시판
            </div>
            <div class="room_subinfo">
              <div class="room_auth">
                여기로 와도
              </div>
              <div class="room_genre">
                똑같은 곳으로 가요
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div id="bottom">
      <div class="bottom_word">
        언제나 어디서나 I am urman~
      </div>
      <div class="bottom_writter">
        prod.by SKYEPODIUM
      </div>
      <a
        class="github_link"
        href="https://github.com/skyepodium/urman_front"
        target="_blank"
      >
        <img
          class="github_image"
          src="../assets/github.png"
          alt="githublogo"
        >
      </a>
    </div>
  </div>
</template>

<script>
import nav from '../components/nav.vue'
import catImage from "@/assets/cat.jpg";
import nightImage from "@/assets/night.jpg";

export default {
    components: {
        'com-nav': nav
    },
    data () {
      return {
        catUrl: catImage,
        nightUrl: nightImage
      }
    }
}
</script>

<style scoped>
.youtube {
  width: 100%;
  height: 50vw;
  margin-left:auto;
  margin-right:auto;
  display:block;
}
#mid {
    margin-top: 15px;
    margin-bottom: 20px;
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
    margin-left:auto;
    margin-right:auto;
}

.room {
    width: 100%;
    margin-bottom: 16px;
}
.room:hover {
    opacity: 0.8;
}

.room_image { 
    border-radius: 2px;
    width: 100%;
    height: 50vw;
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
    height: 180px;
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

.github_link{
  width: 50px;
  height: 50px;
  display: block;
  margin-left:auto;
  margin-right:auto;
  margin-top:20px;
  margin-bottom: 30px;
}

.github_image{
  width: 100%;
  height: 100%;
  border-radius: 5px;
  opacity: 0.8;
}

.github_image:hover{
  opacity: 1;
}


@media (min-width: 640px) {
  .youtube{
    width: 640px;
    height: 340px;
  }
  #mid {
    width: 640px;
  }
  .room{
    width: calc((100% - 16px) / 2);
    display:inline-block;
  }
  .room:nth-of-type(2n+1) {
    margin-right: 16px;
  }

  .room_image{
    height: 156px;
  }


}
</style>
