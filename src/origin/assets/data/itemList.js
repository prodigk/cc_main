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
        id: 8,
        type: 1,
        title: "01. Basic line",
        jpgImg: "http://ux.skplanet.com/chart/images/line_img_01.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/line_08.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/line_img_01.jpg",
        desc: 
          "이미지와 배경을 분리하여 트랜지션 적용",
        used: "활용영역 : FAB, 메인화면, 네비게이션",
        url: "//codepen.io/ugen/embed/MRMZvW",
        date: "2018-4-20",
        tag: ["#PageComponent", "#for in", "#Array", "#Utils.modulate", "#states"],
        source:
          '<iframe height="540" style="width: 100%;" scrolling="no" title="Highcharts Sample" src="//codepen.io/ugen/embed/ydKZgM/?height=540&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 7,
        type: 1,
        title: "02. Ajax loaded data, clickable points",
        jpgImg: "http://ux.skplanet.com/chart/images/fs_07.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/line_07.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/f07.gif",
        desc:
          "화면 영역 탭시 다음 스크린으로 이동. 뒤로가기 버튼 탭시 이전페이지로 이동",
        used: "활용영역 : 화면단위 Flow 확인",
        url: "https://framer.cloud/wkZiY",
        date: "2018-4-20",
        tag: ["#FlowComponent"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/PgrXKB/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 6,
        type: 1,
        title: "03. With data labels",
        jpgImg: "http://ux.skplanet.com/chart/images/fs_06.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/line_06.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/f06.gif",
        desc:
          "Appbar+기본 화면 스크린 구현",
        used: "활용영역 : 메인화면, 서브화면, 컨텐츠 피드 리스트",
        url: "https://framer.cloud/oDSkN",
        date: "2018-4-20",
        tag: ["#ScrollComponent"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/NmZeao/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 5,
        type: 1,
        title: "04. Time series, zoomable",
        jpgImg: "http://ux.skplanet.com/chart/images/fs_05.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/line_05.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/f05.gif",
        desc:
          "페이지 스와이프와 탭메뉴 항목 터치로 컨텐츠 영역 이동",
        used: "활용영역 : 메인화면, 서브화면, 탭메뉴",
        url: "https://framer.cloud/GsTEt",
        date: "2018-4-20",
        tag: ["#PageComponent","#for in", "#change:", "#states"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/LvKMOL/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 4,
        type: 1,
        title: "05. Spline with inverted axes",
        jpgImg: "http://ux.skplanet.com/chart/images/fs_04.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/line_04.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/f04.gif",
        desc:
          "하트 탭시 피드백 애니메이션 적용",
        used: "활용영역 : 좋아요, 하트 버튼 터치피드백",
        url: "https://framer.cloud/wocaT",
        date: "2018-4-20",
        tag: ["#states", "#switchInstant", "if else"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/rbEopx/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 3,
        type: 1,
        title: "06. With annotations",
        jpgImg: "http://ux.skplanet.com/chart/images/fs_03.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/line_03.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/f03.gif",
        desc:
          "스플래시 배경 렌덤으로 노출. 5초간 배경 애니메이션 진행후, 홈화면 진입",
        used: "활용영역 : 스플래시 화면",
        url: "https://framer.cloud/dVLZa",
        date: "2018-4-20",
        tag: ["#Array", "#Utils.randomChoice", "Utils.delay"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/WWqLdW/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 2,
        type: 1,
        title: "07. Spline with symbols",
        jpgImg: "http://ux.skplanet.com/chart/images/fs_02.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/line_02.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/f02.gif",
        desc:
          "세로 스크롤 페이지안에서 가로 스크롤 가능",
        used: "활용영역 : 메인화면 스크롤",
        url: "https://framer.cloud/oGUNk",
        date: "2018-4-20",
        tag: ["#ScrollComponent"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/VNJqQr/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 1,
        type: 1,
        title: "08. Spline with plot bands",
        jpgImg: "http://ux.skplanet.com/chart/images/fs_01.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/line_01.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/f01.gif",
        desc:
          "북마크 탭시 피드백 애니메이션 적용. 토글버튼 형태의 컨텐츠 저장 인터랙션",
        used: "활용영역 : 북마크 저장, 찜하기",
        url: "https://framer.cloud/MLuOd",
        date: "2018-4-20",
        tag: ["#states", "#switchInstant", "#if else"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/WWqLMW/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      }
    ],
    area: [
      {
        id: 1,
        type: 2,
        title: "01. Basic area",
        jpgImg: "http://ux.skplanet.com/chart/images/fs_01.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/area_01.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/f01.gif",
        desc:
          "북마크 탭시 피드백 애니메이션 적용. 토글버튼 형태의 컨텐츠 저장 인터랙션",
        used: "활용영역 : 북마크 저장, 찜하기",
        url: "https://framer.cloud/MLuOd",
        date: "2018-4-20",
        tag: ["#states", "#switchInstant", "#if else"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/WWqLMW/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 2,
        type: 2,
        title: "02. Area with negative values",
        jpgImg: "http://ux.skplanet.com/chart/images/fs_01.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/area_02.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/f01.gif",
        desc:
          "북마크 탭시 피드백 애니메이션 적용. 토글버튼 형태의 컨텐츠 저장 인터랙션",
        used: "활용영역 : 북마크 저장, 찜하기",
        url: "https://framer.cloud/MLuOd",
        date: "2018-4-20",
        tag: ["#states", "#switchInstant", "#if else"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/WWqLMW/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 3,
        type: 2,
        title: "03. Stacked area",
        jpgImg: "http://ux.skplanet.com/chart/images/fs_01.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/area_03.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/f01.gif",
        desc:
          "북마크 탭시 피드백 애니메이션 적용. 토글버튼 형태의 컨텐츠 저장 인터랙션",
        used: "활용영역 : 북마크 저장, 찜하기",
        url: "https://framer.cloud/MLuOd",
        date: "2018-4-20",
        tag: ["#states", "#switchInstant", "#if else"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/WWqLMW/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 4,
        type: 2,
        title: "04. Percentage area",
        jpgImg: "http://ux.skplanet.com/chart/images/fs_01.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/area_04.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/f01.gif",
        desc:
          "북마크 탭시 피드백 애니메이션 적용. 토글버튼 형태의 컨텐츠 저장 인터랙션",
        used: "활용영역 : 북마크 저장, 찜하기",
        url: "https://framer.cloud/MLuOd",
        date: "2018-4-20",
        tag: ["#states", "#switchInstant", "#if else"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/WWqLMW/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 5,
        type: 2,
        title: "05. Area with missing points",
        jpgImg: "http://ux.skplanet.com/chart/images/fs_01.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/area_05.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/f01.gif",
        desc:
          "북마크 탭시 피드백 애니메이션 적용. 토글버튼 형태의 컨텐츠 저장 인터랙션",
        used: "활용영역 : 북마크 저장, 찜하기",
        url: "https://framer.cloud/MLuOd",
        date: "2018-4-20",
        tag: ["#states", "#switchInstant", "#if else"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="zbbEXL" src="//codepen.io/ugen/embed/WWqLMW/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      }
    ],
    lottie: [
      {
        id: 5,
        type: 7,
        title: "Spline with inverted axes",
        jpgImg: "http://ux.skplanet.com/chart/images/ls_05.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/lottie_05.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/l05.gif",
        desc:
          "탭을 시작하면 지문인식 형태의 애니메이션 시작, 엔드하면 애니메이션 정지 / 애니메이션이 모두 완료되면 다음 페이지로 이동",
        used: "활용영역 : 인증관련 화면 / 결제화면",
        url: "https://framer.cloud/HgyUQ",
        date: "2018-11-26",
        tag: ["#LottieLayer", "#FlowComponent"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="lottie_05" src="//codepen.io/ugen/embed/vMOmNM/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 4,
        type: 9,
        title: "Time series, zoomable",
        jpgImg: "http://ux.skplanet.com/chart/images/ls_04.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/lt_04.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/l04.gif",
        desc:
          "햄버거 메뉴에서 뒤로가기로 트랜지션 구간 애니메이션 / 전체화면 메뉴 노출",
        used: "활용영역 : 햄버거 메뉴 / 카테고리 메뉴",
        url: "https://framer.cloud/uaTem",
        date: "2018-11-26",
        tag: ["#LottieLayer", "#states"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="lottie_04"  src="//codepen.io/ugen/embed/JVdNXa/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 3,
        type: 3,
        title: "With data labels",
        jpgImg: "http://ux.skplanet.com/chart/images/ls_03.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/lottie_03.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/l03.gif",
        desc:
          "일러스트 파일을 에프터이펙트에서 Shape 레이어로 변경 / Shape레이어를 스케일 애니메이션 적용",
        used: "활용영역 : 스플래시 / 일러스트 Shape 활용",
        url: "https://framer.cloud/qecgA",
        date: "2018-11-26",
        tag: ["#LottieLayer"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="lottie_03" src="//codepen.io/ugen/embed/BENRLo/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 2,
        type: 7,
        title: "Ajax loaded data, clickable points",
        jpgImg: "http://ux.skplanet.com/chart/images/ls_02.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/lt_02.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/l02.gif",
        desc:
          "라인 애니메이션을 활용한 스플래시 / 하단 버튼 탭시 Pause/Stop 컨트롤",
        used: "활용영역 : 스플래시 / 플레이어",
        url: "https://framer.cloud/phpva",
        date: "2018-11-26",
        tag: ["#LottieLayer", "#states"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="lottie_02" src="//codepen.io/ugen/embed/eoNWgy/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
      },
      {
        id: 1,
        type: 3,
        title: "Basic line",
        jpgImg: "http://ux.skplanet.com/chart/images/ls_01.jpg",
        jpgImg_s: "http://ux.skplanet.com/chart/images/lt_01.jpg",
        gifImg: "http://ux.skplanet.com/chart/images/l01.gif",
        desc:
          "에프터이펙트로 만든 애니메이션 Lottie json파일을 모듈을 활용하여 프레이머에서 테스트 가능하게 제작",
        used: "활용영역 : 스플래시 / 애니메이션",
        url: "https://framer.cloud/vvVaY",
        date: "2018-11-26",
        tag: ["#LottieLayer"],
        source:
          '<iframe height="800" style="width: 100%;" scrolling="no" title="lottie_01" src="//codepen.io/ugen/embed/NmqjpR/?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>'
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
