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
          <h4 class="list-desc">영역그래프는 자료의 구분을 쉽게 하기 위해 적절한 색을 칠할 수도 있고 빗살무늬 등의 무늬로 면적을 표시할 수도 있습니다. <br>일반적으로 면적을 표시할 때 채울 색은 일정한 투명도를 가져야 합니다.통명도는 사용자가 서로 부동한 시리즈 간의 중첩 관계를 관찰하도록 도와드립니다.</h4>
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
          <h4 class="list-desc">막대그래프는 조사한 수를 막대로 나타내고 표에 비해 여러 항목의 수량을 전체적으로 비교하기 쉽습니다. <br>사람의 눈은 높이 차이에 민감함으로써 집간 간의 데이터의 차이를 표현할 때, 최고가, 최저가, 종가 모두가 필요할 때 사용 됩니다.</h4>
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
          <h4 class="list-desc">비례 관계를 구성할 때는 파이그래프를 사용하여 전체적인 이미지를 보여주고, 각 부분이 차지하는 전체의 백분율을 나타낼 수 있습니다. <br>
          파이그래프가 최대한 작용하도록 하기 위해서는 6가지 성분을 넘어서는 안됩니다. 사람의 시선은 시계방향으로 관찰하는 것이 상대적으로 익숙하기 때문에 가장 중요한 부분을 12시 위치에 두어야 합니다. <br>만약에 특변한 중요한 부분이 없다면 크기별로 배열하는 것을 고려해야 합니다.</h4>
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
          <h4 class="list-desc">산점도에서 데이터점의 분포를 살펴봄으로써 변수 간의 상관성을 추론할 수 있습니다. <br>변수 간의 상호 관계가 존재하지 않으면 산점도에서는 이산점을 랜덤하게 분포하는 것으로 표현되는 반면에 어떤 연관성이 있으면 대부분의 데이터점은 상대적으로 밀집되어 별도 추세로 나타날 것입니다.</h4>
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
          <h4 class="list-desc">열지도는 지리적 구역에 있는 각 점의 가중치를 나타내고 특별히 하이라이트 형식으로 방문객이 자주 방문하는 영역 및 방문객이 있는 지리적 영역을 표시합니다. 열지도의 색상은 일반적으로 밀도를 의미합니다.</h4>
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
          <h4 class="list-desc">피라미드 차트, 다이어그램, 타임라인, 워드 클라우드 등 특정 차트를 활용하여 목적에 맞는 데이터를 시각화 시킬 때에 효과적입니다.</h4>
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
