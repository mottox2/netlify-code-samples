exports.handler = (event, context, callback) => {
  console.log(event, context, callback)
  callback(null, {
    statusCode: 200,
    body: "Hello Netlify Functions"
  })
}