<template>
  <div class="section-sidebar">
    <h1 class="title-logo">
      <img src="../images/cc-logo.png" width="150" height="40" class="logo-img" alt="Charts CATALOG">
    </h1>
    <button type="button" class="btn-fold" v-on:click="selSidebar(toggleBar = !toggleBar)"><span class="icon-fold">메뉴 접기</span></button>
    <div class="box-nav">
      <h2 class="title-navigation">네비게이터</h2>
      <ul class="nav-wrap">
        <li class="on">
          <div class="link-nav" v-on:click="selCate(filterCate(0))" v-scroll-to="'#wrapContainer'">
            <router-link to="/home">
              <span class="nav-icon icon-all"></span>
              <strong class="title-cate">All</strong>
              <span class="count-cate">({{ filteredCount(0).length }})</span>
            </router-link>
          </div>
        </li>
        <li>
          <div class="link-nav" v-on:click="selCate(filterCate(1))" v-scroll-to="'#wrapContainer'">
            <router-link to="/home">
              <span class="nav-icon icon-line"></span>
              <strong class="title-cate">Line Charts</strong>
              <span class="count-cate">({{ filteredCount(1).length }})</span>
            </router-link>
          </div>
        </li>
        <li>
          <div class="link-nav" v-on:click="selCate(filterCate(2))" v-scroll-to="'#wrapContainer'">
            <router-link to="/home">
              <span class="nav-icon icon-area"></span>
              <strong class="title-cate">Area Charts</strong>
              <span class="count-cate">({{ filteredCount(2).length }})</span>
            </router-link>
          </div>
        </li>
        <li>
          <div class="link-nav" v-on:click="selCate(filterCate(3))" v-scroll-to="'#wrapContainer'">
            <router-link to="/home">
              <span class="nav-icon icon-column"></span>
              <strong class="title-cate">Column & Bar Charts</strong>
              <span class="count-cate">({{ filteredCount(3).length }})</span>
            </router-link>
          </div>
        </li>
        <li>
          <div class="link-nav" v-on:click="selCate(filterCate(4))" v-scroll-to="'#wrapContainer'">
            <router-link to="/home">
              <span class="nav-icon icon-pie"></span>
              <strong class="title-cate">Pie Charts</strong>
              <span class="count-cate">({{ filteredCount(4).length }})</span>
            </router-link>
          </div>
        </li>
        <li>
          <div class="link-nav" v-on:click="selCate(filterCate(5))" v-scroll-to="'#wrapContainer'">
            <router-link to="/home">
              <span class="nav-icon icon-scatter"></span>
              <strong class="title-cate">Scatter & Bubble Charts</strong>
              <span class="count-cate">({{ filteredCount(5).length }})</span>
            </router-link>
          </div>
        </li>
        <li>
          <div class="link-nav" v-on:click="selCate(filterCate(6))" v-scroll-to="'#wrapContainer'">
            <router-link to="/home">
              <span class="nav-icon icon-combinations"></span>
              <strong class="title-cate">Combinations</strong>
              <span class="count-cate">({{ filteredCount(6).length }})</span>
            </router-link>
          </div>
        </li>
        <li>
          <div class="link-nav" v-on:click="selCate(filterCate(7))" v-scroll-to="'#wrapContainer'">
            <router-link to="/home">
              <span class="nav-icon icon-style"></span>
              <strong class="title-cate">Styled mode (CSS styling)</strong>
              <span class="count-cate">({{ filteredCount(7).length }})</span>
            </router-link>
          </div>
        </li>
        <li>
          <div class="link-nav" v-on:click="selCate(filterCate(8))" v-scroll-to="'#wrapContainer'">
            <router-link to="/home">
              <span class="nav-icon icon-accessible"></span>
              <strong class="title-cate">Accessible Charts</strong>
              <span class="count-cate">({{ filteredCount(8).length }})</span>
            </router-link>
          </div>
        </li>
        <li>
          <div class="link-nav" v-on:click="selCate(filterCate(9))" v-scroll-to="'#wrapContainer'">
            <router-link to="/home">
              <span class="nav-icon icon-dynamic"></span>
              <strong class="title-cate">Dynamic Charts</strong>
              <span class="count-cate">({{ filteredCount(9).length }})</span>
            </router-link>
          </div>
        </li>
        <li>
          <div class="link-nav" v-on:click="selCate(filterCate(10))" v-scroll-to="'#wrapContainer'">
            <router-link to="/home">
              <span class="nav-icon icon-3d"></span>
              <strong class="title-cate">3D Charts</strong>
              <span class="count-cate">({{ filteredCount(10).length }})</span>
            </router-link>
          </div>
        </li>
        <li>
          <div class="link-nav" v-on:click="selCate(filterCate(11))" v-scroll-to="'#wrapContainer'">
            <router-link to="/home">
              <span class="nav-icon icon-gauges"></span>
              <strong class="title-cate">Gauges</strong>
              <span class="count-cate">({{ filteredCount(11).length }})</span>
            </router-link>
          </div>
        </li>
        <li>
          <div class="link-nav" v-on:click="selCate(filterCate(11))" v-scroll-to="'#wrapContainer'">
            <router-link to="/home">
              <span class="nav-icon icon-heat"></span>
              <strong class="title-cate">Heat & Tree Maps</strong>
              <span class="count-cate">({{ filteredCount(11).length }})</span>
            </router-link>
          </div>
        </li>
        <li>
          <div class="link-nav" v-on:click="selCate(filterCate(11))" v-scroll-to="'#wrapContainer'">
            <router-link to="/home">
              <span class="nav-icon icon-more"></span>
              <strong class="title-cate">More Chart Types</strong>
              <span class="count-cate">({{ filteredCount(11).length }})</span>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
    <div class="box-tools">
      <h2 class="title-nav">tools</h2>
      <ul class="nav-tools">
        <li v-on:click="selTools"  v-scroll-to="'#line'">
          <router-link to="/home" class="link-nav">
            <span class="tools-icon framer"></span>
            <strong class="title-cate">Rubix Brain</strong>
          </router-link>
        </li>
        <li v-on:click="selTools"  v-scroll-to="'#area'">
          <router-link to="/home" class="link-nav">
            <span class="tools-icon framerx"></span>
            <strong class="title-cate">대기질 모니터링 솔루션</strong>
          </router-link>
        </li>
        <li v-on:click="selTools"  v-scroll-to="'#lottie'">
          <router-link to="/home" class="link-nav">
            <span class="tools-icon lottie"></span>
            <strong class="title-cate">DMP</strong>
          </router-link>
        </li>
        <li v-on:click="selTools"  v-scroll-to="'#principle'">
          <router-link to="/home" class="link-nav">
            <span class="tools-icon principle"></span>
            <strong class="title-cate">Appmon</strong>
          </router-link>
        </li>
        <!-- <li v-on:click="selTools"  v-scroll-to="'#sketch'">
          <router-link to="/home" class="link-nav">
            <span class="tools-icon sketch"></span>
            <strong class="title-cate">Sketch</strong>
          </router-link>
        </li>
        <li v-on:click="selTools"  v-scroll-to="'#html'">
          <router-link to="/home" class="link-nav">
            <span class="tools-icon HTML"></span>
            <strong class="title-cate">HTML</strong>
          </router-link>
        </li> -->
      </ul>
    </div>
    <div class="box-tools">
      <a href="https://cloud.highCharts.com/create" target="_blank"><img src="../images/btn-highcarts.png" width="240" height="60" class=".btn-hightCharts" alt="HightCharts Cloud"></a>
    </div>
    
    <div class="service-copyright">
      <img src="../images/sk-planet-logo@2x.png" width="72" height="34" alt="">
      <small>COPYRIGHT © SK PLANET CO.<br> LTD. ALL RIGHTS RESERVED.</small>
    </div>
  </div>
