<template>
	<div>

	<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20240202/d36e41b72d2d4c68a202194193ad67aa.jpg)","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
		<el-form class='rgs-form' v-if="pageFlag=='register'" :style='{"border":"1px solid #fff","padding":"50px 20px 40px","boxShadow":"0px 26px 26px -30px #999","margin":"100px auto","borderRadius":"12px","background":"rgba(255,255,255,.8)","width":"650px","position":"relative","height":"auto"}' ref="registerForm" :model="registerForm" :rules="rules">
			<div v-if="false" :style='{"width":"100%","margin":"0 0 10px 0","lineHeight":"44px","fontSize":"20px","color":"rgba(64, 158, 255, 1)","textAlign":"center"}'>USER / REGISTER</div>
			<div v-if="true" :style='{"margin":"20px auto 10px","color":"rgba(0, 127, 24)","top":"-90px","textAlign":"center","left":"0","width":"100%","letterSpacing":"4px","lineHeight":"44px","fontSize":"30px","position":"absolute"}'>在线问诊系统的设计与实现注册</p></div>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='huanzhe'" prop="huanzhezhanghao">
				<div v-if="true" :style='{"padding":"0 10px","whiteSpace":"nowrap","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"120px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('huanzhezhanghao')?'required':''">患者账号：</div>
				<el-input v-model="registerForm.huanzhezhanghao"  placeholder="请输入患者账号" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='huanzhe'" prop="mima">
				<div v-if="true" :style='{"padding":"0 10px","whiteSpace":"nowrap","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"120px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('mima')?'required':''">密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='huanzhe'" prop="mima2">
				<div v-if="true" :style='{"padding":"0 10px","whiteSpace":"nowrap","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"120px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('mima')?'required':''">确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='huanzhe'" prop="huanzhexingming">
				<div v-if="true" :style='{"padding":"0 10px","whiteSpace":"nowrap","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"120px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('huanzhexingming')?'required':''">患者姓名：</div>
				<el-input v-model="registerForm.huanzhexingming"  placeholder="请输入患者姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='huanzhe'" prop="xingbie">
				<div v-if="true" :style='{"padding":"0 10px","whiteSpace":"nowrap","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"120px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('xingbie')?'required':''">性别：</div>
                <el-select v-model="registerForm.xingbie" placeholder="请选择性别" >
                  <el-option
                      v-for="(item,index) in huanzhexingbieOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='huanzhe'" prop="nianling">
				<div v-if="true" :style='{"padding":"0 10px","whiteSpace":"nowrap","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"120px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('nianling')?'required':''">年龄：</div>
				<el-input v-model.number="registerForm.nianling"  placeholder="请输入年龄" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='huanzhe'" prop="dianhua">
				<div v-if="true" :style='{"padding":"0 10px","whiteSpace":"nowrap","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"120px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('dianhua')?'required':''">电话：</div>
				<el-input v-model="registerForm.dianhua"  placeholder="请输入电话" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='huanzhe'" prop="touxiang">
				<div v-if="true" :style='{"padding":"0 10px","whiteSpace":"nowrap","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"120px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('touxiang')?'required':''">头像：</div>
                <file-upload
					tip="点击上传头像"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.touxiang?registerForm.touxiang:''"
					@change="huanzhetouxiangUploadChange"
				></file-upload>
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='yisheng'" prop="yishenggonghao">
				<div v-if="true" :style='{"padding":"0 10px","whiteSpace":"nowrap","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"120px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('yishenggonghao')?'required':''">医生工号：</div>
				<el-input v-model="registerForm.yishenggonghao"  placeholder="请输入医生工号" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='yisheng'" prop="mima">
				<div v-if="true" :style='{"padding":"0 10px","whiteSpace":"nowrap","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"120px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('mima')?'required':''">密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='yisheng'" prop="mima2">
				<div v-if="true" :style='{"padding":"0 10px","whiteSpace":"nowrap","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"120px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('mima')?'required':''">确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='yisheng'" prop="yishengxingming">
				<div v-if="true" :style='{"padding":"0 10px","whiteSpace":"nowrap","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"120px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('yishengxingming')?'required':''">医生姓名：</div>
				<el-input v-model="registerForm.yishengxingming"  placeholder="请输入医生姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='yisheng'" prop="xingbie">
				<div v-if="true" :style='{"padding":"0 10px","whiteSpace":"nowrap","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"120px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('xingbie')?'required':''">性别：</div>
                <el-select v-model="registerForm.xingbie" placeholder="请选择性别" >
                  <el-option
                      v-for="(item,index) in yishengxingbieOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='yisheng'" prop="keshi">
				<div v-if="true" :style='{"padding":"0 10px","whiteSpace":"nowrap","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"120px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('keshi')?'required':''">科室：</div>
				<el-input v-model="registerForm.keshi"  placeholder="请输入科室" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='yisheng'" prop="zhicheng">
				<div v-if="true" :style='{"padding":"0 10px","whiteSpace":"nowrap","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"120px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('zhicheng')?'required':''">职称：</div>
				<el-input v-model="registerForm.zhicheng"  placeholder="请输入职称" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='yisheng'" prop="dianhua">
				<div v-if="true" :style='{"padding":"0 10px","whiteSpace":"nowrap","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"120px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('dianhua')?'required':''">电话：</div>
				<el-input v-model="registerForm.dianhua"  placeholder="请输入电话" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='yisheng'" prop="touxiang">
				<div v-if="true" :style='{"padding":"0 10px","whiteSpace":"nowrap","color":"#333","textAlign":"right","background":"none","display":"inline-block","width":"120px","lineHeight":"36px","fontSize":"14px"}' :class="changeRules('touxiang')?'required':''">头像：</div>
                <file-upload
					tip="点击上传头像"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.touxiang?registerForm.touxiang:''"
					@change="yishengtouxiangUploadChange"
				></file-upload>
			</el-form-item>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0px 20px","margin":"20px 10px 0 8vw","color":"#fff","borderRadius":"4px","background":"rgba(0, 127, 24)","display":"inline-block","width":"auto","fontSize":"16px","minWidth":"120px","height":"40px"}' type="primary" @click="submitForm('registerForm')">注册</el-button>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 24px","margin":"0px auto 0px","color":"#666","borderRadius":"4px","textAlign":"right","background":"none","display":"none","width":"auto","fontSize":"16px","height":"44px"}' @click="resetForm('registerForm')">重置</el-button>
			<router-link :style='{"cursor":"pointer","padding":"0px 20px","margin":"0","color":"#333","borderRadius":"2px","textAlign":"right","background":"#fff","display":"inline-block","width":"auto","lineHeight":"40px","fontSize":"14px","textDecoration":"none"}' to="/login">已有账户登录</router-link>
			<div class="idea1" :style='{"top":"-19px","left":"0","background":"url() no-repeat center top","display":"none","width":"40vw","position":"absolute","height":"66px"}'></div>
			<div class="idea2" :style='{"width":"100%","background":"blue","display":"none","height":"40px"}'></div>
		</el-form>
    </div>
  </div>
