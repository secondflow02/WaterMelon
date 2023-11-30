<div align="center">

![watermelon](https://github.com/secondflow02/WaterMelon/assets/98089768/2437c587-f925-4463-91cd-b3ae3a29f10b)

# WaterMelon

멜론을 참고한 간단한 토이 프로젝트입니다.

---

</div>

### [팀원]

이영록
김진솔
장지영
차필우
최하영
허진욱

### [프로젝트 시작일]

## 23-11-12

## 2023-11-13

- 토이 프로젝트 폴더 구조 생성
  - 공용 컴포넌트와 mainpage의 컴포넌트 생성
  - 페어별 컴포넌트 파트 정하기
  - 토이 프로젝트 폴더 구조 생성
  - 공용 컴포넌트와 mainpage의 컴포넌트 생성
  - 페어별 컴포넌트 파트 정하기

---

## 2023-11-14

- HeaderSearchChart 생성
  - Mock data의 큰 차트를 map을 활용하여 보여주기
  - 급상승 랭킹 / 3초마다 변경하는 로직 짜기
  - useState로 mock data를 받아옴
  - useRef로 인덱스 값과 빈 배열 선어
  - seInterval을 활용하여 3초마다 랭킹을 변경해준다
  - 렌더링 . 시화면에 하나씩 보여주기 위해 return에 clearInterval을 줌
- Footer 생성
  - TopFooter 안 워터멜론 둘러보기 ~ 고객센터 생성
  - Footer에 이용약관 작성
  - 전체적인 CSS정리
- PopularContentsContainer 생성

  - HTML 구조 작성

- 최신 앨범 section 컴포넌트 생성
  - 최신 앨범 데이터 length만큼의 imageBox가 보여지도록 HTML/CSS 적용
- promotions 컴포넌트에 생성
  - 이미지 추가 및 link태그 URL 속성값 적용
    (이미지 파일을 추가하여 경로를 지정하고 싶은데 생각대로 되지 않아서 일단 URL로 연결) -멜론 홈페이지에 개발자 도구를 켜서 Elements를 보면서 하고있습니다

---

## 2023-11-15

- Header에 하위 메뉴 생성
- MainBanner -> (사이트 이벤트를 보여주는 배너) 생성 (평범한 이미지 넣기)
- 하단 공지사항 생성

-리액트로 구현하는것에 힘듦이 있어서 페어에 시간을 두는것 보다 부족한 부분을 더 공부해야겠다 싶어서 진행을 하지
않았습니다

- PopularContentsContainer

  - CSS 적용
  - PopularContents 임시 이미지 링크 적용

- LatestAlbum List가 mockData의 length만큼 보여지기 때문에 6개의 리스트만 보여지도록 수정
- mockData의 image와 singer 데이터 받아오기
- singerName 컴포넌트 CSS 적용
  (이미지 파일을 추가하여 경로를 지정하고 싶은데 생각대로 되지 않아서 일단 URL로 연결)

---

## 2023-11-16

- LatestAlbum 카테고리의 li에 "|" content 추가
- 각 album이 2행 3열로 보여지도록 수정
- 전체 페어별 작업 내용 push > review > merge를 하면서 발생 이슈 해결 (layout 페이지가 제대로 보여지지 않는다 -> 23.11.20 새벽 이슈 해결)

---

## 2023-11-17

- SmallAlbum 컴포넌트 hover 시 해당 앨범의 singer, title 데이터 받아오기
- hover에 대한 CSS 적용 (singer 부분 글자 투명도가 같이 변경됨 - 수정필요)

---

## 2023-11-18

- "<>" 버튼의 기능을 구현하였지만, console은 찍히고 화면에서는 보여지지않아서 다시 해볼 예정
- 최신앨범 hover 시 글자의 투명도가 같이 변경되는 CSS 수정

---

## 2023-11-19

- ContentsData.json 생성
- PopularContentsContainer
- PopularContents 이미지, 타이틀 내용 반영
- watermelon Ticket page 컴포넌트 상세화 (피그마 사용)
- ![image](https://github.com/secondflow02/WaterMelon/assets/142880051/5eba5111-3757-417f-a238-99e6f3a78e68)

---

## 2023-11-20

- PopularContents
  - 이미지 6개로 분할
  - ellipsis CSS 적용
- 페어별 PR, Review 작성
- 페어와 컴포넌트를 나누어 작업한 영역 이미지 위치가 상이하여 css 수정
- mockData를 제대로 받아오지 못하는 것 같아서 SmallAlbum 컴포넌트에 추가하여 관련 코드 수정

- 최신앨범, 전체, 국내, 해외 부분에 포인터 적용
- 국내, 해외 클릭 시 SmallAlbum data를 변경해주려 하였으나, console상으로 보여지지만 화면상으로는 보여지지 않음 (수정 필요)
- "<>" 버튼 클릭 시 SmallAlbum 화면이 6개씩 넘어가도록 로직 추가
- main-components-LargeAlbum.js 에서 useRef로 시간의흐름에따라 index변화
- LargeAlbumData.json에 데이터 변수명 변경및 JS에서 사진 하드 코딩이아닌CSS로 주는거 실패
- HeaderSeachBar 컴포넌트 안에 '급상승' 태그 main페이지로 이동 (watermelon ticket page에는 급상승이 필요없음)
- watermelon 페이지와 watermelon ticket페이지 연동
- watermelon ticket페이지 TicketTopHeader 생성
- watermelon ticket페이지 TicketTopHeaderSideBanner 구성 잡고, 이미지 파일 넣었으나 버튼구현 (미완성)
- watermelon ticket페이지 Header 전체적인 CSS 수정
- ticket page에 concertSlideBanner.js 에서 concertOneBanner.js로 데이터 전송하는 로직(미완성)

---

## 2023-11-21

- mockData 갯수를 smallAlbum으로 보여지는 갯수만큼 나누어 "<>" 버튼으로 보여줄 수 있는 페이지 갯수 관련 로직 추가
- SmallAlbum 컴포넌트 hover 시 title 왼쪽으로 흐르는 animation 적용

## 2023-11-27

- LatestAlbum의 카테고리 및 prev/next 버튼 기능 구현중
  - 카테고리만 클릭하거나 prev/next 버튼만을 클릭하는 경우 이벤트가 작동하지만 카테고리 선택 후 버튼을 클릭하는 경우 해당 영역에 데이터가 나오지 않음
    (데이터가 없는 경우 카테고리가 넘어가도록 수정할 예정)
- src-components-LargeAlbum [<id:#img:#>...]로 export
- main-comonents-LargeAbum 사진 컴포넌트 및 index버튼 state값추가전
- concertSlideBanner.js -> SlideConcert.js 로 파일 변경
- concertOneBanner.js -> InnerConcertBanner.js 로 파일 변경
- InnerConcertBanner.js 안에 슬라이드 넘어가는 로직 생성(미완성)

## 2023-11-28

- LatestAlbum 카테고리 focus 관련 css 적용
- 카테고리 클릭 및 버튼과 관련하여 이벤트 작업 중이므로 주석 처리되어 있는 내용이 많음
- 현재 데이터 상 페이지 index가 2개 뿐이지만 첫 페이지, 마지막 페이지의 경우 버튼이 클릭되어도 페이지 이동이 없도록 기능 적용
