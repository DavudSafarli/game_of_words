<template>
<div>
    <div class="fullimg"></div>
    <div class="landing">
        <div class="flies">
            <ul>
                <li class="fly" ref="flies" v-for="i in 10" :key="i"></li>
            </ul>

        </div>
        <v-btn round color="#e74c3c" large depressed>Play now</v-btn>
    </div>
</div>
</template>

<script>
export default {
    mounted() {
      setTimeout(() => {
        let $el = this.$refs.flies;
        const l = $el.length;
        let arr = ['#e74c3c', '#e67e22', '#1abc9c', '#9b59b6', '#d35400', '#f1c40f', '#e67e22']
        for (let i = 0; i < l; i++) {
          $el[i].style.left = Math.random() * 130 - 20 + '%';
          $el[i].style.top = 5 + Math.random() * 50 + '%';
          // $el[i].style.width = 80+ Math.random() * 70 + 'px';
          $el[i].style.backgroundColor = arr[i%7];console.log(i%6)
          $el[i].style.animation = 'fly ' + (Math.random()) +'s linear forwards';
        }
      }, 500);
    }
}
</script>

<style>
@keyframes fly{
  to{
    width: 120px;
  }
}
.landing{
  height: 100vh;
  position: relative;
}
.fly{
  border-radius: 20px;  
  transform: rotate(45deg);
  transform-origin: 0 0;
  position: absolute;
  width: 0px;
  height: 18px;
  background-color: green;
}
.fullimg::after {
    display: block;
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: linear-gradient(-45deg, red, green, blue);
    background: linear-gradient(-45deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.99), rgba(255, 255, 255, 0.4));
    background-size: 200% 200%;
    animation: Gradient 3s linear forwards;
    /* background-position: 100% 100%; */
}

.fullimg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: url('../assets/davuddd.svg');
    background-size: cover;
}

@keyframes Gradient {
    0% {
        background-position: 0% 50%
    }

    50% {
        background-position: 100% 50%
    }

    100% {
        background-position: 30% 30%
    }
}
</style>
