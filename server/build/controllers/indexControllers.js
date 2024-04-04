"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexControllers = void 0;
class IndexControllers {
    index(req, resp) {
        resp.json({ text: 'API Is /api/citas' });
    }
}
exports.indexControllers = new IndexControllers();
