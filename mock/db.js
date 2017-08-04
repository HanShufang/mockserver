var Mock = require('mockjs')
var Random = Mock.Random
module.exports = {
  userInfo: Mock.mock({
    'code': 1,
    'data': {
      'uid': '582028',
      'username': 'sufaith',
      'phone': '12345678910',
      'sex':'nv'
    }
  }),
   getComment: Mock.mock({
    "error": 0,
    "message": "success",
    "code":200,
    "result|40": [{
      "author": "@name",
      "comment": "@cparagraph",
      "date": "@datetime"
    }]
  }),
  addComment: Mock.mock({
    "error": 0,
    "message": "success",
    "result": []
  })
}