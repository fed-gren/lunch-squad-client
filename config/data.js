const data = {
  lunchSquadApiUrl:
    'https://ldlyo4kkqc.execute-api.ap-northeast-2.amazonaws.com/dev/restaurants',
  kakaoMapConfig: {
    defaultCenter: {
      lat: 37.49091,
      lng: 127.033419,
    },
  },
  codesquadOverlayYAnchor: 1,
  codesquadOverlayZIndex: 1,
  selectedOverlayYAnchor: 1,
  selectedOverlayZIndex: 2,
  loginUrl: 'https://lunchsquad.auth.ap-northeast-2.amazoncognito.com/login?response_type=code&client_id=62iskvnkmva2s0i7i37766ouim&redirect_uri=http://localhost:3000/?redirect=true',
};

export default data;
