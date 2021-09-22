"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateItem = exports.deleteItem = exports.addItem = exports.getItem = exports.allItems = void 0;
var items_1 = __importDefault(require("./../items"));
// get all - retorna todo
var allItems = function (req, res) {
    var items = items_1.default.find(function (err, items) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVycy9pdGVtQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxxREFBK0I7QUFFL0IseUJBQXlCO0FBQ2xCLElBQUksUUFBUSxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDOUMsSUFBSSxLQUFLLEdBQUcsZUFBSyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVEsRUFBRSxLQUFTO1FBQ3ZDLElBQUcsR0FBRyxFQUFDO1lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQjthQUFLO1lBQ0YsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQjtJQUNMLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBO0FBUlUsUUFBQSxRQUFRLFlBUWxCO0FBQ0QsK0JBQStCO0FBQ3hCLElBQUksT0FBTyxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDN0MsZUFBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxVQUFDLEdBQVEsRUFBRSxLQUFTO1FBQzlDLElBQUcsR0FBRyxFQUFDO1lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQjthQUFLO1lBQ0YsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQjtJQUNMLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBO0FBUlUsUUFBQSxPQUFPLFdBUWpCO0FBRUQseUJBQXlCO0FBQ2xCLElBQUksT0FBTyxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDN0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxlQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRS9CLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFPO1FBQ2QsSUFBRyxHQUFHLEVBQUM7WUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO2FBQUs7WUFDRixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xCO0lBQ0wsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUE7QUFWVSxRQUFBLE9BQU8sV0FVakI7QUFFRCwyQkFBMkI7QUFDcEIsSUFBSSxVQUFVLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYTtJQUNoRCxlQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFDLEVBQUUsVUFBQyxHQUFRO1FBQzVDLElBQUcsR0FBRyxFQUFDO1lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQjthQUFLO1lBQ0YsR0FBRyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1NBQ25DO0lBQ0wsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUE7QUFSVSxRQUFBLFVBQVUsY0FRcEI7QUFFRCwwQkFBMEI7QUFDbkIsSUFBSSxVQUFVLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYTtJQUNoRCxlQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxVQUFDLEdBQVE7UUFDdEQsSUFBRyxHQUFHLEVBQUM7WUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO2FBQUs7WUFDRixHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7U0FDbkM7SUFDTCxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQTtBQVJVLFFBQUEsVUFBVSxjQVFwQiJ9