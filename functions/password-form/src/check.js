const { URLSearchParams } = require('url')

const template = `
<html>
	<body>
		<h1>秘密のページだよ！</h1>
		<p>Download Linkはこちら</p>
	</body>
</html>
`

exports.handler = (event, context, callback) => {
	const params = new URLSearchParams(event.body)

	const body = params.get("keyword") === "hirake-goma" ? template : `
		<p>合言葉が違います。</p>
	`

  callback(null, {
    statusCode: 200,
		body: body,
		headers: {
			"Content-Type": "text/html;charset=UTF-8"
		}
  })
}