"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
// TODO @wnamen figure out how to add full-size class to host element for this
// component `challengeCent-app`
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular';
    }
    AppComponent = __decorate([
        core_1.Component({
            encapsulation: core_2.ViewEncapsulation.None,
            selector: 'challengeCent-app',
            templateUrl: './app.component.html',
            styleUrls: [
                './app.component.css',
                '/node_modules/bootstrap/dist/boostrap.css',
                '/node_modules/bootstrap/dist/boostrap-grid.css'
            ]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;