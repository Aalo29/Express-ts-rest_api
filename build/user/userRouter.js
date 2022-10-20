"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const UserService = __importStar(require("./userservice"));
// Create a new router to handle user requests
exports.userRouter = express_1.default.Router();
// GET /users
exports.userRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield UserService.findAll();
    if (users.length === null) {
        res.status(404).send("No users found");
    }
    else {
        res.status(200).send(users);
    }
}));
// GET /users/:id
exports.userRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id, 10);
    const user = yield UserService.find(id);
    if (user) {
        res.status(200).send(user);
    }
    res.status(404).send("User not found");
}));
// POST /users
exports.userRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body.user;
    const newUser = yield UserService.create(user);
    res.status(201).json(newUser);
}));
// PUT /users/:id
exports.userRouter.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id, 10);
    const userUpdate = req.body;
    const existingUser = yield UserService.find(id);
    if (existingUser) {
        const updatedUser = yield UserService.update(id, userUpdate);
        return res.status(200).json(updatedUser);
    }
    else {
        return res.status(404).json("The user does not exist");
    }
}));
// DELETE /users/:id
exports.userRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id, 10);
    const existingUser = yield UserService.find(id);
    if (existingUser) {
        yield UserService.remove(id);
        res.status(200).json("The user has been deleted");
    }
    else {
        return res.status(404).json("The user with the given ID was not found.");
    }
}));
exports.default = exports.userRouter;
