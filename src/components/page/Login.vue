<template>
  <div class="login-wrap">
    <div class="ms-login">
        <button type="button" class="btn btn-primary btn-arrow-left">箭头向左的按钮</button>
      <div class="ms-title">大学生实习管理平台</div>
      <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
        <el-form-item prop="type">
          <el-select v-model="param.type" placeholder="请选择用户类型" style="width: 100%;" clearable>
            <el-option v-for="(item,index) in typeList" :key="index" :label="item.value" :value="item.code"></el-option>
            <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
          </el-select>
        </el-form-item>
        <el-form-item prop="username">
          <el-input v-model="param.username" placeholder="请输入用户名">
            <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" placeholder="请输入密码" v-model="param.password" @keyup.enter.native="submitForm()">
            <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm()">登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            typeList:[
                {
                    code:'1',
                    value:'管理员'
                },
                {
                    code:'2',
                    value:'学生'
                },
                {
                    code:'3',
                    value:'校内老师'
                },
                {
                    code:'4',
                    value:'企业老师'
                }
            ],
            param: {
                username: '',
                password: '',
                type:''
            },
            rules: {
                username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
                type:[{ required: true, message: '请选择用户类型', trigger: 'blur' }]
            },
        };
    },
    methods: {
        submitForm() {
            let that = this
            this.$refs.login.validate(valid => {
                if (valid) {
                    let params = {
                        code:that.param.username,
                        password:that.param.password,
                        type:that.param.type
                    }
                    that.$api.login(params)
                        .then(res => {
                        let {code,data,msg} = res.data
                        if(code === '0000'){
                            sessionStorage.setItem('userInfo',JSON.stringify(data))
                            sessionStorage.setItem('user_type',data.type)
                            localStorage.setItem('ms_username', data.name);
                            localStorage.setItem('user_img',data.field1)
                            that.$router.push('/');  
                        }else{
                            that.$message.error(msg)
                        }
                        }).catch(err => { 
                            that.$message.error(err)
                        })
                   
                } else {
                    return false;
                }
            });
        },
    },
};
</script>

<style scoped>
.login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(../../assets/img/login-bg.jpg);
    background-size: 100%;
}
.ms-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #ddd;
}
.ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;
}
.ms-content {
    padding: 30px 30px;
}
.login-btn {
    text-align: center;
}
.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}
.login-tips {
    font-size: 12px;
    line-height: 30px;
    color: #fff;
}
</style>