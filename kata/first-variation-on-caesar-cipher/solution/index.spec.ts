import { G964 } from '.';

function dotest1(s: string, k: number, expected: string[]) {
    expect(G964.movingShift(s, k)).toEqual(expected)
}
function dotest2(s: string[], k: number, expected: string) {
    expect(G964.demovingShift(s, k)).toEqual(expected)
}
function dotest3(s: string, k: number) {
    expect(G964.demovingShift(G964.movingShift(s, k), k)).toEqual(s)
}
describe("Fixed Tests", function () {
    it("movingShift", function () {
        var u, sol, v;
        u = "I should have known that you would have a perfect answer for me!!!";
        sol = ["J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"];
        dotest1(u, 1, sol);
    });


    it("demovingShift", function () {
        var u, sol, v;
        u = "I should have known that you would have a perfect answer for me!!!";
        sol = ["J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"];
        dotest1(u, 1, sol);
        dotest2(sol, 1, u);
    });

    it("movingShift, demovingShift", function () {
        var u, sol, v;
        u = "I should have known that you would have a perfect answer for me!!!";
        sol = ["J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"];
        dotest1(u, 1, sol);
        dotest2(sol, 1, u);
        dotest3(u, 1);
    });

    it("movingShift ACA", function () {
        var u, sol, v;
        u = "ACA";
        sol = ["B", "E", "D", "", ""];
        dotest1(u, 1, sol);
    });


    it("movingShift EMPTY", function () {
        var u, sol, v;
        u = "";
        sol = ["", "", "", "", ""];
        dotest1(u, 1, sol);
    });

});