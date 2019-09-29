# Lunch-Squad

> 코드스쿼드 주변 맛집 검색/추천 서비스

- 815 해커톤에서 만든 서비스를 업그레이드 중

- Web Front-end: Gren
- Web Back-end: Sony

## Front-end tech stack

- React, hooks
- Styled-components

## 지도 API: 카카오맵 API 사용

- React에서 카카오맵 API를 사용하기 위한 [react-kakao-maps](https://www.npmjs.com/package/react-kakao-maps) 개발하여 사용

## Todo

### features

- [x] 지도에서 식당 목록 보기
- [x] 리스트에서 식당 목록 보기
  - [x] 리스트에 있는 각 식당에 마우스 커서를 올리면 배경 색이 바뀌고, 마우스 커서를 지도에 있는 커스텀 오버레이의 색상이 붉은 색으로 바뀜.
- [x] 필터링 기능으로 원하는 식당을 추려서 보기
  - [x] 적어도 한 개의 필터는 남아있도록 동작해야함.
- [x] 리스트에 있는 식당을 클릭 하면 상세보기 페이지로 넘어감
  - [x] 선택된 식당의 커스텀 오버레이의 색상이 붉은 색으로 고정됨.
  - [x] 선택된 식당의 좌표가 center로 오도록 지도가 이동하며, zoom level은 2로 바뀜.
- [x] 랜덤 식당 버튼을 고르면 현재 필터링 된 식당들 중에서 랜덤하게 선택되어 짐
  - [x] 현재 골라진 식당이 다음 랜덤으로 나올 수 없도록 기능 구현했음 → 상세 정보 View가 url의 id를 기반으로 정보를 업데이트 하기 때문에 같은 id 나올 시 업데이트 안함.

### devops

- [ ] Travis를 활용한 CI 환경 구축
