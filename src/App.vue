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
              <el-tabs v-model="activeName" class="demo-tabs">
                <el-tab-pane label="单词：単語（たんご）" name="first">
                  <el-row :gutter="20" class="input-row">
                    <el-col :span="4" class="label-col">
                      <el-text size="large" type="primary">中文释义</el-text>
                    </el-col>
                    <el-col :span="10">
                      <el-input id="tyuugokugo" v-model="tyuugokugo" size="large"></el-input>
                    </el-col>
                  </el-row>
                  <el-row :gutter="20" class="input-row">
                    <el-col :span="4" class="label-col">
                      <el-text size="large" type="primary">日文（汉字）</el-text>
                    </el-col>
                    <el-col :span="8" class="input-container">
                      <el-input id="nihonngo" v-model="nihonngo" size="large" :style="{ color: nihonngoColor }"></el-input>
                    
                    </el-col>
                    <el-col :span="2" >
                      <span v-if="nihonngoSuccess" class="success-message">✔</span>
                      <span v-if="nihonngoError" class="error-message">✖</span>
                    </el-col>
                    <el-col :span="10" v-show="showAnswers">
                      <el-input id="nihonngo_answer" v-model="nihonngo_answer" size="large" readonly></el-input>
                    </el-col>
                  </el-row>
                  <el-row :gutter="20" class="input-row">
                    <el-col :span="4" class="label-col">
                      <el-text size="large" type="primary">日文（假名）</el-text>
                    </el-col>
                    <el-col :span="8" class="input-container">
                      <el-input id="hiragana_katakana" v-model="hiragana_katakana" size="large" :style="{ color: hiraganaKatakanaColor }"></el-input>
                    </el-col>
                    <el-col :span="2" >
                      <span v-if="hiraganaKatakanaSuccess" class="success-message">✔</span>
                      <span v-if="hiraganaKatakanaError" class="error-message">✖</span>
                    </el-col>
                    <el-col :span="10" v-show="showAnswers">
                      <el-input id="hiragana_katakana_answer" v-model="hiragana_katakana_answer" size="large" readonly></el-input>
                    </el-col>
                  </el-row>
                  <br />
                  <br />
                  <el-row :gutter="20" class="input-row">
                    <el-col :span="7" class="label-col">
                      <el-button size="large" type="primary" round @click="generateRandomData">伪随机生成</el-button>
                    </el-col>
                    <el-col :span="7">
                      <el-button size="large" type="success" round @click="submitAnswer">提交答案</el-button>
                    </el-col>
                    <el-col :span="10"></el-col>
                  </el-row>
                </el-tab-pane>
                <el-tab-pane label="Tab 2" name="second">Content of Tab 2</el-tab-pane>
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
      activeName: 'first',
      tyuugokugo: '',
      nihonngo: '',
      hiragana_katakana: '',
      tyuugokugo_answer: '',
      nihonngo_answer: '',
      hiragana_katakana_answer: '',
      showAnswers: false,
      nihonngoColor: '#000000',
      hiraganaKatakanaColor: '#000000',
      nihonngoSuccess: false,
      nihonngoError: false,
      hiraganaKatakanaSuccess: false,
      hiraganaKatakanaError: false,
      dataCollection: [
        { tyuugokugo: '新单词；生词（⑤）', nihonngo_answer: '新出単語', hiragana_katakana_answer: 'しんしゅつたんご' },
        { tyuugokugo: '第2课 （①－①）', nihonngo_answer: '第2課', hiragana_katakana_answer: 'だいにか' },
        { tyuugokugo: '单词 （⓪）', nihonngo_answer: '単語', hiragana_katakana_answer: 'たんご' },
        { tyuugokugo: '新出现；新 （⓪）', nihonngo_answer: '新出', hiragana_katakana_answer: 'しんしゅつ' },
        { tyuugokugo: '新生活 （③）', nihonngo_answer: '新生活', hiragana_katakana_answer: 'しんせいかつ' },
        { tyuugokugo: '生活 （⓪）', nihonngo_answer: '生活', hiragana_katakana_answer: 'せいかつ' },
        { tyuugokugo: 'unit;单元 （①）', nihonngo_answer: 'ユニット', hiragana_katakana_answer: 'ユニット' },
        { tyuugokugo: '会话 （⓪）', nihonngo_answer: '会話', hiragana_katakana_answer: 'かいわ' },
        { tyuugokugo: '初次见面 （④）', nihonngo_answer: '初めまして', hiragana_katakana_answer: 'はじめまして' },
        { tyuugokugo: '对不起 （④）', nihonngo_answer: 'すみません', hiragana_katakana_answer: 'すみません' },
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    generateRandomData() {
      const randomIndex = Math.floor(Math.random() * this.dataCollection.length);
      const selectedData = this.dataCollection[randomIndex];
      this.tyuugokugo = selectedData.tyuugokugo;
      this.nihonngo_answer = selectedData.nihonngo_answer;
      this.hiragana_katakana_answer = selectedData.hiragana_katakana_answer;
      this.showAnswers = false;
      this.nihonngo = '';
      this.hiragana_katakana = '';
      this.nihonngoColor = '#000000';
      this.hiraganaKatakanaColor = '#000000';
      this.nihonngoSuccess= false;
      this.nihonngoError = false;
      this.hiraganaKatakanaSuccess= false;
      this.hiraganaKatakanaError = false;
   
    },
    submitAnswer() {
      this.showAnswers = true;
      this.nihonngoSuccess = this.nihonngo == this.nihonngo_answer;
      this.hiraganaKatakanaSuccess = this.hiragana_katakana == this.hiragana_katakana_answer;
      this.nihonngoError = this.nihonngo !== this.nihonngo_answer;
      this.hiraganaKatakanaError = this.hiragana_katakana !== this.hiragana_katakana_answer;

      // if (this.nihonngoError) {
      //   this.nihonngoColor = '#FF0000';
      // }
      // if (this.hiraganaKatakanaError) {
      //   this.hiraganaKatakanaColor = '#FF0000';
      // }
    }
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
.input-container {
  position: relative;
}

.error-message {
  position: absolute;
  /* right: -30px; /* 调整这个值来控制提示信息的位置 */
  /* top: 50%; */
  transform: translateY(-50%);
  color: red;
  font-size: 18px;
  font-weight: bold;
}
.success-message {
  position: absolute;
  /* right: -30px; /* 调整这个值来控制提示信息的位置 */
  /* top: 50%; */
  transform: translateY(-50%);
  color: rgb(54, 216, 89);
  font-size: 18px;
  font-weight: bold;
}
</style>
