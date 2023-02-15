module.exports = {
  'post:/user/getAuthCode': {
    _salt_: '@integer(20,50)',
  },
  'post:/user/login': {
    csrfToken: '@integer(20,50)',
    _qjt_ac_: '@integer(20,50)',
  },
  'post:/user/logout': {},
}
