import { App } from './app'
const port: Number = 3000
new App().server.listen(port,
  () => {
    console.log('+----------------------------------+')
    console.log(`| Rodando em http://localhost:${port} |`)
    console.log('+----------------------------------+')
  }
)
