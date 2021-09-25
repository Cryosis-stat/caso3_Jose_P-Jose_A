"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var uri = 'mongodb://localhost:27017/auctionsdb';
mongoose_1.default.connect(uri, function (err) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Successfully connected to database");
    }
});
exports.ItemSchema = new mongoose_1.default.Schema({
    "name": { type: String, required: true },
    "description": { type: String, required: true },
    "year": { type: Date, required: true },
    "photo": { type: String, required: true },
    "initial_price": { type: Number, required: true },
    "actual_price": { type: Number, required: true },
    "max_date": { type: Date, required: true },
    "status": { type: Boolean, default: 1 },
    "bidder_name": { type: String },
    "owner": {
        "name": { type: String, required: true },
        "email": { type: String, required: true },
    }
});
var Items = mongoose_1.default.model('Items', exports.ItemSchema);
exports.default = Items;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJpdGVtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxzREFBK0I7QUFFL0IsSUFBTSxHQUFHLEdBQVcsc0NBQXNDLENBQUE7QUFFMUQsa0JBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBUTtJQUMzQixJQUFHLEdBQUcsRUFBRTtRQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0tBQzNCO1NBQUs7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUE7S0FDcEQ7QUFDTCxDQUFDLENBQUMsQ0FBQTtBQUVXLFFBQUEsVUFBVSxHQUFHLElBQUksa0JBQVEsQ0FBQyxNQUFNLENBQzdDO0lBQ0ksTUFBTSxFQUFFLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUMsSUFBSSxFQUFDO0lBQ3BDLGFBQWEsRUFBRSxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFDLElBQUksRUFBQztJQUMzQyxNQUFNLEVBQUUsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQyxJQUFJLEVBQUM7SUFDbEMsT0FBTyxFQUFFLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUMsSUFBSSxFQUFDO0lBQ3JDLGVBQWUsRUFBRSxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFDLElBQUksRUFBQztJQUM3QyxjQUFjLEVBQUUsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBQyxJQUFJLEVBQUM7SUFDNUMsVUFBVSxFQUFFLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUMsSUFBSSxFQUFDO0lBQ3RDLFFBQVEsRUFBRSxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUMsRUFBQztJQUNuQyxhQUFhLEVBQUUsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDO0lBQzVCLE9BQU8sRUFBRTtRQUNMLE1BQU0sRUFBRSxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFDLElBQUksRUFBQztRQUNwQyxPQUFPLEVBQUUsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBQyxJQUFJLEVBQUM7S0FDeEM7Q0FDSixDQUFDLENBQUM7QUFFSCxJQUFNLEtBQUssR0FBRyxrQkFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsa0JBQVUsQ0FBQyxDQUFDO0FBQ2xELGtCQUFlLEtBQUssQ0FBQyJ9