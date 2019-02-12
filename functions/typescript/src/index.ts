import moment from 'moment'
import {
  APIGatewayProxyEvent,
  APIGatewayProxyCallback
  // @ts-ignore
} from '@types/aws-lambda'

exports.handler = (event: APIGatewayProxyEvent, context: any, callback: APIGatewayProxyCallback) => {
  return callback(null, {
    statusCode: 200,
    body: moment().format('MMMM Do YYYY, h:mm:ss a'),
  })
}