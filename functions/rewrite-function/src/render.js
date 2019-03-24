export const handler = async (event, context, callback) => {
  // pathには`/.netlify/functions/render/hoge`のような文字列が入ってくる
  const { path, httpMethod } = event
  callback(null, {
    statusCode: 200,
    body: `This page is ${httpMethod}: ${path}`
  })
}