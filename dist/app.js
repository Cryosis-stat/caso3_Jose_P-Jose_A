"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var itemController = __importStar(require("./controllers/itemController"));
var app = express_1.default();
app.set("port", 3000);
app.use(express_1.default.json());
app.get('/items', itemController.allItems);
app.get('/items/history', itemController.historyItems);
app.get('/item/:id', itemController.getItem);
app.post('/item', itemController.addItem); //Funcion 1
app.delete('/item/del/:id', itemController.deleteItem);
app.delete('/item/:id', itemController.removeItem); //Funcion 2
app.put('/item/:id', itemController.updateItem);
app.put('/item/bid/:id', itemController.bidItem); //Funcion 4
app.get('/items/getFiltered', itemController.getItemByFilter); //Funcion 3
app.listen(app.get("port"), function () {
    console.log("App is running on http://localhost:%d", app.get("port"));
});
//yarn run watch
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUE4QjtBQUU5QiwyRUFBK0Q7QUFFL0QsSUFBTSxHQUFHLEdBQUcsaUJBQU8sRUFBRSxDQUFDO0FBQ3RCLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBRXRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRXhCLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMzQyxHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN2RCxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0MsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsV0FBVztBQUN0RCxHQUFHLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDdkQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsV0FBVztBQUMvRCxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDaEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsV0FBVztBQUM3RCxHQUFHLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQSxDQUFDLFdBQVc7QUFFekUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO0lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO0FBQ3pFLENBQUMsQ0FBQyxDQUFBO0FBRUYsZ0JBQWdCIn0=