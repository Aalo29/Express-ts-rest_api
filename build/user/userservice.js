"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.create = exports.find = exports.findAll = void 0;
// Create and save a new user
let users = {
    1: {
        id: 1,
        name: "Leanne Graham",
        age: 30
    },
    2: {
        id: 2,
        name: "Ervin Howell",
        age: 25
    },
    3: {
        id: 3,
        name: "Clementine Bauch",
        age: 20
    },
    4: {
        id: 4,
        name: "Patricia Lebsack",
        age: 25
    },
};
// service methods
const findAll = () => __awaiter(void 0, void 0, void 0, function* () { return Object.values(users); });
exports.findAll = findAll;
const find = (id) => __awaiter(void 0, void 0, void 0, function* () { return users[id]; });
exports.find = find;
const create = (newUser) => __awaiter(void 0, void 0, void 0, function* () {
    const id = new Date().valueOf();
    users[id] = Object.assign(Object.assign({}, newUser), { id });
    return users[id];
});
exports.create = create;
const update = (id, userUpdate) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, exports.find)(id);
    if (!user) {
        return null;
    }
    users[id] = Object.assign(Object.assign({}, user), userUpdate);
    return users[id];
});
exports.update = update;
const remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, exports.find)(id);
    if (!user) {
        return null;
    }
    delete users[id];
});
exports.remove = remove;
