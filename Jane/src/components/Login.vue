<template>
    <div class="login">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>教务后台管理系统</span>
            </div>
            <el-form ref="form" :model="form" label-width="auto" :rules="rules">
                <el-form-item label="用户名" prop="uesrname">
                    <el-input v-model="form.uesrname"></el-input>
                </el-form-item>
                <el-form-item label="密码"  prop="password">
                    <el-input type="password" v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="info" class="login-btn" @click="login('form')">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        uesrname: '',
        password: ''

      },
      rules: {
        uesrname: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 4, max: 8, message: '长度在 4 到 8 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login (form) {
      // var _this = this
      this.$refs[form].validate((valid) => {
        if (valid) {
          // 使用axios
          this.service.get('1598764235262')
            .then((response) => {
              // console.log(response)
              if (response.status === 200) {
                // 登录成功提升
                this.$message({
                  message: '登录成功',
                  type: 'success',
                  center: 'true',
                  duration: '1000'
                })
                this.$router.push('/home')
                // token
                localStorage.setItem('token', response.data.data.token)
              } else {
                console.log('登录失败')
              }
            })
            .catch(function (error) {
              console.log(error)
            })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
  .login{
    width: 100vw;
    height: 100vh;
    background-color: rgb(84, 92, 100);
      .box-card{
        width: 500px;
        position: absolute;
        top: 200px;
        left: 50%;
        transform: translateX(-50%);
        .login-btn{
          width: 100%;
        }
      }
  }
</style>
