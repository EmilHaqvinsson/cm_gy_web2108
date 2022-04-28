import Logger from "../utils/Logger"
import StatusCode from "../utils/StatusCode"
import ItemModel from "../models/ItemModel"
import { Request, Response } from 'express'
import { CreateItem, ReadItem } from '../utils/interface/Items'

const createItem = async (req: Request, res: Response) => {
    try {
        Logger.info('createUser()')
        Logger.http(req.body)
        const {title, assignedTo, isDone} = req.body
        
        if (title && assignedTo && isDone) {
            const newObject: CreateItem = {
                title: title, 
                assignedTo: assignedTo,
                isDone: isDone
        }
        Logger.http(newObject)
        
        const item = new ItemModel(newObject)
        const dbResponse = await item.save()
        Logger.http(dbResponse)
        res.status(StatusCode.CREATED).send(dbResponse)

    } else {
        Logger.error('something failed')
        res.status(StatusCode.BAD_REQUEST).send({
            message: 'Body needs \'title\', \'assignedTo\', and \'isDone\'. '
        })
    }
} catch (error) {
        Logger.error('Something failed')
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error xxx user'
        })
    }
const getAllItems = (req: Request, res: Response) => {
    try {

    } catch (error) {
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error xxx user'
        })
    }
}
const getItemByTitle = (req: Request, res: Response) => {
    try {

    } catch (error) {
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error xxx user'
        })
    }
}
const getItemById = (req: Request, res: Response) => {
    try {

    } catch (error) {
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error xxx user'
        })
    }
}
const updateItemById = (req: Request, res: Response) => {
    try {

    } catch (error) {
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error xxx user'
        })
    }
}
const deleteItemById = (req: Request, res: Response) => {
    try {

    } catch (error) {
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error xxx user'
        })
    }
}

export default {
    createItem,
    getAllItems,
    getItemByTitle,
    getItemById,
    updateItemById,
    deleteItemById
}