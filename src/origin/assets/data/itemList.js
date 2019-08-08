const itemList = {
  typeList: {
    // 카테고리 리스트
    0: "All",
    1: "Line Charts",
    2: "Area Charts",
    3: "Column & Bar Charts",
    4: "Pie Charts",
    5: "Scatter & Bubble Charts",
    6: "Combinations",
    7: "Styled mode (CSS Styling)",
    8: "Accessible Charts",
    9: "Dynamic Charts",
    10: "3D Charts",
    11: "Gauges",
    12: "Heat & Tree Maps",
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
          "시간의 경과에 따른 데이터 추세를 살펴볼 때 사용합니다.",
        used: "C.link / 대기질 모니터링 시스템",
        url: "-",
        date: "2018-4-20",
        tag: ["#line"],
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
        "시간의 경과에 따른 데이터 추세를 살펴볼 때 사용합니다.",
        used: "C.link / 대기질 모니터링 시스템",
        url: "-",
        date: "2018-4-20",
        tag: ["#line"],
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
        "시간의 경과에 따른 데이터 추세를 살펴볼 때 사용합니다.",
        used: "C.link / 대기질 모니터링 시스템",
        url: "-",
        date: "2018-4-20",
        tag: ["#line"],
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
        "시간의 경과에 따른 데이터 추세를 살펴볼 때 사용합니다.",
        used: "C.link / 대기질 모니터링 시스템",
        url: "-",
        date: "2018-4-20",
        tag: ["#line"],
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
        "시간의 경과에 따른 데이터 추세를 살펴볼 때 사용합니다.",
        used: "C.link / 대기질 모니터링 시스템",
        url: "-",
        date: "2018-4-20",
        tag: ["#line"],
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
        "시간의 경과에 따른 데이터 추세를 살펴볼 때 사용합니다.",
        used: "C.link / 대기질 모니터링 시스템",
        url: "-",
        date: "2018-4-20",
        tag: ["#line"],
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
        "특성을 대략적으로 파악할 때 사용합니다",
        used: "RB Insight / 대기질 모니터링 시스템",
        url: "-",
        date: "2018-4-20",
        tag: ["#area"],
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
        "특성을 대략적으로 파악할 때 사용합니다",
        used: "RB Insight / 대기질 모니터링 시스템",
        url: "-",
        date: "2018-4-20",
        tag: ["#area"],
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
        "특성을 대략적으로 파악할 때 사용합니다",
        used: "RB Insight / 대기질 모니터링 시스템",
        url: "-",
        date: "2018-4-20",
        tag: ["#area"],
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
        "특성을 대략적으로 파악할 때 사용합니다",
        used: "RB Insight / 대기질 모니터링 시스템",
        url: "-",
        date: "2018-4-20",
        tag: ["#area"],
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
        "특성을 대략적으로 파악할 때 사용합니다",
        used: "RB Insight / 대기질 모니터링 시스템",
        url: "-",
        date: "2018-4-20",
        tag: ["#area"],
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
        "특성을 대략적으로 파악할 때 사용합니다",
        used: "RB Insight / 대기질 모니터링 시스템",
        url: "-",
        date: "2018-4-20",
        tag: ["#area"],
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
        "시간의 경과에 따른 데이터의 변동을 표시하거나 항목을 비교할 때 씁니다.",
        used: "ADT Capstec / DMP",
        url: "-",
        date: "2018-4-20",
        tag: ["#bar"],
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
        "시간의 경과에 따른 데이터의 변동을 표시하거나 항목을 비교할 때 씁니다.",
        used: "ADT Capstec / DMP",
        url: "-",
        date: "2018-4-20",
        tag: ["#bar"],
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
        "시간의 경과에 따른 데이터의 변동을 표시하거나 항목을 비교할 때 씁니다.",
        used: "ADT Capstec / DMP",
        url: "-",
        date: "2018-4-20",
        tag: ["#bar"],
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
        "시간의 경과에 따른 데이터의 변동을 표시하거나 항목을 비교할 때 씁니다.",
        used: "ADT Capstec / DMP",
        url: "-",
        date: "2018-4-20",
        tag: ["#bar"],
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
        "시간의 경과에 따른 데이터의 변동을 표시하거나 항목을 비교할 때 씁니다.",
        used: "ADT Capstec / DMP",
        url: "-",
        date: "2018-4-20",
        tag: ["#bar"],
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
        "시간의 경과에 따른 데이터의 변동을 표시하거나 항목을 비교할 때 씁니다.",
        used: "ADT Capstec / DMP",
        url: "-",
        date: "2018-4-20",
        tag: ["#bar"],
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
        "시간의 경과에 따른 데이터의 변동을 표시하거나 항목을 비교할 때 씁니다.",
        used: "ADT Capstec / DMP",
        url: "-",
        date: "2018-4-20",
        tag: ["#bar"],
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
        "시간의 경과에 따른 데이터의 변동을 표시하거나 항목을 비교할 때 씁니다.",
        used: "ADT Capstec / DMP",
        url: "-",
        date: "2018-4-20",
        tag: ["#bar"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/pXMjWe/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      }
    ],
    pie: [
      {
        id: 1,
        type: 4,
        title: "01. Pie chart",
        jpgImg: "http://ux.skplanet.com/chart/images/04_pie_01.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/04_pie_thumb_01.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/04_pie_01.jpg",
        desc: 
        "항목을 비율로 표기하므로 항목이 적고 데이터 값들이 차이가 많이 날 때 사용합니다.",
        used: "ADT Capstec / iOT Sensor Solution",
        url: "-",
        date: "2018-4-20",
        tag: ["#pie"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/JQgqMb/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 2,
        type: 4,
        title: "02. Pie with legend",
        jpgImg: "http://ux.skplanet.com/chart/images/04_pie_02.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/04_pie_thumb_02.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/04_pie_02.jpg",
        desc: 
        "항목을 비율로 표기하므로 항목이 적고 데이터 값들이 차이가 많이 날 때 사용합니다.",
        used: "ADT Capstec / iOT Sensor Solution",
        url: "-",
        date: "2018-4-20",
        tag: ["#pie"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/ewqajp/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 3,
        type: 4,
        title: "03. Donut chart",
        jpgImg: "http://ux.skplanet.com/chart/images/04_pie_03.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/04_pie_thumb_03.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/04_pie_03.jpg",
        desc: 
        "항목을 비율로 표기하므로 항목이 적고 데이터 값들이 차이가 많이 날 때 사용합니다.",
        used: "ADT Capstec / iOT Sensor Solution",
        url: "-",
        date: "2018-4-20",
        tag: ["#pie"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/ydmWQy/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 4,
        type: 4,
        title: "04. Semi circle donut",
        jpgImg: "http://ux.skplanet.com/chart/images/04_pie_04.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/04_pie_thumb_04.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/04_pie_04.jpg",
        desc: 
        "항목을 비율로 표기하므로 항목이 적고 데이터 값들이 차이가 많이 날 때 사용합니다.",
        used: "ADT Capstec / iOT Sensor Solution",
        url: "-",
        date: "2018-4-20",
        tag: ["#pie"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/WqVBYB/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 5,
        type: 4,
        title: "05. Pie with drilldown",
        jpgImg: "http://ux.skplanet.com/chart/images/04_pie_05.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/04_pie_thumb_05.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/04_pie_05.jpg",
        desc: 
        "항목을 비율로 표기하므로 항목이 적고 데이터 값들이 차이가 많이 날 때 사용합니다.",
        used: "ADT Capstec / iOT Sensor Solution",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/ydmWZy/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 6,
        type: 4,
        title: "06. Pie with monochrome fill",
        jpgImg: "http://ux.skplanet.com/chart/images/04_pie_06.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/04_pie_thumb_06.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/04_pie_06.jpg",
        desc: 
        "항목을 비율로 표기하므로 항목이 적고 데이터 값들이 차이가 많이 날 때 사용합니다.",
        used: "ADT Capstec / iOT Sensor Solution",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/zVgQVN/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 7,
        type: 4,
        title: "07. Variable radius pie",
        jpgImg: "http://ux.skplanet.com/chart/images/04_pie_07.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/04_pie_thumb_07.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/04_pie_07.jpg",
        desc: 
        "항목을 비율로 표기하므로 항목이 적고 데이터 값들이 차이가 많이 날 때 사용합니다.",
        used: "ADT Capstec / iOT Sensor Solution",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/NZQVQZ/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      }
    ],
    scatter: [
      {
        id: 1,
        type: 5,
        title: "01. Scatter plot",
        jpgImg: "http://ux.skplanet.com/chart/images/05_scatter_01.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/05_scatter_thumb_01.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/05_scatter_01.jpg",
        desc: 
        "항목을 비율로 표기하므로 항목이 적고 데이터 값들이 차이가 많이 날 때 사용합니다.",
        used: "ADT Capstec / iOT Sensor Solution",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/xovogp/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 2,
        type: 5,
        title: "02. Bubble chart",
        jpgImg: "http://ux.skplanet.com/chart/images/05_scatter_02.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/05_scatter_thumb_02.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/05_scatter_02.jpg",
        desc: 
        "항목을 비율로 표기하므로 항목이 적고 데이터 값들이 차이가 많이 날 때 사용합니다.",
        used: "ADT Capstec / iOT Sensor Solution",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/gNVNWJ/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      }
    ],
    combinations: [
      {
        id: 1,
        type: 6,
        title: "01. Synchronized charts",
        jpgImg: "http://ux.skplanet.com/chart/images/06_combinations_01.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/06_combinations_thumb_01.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/06_combinations_01.jpg",
        desc: 
        "항목을 비율로 표기하므로 항목이 적고 데이터 값들이 차이가 많이 날 때 사용합니다.",
        used: "ADT Capstec / iOT Sensor Solution",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/PrMrOM/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 2,
        type: 6,
        title: "02. Column, line and pie",
        jpgImg: "http://ux.skplanet.com/chart/images/06_combinations_02.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/06_combinations_thumb_02.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/06_combinations_02.jpg",
        desc: 
        "항목을 비율로 표기하므로 항목이 적고 데이터 값들이 차이가 많이 날 때 사용합니다.",
        used: "ADT Capstec / iOT Sensor Solution",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/mZNZpg/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 3,
        type: 6,
        title: "03. Dual axes, line and column",
        jpgImg: "http://ux.skplanet.com/chart/images/06_combinations_03.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/06_combinations_thumb_03.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/06_combinations_03.jpg",
        desc: 
        "항목을 비율로 표기하므로 항목이 적고 데이터 값들이 차이가 많이 날 때 사용합니다.",
        used: "ADT Capstec / iOT Sensor Solution",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/MMNNwr/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 4,
        type: 6,
        title: "04. Multiple axes",
        jpgImg: "http://ux.skplanet.com/chart/images/06_combinations_04.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/06_combinations_thumb_04.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/06_combinations_04.jpg",
        desc: 
        "항목을 비율로 표기하므로 항목이 적고 데이터 값들이 차이가 많이 날 때 사용합니다.",
        used: "ADT Capstec / iOT Sensor Solution",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/JQggdx/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      }
    ],
    styled: [
      {
        id: 1,
        type: 7,
        title: "01. Styled mode column",
        jpgImg: "http://ux.skplanet.com/chart/images/07_styled_01.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/07_styled_thumb_01.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/07_styled_01.jpg",
        desc: 
        "항목을 비율로 표기하므로 항목이 적고 데이터 값들이 차이가 많이 날 때 사용합니다.",
        used: "ADT Capstec / iOT Sensor Solution",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/QeLwMO/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 2,
        type: 7,
        title: "02. Styled mode pie",
        jpgImg: "http://ux.skplanet.com/chart/images/07_styled_02.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/07_styled_thumb_02.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/07_styled_02.jpg",
        desc: 
        "항목을 비율로 표기하므로 항목이 적고 데이터 값들이 차이가 많이 날 때 사용합니다.",
        used: "ADT Capstec / iOT Sensor Solution",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/voBEeN/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      }
    ],
    accessible: [
      {
        id: 1,
        type: 8,
        title: "01. Accessible line chart",
        jpgImg: "http://ux.skplanet.com/chart/images/08_accessible_01.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/08_accessible_thumb_01.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/08_accessible_01.jpg",
        desc: 
        "항목을 비율로 표기하므로 항목이 적고 데이터 값들이 차이가 많이 날 때 사용합니다.",
        used: "ADT Capstec / iOT Sensor Solution",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/QeLwMO/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 2,
        type: 8,
        title: "02. Accessible pie chart",
        jpgImg: "http://ux.skplanet.com/chart/images/08_accessible_02.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/08_accessible_thumb_02.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/08_accessible_02.jpg",
        desc: 
        "항목을 비율로 표기하므로 항목이 적고 데이터 값들이 차이가 많이 날 때 사용합니다.",
        used: "ADT Capstec / iOT Sensor Solution",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/ZgzYaM/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      }
    ],
    dynamic: [
      {
        id: 1,
        type: 9,
        title: "01. Spline updating each second",
        jpgImg: "http://ux.skplanet.com/chart/images/09_dynamic_01.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/09_dynamic_thumb_01.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/09_dynamic_01.jpg",
        desc: 
        "항목을 비율로 표기하므로 항목이 적고 데이터 값들이 차이가 많이 날 때 사용합니다.",
        used: "ADT Capstec / iOT Sensor Solution",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/gVYbvL/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 2,
        type: 9,
        title: "02. Click to add a point",
        jpgImg: "http://ux.skplanet.com/chart/images/09_dynamic_02.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/09_dynamic_thumb_02.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/09_dynamic_02.jpg",
        desc: 
        "항목을 비율로 표기하므로 항목이 적고 데이터 값들이 차이가 많이 날 때 사용합니다.",
        used: "ADT Capstec / iOT Sensor Solution",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/GVKgdN/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 3,
        type: 9,
        title: "03. Update options after render",
        jpgImg: "http://ux.skplanet.com/chart/images/09_dynamic_03.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/09_dynamic_thumb_03.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/09_dynamic_03.jpg",
        desc: 
        "항목을 비율로 표기하므로 항목이 적고 데이터 값들이 차이가 많이 날 때 사용합니다.",
        used: "ADT Capstec / iOT Sensor Solution",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/MNgYZz/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      }
    ],
    d3: [
      {
        id: 1,
        type: 10,
        title: "01. 3D column",
        jpgImg: "http://ux.skplanet.com/chart/images/10_3d_01.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/10_3d_thumb_01.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/10_3d_01.jpg",
        desc: 
        "항목을 비율로 표기하므로 항목이 적고 데이터 값들이 차이가 많이 날 때 사용합니다.",
        used: "ADT Capstec / iOT Sensor Solution",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/RXbPag/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 2,
        type: 10,
        title: "3D funnel",
        jpgImg: "http://ux.skplanet.com/chart/images/10_3d_02.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/10_3d_thumb_02.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/10_3d_02.jpg",
        desc: 
        "항목을 비율로 표기하므로 항목이 적고 데이터 값들이 차이가 많이 날 때 사용합니다.",
        used: "ADT Capstec / iOT Sensor Solution",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/mNbJrB/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 3,
        type: 10,
        title: "03. 3D column with stacking and grouping",
        jpgImg: "http://ux.skplanet.com/chart/images/10_3d_03.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/10_3d_thumb_03.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/10_3d_03.jpg",
        desc: 
        "항목을 비율로 표기하므로 항목이 적고 데이터 값들이 차이가 많이 날 때 사용합니다.",
        used: "ADT Capstec / iOT Sensor Solution",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/KOPpWE/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      }
    ],
    gauges: [
      {
        id: 1,
        type: 11,
        title: "01. Gauge series",
        jpgImg: "http://ux.skplanet.com/chart/images/11_gauge_01.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/11_gauge_thumb_01.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/11_gauge_01.jpg",
        desc: 
        "항목을 비율로 표기하므로 항목이 적고 데이터 값들이 차이가 많이 날 때 사용합니다.",
        used: "ADT Capstec / iOT Sensor Solution",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/OKLVOE/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 2,
        type: 11,
        title: "Solid gauge",
        jpgImg: "http://ux.skplanet.com/chart/images/11_gauge_02.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/11_gauge_thumb_02.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/11_gauge_02.jpg",
        desc: 
        "항목을 비율로 표기하므로 항목이 적고 데이터 값들이 차이가 많이 날 때 사용합니다.",
        used: "ADT Capstec / iOT Sensor Solution",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/XvrbEm/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      }
    ],
    heatmap: [
      {
        id: 1,
        type: 12,
        title: "01. Heat map",
        jpgImg: "http://ux.skplanet.com/chart/images/12_heatmap_01.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/12_heatmap_thumb_01.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/12_heatmap_01.jpg",
        desc: 
        "항목을 비율로 표기하므로 항목이 적고 데이터 값들이 차이가 많이 날 때 사용합니다.",
        used: "ADT Capstec / iOT Sensor Solution",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/YmKyyv/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 2,
        type: 12,
        title: "02. Large heat map",
        jpgImg: "http://ux.skplanet.com/chart/images/12_heatmap_02.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/12_heatmap_thumb_02.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/12_heatmap_02.jpg",
        desc: 
        "항목을 비율로 표기하므로 항목이 적고 데이터 값들이 차이가 많이 날 때 사용합니다.",
        used: "ADT Capstec / iOT Sensor Solution",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/mNbeMo/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 3,
        type: 12,
        title: "03. Tree map with color axis",
        jpgImg: "http://ux.skplanet.com/chart/images/12_heatmap_03.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/12_heatmap_thumb_03.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/12_heatmap_03.jpg",
        desc: 
        "항목을 비율로 표기하므로 항목이 적고 데이터 값들이 차이가 많이 날 때 사용합니다.",
        used: "ADT Capstec / iOT Sensor Solution",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/YmKyad/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 4,
        type: 12,
        title: "04. Tree map with levels",
        jpgImg: "http://ux.skplanet.com/chart/images/12_heatmap_04.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/12_heatmap_thumb_04.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/12_heatmap_04.jpg",
        desc: 
        "항목을 비율로 표기하므로 항목이 적고 데이터 값들이 차이가 많이 날 때 사용합니다.",
        used: "ADT Capstec / iOT Sensor Solution",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/PMYPaY/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      }
    ],
    more: [
      {
        id: 1,
        type: 13,
        title: "01. Variwide",
        jpgImg: "http://ux.skplanet.com/chart/images/13_more_01.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/13_more_thumb_01.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/13_more_01.jpg",
        desc: 
        "항목을 비율로 표기하므로 항목이 적고 데이터 값들이 차이가 많이 날 때 사용합니다.",
        used: "ADT Capstec / iOT Sensor Solution",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/rXBOgJ/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 2,
        type: 13,
        title: "02. Bell curve",
        jpgImg: "http://ux.skplanet.com/chart/images/13_more_02.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/13_more_thumb_02.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/13_more_02.jpg",
        desc: 
        "항목을 비율로 표기하므로 항목이 적고 데이터 값들이 차이가 많이 날 때 사용합니다.",
        used: "ADT Capstec / iOT Sensor Solution",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/JgPYge/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 3,
        type: 13,
        title: "03. Pyramid chart",
        jpgImg: "http://ux.skplanet.com/chart/images/13_more_03.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/13_more_thumb_03.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/13_more_03.jpg",
        desc: 
        "항목을 비율로 표기하므로 항목이 적고 데이터 값들이 차이가 많이 날 때 사용합니다.",
        used: "ADT Capstec / iOT Sensor Solution",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/JgPGYw/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 4,
        type: 13,
        title: "04. Sankey diagram",
        jpgImg: "http://ux.skplanet.com/chart/images/13_more_04.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/13_more_thumb_04.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/13_more_04.jpg",
        desc: 
        "항목을 비율로 표기하므로 항목이 적고 데이터 값들이 차이가 많이 날 때 사용합니다.",
        used: "ADT Capstec / iOT Sensor Solution",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/wVwMeJ/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 5,
        type: 13,
        title: "05. Word cloud",
        jpgImg: "http://ux.skplanet.com/chart/images/13_more_05.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/13_more_thumb_05.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/13_more_05.jpg",
        desc: 
        "항목을 비율로 표기하므로 항목이 적고 데이터 값들이 차이가 많이 날 때 사용합니다.",
        used: "ADT Capstec / iOT Sensor Solution",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/oKvbGv/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 6,
        type: 13,
        title: "06. Timeline",
        jpgImg: "http://ux.skplanet.com/chart/images/13_more_06.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/13_more_thumb_06.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/13_more_06.jpg",
        desc: 
        "항목을 비율로 표기하므로 항목이 적고 데이터 값들이 차이가 많이 날 때 사용합니다.",
        used: "ADT Capstec / iOT Sensor Solution",
        url: "-",
        date: "2018-4-20",
        tag: ["#-"],
        source:
        '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/OKLMzW/?height=540&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      }
    ],
    lottie: [],
    principle: [
      
    ],
    sketch: [
      
    ],
    html: [
      
    ]
  }
};

export default itemList
