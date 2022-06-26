<template>
  <div class="show-text">
    <div class="avatar">
      <div class="img-wrapper">
        <van-image @click="goModifyAvatar" round width="80" height="80" fit="cover" :src="avatar" />
        <div class="tips">
          <van-icon name="flower-o" size="20" color="#fff" />
        </div>
      </div>
      <h2 class="week">{{ week }}</h2>
    </div>
    <div class="text">
      <h2 class="title">{{ title }}</h2>
      <p class="desc">{{ desc }}</p>
    </div>
    <router-view v-slot="{ Component }">
      <transition appear name="slide">
        <component :is="Component" :img="defaultAvatar" @modifyAvatar="getModifyAvatar" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import { onMounted, reactive, ref, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { getGreet, getDateWeek } from '@/assets/js/date'
import defaultAvatar from './avatar01.jpg'
import storage from 'good-storage'

export default {
  name: 'ShowText',
  setup () {
    const TODO_AVATAR = '__TODO_AVATAR__'
    const avatar = ref('')
    const showText = reactive({
      title: 'Hello, 大可爱！',
      desc: getGreet(),
      week: getDateWeek()
    })
    onMounted(() => {
      avatar.value = storage.get(TODO_AVATAR, defaultAvatar)
    })

    // go to modify-avatar router
    const router = useRouter()
    const goModifyAvatar = () => {
      router.push({
        path: '/home/modify-avatar'
      })
    }

    // getModifyAvatar
    const getModifyAvatar = (img) => {
      avatar.value = img
    }

    return {
      ...toRefs(showText),
      avatar,
      defaultAvatar,
      goModifyAvatar,
      getModifyAvatar
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

    .img-wrapper {
      position: relative;
      font-size: 0;
      width: 80px;

      .tips {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        text-align: center;
        border: 2px solid #fff;
        background-color: #f8185a;
      }
    }

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