</div>
</template>

<script>

export default {
    //数据集合
    data() {
		return {
            pageFlag : '',
			tableName: '',
			registerForm: {},
			forgetForm: {},
			rules: {},
			requiredRules: {},
            huanzhexingbieOptions: [],
            yishengxingbieOptions: [],
		}
    },
	mounted() {
		if(this.$route.query.pageFlag=='register'){
			this.tableName = this.$route.query.role;
			if(this.tableName=='huanzhe'){
				this.registerForm = {
					huanzhezhanghao: '',
					mima: '',
					mima2: '',
					huanzhexingming: '',
					xingbie: '',
					nianling: '',
					dianhua: '',
					touxiang: '',
				}
			}
			if(this.tableName=='yisheng'){
				this.registerForm = {
					yishenggonghao: '',
					mima: '',
					mima2: '',
					yishengxingming: '',
					xingbie: '',
					keshi: '',
					zhicheng: '',
					dianhua: '',
					touxiang: '',
					clicktime: '',
					clicknum: '',
					storeupnum: '',
				}
			}
			if ('huanzhe' == this.tableName) {
				this.requiredRules.huanzhezhanghao = [{ required: true, message: '请输入患者账号', trigger: 'blur' }]
			}
			if ('huanzhe' == this.tableName) {
				this.requiredRules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('huanzhe' == this.tableName) {
				this.requiredRules.huanzhexingming = [{ required: true, message: '请输入患者姓名', trigger: 'blur' }]
			}
			if ('yisheng' == this.tableName) {
				this.requiredRules.yishenggonghao = [{ required: true, message: '请输入医生工号', trigger: 'blur' }]
			}
			if ('yisheng' == this.tableName) {
				this.requiredRules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('yisheng' == this.tableName) {
				this.requiredRules.yishengxingming = [{ required: true, message: '请输入医生姓名', trigger: 'blur' }]
			}
		}
	},
    created() {
		this.pageFlag = this.$route.query.pageFlag;
		if(this.$route.query.pageFlag=='register'){
		  if ('huanzhe' == this.tableName) {
			this.rules.huanzhezhanghao = [{ required: true, message: '请输入患者账号', trigger: 'blur' }];
		  }
		  if ('huanzhe' == this.tableName) {
			this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
		  }
		  if ('huanzhe' == this.tableName) {
			this.rules.huanzhexingming = [{ required: true, message: '请输入患者姓名', trigger: 'blur' }];
		  }
			this.huanzhexingbieOptions = "男,女".split(',');
		  if ('huanzhe' == this.tableName) {
			this.rules.nianling = [{ required: true, validator: this.$validate.isIntNumer, trigger: 'blur' }];
		  }
		  if ('huanzhe' == this.tableName) {
			this.rules.dianhua = [{ required: true, validator: this.$validate.isMobile, trigger: 'blur' }];
		  }
		  if ('yisheng' == this.tableName) {
			this.rules.yishenggonghao = [{ required: true, message: '请输入医生工号', trigger: 'blur' }];
		  }
		  if ('yisheng' == this.tableName) {
			this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
		  }
		  if ('yisheng' == this.tableName) {
			this.rules.yishengxingming = [{ required: true, message: '请输入医生姓名', trigger: 'blur' }];
		  }
			this.yishengxingbieOptions = "男,女".split(',');
		  if ('yisheng' == this.tableName) {
			this.rules.dianhua = [{ required: true, validator: this.$validate.isMobile, trigger: 'blur' }];
		  }
		  if ('yisheng' == this.tableName) {
			this.rules.clicknum = [{ required: true, validator: this.$validate.isIntNumer, trigger: 'blur' }];
		  }
		  if ('yisheng' == this.tableName) {
			this.rules.storeupnum = [{ required: true, validator: this.$validate.isIntNumer, trigger: 'blur' }];
		  }
		}
    },
    //方法集合
    methods: {
		changeRules(name){
			if(this.requiredRules[name]){
				return true
			}
			return false
		},
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
        // 下二随
      huanzhetouxiangUploadChange(fileUrls) {
          this.registerForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },
      yishengtouxiangUploadChange(fileUrls) {
          this.registerForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },

        // 多级联动参数


      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var url=this.tableName+"/register";
				if((!this.registerForm.huanzhezhanghao) && `huanzhe` == this.tableName){
					this.$message.error(`患者账号不能为空`);
					return
				}
               if(`huanzhe` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
				if((!this.registerForm.mima) && `huanzhe` == this.tableName){
					this.$message.error(`密码不能为空`);
					return
				}
				if((!this.registerForm.huanzhexingming) && `huanzhe` == this.tableName){
					this.$message.error(`患者姓名不能为空`);
					return
				}
				if(`huanzhe` == this.tableName && this.registerForm.nianling &&(!this.$validate.isIntNumer2(this.registerForm.nianling))){
					this.$message.error(`年龄应输入整数`);
					return
				}
					if(`huanzhe` == this.tableName && this.registerForm.dianhua &&(!this.$validate.isMobile2(this.registerForm.dianhua))){
						this.$message.error(`电话应输入手机格式`);
						return
					}
				if((!this.registerForm.yishenggonghao) && `yisheng` == this.tableName){
					this.$message.error(`医生工号不能为空`);
					return
				}
               if(`yisheng` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
				if((!this.registerForm.mima) && `yisheng` == this.tableName){
					this.$message.error(`密码不能为空`);
					return
				}
				if((!this.registerForm.yishengxingming) && `yisheng` == this.tableName){
					this.$message.error(`医生姓名不能为空`);
					return
				}
					if(`yisheng` == this.tableName && this.registerForm.dianhua &&(!this.$validate.isMobile2(this.registerForm.dianhua))){
						this.$message.error(`电话应输入手机格式`);
						return
					}
            this.$http.post(url, this.registerForm).then(res => {
              if (res.data.code === 0) {
                this.$message({
                  message: '注册成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.$router.push('/login');
                  }
                });
              } else {
                this.$message.error(res.data.msg);
              }
            });
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.container {
		position: relative;
		background: url(http://codegen.caihongy.cn/20240202/d36e41b72d2d4c68a202194193ad67aa.jpg);
		
		.el-input {
		  width: auto;
		}
		
		.el-date-editor.el-input {
			width: auto;
		}
		
		.el-form-item /deep/ .el-form-item__content {
						display: flex;
						width: 100%;
					}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border-radius: 4px;
						padding: 0 10px;
						outline: none;
						color: #666;
						background: #fff;
						width: 300px;
						font-size: 14px;
						border-color: #ddd;
						border-width: 1px;
						border-style: solid;
						height: 40px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border-radius: 4px;
						padding: 0 10px;
						outline: none;
						color: #666;
						background: #fff;
						width: auto;
						font-size: 14px;
						border-color: #ddd;
						border-width: 1px;
						border-style: solid;
						min-width: 300px;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border-radius: 4px;
						padding: 0 10px 0 30px;
						outline: none;
						color: #666;
						background: #fff;
						width: auto;
						font-size: 14px;
						border-color: #ddd;
						border-width: 1px;
						border-style: solid;
						min-width: 300px;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border-radius: 4px;
						padding: 0 10px 0 30px;
						outline: none;
						color: #666;
						background: #fff;
						width: auto;
						font-size: 14px;
						border-color: #ddd;
						border-width: 1px;
						border-style: solid;
						min-width: 300px;
						height: 40px;
					}
		
		.rgs-form /deep/ .el-upload--picture-card {
			background: transparent;
			border: 0;
			border-radius: 0;
			width: auto;
			height: auto;
			line-height: initial;
			vertical-align: middle;
		}
		
		.rgs-form /deep/ .upload .upload-img {
		  		  cursor: pointer;
		  		  border-radius: 4px;
		  		  color: #ddd;
		  		  background: #fff;
		  		  width: 150px;
		  		  font-size: 32px;
		  		  border-color: #ddd;
		  		  border-width: 1px;
		  		  line-height: 60px;
		  		  border-style: solid;
		  		  text-align: center;
		  		  height: 60px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  cursor: pointer;
		  		  border-radius: 4px;
		  		  color: #ddd;
		  		  background: #fff;
		  		  width: 150px;
		  		  font-size: 32px;
		  		  border-color: #ddd;
		  		  border-width: 1px;
		  		  line-height: 60px;
		  		  border-style: solid;
		  		  text-align: center;
		  		  height: 60px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  cursor: pointer;
		  		  border-radius: 4px;
		  		  color: #ddd;
		  		  background: #fff;
		  		  width: 150px;
		  		  font-size: 32px;
		  		  border-color: #ddd;
		  		  border-width: 1px;
		  		  line-height: 60px;
		  		  border-style: solid;
		  		  text-align: center;
		  		  height: 60px;
		  		}
	}
	.required {
		position: relative;
	}
	.required::after{
				color: red;
				left: 108px;
				position: absolute;
				content: "*";
				order: 2;
			}
</style>
