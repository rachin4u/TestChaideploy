require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
const gitHubData = {
    "login": "rachin4u",
    "id": 9510867,
    "node_id": "MDQ6VXNlcjk1MTA4Njc=",
    "avatar_url": "https://avatars.githubusercontent.com/u/9510867?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/rachin4u",
    "html_url": "https://github.com/rachin4u",
    "followers_url": "https://api.github.com/users/rachin4u/followers",
    "following_url": "https://api.github.com/users/rachin4u/following{/other_user}",
    "gists_url": "https://api.github.com/users/rachin4u/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/rachin4u/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/rachin4u/subscriptions",
    "organizations_url": "https://api.github.com/users/rachin4u/orgs",
    "repos_url": "https://api.github.com/users/rachin4u/repos",
    "events_url": "https://api.github.com/users/rachin4u/events{/privacy}",
    "received_events_url": "https://api.github.com/users/rachin4u/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 8,
    "public_gists": 0,
    "followers": 1,
    "following": 7,
    "created_at": "2014-11-02T07:58:10Z",
    "updated_at": "2025-02-28T12:20:40Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Hello Twitter! rachin4u')
  })

  app.get('/login', (req, res) => {
    res.send('<h1>Please login at chai and code.</h1>')
  })


  app.get('/Youtube', (req, res) => {
    res.send('<h1>Chai aur code.</h1>')
  })


  app.get('/gitHub', (req, res) => {
    res.json(gitHubData)
  })



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
