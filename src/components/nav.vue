<template>
  <div id="nav">
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
  </div>
</template>

<script>
export default {
    methods: {
        warn () {
            alert('익명이라서 로그인 필요없다능')
        }
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
@media (min-width: 640px) {
  .nav_inner{
    width: 640px;
    height: 80px;
  }
  .nav_title{
    line-height: 80px;
    font-size: 42px;
  }
  .nav_auth {
    line-height: 44px;
    height: 44px;
    margin-top: 18px;
    font-size: 18px;
  }
}
</style>
