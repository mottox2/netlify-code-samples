import Octokit from '@octokit/rest'
import moment from 'moment'
import yaml from 'js-yaml'

export const handler = async (event, context, callback) => {
  const octokit = new Octokit()
  octokit.authenticate({
    type: 'oauth',
    token: process.env.GITHUB_TOKEN
  })

  const parsedBody = JSON.parse(event.body)
  const timestamp = moment().format('YYYYMMDDHHmmss')

  console.log(parsedBody)

  const res = await octokit.repos.createFile({
    owner: 'mottox2',
    repo: 'netlify-code-samples',
    path: `functions/self-commit/data/${timestamp}.yaml`,
    message: `Create ${timestamp}.yaml from user inout`,
    content: new Buffer(yaml.dump(parsedBody)).toString('base64')
  })

  console.log(res.data)

  callback(null, {
    statusCode: 200,
    body: res.data.commit.html_url
  })
}