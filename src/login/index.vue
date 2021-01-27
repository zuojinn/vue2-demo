<template>
  <div class="login">
    <el-row :gutter="20">
      <el-col :span="6" :offset="9">
        <div class="grid-content bg-purple"></div>
        <el-form ref="form" :model="form" label-width="80px" :rules="rules">
          <el-form-item label="用户名" prop="user">
            <el-input v-model="form.user"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="button" @click="onSubmit">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { Row, Col, Form, FormItem, Input, Button, Alert } from 'element-ui'
import { mapActions } from 'vuex'
export default {
  components: {
    ElRow: Row,
    ElCol: Col,
    ElInput: Input,
    ElForm: Form,
    ElFormItem: FormItem,
    ElButton: Button
  },
  data() {
    return {
      form: {
        name: '',
        region: ''
      },
      rules: {
        user: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    onSubmit() {
      let that = this
      that.$refs.form.validate(valid => {
        if (valid) {
          that.login(that.form)
        }
      })
    },
    ...mapActions({ login: 'login' })
  }
}
</script>
<style scoped>
.login {
  margin-top: 50px;
}
.login el-button {
  float: left;
}
</style>
