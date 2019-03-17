exports.handler = (event, context, callback) => {
  const keyword = event.queryStringParameters.keyword

  const body = keyword ? {
    query: keyword,
    length: keyword.length
  } : {
    error: "keyword is not found."
  }

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(body, null, 2),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}