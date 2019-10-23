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
};
