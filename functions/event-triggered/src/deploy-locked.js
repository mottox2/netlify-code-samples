exports.handler = (event, context, callback) => {
  console.log('Start deploy')
  console.log('deploy log')
  console.log(Object.keys(event).join(', '))
  console.log(event.body)
  console.log(event)
  callback(null, {
    statusCode: 200,
    headers: {
      'Content-type': 'application/json'
    },
    body: 'deploy'
  })
}