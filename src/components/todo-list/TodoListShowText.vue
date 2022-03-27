<template>
  <div class="show-text">
    <div class="avatar">
      <van-image round width="60" height="60" fit="cover" :src="avatar" />
      <h2 class="week">{{ week }}</h2>
    </div>
    <div class="text">
      <h2 class="title">{{ title }}</h2>
      <p class="desc">{{ desc }}</p>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { getGreet, getDateWeek } from '@/assets/js/date'
import avatar from './avatar01.jpg'

export default {
  name: 'ShowText',
  setup () {
    const showText = reactive({
      title: 'Hello， 大可爱！',
      desc: getGreet(),
      week: getDateWeek()
    })
    return {
      ...toRefs(showText),
      avatar
    }
  }
}
</script>

<style scoped lang="less">
.show-text {
  padding: 10px 20px 20px 20px;
  .avatar {
    position: relative;
    margin-bottom: 10px;
    .week {
      position: absolute;
      top: 20%;
      right: 0;
      letter-spacing: 3px;
      font-family: "华文琥珀";
    }
  }
  .text {
    .title {
      font-weight: bold;
      font-size: @fontsize-large-x;
      margin-bottom: 10px;
    }
    .desc {
      font-size: @fontsize-medium;
      line-height: @fontsize-large;
    }
  }
}
</style>
