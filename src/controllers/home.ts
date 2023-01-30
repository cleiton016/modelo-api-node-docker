// eslint-disable-next-line no-unused-vars
import { Request, Response } from 'express'
class Home {
  public home (req: Request, res: Response) {
    return res.render('./index')
  }
}

export const homeController = new Home()
