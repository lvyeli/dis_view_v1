<template>
  <div class="nav-bar">
    <div class="logo">
      <img class="img" src="~@/assets/img/EQ-Monitor.svg" alt="logo" />
      <div class="title">
        <span class="title-EN">Earthquake Disaster Loss Prediction</span>
        <span class="title-CN">地震灾害损失预测</span>
      </div>
    </div>
    <div class="search">
      <el-input
        v-model="input"
        placeholder="Please input"
        clearable
        size="large"
      >
        <template #prefix>
          <el-icon class="el-input_icon"><search /></el-icon>
        </template>
      </el-input>
      <el-button round>
        <el-icon class="el-icon--right" color="#c0ccda"><search /></el-icon>
      </el-button>
      <a href="">Latest</a>
      <a href="">About</a>
      <div class="sign-out">
        <el-dropdown :hide-on-click="false">
          <span class="el-dropdown-link">
            <el-icon class="icon" :size="25"><user /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item disabled>{{ username }}</el-dropdown-item>
              <el-dropdown-item divided @click="signOut"
                >退出登录</el-dropdown-item
              >
              <el-dropdown-item divided>个人信息</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup>
import localCache from '@/utils/cache'
import router from '@/router'
const username = localCache.getCache('username')
const signOut = () => {
  localCache.deleteCache('username')
  localCache.deleteCache('token')
  router.push('/login')
}
</script>

<style lang="less" scoped>
.nav-bar,
.logo,
.search {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.nav-bar {
  width: 100%;
  height: 85px;
  background-color: #002147;
  border-bottom: 0.25rem solid #d42b21;
  .logo {
    height: 60px;
    margin: auto 60px;
    .img {
      height: 100%;
      margin: 0 20px;
      // background-color: rgba(19, 67, 122);
    }
    .title {
      font-size: 1.3rem;
      font-weight: 300;
      line-height: 1.5;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      font-family: Lato, Helvetica Neue, Arial, sans-serif;
      .title-EN {
        font-size: 1.1rem;
      }
    }
  }
  .search {
    .el-input :deep(.el-input__wrapper) {
      background: rgba(0, 33, 71, 0.2);
      border-radius: 100px;
    }
    .el-button {
      border: none;
      background: rgba(0, 33, 71, 0.2);
      padding: 2px 10px;
      transition: color 0.15s ease;
    }
    .el-icon:hover {
      color: white;
    }
    a,
    .icon {
      color: #c0ccda;
      cursor: pointer;
      text-decoration: none;
      transition: color 0.15s ease;
      margin: auto 10px;
    }
    a:hover,
    .icon:hover {
      color: white;
    }
    .sign-out {
      margin: 0 30px 0 0;
    }
  }
}
</style>
