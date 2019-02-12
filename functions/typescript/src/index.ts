import moment from 'moment'

exports.handler = (event: any, context: any, callback: any) => {
  callback(null, {
    statusCode: 200,
    body: moment().format('MMMM Do YYYY, h:mm:ss a'),
  })
}