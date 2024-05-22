<script setup>
  import { User,Lock } from "@element-plus/icons-vue";
  import { ref, reactive } from 'vue';
  import useUserStore from "@/store/modules/user";
  import { ElNotification } from "element-plus";
  import { useRouter } from "vue-router";

  let useStore = useUserStore()
  const loginForm = reactive({username: '',password: ''})
  let $router = useRouter()
  let loading = ref(false)
  // 登录按钮
  const login = async () => {
    // 开始加载
    loading.value = true
    try {
      await useStore.userLogin(loginForm)
      // 登陆成功跳转首页
      $router.push('/')
      ElNotification({
        type: 'success',
        message: '登录成功'
      })
      loading.value = false
    }catch(error) {
      loading.value = false
      // 登录失败
      ElNotification({
        type: 'error',
        message: error.message
      })
    }
  }


</script>
<template>
  <div class="login-container">
    <el-row>
      <!-- xs768px -->
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login-form">
          <h1>HELLO</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item>
            <el-input :prefix-icon="User"
            v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="password" :prefix-icon="Lock"
              v-model="loginForm.password" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="login-btn" type="primary" size="default"
              @click="login" v-loading="loading">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped lang='scss'>
.login-container {
  width: 100vw;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  .login-form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login-form.png') no-repeat;
    background-size: cover;
    h1 {
      color: #fff;
      font-size: 40px;
    }
    h2 {
      color: #fff;
      font-size: 20px;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>