</template>

<script>
  import { BUS } from '../js/eventBus'
  import itemList from '../data/itemList'
    export default {
      name: "side-bar",
      data : function(){
        return {
          toggleBar: false,
          typeItem : itemList.typeList,
          toolItem : itemList.item,
          lineItem : itemList.item.line,
          areaItem : itemList.item.area,
          lottieItem : itemList.item.lottie,
          principleItem : itemList.item.principle,
          sketchItem : itemList.item.sketch,
          htmlItem : itemList.item.html,
        }
      },
      methods: {
        selTools : function(){
          BUS.$emit('toolsBus',false)
        },
        receivetoggleBarBus : function(e){
          return this.toggleBar = e;
        },
        selCate : function(cate){
          BUS.$emit('cateBus',cate)
        },
        selTags: function(tags){
          BUS.$emit('tagBus',tags);
        },
        selSidebar: function(e){
          BUS.$emit('sidebarBus',e);
        },
        filterCate : function(cate){
          return cate
        },
        filteredCount: function(e) {
          let allItem = this.lineItem.concat(this.areaItem,this.lottieItem,this.principleItem,this.sketchItem,this.htmlItem)
          if(e == 0){
            return allItem
          } else if (e == 1) {
            return allItem.filter(function(i){return i.type == 1})
          } else if (e == 2) {
            return allItem.filter(function(i){return i.type == 2})
          } else if (e == 3) {
            return allItem.filter(function(i){return i.type == 3})
          } else if (e == 4) {
            return allItem.filter(function(i){return i.type == 4})
          } else if (e == 5) {
            return allItem.filter(function(i){return i.type == 5})
          } else if (e == 6) {
            return allItem.filter(function(i){return i.type == 6})
          } else if (e == 7) {
            return allItem.filter(function(i){return i.type == 7})
          } else if (e == 8) {
            return allItem.filter(function(i){return i.type == 8})
          } else if (e == 9) {
            return allItem.filter(function(i){return i.type == 9})
          } else if (e == 10) {
            return allItem.filter(function(i){return i.type == 10})
          } else if (e == 11) {
            return allItem.filter(function(i){return i.type == 11})
          } else if (e == 12) {
            return allItem.filter(function(i){return i.type == 12})
          } else if (e == 13) {
            return allItem.filter(function(i){return i.type == 13})
          }
        },
        filteredTags : function() {
          let allItem = this.lineItem.concat(this.areaItem,this.lottieItem,this.principleItem,this.sketchItem,this.htmlItem)
          let key = 'tag';
          let tagArray = new Array();
          for(let i =0;i<allItem.length;i++){
            let allTags = Object.assign({},allItem[i][key])
            for (let key of Object.values(allTags)) {
              tagArray.push(key)
            }
          }
          let tagList = tagArray.filter((item,idx,array) => {
            return array.indexOf(item) == idx;
          });
          return tagList
        }
      }
    }
</script>
