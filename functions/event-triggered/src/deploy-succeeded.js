exports.handler = (event, context, callback) => {
  const parsedBody = JSON.parse(event.body)
  const { payload } = parsedBody
  console.log(Object.keys(payload).join(', '))
  console.log(`Log URL:     ${payload.admin_url}/deploys/${payload.id}`)
  console.log(`Publish URL: ${payload.url}`)
  console.log(`Deploy URL:  ${payload.deploy_url}`)
  console.log(`Admin URL:   ${payload.admin_url}`)
  console.log(Object.keys(parsedBody.site).join(', '))
  // const {published_deploy, capabilities, ...siteAttributes} = parsedBody.site
  // console.log(siteAttributes)
}