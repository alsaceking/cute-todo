<template>
  <div class='wrapper'>
    <div class="header">
      <div class="icon-wrapper">
        <van-icon @click="goBack" name="arrow-left" size="30" />
      </div>
    </div>
    <div class="content">
      <img :src="showImg" alt="">
    </div>
    <div class="footer">
      <input @change="uploadFile" type="file" ref="uploadBtn" id="upload" accept="image/*" style="display: none;" />
      <label for="upload" class="modify-btn">更换头像</label>
    </div>
    <div class="cropper-wrapper" :class="{ 'showCropper': showCropperWrapper }">
      <div class="header">
        <div class="opt-wrapper">
          <van-icon @click="cropperBack" name="arrow-left" size="30" />
          <span class="text">图片裁剪</span>
          <div class="crop-btn" @click="getImgData">确定</div>
        </div>
      </div>
      <div class="content">
        <VueCropper ref="cropper" :img="cropperOptions.img" :outputSize="cropperOptions.size"
          :autoCropWidth="cropperOptions.autoCropWidth" :autoCropHeight="cropperOptions.autoCropHeight"
          :canMove="cropperOptions.canMove" :autoCrop="cropperOptions.autoCrop" :mode="cropperOptions.mode"
          :info="cropperOptions.info">
        </VueCropper>
      </div>
      <div class="footer"></div>
    </div>
  </div>
</template>

<script setup>
import 'vue-cropper/dist/index.css'
import { VueCropper } from 'vue-cropper'
import { ref, defineProps, defineEmits, onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import storage from 'good-storage'

const TODO_AVATAR = '__TODO_AVATAR__'

const router = useRouter()

// default img
const showImg = ref('')

const props = defineProps(['img'])

const emits = defineEmits(['modifyAvatar'])

// file input dom
const uploadBtn = ref(null)

// control cropper wrapper show/hide
const showCropperWrapper = ref(false)
// vue-cropper dom
const cropper = ref(null)
// vue-cropper options
const cropperOptions = reactive({
  img: '',
  autoCrop: true,
  size: 0.5,
  autoCropWidth: 350,
  autoCropHeight: 350,
  canMove: false,
  mode: 'cover',
  info: false
})

onMounted(() => {
  showImg.value = storage.get(TODO_AVATAR, props.img)
})

const uploadFile = (e) => {
  const fileList = uploadBtn.value.files
  const file = fileList[0]

  const fileReader = new FileReader()

  fileReader.readAsDataURL(file)
  fileReader.addEventListener('load', () => {
    const res = fileReader.result
    cropperOptions.img = res
    showCropperWrapper.value = true
  })
}

// get croppered img data
const getImgData = () => {
  cropper.value.getCropData(img => {
    // console.log(img)
    // get croppered img data
    storage.set(TODO_AVATAR, img)
    showImg.value = img
    showCropperWrapper.value = false
    emits('modifyAvatar', img)
    router.push('/home')
  })
}

// cropper back
const cropperBack = () => {
  showCropperWrapper.value = false
}

// go back
const goBack = () => {
  router.push('/home')
}

</script>

<style scoped lang="less">
.wrapper {
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #222;

  .cropper-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #222;
    transform: translateX(100%);
    transition: all 0.3s;

    &.showCropper {
      transform: translateX(0);
    }

    .header {
      height: 20%;

      .opt-wrapper {
        display: flex;
        padding: 20px;
        line-height: 30px;
        background-color: #fff;
        color: #222;

        .text {
          flex: 1;
          padding-left: 15px;
        }

        .crop-btn {
          width: 70px;
          text-align: center;
          background-color: #f8185a;
          border-radius: 20px;
          color: #fff;
        }
      }
    }

    .content {
      height: 60%;
    }

    .footer {
      height: 20%;
    }
  }

  .header {
    height: 20%;

    .icon-wrapper {
      padding: 20px;
    }
  }

  .content {
    height: 60%;
    font-size: 0;
    overflow: hidden;

    img {
      width: 100%;
    }
  }

  .footer {
    position: relative;
    height: 20%;

    .modify-btn {
      position: absolute;
      left: 50%;
      top: 60%;
      border-radius: 20px;
      border: 2px solid #fff;
      padding: 8px 15px;
      letter-spacing: 2px;
      transform: translate3d(-50%, -50%, 0);
    }
  }
}
</style>
