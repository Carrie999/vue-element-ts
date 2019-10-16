<template>
  <el-container>
    <el-header class="my-header">
      <img class="login-icon" :src="logoIcon" />
      <span>管理平台</span>
      <p class="my-header-right">
        <span class="my-header-right-light">hello,</span
        ><el-dropdown
          ><span>Carrie <i class="iconfont iconxiala"></i></span
          ><!--el-icon-caret-bottom-->
          <!--el-icon-caret-bottom-->
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="loginOut"
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </p>
    </el-header>
    <el-container class="my-container">
      <div class="my-container-inner">
        <router-view />
      </div>
      <el-footer class="my-footer">copyright@.com</el-footer>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Layout extends Vue {
  public logoIcon: any = require(`@/assets/imgs/logo-icon.png`);
  // @Prop() private msg!: string;
  public loginOut(): void {
    console.log(111, '/login');
    this.$router.push('/login');
  }
}
</script>

<style lang="scss">

.my-header {
  background-color: #fff !important;
  color: #364049 !important;
  text-align: left !important;
  line-height: 60px;
  .login-icon {
    height: 50px;
    margin-left: 30px;
    vertical-align: middle;
  }
  span {
    font-weight: bold;
    margin-left: 15px;
    font-size: 18px;
    opacity: 0.75;
  }
  .my-header-right {
    font-weight: 500;
    position: absolute;
    right: 50px;
    top: 0px;
    font-size: 16px;
    .my-header-right-light {
      font-size: 16px;
      color: #ced0d6;
    }
    span {
      margin-left: 10px;
      font-size: 16px;
    }
    &:hover {
      cursor: pointer;
    }
  }
}
.my-container {
  width: 100%;
  background: #f5f6fa !important;
  padding-bottom: 30px;
  min-height: 628px;
  padding-top: 20px;
  text-align: conter;
  .my-container-inner {
    margin: 0 auto;
  }
  .my-footer {
    background-color: transparent !important;
    text-align: center;
    line-height: 60px;
    position: relative;
    bottom: 1px;
    margin-top: 50px;
    font-weight: bold;
    color: #c5c8d1;
    font-size: 12px;
  }
}

.iconxiala {
  font-size: 12px;
  margin-left: 2px;
}
</style>
