//import Post from '../models/post_model'
import { Request,Response } from 'express'
/**
 * Register
 * @param {http request} req 
 * @param {http response} res 
 */
const register = async (req:Request, res:Response) => {
    console.log('register')
    res.status(200).send('register')

}


export = {
    register
}



