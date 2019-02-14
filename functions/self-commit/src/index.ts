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

  const res = await octokit.repos.createFile({
    owner: 'mottox2',
    repo: 'netlify-code-samples',
    path: `/functions/self-commit/data/${timestamp}.yaml`,
    message: `Create ${timestamp}.yaml from user inout`,
    content: yaml.dump(parsedBody)
  })

  callback(null, {
    statusCode: 200,
    body: res.data.commit.url
  })
}