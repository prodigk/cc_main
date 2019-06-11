<template>
  <div id="pageAbout" class="article-content">
    <div class="section-about">
      <h2 class="title-sub">About Chart Catalog</h2>
      <p class="desc-sub">인터랙션 카탈로그는 SK Planet의 Tech Solution에 기여할 수 있는 UX Tech영역의 Asset화를 목적으로 구축되었습니다. </p>
      <!-- item start -->
      <div class="box-about" v-for="(about, index) in aboutItem" :key="index">
        <img :src="about.imgUrl" width="842px" height="367px" alt="">
        <em class="about-caption">{{ about.desc }}</em>
        <p class="text-about">{{ about.text }}</p>
      </div>
    </div>
    <div class="section-copyright">
      <small>COPYRIGHT © SK PLANET CO. LTD. ALL RIGHTS RESERVED.</small>
    </div>
  </div>
</template>

<script>
    import about from '../data/about'
    export default {
      data: function () {
        return {
          aboutItem : about.item
        }
      }
    }
</script>
