import { Request, Response } from 'express';
import Items from './../items';

// get all - retorna todos los objetos activos
export let allItems = (req: Request, res: Response) => {
    let items = Items.find({"status": 1},(err: any, items:any) => {
        if(err){
            res.send(err);
        } else{
            res.send(items);
        }
    })
}
// get all - retorna objetos activos e inactivos
export let historyItems = (req: Request, res: Response) => {
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

// delete - elimina logicamente un item
export let removeItem = (req: Request, res: Response) => {
    Items.findByIdAndUpdate(req.params.id, {"status":0}, (err: any) => {
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

// put - oferta a un articulo abierto en subasta
export let bidItem = (req: Request, res: Response) => {
    Items.updateOne({"_id":req.params.id, "actual_price":{$lt:parseInt(req.body.actual_price)}, "status":1}, {"bidder_name":req.body.bidder_name, "actual_price":parseInt(req.body.actual_price)}, (err: any) => {
        if(err){
            res.send(err);
        } else{
            res.send("Bid placed");
        }   
    })
}