export default {
  register: ({ email, username, password }) => {
    const poolData = {
      UserPoolId: _config.cognito.userPoolId,
      ClientId: _config.cognito.clientId,
    };

    const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    const attrList = [];

    const dataEmail = {
      Name: 'email',
      Value: email,
    };

    const dataPersonalName = {
      Name: 'nickname',
      Value: username, // get from form field
    };
    const attrEmail = new AmazonCognitoIdentity.CognitoUserAttribute(
      dataEmail,
    );
    const attrPersonalName = new AmazonCognitoIdentity.CognitoUserAttribute(
      dataPersonalName,
    );

    attrList.push(attrEmail);
    attrList.push(attrPersonalName);
    userPool.signUp(email, password, attrList, null, (
      err,
      result,
    ) => {
      if (err) {
        alert(err.message || JSON.stringify(err));
        return;
      }
      // const cognitoUser = result.user;
      // console.log(`user name is ${cognitoUser.getUsername()}`);
      alert(`${email}로 인증 메일이 전송되었습니다.\n인증 후 로그인 가능합니다.`);
      window.location = '/login';
    });
  },

  login: ({ email, password }) => {
    const authenticationData = {
      Username: email,
      Password: password,
    };

    const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
      authenticationData,
    );

    const poolData = {
      UserPoolId: _config.cognito.userPoolId, // Your user pool id here
      ClientId: _config.cognito.clientId, // Your client id here
    };

    const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

    const userData = {
      Username: email,
      Pool: userPool,
    };

    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess(result) {
        const accessToken = result.getAccessToken().getJwtToken(); // access token을 백엔드 서버로 보내주시면 됩니다.
        const idToken = result.idToken.jwtToken;
        console.log(accessToken);
        console.log(result);
      },

      onFailure(err) {
        alert(err.message || JSON.stringify(err));
      },
    });
  },

  forgotPassword: ({ email, verificationCode, newPassword }) => {
    const poolData = {
      UserPoolId: _config.cognito.userPoolId, // Your user pool id here
      ClientId: _config.cognito.clientId, // Your client id here
    };

    const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

    const userData = {
      Username: email,
      Pool: userPool,
    };

    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.forgotPassword({
      onSuccess(result) {
        console.log(`call result: ${result}`);
      },
      onFailure(err) {
        alert(JSON.stringify(err));
        console.log(err);
      },
      inputVerificationCode() {
        cognitoUser.confirmPassword(verificationCode, newPassword, this);
      },
    });
  },
};
