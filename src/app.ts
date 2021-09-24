import express from "express";
import * as bodyParser from 'body-parser';
import * as itemController from './controllers/itemController';

const app = express();
app.set("port", 3000);

app.use(bodyParser.json());

app.get('/items', itemController.allItems);
app.get('/items/history', itemController.historyItems);
app.get('/item/:id', itemController.getItem);
app.post('/item', itemController.addItem); //Funcion 1
app.delete('/item/del/:id', itemController.deleteItem);
app.delete('/item/:id', itemController.removeItem); //Funcion 2
app.put('/item/:id', itemController.updateItem);
app.put('/item/bid/:id', itemController.bidItem); //Funcion 4

app.listen(app.get("port"), () => {
    console.log("App is running on http://localhost:%d", app.get("port"))
})

//yarn run watch