import qs from 'querystring';
import axios from 'axios';
import { data } from '../../config';

export default {
  async fetchToken() {
    const options = {
      method: 'POST',
      url: data.getTokenUrl,
      data: qs.stringify({
        grant_type: 'authorization_code',
        client_id: `${process.env.COGNITO_CLIENT_ID}`,
        redirect_uri: `${process.env.COGNITO_REDIRECT_URL}`,
        code: `${localStorage.getItem('authorizationCode')}`,
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${process.env.ENCODED_AUTHORIZATION}`,
        'Cache-control': 'no-cache',
        Accept: '*/*',
      },
    };
    let successFlag = false;

    await axios(options)
      .then((res) => {
        if (res.status >= 200 && res.status < 400) {
          successFlag = true;
          localStorage.setItem('accessToken', res.data.access_token);
        } else throw new Error('Access token fetch fail.');
      })
      .catch((error) => console.error(error));

    return successFlag;
  },
};
