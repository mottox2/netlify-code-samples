const moment = require('moment')

exports.handler = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: moment().format('MMMM Do YYYY, h:mm:ss a'),
  })
}