export default {
  email: (email) => {
    const emailPattern = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return emailPattern.test(email);
  },

  username: (username) => {
    const spacePattern = /\s/;
    return !spacePattern.test(username) && username !== '';
  },

  password: (password) => {
    const minLen = 6;
    const maxLen = 99;
    const symbolPattern = /[\^$*.[\]{}()?\-"!@#%&/\\,><':;|_~]/;
    const lowerCasePattern = /[a-z]/;
    const upperCasePattern = /[A-Z]/;
    const numberPattern = /[0-9]/;

    return password.length >= minLen && password.length <= maxLen
      && symbolPattern.test(password)
      && upperCasePattern.test(password)
      && lowerCasePattern.test(password)
      && numberPattern.test(password);
  },

  checkPassword: (password, checkPassword) => password === checkPassword,
};
