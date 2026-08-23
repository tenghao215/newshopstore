<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尺素百货欢迎您^_^</p>
          <p v-if="!userName">
            <span>请</span>
            <router-link to="/login">登录</router-link>
            <router-link to="/register" class="register">免费注册</router-link>
          </p>
          <p v-else>
            <a>{{userName}}</a>
            <a class="register" @click="logout">退出登录</a>
          </p>
        </div>
        <div class="typeList">
          <router-link to='/center/myorder'>我的订单</router-link>
          <router-link to='/shopcart'>我的购物车</router-link>
          <a>我的尺素</a>
          <a>尺素会员</a>
          <a>企业采购</a>
          <a>关注尺素</a>
          <a>合作招商</a>
          <a>商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link to="/home" class="logo" title="尺素百货">
          <img src="./images/logo.png" alt="" />
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model="keyword"
          />
          <button
            class="sui-btn btn-xlarge btn-danger"
            type="button"
            @click="toSearch"
          >
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MyHeader",

  mounted() {
    // 在挂载的时候组成全局事件总线clearKeyword,即清除搜索栏中的关键字，供其他组件使用
    this.$bus.$on('clearKeyword',()=>{
      this.keyword = ''
    })
  },

  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    // 点击搜索按钮：跳转到搜索页面
    toSearch() {
      // 路由传递参数：
      // 第一种：字符串形式
      // this.$router.push("/search/" + this.keyword + "?k=" + this.keyword.toUpperCase())
      // 第二种：模板字符串
      // this.$router.push(`/search/${this.keyword}?k=${this.keyword.toUpperCase()}`)
      // 第三种：对象
      // console.log('关键词为' + this.keyword);
      // if (!this.keyword) this.keyword = undefined
      
      // params参数可以传递也可以不传递，但是如果传递是空串需要将其变为undefined,否则路由会出问题
      this.$router.push({
        name: "search",
        query: this.$route.query,
        params: { keyword: this.keyword || undefined },
        // props:true
      });
    },
    logout(){
      this.$store.dispatch('userAbout/userLogout')
      this.$router.push('/home')
    }
  },
  computed:{
    userName() {
      return this.$store.state.userAbout.userInfo.nickName;
    },
  }
};
</script>

<style lang="less" scoped>
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 20px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>
