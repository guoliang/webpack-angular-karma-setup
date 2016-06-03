
import {Foo} from "../src/Foo";

describe("subtract method", () => {
    it("subtracts 2 numbers", () => {
        let test = new Foo.Foobar();
        expect(test.subtract(2, 5)).toBe(-3);
    });
});
