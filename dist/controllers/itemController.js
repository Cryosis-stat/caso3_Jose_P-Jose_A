"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItemByFilter = exports.updateItem = exports.deleteItem = exports.addItem = exports.getItem = exports.allItems = void 0;
var items_1 = __importDefault(require("./../items"));
// get all - retorna todo
var allItems = function (req, res) {
    var items = items_1.default.aggregate([{
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
        }], function (err, items) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(items);
        }
    });
};
exports.allItems = allItems;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVycy9pdGVtQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxxREFBK0I7QUFHL0IseUJBQXlCO0FBQ2xCLElBQUksUUFBUSxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDOUMsSUFBSSxLQUFLLEdBQUcsZUFBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3pCLFFBQVEsRUFBRTtnQkFDTixJQUFJLEVBQUUsQ0FBQztnQkFDUCxXQUFXLEVBQUUsQ0FBQztnQkFDZCxLQUFLLEVBQUUsQ0FBQztnQkFDUixhQUFhLEVBQUUsQ0FBQztnQkFDaEIsWUFBWSxFQUFFLENBQUM7Z0JBQ2YsTUFBTSxFQUFFLENBQUM7Z0JBQ1QsV0FBVyxFQUFFLENBQUM7Z0JBQ2QsS0FBSyxFQUFFO29CQUNILElBQUksRUFBRSxDQUFDO29CQUNQLEtBQUssRUFBRSxDQUFDO2lCQUNYO2dCQUNELFFBQVEsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEVBQUU7Z0JBQzVFLElBQUksRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFO2FBQ3ZEO1NBQ0osQ0FBQyxFQUNGLFVBQUMsR0FBUSxFQUFFLEtBQVM7UUFDcEIsSUFBRyxHQUFHLEVBQUM7WUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO2FBQUs7WUFDRixHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25CO0lBQ0wsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUE7QUF6QlUsUUFBQSxRQUFRLFlBeUJsQjtBQUNELCtCQUErQjtBQUN4QixJQUFJLE9BQU8sR0FBRyxVQUFDLEdBQVks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