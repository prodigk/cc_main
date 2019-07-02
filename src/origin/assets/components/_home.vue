<template>
  <div id="pageHome" v-bind:class="[toggleView ? 'article-content list-view__mockup':'article-content']">
    <div class="section-home" v-show="!showModal">
      <div class="section-update">
      <!-- <h3 class="title-main">CHART CATALOG</h3> -->
    </div>
      <!-- Line Chart 영역 -->
      <div class="view-item" data-tool="line" id="line">
        <div class="list-item">
          <h3 class="title-sub">Line Charts<span class="none-text">목록이 없습니다.</span></h3>
          <h4 class="list-desc">라인 차트는 뷰의 개별 데이터 요소를 연결하고 일련의 값을 시각화하는 간단한 방법을 제공하며, 시간별 추세를 확인하거나 미래 값을 예측하려는 경우에 유용합니다.</h4>
          <div class="list-line"></div>
          <div class="item" v-for="(tools, index) in lineItem" :key="index" v-if="tools.title.includes(searchItem) || tools.tag.includes(searchItem)">
            <a href="javascript:void(0)" class="link-thumb" v-on:click="dataTarget(tools)">
              <span class="bg-phone">
                <span class="box-gif" v-bind:style="{ 'background-image': 'url(' + tools.gifImg + ')' }">
                </span>
                <span class="box-photo" v-bind:style="{ 'background-image': 'url(' + tools.jpgImg + ')' }">
                </span>
              </span>
              <span class="box-thumb" v-bind:style="{ 'background-image': 'url(' + tools.jpgImg_s + ')' }"></span>
              <span class="box-detail">VIEW MORE</span>
            </a>
            <span class="text-cate"> </span>
            <strong class="title-item">{{ tools.title }}</strong>
            <!--
            <p class="text-desc">{{ tools.desc }}</p>
            <p class="text-type">{{ tools.used }}</p>
            <a v-bind:href="tools.url" class="link-example" target="_blank">{{ tools.url }}</a>
            <ul class="wrap-tag">
              <li v-for="tags in tools.tag" :key="tags">
                <a href="javascript:void(0)" class="link-tag" v-bind:value="tags" v-bind:class="[searchItem == tags ? 'on-tag': '']" v-on:click="searchTag(tags)" v-scroll-to="'#wrapContainer'">{{ tags }}</a>
              </li>
            </ul>-->
          </div>
        </div>
      </div>
      <!-- Area Chart 영역 -->
      <div class="view-item" data-tool="area" id="area">
        <div class="list-item">
          <h3 class="title-sub">Area Charts<span class="none-text">목록이 없습니다.</span></h3>
          <h4 class="list-desc">라인 차트는 뷰의 개별 데이터 요소를 연결하고 일련의 값을 시각화하는 간단한 방법을 제공하며, 시간별 추세를 확인하거나 미래 값을 예측하려는 경우에 유용합니다.</h4>
          <div class="list-line"></div>
          <div class="item" v-for="(tools, index) in areaItem" :key="index" v-if="tools.title.includes(searchItem) || tools.tag.includes(searchItem)">
            <a href="javascript:void(0)" class="link-thumb" v-on:click="dataTarget(tools)">
              <span class="bg-phone">
                <span class="box-gif" v-bind:style="{ 'background-image': 'url(' + tools.gifImg + ')' }">
                </span>
                <span class="box-photo" v-bind:style="{ 'background-image': 'url(' + tools.jpgImg + ')' }">
                </span>
              </span>
              <span class="box-thumb" v-bind:style="{ 'background-image': 'url(' + tools.jpgImg_s + ')' }"></span>
              <span class="box-detail">VIEW MORE</span>
            </a>
            <span class="text-cate"> </span>
            <strong class="title-item">{{ tools.title }}</strong>
            <!--
            <p class="text-desc">{{ tools.desc }}</p>
            <p class="text-type">{{ tools.used }}</p>
            <a v-bind:href="tools.url" class="link-example" target="_blank">{{ tools.url }}</a>
            <ul class="wrap-tag">
              <li v-for="tags in tools.tag" :key="tags">
                <a href="javascript:void(0)" class="link-tag" v-bind:value="tags" v-bind:class="[searchItem == tags ? 'on-tag': '']" v-on:click="searchTag(tags)" v-scroll-to="'#wrapContainer'">{{ tags }}</a>
              </li>
            </ul>-->
          </div>
        </div>
      </div>
    </div>
    <!-- 상세보기 페이지 -->
    <div class="modal" v-if="showModal">
      <div class="modal-cont">
        <span class="text-cate">{{ modalType }}</span>
        <div class="title">
          <strong class="title-item">{{ modalTitle }}</strong>
          <!-- <ul class="wrap-tag">
            <li v-for="tags in modalTag" :key="tags">
              <span class="link-tag on-tag">{{ tags }}</span>
            </li>
          </ul> -->
        </div>
        <p class="text-desc">{{ modalDesc }}</p>
        <p class="text-type">{{ modalUsed }}</p>
        <div class="detail-cont">
          <div class="detail-graph">
            <span class="bg-graph">
              <span class="box-gif" v-bind:style="{ 'background-image': 'url(' + modalImg + ')' }"></span>
            </span>
            <!-- <a v-bind:href="modalUrl" class="link-example" target="_blank">{{ modalUrl }}</a> -->
          </div>
          <div class="detail-code" v-html="modalSource"></div>
        </div>
        <a href="javascript:void(0)" class="link-close" v-on:click="modalClose">
          <img src="../images/ic-back@2x.png" alt="닫기">
        </a>
      </div>
    </div>
  </div>
