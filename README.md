# docker_nuxt_ssr02

```
$git clone git@github.com:chanfuku/docker_nuxt_ssr02.git

$cd docker_nuxt_ssr02/docker/nuxt

$docker-compose build

$docker-compose run --rm nuxt npx create-nuxt-app
このプロジェクトでは以下を選択して作成しました。
✨  Generating Nuxt.js project in .
? Project name: nuxt_app
? Programming language: TypeScript
? Package manager: Yarn
? UI framework: None
? Nuxt.js modules: Axios - Promise based HTTP client
? Linting tools: (Press <space> to select, <a> to toggle all, <i> to invert selection)
? Testing framework: None
? Rendering mode: Universal (SSR / SSG)
? Deployment target: Server (Node.js hosting)
? Development tools: (Press <space> to select, <a> to toggle all, <i> to invert selection)
? What is your GitHub username? chanfuku
? Version control system: Git

$docker-compose up -d
nuxt_1 | yarn install v1.22.5
nuxt_1 | [1/4] Resolving packages...
nuxt_1 | success Already up-to-date.
nuxt_1 | Done in 2.13s.
nuxt_1 | yarn run v1.22.5
nuxt_1 | $ nuxt
nuxt_1 | ? Listening on: http://172.18.0.2:3000/
nuxt_1 | ? Preparing project for development
nuxt_1 | ? Initial build may take a while
nuxt_1 | ? Discovered Components: .nuxt/components/readme.md
nuxt_1 | ? Builder initialized
nuxt_1 | ? Nuxt files generated
nuxt_1 | ? Compiling Client
nuxt_1 | ? Compiling Server
nuxt_1 | ? Server: Compiled successfully in 29.63s
nuxt_1 | ? Client: Compiled successfully in 32.09s
nuxt_1 | ? Waiting for file changes
nuxt_1 | ? Memory usage: 158 MB (RSS: 230 MB)
nuxt_1 | ? Listening on: http://172.18.0.2:3000/
```

- ブラウザで以下が表示されればOK
```
http://localhost:9000/
```
