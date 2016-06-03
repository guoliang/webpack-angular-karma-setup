import {FooModule} from "../../src/foo/FooCtrl";

describe("Home Controller", () => {
    it("should increment saves on save", () => {
        let test = new FooModule.FooCtrl();
        test.save()

        expect(test.getSaves()).toBe(1);
    });
});
