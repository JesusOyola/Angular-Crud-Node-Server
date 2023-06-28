"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// Option 3: Passing parameters separately (other dialects)
const sequelize = new sequelize_1.Sequelize('railway', 'root', 'XvLdkdSpLSTSN0UaNtuC', {
    host: 'containers-us-west-35.railway.app',
    dialect: 'mysql',
    port: 6942,
    logging: false
});
exports.default = sequelize;
