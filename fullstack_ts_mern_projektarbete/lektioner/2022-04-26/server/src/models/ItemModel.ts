import dotenv from 'dotenv'
import { model, Schema } from 'mongoose'
import { CreateItem } from '../utils/interface/Items'

dotenv.config()

const dbCollection = process.env.MONGODB_COLLECTION_TODO

const ItemSchema = new Schema<CreateItem>({
    title: {
        type: 'string',
        required: true
    },
    assignedTo: {
        type: 'string',
        required: true
    },
    isDone:{
        type: 'boolean',
        required: true
    }
 }, {
        timestamps: true
    })

const ItemModel = model<CreateItem>(dbCollection, UserSchema)


export default {
    ItemModel
}