const itemList = {
  typeList: {
    // 카테고리 리스트
    0: "All",
    1: "Line Charts",
    2: "Area Charts",
    3: "Column and Bar Charts",
    4: "Pie Charts",
    5: "Scatter and Bubble Charts",
    6: "Combinations",
    7: "Styled Mode (CSS Styling)",
    8: "Accessible Charts",
    9: "Dynamic Charts",
    10: "3D Charts",
    11: "Gauges",
    12: "Heat and Tree Maps",
    13: "More Chart Types"
  },
  item: {
    /*framer: [ // TOOL 명
  {
    id: 인덱스 번호,
    type: 카테고리 번호(위 참조),
    title: 타이틀명,
    jpgImg: 목업 JPG 172*306,
    jpgImg_s: 리스트 JPG 230*210,
    gifImg: 목업,디테일 GIF 322*572,
    desc: 설명,
    used: 활용영역,
    url: 코드 URL,
    date: 날짜,
    tag: ['#태그1', '#태그2'],
    source: iframe URL
  } */
    line: [
      {
        id: 1,
        type: 1,
        title: "01. Basic line",
        jpgImg: "http://ux.skplanet.com/chart/images/01_line_01.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/01_line_thumb_01.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/01_line_01.jpg",
        desc: 
          "-",
        used: "-",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
          '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/qzzZmP/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 2,
        type: 1,
        title: "02. With data labels",
        jpgImg: "http://ux.skplanet.com/chart/images/01_line_02.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/01_line_thumb_02.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/01_line_02.jpg",
        desc: 
          "-",
        used: "-",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
          '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/BggKZb/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 3,
        type: 1,
        title: "03. With annotations",
        jpgImg: "http://ux.skplanet.com/chart/images/01_line_03.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/01_line_thumb_03.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/01_line_03.jpg",
        desc: 
          "-",
        used: "-",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/bPPpmG/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 4,
        type: 1,
        title: "04. Spline with symbols",
        jpgImg: "http://ux.skplanet.com/chart/images/01_line_04.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/01_line_thumb_04.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/01_line_04.jpg",
        desc: 
          "-",
        used: "-",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/JQQXNy/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 5,
        type: 1,
        title: "05. Time data with irregular intervals",
        jpgImg: "http://ux.skplanet.com/chart/images/01_line_05.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/01_line_thumb_05.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/01_line_05.jpg",
        desc: 
          "-",
        used: "-",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/GbbZmY/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 6,
        type: 1,
        title: "06. Line chart with 500k points",
        jpgImg: "http://ux.skplanet.com/chart/images/01_line_06.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/01_line_thumb_06.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/01_line_06.jpg",
        desc: 
          "-",
        used: "-",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/dBBXWL/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      }
    ],
    area: [
      {
        id: 1,
        type: 2,
        title: "01. Basic area",
        jpgImg: "http://ux.skplanet.com/chart/images/02_area_01.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/02_area_thumb_01.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/02_area_01.jpg",
        desc: 
          "-",
        used: "https://codepen.io/ugen/pen/wLLOjW?&editable=true",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/wLLOjW/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 2,
        type: 2,
        title: "02. Area with negative values",
        jpgImg: "http://ux.skplanet.com/chart/images/02_area_02.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/02_area_thumb_02.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/02_area_02.jpg",
        desc: 
          "-",
        used: "-",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/LKKaeM/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 3,
        type: 2,
        title: "03. Stacked area",
        jpgImg: "http://ux.skplanet.com/chart/images/02_area_03.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/02_area_thumb_03.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/02_area_03.jpg",
        desc: 
          "-",
        used: "-",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/mZNdwZ/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 4,
        type: 2,
        title: "04. Percentage area",
        jpgImg: "http://ux.skplanet.com/chart/images/02_area_04.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/02_area_thumb_04.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/02_area_04.jpg",
        desc: 
          "-",
        used: "-",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/zVgYEW/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 5,
        type: 2,
        title: "05. Area-spline",
        jpgImg: "http://ux.skplanet.com/chart/images/02_area_05.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/02_area_thumb_05.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/02_area_05.jpg",
        desc: 
          "-",
        used: "-",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/BgXyZd/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 6,
        type: 2,
        title: "06. Area range and line",
        jpgImg: "http://ux.skplanet.com/chart/images/02_area_06.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/02_area_thumb_06.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/02_area_06.jpg",
        desc: 
          "-",
        used: "-",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/qzeEvZ/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      }
    ],
    bar: [
      {
        id: 1,
        type: 3,
        title: "01. Basic bar",
        jpgImg: "http://ux.skplanet.com/chart/images/03_bar_01.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/03_bar_thumb_01.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/03_bar_01.jpg",
        desc: 
          "-",
        used: "https://codepen.io/ugen/pen/wLLOjW?&editable=true",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/XLvbgd/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 2,
        type: 3,
        title: "02. Stacked bar",
        jpgImg: "http://ux.skplanet.com/chart/images/03_bar_02.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/03_bar_thumb_02.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/03_bar_02.jpg",
        desc: 
          "-",
        used: "-",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/wLVaPN/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 3,
        type: 3,
        title: "03. Basic column",
        jpgImg: "http://ux.skplanet.com/chart/images/03_bar_03.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/03_bar_thumb_03.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/03_bar_03.jpg",
        desc: 
          "-",
        used: "-",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/zVgGJN/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 4,
        type: 3,
        title: "04. Column with negative values",
        jpgImg: "http://ux.skplanet.com/chart/images/03_bar_04.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/03_bar_thumb_04.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/03_bar_04.jpg",
        desc: 
          "-",
        used: "-",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/GbVJzP/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 5,
        type: 3,
        title: "05. Stacked column",
        jpgImg: "http://ux.skplanet.com/chart/images/03_bar_05.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/03_bar_thumb_05.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/03_bar_05.jpg",
        desc: 
          "-",
        used: "-",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/JQgdgM/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 6,
        type: 3,
        title: "06. Area range and lineStacked percentage column",
        jpgImg: "http://ux.skplanet.com/chart/images/03_bar_06.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/03_bar_thumb_06.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/03_bar_06.jpg",
        desc: 
          "-",
        used: "-",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/LKwpEm/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 7,
        type: 3,
        title: "07. Column with drilldown",
        jpgImg: "http://ux.skplanet.com/chart/images/03_bar_07.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/03_bar_thumb_07.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/03_bar_07.jpg",
        desc: 
          "-",
        used: "-",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/dBxYRw/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 8,
        type: 3,
        title: "08. Column range",
        jpgImg: "http://ux.skplanet.com/chart/images/03_bar_08.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/03_bar_thumb_08.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/03_bar_08.jpg",
        desc: 
          "-",
        used: "-",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/pXMjWe/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      }

    ],
    principle: [
      
    ],
    sketch: [
      
    ],
    html: [

    ]
  }
};

export default itemList
