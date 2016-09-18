import {FooModule} from "./foo/FooCtrl";

namespace App {
    export class Module {

        private app: ng.IModule;

        constructor(name: string, modules: Array<string>) {
            this.app = angular.module(name, modules);
        }

        public addController(name: string, controller: Function) {
            this.app.controller(name, controller);
        }

    }

    namespace Main {
        let main = new App.Module("myApp", []);

        main.addController("FooCtrl", function($scope) {
            $scope.message = "Foo";
        });
        main.addController("HomeCtrl", FooModule.FooCtrl)
    }
}