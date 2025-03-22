"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRouter = void 0;
const express_1 = require("express");
/**
 * Abstract base class for defining API routes.
 *
 * This class provides a foundation for creating routers that are associated with a specific controller.
 * It sets up an Express Router instance and requires subclasses to implement the route initialization.
 *
 * @template T - The type of the controller associated with this router.
 */
class BaseRouter {
    /**
     * Creates an instance of BaseRouter.
     *
     * @param {T} controller - The controller instance to be associated with this router.
     *
     * The constructor initializes the router, assigns the controller, and calls the abstract method
     * initRoutes() to set up the routes. Each subclass must provide its own implementation of initRoutes().
     */
    constructor(controller) {
        // Initialize the Express Router.
        this.router = (0, express_1.Router)();
        // Assign the controller.
        this.controller = controller;
        // Initialize the routes defined by the subclass.
        this.initRoutes();
    }
}
exports.BaseRouter = BaseRouter;
