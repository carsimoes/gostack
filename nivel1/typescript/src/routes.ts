import { response } from "express";

import { Request, Response} from 'express';
import createUser from './services/CreateUser';

export function hello(request: Request, response: Response) {

       const user = createUser({
           email: 'emdf',
           password: '123456',
           techs: ['f',
                   'f', 
                   { title: 'dd', experinece: 100 }
           ]
       })

       return response.json({message:"hello"});
}