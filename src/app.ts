import express from 'express'
import { home } from '@routers/home_routers'

export class App {
    public server: express.Application = express();

    constructor () {
      this.middleware()
      this.router()
    }

    private middleware () {
      this.server.use(express.json())
      this.server.set('view engine', 'ejs')
    }

    private router () {
      this.server.use(home)
    }
}
