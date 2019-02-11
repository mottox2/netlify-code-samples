const fs = require('fs')

const posts = [
  {
    id: 1,
    title: "技術書執筆にiPadはピッタリ",
    description: "技術書を書く上でiPadはピッタリ、コードを書く端末ではないのでしっかり執筆に取り組めます。"
  },
  {
    id: 2,
    title: "netlify-cliは検証にすごく便利",
    description: "何度もデプロイしたい時にnetlify-cliはとても便利。ブラウザでの操作いらずでサイトをデプロイ"
  },
  {
    id: 3,
    title: "netlify-cliの操作はnpm scriptsにしておくとよい",
    description: "netlify-cliは覚えている人が少ないので、npm scriptsとして定義しておくと吉"
  },
]

fs.writeFileSync("./public/posts.html", JSON.stringify(posts))

fs.mkdir('./public/posts', () => {
  posts.forEach(post => {
    fs.writeFileSync(`./public/posts/${post.id}.html`, JSON.stringify(post))
  })
})

