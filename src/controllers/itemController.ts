import { Request, Response } from 'express';
import Items from './../items';

// get all - retorna todo
export let allItems = (req: Request, res: Response) => {
    let items = Items.find((err: any, items:any) => {
        if(err){
            res.send(err);
        } else{
            res.send(items);
        }
    })
}
// get - retorna uno especifico
export let getItem = (req: Request, res: Response) => {
    Items.findById(req.params.id, (err: any, items:any) => {
        if(err){
            res.send(err);
        } else{
            res.send(items);
        }        
    })
}

// post - inserta un item
export let addItem = (req: Request, res: Response) => {
    let item = new Items(req.body);

    item.save((err:any) => {
        if(err){
            res.send(err);
        } else{
            res.send(item);
        }   
    })
}

// delete - elimina un item
export let deleteItem = (req: Request, res: Response) => {
    Items.deleteOne({ _id: req.params.id}, (err: any) => {
        if(err){
            res.send(err);
        } else{
            res.send("Succesfully deleted");
        }   
    })
}

// put - actualiza un item
export let updateItem = (req: Request, res: Response) => {
    Items.findByIdAndUpdate(req.params.id, req.body, (err: any) => {
        if(err){
            res.send(err);
        } else{
            res.send("Succesfully updated");
        }   
    })
}