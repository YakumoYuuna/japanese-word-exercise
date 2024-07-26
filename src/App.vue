<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">Home</el-menu-item>
          <el-menu-item index="2">Game</el-menu-item>
          <el-menu-item index="3">Contact</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <el-card shadow="hover" class="custom-card">
          <el-row>
            <el-col :span="8" class="image-section">
              <img :src="imgURL" alt="GIF Image" class="card-image">
            </el-col>
            <el-col :span="16" class="tabs-section">
              <el-tabs v-model="activeName" class="demo-tabs" >
                <el-tab-pane label="人数、年级、岁数" name="first">
                  <el-row :gutter="20" class="input-row">
                    <el-col :span="4" class="label-col">
                      <el-text size="large" type="primary">中文释义</el-text>
                    </el-col>
                    <el-col :span="10">
                      <el-input id="tyuugokugo" v-model="tyuugokugo" size="large"></el-input>
                    </el-col>
                    <el-col :span="10">
                      <el-input id="tyuugokugo_answer" v-model="tyuugokugo_answer" size="large"></el-input>
                    </el-col>

                  </el-row>
                  <el-row :gutter="20" class="input-row">
                    <el-col :span="4" class="label-col">
                      <el-text size="large" type="primary">日文（汉字）</el-text>
                    </el-col>
                    <el-col :span="10">
                      <el-input id="nihonngo" v-model="nihonngo" size="large"></el-input>
                    </el-col>
                    <el-col :span="10">
                      <el-input id="nihonngo_answer" v-model="nihonngo_answer" size="large"></el-input>
                    </el-col>
                  </el-row>
                  <el-row :gutter="20" class="input-row">
                    <el-col :span="4" class="label-col">
                      <el-text size="large" type="primary">日文（假名）</el-text>
                    </el-col>
                    <el-col :span="10">
                      <el-input id="hiragana_katakana" v-model="hiragana_katakana" size="large"></el-input>
                    </el-col>
                    <el-col :span="10">
                      <el-input id="hiragana_katakana_answer" v-model="hiragana_katakana_answer" size="large"></el-input>
                    </el-col>
                  </el-row>
                  <br/>
                  <br/>
                  <el-row :gutter="20" class="input-row">
                    <el-col :span="7" class="label-col">
                      <el-button size="large" type="primary" round >伪随机生成</el-button>
                    </el-col>
                    <el-col :span="7">
                      <el-button  size="large"  type="success" round>提交答案</el-button>
                    </el-col>
                    <el-col :span="10">
                   
                    </el-col>

                  </el-row>
                </el-tab-pane>
                <el-tab-pane label="Tab 2" name="second" >Content of Tab 2</el-tab-pane>
                <el-tab-pane label="Tab 3" name="third">Content of Tab 3</el-tab-pane>
              </el-tabs>
            </el-col>
          </el-row>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      activeIndex: '1',
      imgURL: require('@/assets/IMG_7862.gif'),
      activeTab: 'first',
      activeName: 'first', // 默认选中的选项卡
      tyuugokugo:'',
      nihonngo:'',
      hiragana_katakana:'',
      tyuugokugo_answer:'',
      nihonngo_answer:'',
      hiragana_katakana_answer:'',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },

  }
};
</script>

<style>
#app {
  text-align: center;
}

.custom-card {
  margin: 20px;
}

.image-section {
  text-align: center;
}

.card-image {
  width: 100%;
  height: auto;
}

.tabs-section {
  padding: 20px;
}

.input-row {
  margin-bottom: 20px; /* 增加行与行之间的间距 */
  align-items: center; /* 垂直对齐文本和输入框 */
}

.label-col {
  display: flex;
  align-items: center; /* 垂直对齐标签 */
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
