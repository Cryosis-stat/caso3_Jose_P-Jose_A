"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bidItem = exports.updateItem = exports.removeItem = exports.deleteItem = exports.addItem = exports.getItem = exports.historyItems = exports.allItems = void 0;
var items_1 = __importDefault(require("./../items"));
// get all - retorna todos los objetos activos
var allItems = function (req, res) {
    var items = items_1.default.find({ "status": 1 }, function (err, items) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(items);
        }
    });
};
exports.allItems = allItems;
// get all - retorna objetos activos e inactivos
var historyItems = function (req, res) {
    var items = items_1.default.find(function (err, items) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(items);
        }
    });
};
exports.historyItems = historyItems;
// get - retorna uno especifico
var getItem = function (req, res) {
    items_1.default.findById(req.params.id, function (err, items) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(items);
        }
    });
};
exports.getItem = getItem;
// post - inserta un item
var addItem = function (req, res) {
    var item = new items_1.default(req.body);
    item.save(function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(item);
        }
    });
};
exports.addItem = addItem;
// delete - elimina un item
var deleteItem = function (req, res) {
    items_1.default.deleteOne({ _id: req.params.id }, function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Succesfully deleted");
        }
    });
};
exports.deleteItem = deleteItem;
// delete - elimina logicamente un item
var removeItem = function (req, res) {
    items_1.default.findByIdAndUpdate(req.params.id, { "status": 0 }, function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Succesfully deleted");
        }
    });
};
exports.removeItem = removeItem;
// put - actualiza un item
var updateItem = function (req, res) {
    items_1.default.findByIdAndUpdate(req.params.id, req.body, function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Succesfully updated");
        }
    });
};
exports.updateItem = updateItem;
// put - oferta a un articulo abierto en subasta
var bidItem = function (req, res) {
    items_1.default.updateOne({ "_id": req.params.id, "actual_price": { $lt: parseInt(req.body.actual_price) }, "status": 1 }, { "bidder_name": req.body.bidder_name, "actual_price": parseInt(req.body.actual_price) }, function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Bid placed");
        }
    });
};
exports.bidItem = bidItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVycy9pdGVtQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxxREFBK0I7QUFFL0IsOENBQThDO0FBQ3ZDLElBQUksUUFBUSxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDOUMsSUFBSSxLQUFLLEdBQUcsZUFBSyxDQUFDLElBQUksQ0FBQyxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUMsRUFBQyxVQUFDLEdBQVEsRUFBRSxLQUFTO1FBQ3JELElBQUcsR0FBRyxFQUFDO1lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQjthQUFLO1lBQ0YsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQjtJQUNMLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBO0FBUlUsUUFBQSxRQUFRLFlBUWxCO0FBQ0QsZ0RBQWdEO0FBQ3pDLElBQUksWUFBWSxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDbEQsSUFBSSxLQUFLLEdBQUcsZUFBSyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVEsRUFBRSxLQUFTO1FBQ3ZDLElBQUcsR0FBRyxFQUFDO1lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQjthQUFLO1lBQ0YsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQjtJQUNMLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBO0FBUlUsUUFBQSxZQUFZLGdCQVF0QjtBQUVELCtCQUErQjtBQUN4QixJQUFJLE9BQU8sR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhO0lBQzdDLGVBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsVUFBQyxHQUFRLEVBQUUsS0FBUztRQUM5QyxJQUFHLEdBQUcs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