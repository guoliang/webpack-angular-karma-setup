export namespace FooModule {

    export class FooCtrl {

        private saves: number = 0;

        constructor() {}

        public save(): void {
            console.log("saved");
            this.saves++;
        }

        public getSaves(): number {
            return this.saves;
        }
    }
}