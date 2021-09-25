"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItemByFilter = exports.bidItem = exports.updateItem = exports.removeItem = exports.deleteItem = exports.addItem = exports.getItem = exports.historyItems = exports.allItems = void 0;
var items_1 = __importDefault(require("./../items"));
// get all - retorna todos los objetos activos
var allItems = function (req, res) {
    var items = items_1.default.aggregate([
        { $project: {
                name: 1,
                description: 1,
                photo: 1,
                initial_price: 1,
                actual_price: 1,
                bidder_name: 1,
                status: 1,
                owner: {
                    name: 1,
                    email: 1,
                },
                max_date: { $dateToString: { format: "%Y-%m-%d %H:%M", date: "$max_date" } },
                year: { $dateToString: { format: "%Y", date: "$year" } }
            }
        },
        { $match: {
                status: true
            }
        }
    ], function (err, items) {
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
// listar con filtros
var getItemByFilter = function (req, res) {
    // filtrar si le falta cierta cantidad de horas
    if (req.body.days != null) {
        // fecha actual
        var date = new Date();
        // convertir dias a horas
        var horas = req.body.days * 24;
        // sumar horas a la fecha actual
        date.setTime(date.getTime() + ((horas - 6) * 60 * 60 * 1000));
        // query
        items_1.default.find({ status: 1, max_date: { $lte: date } }, function (err, items) {
            if (err) {
                res.send();
            }
            else {
                res.send(items);
            }
        });
    }
    else if (req.body.hours != null) {
        // fecha actual
        var date = new Date();
        // horas del request
        var horas = req.body.hours;
        // sumar horas a la fecha actual
        date.setTime(date.getTime() + (horas * 60 * 60 * 1000) - 21600000);
        // query
        items_1.default.find({ status: 1, max_date: { $lte: date } }, function (err, items) {
            if (err) {
                res.send();
            }
            else {
                res.send(items);
            }
        });
    }
    else if (req.body.min_price != null && req.body.max_price != null) // rango de precios
     {
        var min_price = req.body.min_price;
        var max_price = req.body.max_price;
        items_1.default.find({ status: 1, actual_price: { $gte: min_price, $lte: max_price } }, function (err, items) {
            if (err) {
                res.send();
            }
            else {
                res.send(items);
            }
        });
    }
    else if (req.body.min_years != null && req.body.max_years != null) // año de antiguedad
     {
        var min_years = req.body.min_years;
        var max_years = req.body.max_years;
        items_1.default.find({ status: 1, year: { $gte: min_years, $lte: max_years } }, function (err, items) {
            if (err) {
                res.send();
            }
            else {
                res.send(items);
            }
        });
    }
    else {
        // si no, retorne todos los que esten activos
        items_1.default.find({ status: 1 }, function (err, items) {
            if (err) {
                res.send();
            }
            else {
                res.send(items);
            }
        });
    }
};
exports.getItemByFilter = getItemByFilter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVycy9pdGVtQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxxREFBK0I7QUFHL0IsOENBQThDO0FBQ3ZDLElBQUksUUFBUSxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDOUMsSUFBSSxLQUFLLEdBQUcsZUFBSyxDQUFDLFNBQVMsQ0FBQztRQUN4QixFQUFFLFFBQVEsRUFBRTtnQkFDUixJQUFJLEVBQUUsQ0FBQztnQkFDUCxXQUFXLEVBQUUsQ0FBQztnQkFDZCxLQUFLLEVBQUUsQ0FBQztnQkFDUixhQUFhLEVBQUUsQ0FBQztnQkFDaEIsWUFBWSxFQUFFLENBQUM7Z0JBQ2YsV0FBVyxFQUFFLENBQUM7Z0JBQ2QsTUFBTSxFQUFFLENBQUM7Z0JBQ1QsS0FBSyxFQUFFO29CQUNILElBQUksRUFBRSxDQUFDO29CQUNQLEtBQUssRUFBRSxDQUFDO2lCQUNYO2dCQUNELFFBQVEsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEVBQUU7Z0JBQzVFLElBQUksRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFO2FBQ3ZEO1NBQ0o7UUFDRCxFQUFFLE1BQU0sRUFBRTtnQkFDTixNQUFNLEVBQUUsSUFBSTthQUFDO1NBQ2hCO0tBQ0EsRUFDRCxVQUFDLEdBQVEsRUFBRSxLQUFTO1FBQ3BCLElBQUcsR0FBRyxFQUFDO1lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQjthQUFLO1lBQ0YsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQjtJQUNMLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBO0FBN0JVLFFBQUEsUUFB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