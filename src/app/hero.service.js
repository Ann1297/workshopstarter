"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var mock_heroes_1 = require("./mock-heroes");
var HeroService = (function () {
    function HeroService() {
    }
    HeroService.prototype.getHeroes = function () {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(mock_heroes_1.Heroes);
            }, 500);
        });
    };
    HeroService.prototype.getHero = function (id) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                var hero = mock_heroes_1.Heroes.find(function (h) { return h.id === id; });
                resolve(hero);
            }, 500);
        });
    };
    return HeroService;
}());
HeroService = __decorate([
    core_1.Injectable()
], HeroService);
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map