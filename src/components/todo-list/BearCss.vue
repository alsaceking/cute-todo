<template>
  <div class="wrapper">
    <div class="bear-box">
      <div class="base">
        <div class="bear">
          <div class="left-eye"></div>
          <div class="left-blush"></div>
          <div class="right-eye"></div>
          <div class="right-blush"></div>
          <div class="nose"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped lang="less">
.wrapper {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .85);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  .bear-box {
    .base {
      width: 300px;
      height: 120px;
      background-color: #321f10;
      position: relative;
      border-top-left-radius: 25px;
      border-top-right-radius: 25px;

      &::before {
        content: "";
        width: 100vw;
        height: 35px;
        background-color: #393939;
        position: absolute;
        left: calc((100vw - 300px) / 2 * -1);
        bottom: -35px;
      }

      .bear {
        position: absolute;
        top: -97px; // 关灯: -97px  开灯：-155px
        left: 25px;
        border-top-left-radius: 50%;
        border-top-right-radius: 50%;
        border-bottom-left-radius: 10%;
        border-bottom-right-radius: 10%;
        z-index: -10;
        width: 250px;
        height: 230px;
        background-color: #fff;
        transition: all .3s ease-out;

        &:hover {
          top: -155px;
          box-shadow: 0 0 1000px #f0d0a7;
          opacity: .9;
          animation: bearAni 2s infinite linear alternate;
        }

        &::before {
          content: "";
          position: absolute;
          left: 6px;
          top: 16px;
          width: 70px;
          height: 60px;
          background-color: #fff;
          border-radius: 50%;
          transform: rotate(-70deg);
        }

        &::after {
          content: "";
          position: absolute;
          right: 6px;
          top: 16px;
          width: 70px;
          height: 60px;
          background-color: #fff;
          border-radius: 50%;
          transform: rotate(70deg);
        }

        .left-eye {
          width: 19px;
          height: 25px;
          left: 55px;
          top: 80px;
          border-top-left-radius: 50%;
          border-top-right-radius: 50%;
          border-bottom-left-radius: 45%;
          border-bottom-right-radius: 45%;
          background-color: #000;
          position: absolute;
          transform: rotate(15deg);

          &::before {
            content: "";
            position: absolute;
            top: 1px;
            left: 4px;
            width: 9px;
            height: 11px;
            background-color: #fff;
            border-radius: 50%;
            transform: rotate(60deg);
          }
        }

        .right-eye {
          width: 19px;
          height: 25px;
          right: 55px;
          top: 80px;
          border-top-left-radius: 50%;
          border-top-right-radius: 50%;
          border-bottom-left-radius: 45%;
          border-bottom-right-radius: 45%;
          background-color: #000;
          position: absolute;
          transform: rotate(-15deg);

          &::before {
            content: "";
            position: absolute;
            top: 1px;
            right: 4px;
            width: 9px;
            height: 11px;
            background-color: #fff;
            border-radius: 50%;
            transform: rotate(-60deg);
          }
        }

        .left-blush {
          width: 28px;
          height: 9px;
          background-color: #ef8e5b;
          border-radius: 50%;
          position: absolute;
          left: 37px;
          top: 109px;
          transform: rotate(8deg);
        }

        .right-blush {
          width: 28px;
          height: 9px;
          background-color: #ef8e5b;
          border-radius: 50%;
          position: absolute;
          right: 37px;
          top: 109px;
          transform: rotate(-8deg);
        }

        .nose {
          width: 45px;
          height: 22px;
          margin: 123px auto 0;
          background-color: #000;
          border-top-left-radius: 50%;
          border-top-right-radius: 50%;
          border-bottom-left-radius: 40%;
          border-bottom-right-radius: 40%;
        }
      }
    }
  }
}
</style>
