import express from "express";
import * as bodyParser from 'body-parser';
import * as itemController from './controllers/itemController';

const app = express();
app.set("port", 3000);

app.use(express.json());

app.get('/items', itemController.allItems);
app.get('/item/:id', itemController.getItem);
app.post('/item', itemController.addItem);
app.delete('/item/:id', itemController.deleteItem);
app.put('/item/:id', itemController.updateItem);
app.get('/items/getFiltered', itemController.getItemByFilter)

app.listen(app.get("port"), () => {
    console.log("App is running on http://localhost:%d", app.get("port"))
})

//yarn run watch