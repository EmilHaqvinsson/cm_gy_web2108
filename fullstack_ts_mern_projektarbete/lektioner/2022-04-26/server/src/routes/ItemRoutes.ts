import { Express } from 'express'
import ItemController from '../controllers/ItemController'

const ItemRoutes = (server: Express) => {
    // Create
    server.post('/item/new', ItemController.createItem)

    // Get
}