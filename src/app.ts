import * as express from "express";
import catRouter from './cats/cats.route'

class Server {
  public app: express.Application

  constructor() {
    const app: express.Application = express()
    this.app = app
  }

  private setRoute() {
    this.app.use(catRouter)
  }

  private setMiddleware() {
    //* loggin middleware
    this.app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
      console.log(req.rawHeaders[1])
      console.log('this is logging middleware')
      next()
    })

    //* json middleware
    this.app.use(express.json())

    //* catRouter
    this.setRoute()

    // * 404 middleware
    this.app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
      console.log('this is error middleware')
      res.send({error: '404 not found error'})
    })
  }
  public listen() {
    this.setMiddleware()
    this.app.listen(8000, () => {
      console.log(`Example app listening on port http://localhost:8000`)
    })
  }
}

function init() {
  const server = new Server();
  server.listen()
}

init()

const app: express.Express = express()