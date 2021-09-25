import { Request, Response } from 'express';
import Items from './../items';
import moment from 'moment';

// get all - retorna todos los objetos activos
export let allItems = (req: Request, res: Response) => {
    let items = Items.aggregate([{ "$match": { "status": 1 } },{
        $project: {
            name: 1,
            description: 1,
            photo: 1,
            initial_price: 1,
            actual_price: 1,
            status: 1,
            bidder_name: 1,
            owner: {
                name: 1,
                email: 1,       
            },
            max_date: { $dateToString: { format: "%Y-%m-%d %H:%M", date: "$max_date" } },
            year: { $dateToString: { format: "%Y", date: "$year" } }
            }
        }],
        (err: any, items:any) => {
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
// listar con filtros
export let getItemByFilter = (req: Request, res: Response) =>
{
    // filtrar si le falta cierta cantidad de horas
    if (req.body.days != null)
    {
        // fecha actual
        let date: Date = new Date();
        // convertir dias a horas
        const horas = req.body.days * 24
        // sumar horas a la fecha actual
        date.setTime(date.getTime() + ((horas - 6) * 60 * 60 * 1000) )
        // query
        Items.find({status: 1, max_date: {$lte: date}},
                (err: any, items: any) => {
                    if(err){
                        res.send();
                    } else{
                        res.send(items);
                    }   
                })
    } 
    else if (req.body.hours != null){
        // fecha actual
        let date: Date = new Date();
        // horas del request
        const horas = req.body.hours
        // sumar horas a la fecha actual
        date.setTime(date.getTime() + (horas * 60 * 60 * 1000) - 21600000)
        // query
        Items.find({status: 1, max_date: {$lte: date}},
            (err: any, items: any) => {
                if(err){
                    res.send();
                } else{
                    res.send(items);
                }   
            })
    } 
    else if (req.body.min_price != null && req.body.max_price != null) // rango de precios
    {
        const min_price = req.body.min_price
        const max_price = req.body.max_price
        Items.find({status: 1, actual_price: {$gte: min_price, $lte: max_price}},
                (err: any, items: any) => {
                    if(err){
                        res.send();
                    } else{
                        res.send(items);
                    }   
                })
    }
    else if (req.body.min_years != null && req.body.max_years != null) // año de antiguedad
    {
        const min_years = req.body.min_years
        const max_years = req.body.max_years
        Items.find({status: 1, year: {$gte: min_years, $lte: max_years}},
                (err: any, items: any) => {
                    if(err){
                        res.send();
                    } else{
                        res.send(items);
                    }   
                })
    }
    else
    {
        // si no, retorne todos los que esten activos
        Items.find({status: 1},
            (err: any, items: any) => {
                if(err){
                    res.send();
                } else{
                    res.send(items);
                }   
            })
    }
     
}