</template>

// 목업 / 이미지 토글
<script>
  import { BUS } from '../js/eventBus'
  import itemList from '../data/itemList'
    export default {
      data : function(){
        return {
          searchItem:'',
          toggleView:true,
          toggleTag:false,
          typeItem : itemList.typeList,
          lineItem : itemList.item.line,
          areaItem : itemList.item.area,
          lottieItem : itemList.item.lottie,
          principleItem : itemList.item.principle,
          sketchItem : itemList.item.sketch,
          htmlItem : itemList.item.html,
          isFocus : false,
          text:'',
          showModal: false,
          modalTitle : '',modalDesc : '',modalUsed:'',modalType:'',modalTag:[],modalImg:'',modalSource:'',modalUrl:''
        }
      },
      created(){
        BUS.$on('tagBus', this.receiveTag),
        BUS.$on('cateBus', this.receiveCate)
        BUS.$on('toolsBus', this.receiveTools)
      },
      methods : {
        resetList() {
          this.lineItem=itemList.item.line,
          this.areaItem=itemList.item.area,
          this.lottieItem=itemList.item.lottie,
          this.principleItem=itemList.item.principle,
          this.sketchItem=itemList.item.sketch,
          this.htmlItem=itemList.item.html,
          this.searchItem='',
          this.isFocus = false
        },
        receiveTools(e){
          return this.showModal = e;
        },
        receiveCate(cate) {
          this.resetList();
          this.showModal = false;
          if(cate == 0){
          } else {
            return this.lineItem = this.lineItem.filter(function(e){return e.type == cate}),
                    this.areaItem = this.areaXItem.filter(function(e){return e.type == cate}),
                    this.lottieItem = this.lottieItem.filter(function(e){return e.type == cate}),
                    this.principleItem = this.principleItem.filter(function(e){return e.type == cate}),
                    this.sketchItem = this.sketchItem.filter(function(e){return e.type == cate}),
                    this.htmlItem = this.htmlItem.filter(function(e){return e.type == cate})
          }
        },
        receiveTag(tags) {
          return this.searchItem = tags, this.isFocus = true, this.showModal = false
        },
        onBlur : function(){
          let searchBoxInp = document.getElementById('searchInp').value;
          if(searchBoxInp == ""|| searchBoxInp==null) {
            return false
          } else {
            return true
          }
        },
        onFocus :function(){
          return true
        },
        searchTag: function (tagName) {
          return this.searchItem = tagName, this.isFocus = true
        },
        searchDel : function(){
          return this.searchItem = '', this.isFocus = false
        },
        dataTarget : function(e){
          this.modalFunc();
          this.modalTitle = e.title,
          this.modalDesc = e.desc,
          this.modalUsed = e.used,
          this.modalTag = e.tag,
          this.modalType = this.typeItem[e.type];
          this.modalImg = e.gifImg;
          this.modalSource = e.source;
          this.modalUrl = e.url;
        },
        modalFunc : function(){
          window.scrollTo(0,0);
          BUS.$emit('toggleBarBus',true);
          return this.showModal = true;
        },
        modalClose : function(){
          BUS.$emit('toggleBarBus',false);
          this.showModal = false
        }
      }
    }
</script>
