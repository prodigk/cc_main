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
  
          </div>
        </div>
      </div>
      <!-- Area Chart 영역 끝 -->
      <!-- Bar Chart 영역 -->
      <div class="view-item" data-tool="bar" id="bar">
        <div class="list-item">
          <h3 class="title-sub">Column & Bar Charts<span class="none-text">목록이 없습니다.</span></h3>
          <h4 class="list-desc">라인 차트는 뷰의 개별 데이터 요소를 연결하고 일련의 값을 시각화하는 간단한 방법을 제공하며, 시간별 추세를 확인하거나 미래 값을 예측하려는 경우에 유용합니다.</h4>
          <div class="list-line"></div>
          <div class="item" v-for="(tools, index) in barItem" :key="index" v-if="tools.title.includes(searchItem) || tools.tag.includes(searchItem)">
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
   
          </div>
        </div>
      </div>
      <!-- Bar Chart 영역 끝 -->
      <!-- Pie Chart 영역 -->
      <div class="view-item" data-tool="pie" id="pie">
        <div class="list-item">
          <h3 class="title-sub">Pie Charts<span class="none-text">목록이 없습니다.</span></h3>
          <h4 class="list-desc">라인 차트는 뷰의 개별 데이터 요소를 연결하고 일련의 값을 시각화하는 간단한 방법을 제공하며, 시간별 추세를 확인하거나 미래 값을 예측하려는 경우에 유용합니다.</h4>
          <div class="list-line"></div>
          <div class="item" v-for="(tools, index) in pieItem" :key="index" v-if="tools.title.includes(searchItem) || tools.tag.includes(searchItem)">
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
   
          </div>
        </div>
      </div>
      <!-- Pie Chart 영역 끝 -->
      <!-- Scatter Chart 영역 -->
      <div class="view-item" data-tool="scatter" id="scatter">
        <div class="list-item">
          <h3 class="title-sub">Scatter & Bubble Charts<span class="none-text">목록이 없습니다.</span></h3>
          <h4 class="list-desc">라인 차트는 뷰의 개별 데이터 요소를 연결하고 일련의 값을 시각화하는 간단한 방법을 제공하며, 시간별 추세를 확인하거나 미래 값을 예측하려는 경우에 유용합니다.</h4>
          <div class="list-line"></div>
          <div class="item" v-for="(tools, index) in scatterItem" :key="index" v-if="tools.title.includes(searchItem) || tools.tag.includes(searchItem)">
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
     
          </div>
        </div>
      </div>
      <!-- Scatter Chart 영역 끝 -->
      <!-- Combinations Chart 영역 -->
      <div class="view-item" data-tool="combinations" id="combinations">
        <div class="list-item">
          <h3 class="title-sub">Combinations<span class="none-text">목록이 없습니다.</span></h3>
          <h4 class="list-desc">라인 차트는 뷰의 개별 데이터 요소를 연결하고 일련의 값을 시각화하는 간단한 방법을 제공하며, 시간별 추세를 확인하거나 미래 값을 예측하려는 경우에 유용합니다.</h4>
          <div class="list-line"></div>
          <div class="item" v-for="(tools, index) in combinationsItem" :key="index" v-if="tools.title.includes(searchItem) || tools.tag.includes(searchItem)">
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
      
          </div>
        </div>
      </div>
      <!-- Combinations 영역 끝 -->
      <!-- styled Chart 영역 -->
      <div class="view-item" data-tool="styled" id="styled">
        <div class="list-item">
          <h3 class="title-sub">Styled mode (CSS styling)<span class="none-text">목록이 없습니다.</span></h3>
          <h4 class="list-desc">라인 차트는 뷰의 개별 데이터 요소를 연결하고 일련의 값을 시각화하는 간단한 방법을 제공하며, 시간별 추세를 확인하거나 미래 값을 예측하려는 경우에 유용합니다.</h4>
          <div class="list-line"></div>
          <div class="item" v-for="(tools, index) in styledItem" :key="index" v-if="tools.title.includes(searchItem) || tools.tag.includes(searchItem)">
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
   
          </div>
        </div>
      </div>
      <!-- styled 영역 끝 -->
      <!-- accessible Chart 영역 -->
      <div class="view-item" data-tool="accessible" id="accessible">
        <div class="list-item">
          <h3 class="title-sub">Accessible Charts<span class="none-text">목록이 없습니다.</span></h3>
          <h4 class="list-desc">라인 차트는 뷰의 개별 데이터 요소를 연결하고 일련의 값을 시각화하는 간단한 방법을 제공하며, 시간별 추세를 확인하거나 미래 값을 예측하려는 경우에 유용합니다.</h4>
          <div class="list-line"></div>
          <div class="item" v-for="(tools, index) in accessibleItem" :key="index" v-if="tools.title.includes(searchItem) || tools.tag.includes(searchItem)">
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

          </div>
        </div>
      </div>
      <!-- accessible 영역 끝 -->
      <!-- dynamic Chart 영역 -->
      <div class="view-item" data-tool="dynamic" id="dynamic">
        <div class="list-item">
          <h3 class="title-sub">Dynamic Charts<span class="none-text">목록이 없습니다.</span></h3>
          <h4 class="list-desc">라인 차트는 뷰의 개별 데이터 요소를 연결하고 일련의 값을 시각화하는 간단한 방법을 제공하며, 시간별 추세를 확인하거나 미래 값을 예측하려는 경우에 유용합니다.</h4>
          <div class="list-line"></div>
          <div class="item" v-for="(tools, index) in dynamicItem" :key="index" v-if="tools.title.includes(searchItem) || tools.tag.includes(searchItem)">
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
          
          </div>
        </div>
      </div>
      <!-- dynamic 영역 끝 -->
      <!-- 3D영역 -->
      <div class="view-item" data-tool="d3" id="d3">
        <div class="list-item">
          <h3 class="title-sub">3D Charts<span class="none-text">목록이 없습니다.</span></h3>
          <h4 class="list-desc">라인 차트는 뷰의 개별 데이터 요소를 연결하고 일련의 값을 시각화하는 간단한 방법을 제공하며, 시간별 추세를 확인하거나 미래 값을 예측하려는 경우에 유용합니다.</h4>
          <div class="list-line"></div>
          <div class="item" v-for="(tools, index) in d3Item" :key="index" v-if="tools.title.includes(searchItem) || tools.tag.includes(searchItem)">
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

          </div>
        </div>
      </div>
      <!-- 3D 영역 끝 -->
      <!-- Gauge영역 -->
      <div class="view-item" data-tool="gauges" id="gauges">
        <div class="list-item">
          <h3 class="title-sub">Gauges<span class="none-text">목록이 없습니다.</span></h3>
          <h4 class="list-desc">게이지는 뷰의 개별 데이터 요소를 연결하고 일련의 값을 시각화하는 간단한 방법을 제공하며, 시간별 추세를 확인하거나 미래 값을 예측하려는 경우에 유용합니다.</h4>
          <div class="list-line"></div>
          <div class="item" v-for="(tools, index) in gaugesItem" :key="index" v-if="tools.title.includes(searchItem) || tools.tag.includes(searchItem)">
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

          </div>
        </div>
      </div>
      <!-- Gauge 영역 끝 -->
      <!-- Heatmap영역 -->
      <div class="view-item" data-tool="heatmap" id="heatmap">
        <div class="list-item">
          <h3 class="title-sub"> Heat & Tree Maps<span class="none-text">목록이 없습니다.</span></h3>
          <h4 class="list-desc">라인 차트는 뷰의 개별 데이터 요소를 연결하고 일련의 값을 시각화하는 간단한 방법을 제공하며, 시간별 추세를 확인하거나 미래 값을 예측하려는 경우에 유용합니다.</h4>
          <div class="list-line"></div>
          <div class="item" v-for="(tools, index) in heatmapItem" :key="index" v-if="tools.title.includes(searchItem) || tools.tag.includes(searchItem)">
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

          </div>
        </div>
      </div>
      <!-- Heapmap 영역 끝 -->
      <!-- More 영역 -->
      <div class="view-item" data-tool="more" id="more">
        <div class="list-item">
          <h3 class="title-sub"> More Chart Types<span class="none-text">목록이 없습니다.</span></h3>
          <h4 class="list-desc">라인 차트는 뷰의 개별 데이터 요소를 연결하고 일련의 값을 시각화하는 간단한 방법을 제공하며, 시간별 추세를 확인하거나 미래 값을 예측하려는 경우에 유용합니다.</h4>
          <div class="list-line"></div>
          <div class="item" v-for="(tools, index) in moreItem" :key="index" v-if="tools.title.includes(searchItem) || tools.tag.includes(searchItem)">
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

          </div>
        </div>
      </div>
      <!-- More 영역 끝 -->
    
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
          barItem : itemList.item.bar,
          pieItem : itemList.item.pie,
          scatterItem : itemList.item.scatter,
          combinationsItem : itemList.item.combinations,
          styledItem : itemList.item.styled,
          accessibleItem : itemList.item.accessible,
          dynamicItem : itemList.item.dynamic,
          d3Item : itemList.item.d3,
          gaugesItem : itemList.item.gauges,
          heatmapItem : itemList.item.heatmap,
          moreItem : itemList.item.more,
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
          this.barItem=itemList.item.bar,
          this.pieItem=itemList.item.pie,
          this.scatterItem=itemList.item.scatter,
          this.combinationsItem=itemList.item.combinations,
          this.styledItem=itemList.item.styled,
          this.accessibleItem=itemList.item.accessible,
          this.dynamicItem=itemList.item.dynamic,
          this.d3Item=itemList.item.d3,
          this.gaugesItem=itemList.item.gauges,
          this.heatmapItem=itemList.item.heatmap,
          this.moreItem=itemList.item.more,
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
                    this.barItem = this.barItem.filter(function(e){return e.type == cate}),
                    this.pieItem = this.pieItem.filter(function(e){return e.type == cate}),
                    this.scatterItem = this.scatterItem.filter(function(e){return e.type == cate}),
                    this.combinationsItem = this.combinationsItem.filter(function(e){return e.type == cate})
                    this.styledItem = this.styledItem.filter(function(e){return e.type == cate})
                    this.accessibleItem = this.accessibleItem.filter(function(e){return e.type == cate})
                    this.dynamicItem = this.dynamicItem.filter(function(e){return e.type == cate})
                    this.d3Item = this.d3Item.filter(function(e){return e.type == cate})
                    this.gaugesItem = this.gaugesItem.filter(function(e){return e.type == cate})
                    this.heatmapItem = this.heatmapItem.filter(function(e){return e.type == cate})
                    this.moreItem = this.moreItem.filter(function(e){return e.type == cate})
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
