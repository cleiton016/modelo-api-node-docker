import { Router } from 'express'
import { homeController } from '@controllers/home'
const home: Router = Router()

// Routes
home.get('/', homeController.home)

export { home }
