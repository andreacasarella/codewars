import {trafficLights} from "./index";

function doTest(init: string, expected: string[], n: number) {
    let actual: string[] = trafficLights(init, n);
    console.log('Expected: ');
    for (let i = 0; i < expected.length; i++) {
        console.log(expected[i]);
    }
    // Only show expected result if your result is incorrect
    if (JSON.stringify(actual) !== JSON.stringify(expected)) {
        console.log('\nYour result: ');
        for (let i = 0; i < actual.length; i++) {
            console.log(actual[i]);
        }
    }
    expect(actual).toStrictEqual(expected);
}

describe("Sample test", function() {
    it("Should work for example test", function() {
        let n = 10;
        let sim = [
            "C...R............G......",  // 0
            ".C..R............G......",  // 1
            "..C.R............G......",  // 2
            "...CR............G......",  // 3
            "...CR............G......",  // 4
            "....C............O......",  // 5
            "....GC...........R......",  // 6
            "....G.C..........R......",  // 7
            "....G..C.........R......",  // 8
            "....G...C........R......",  // 9
            "....O....C.......R......"  // 10
            /*"....R.....C......G......",  // 11
            "....R......C.....G......",  // 12
            "....R.......C....G......",  // 13
            "....R........C...G......",  // 14
            "....R.........C..G......",  // 15
            "....G..........C.O......",  // 16
            "....G...........CR......",  // 17
            "....G...........CR......",  // 18
            "....G...........CR......",  // 19
            "....G...........CR......",  // 20
            "....O...........CR......",  // 21
            "....R............C......",  // 22
            "....R............GC.....",  // 23
            "....R............G.C....",  // 24
            "....R............G..C...",  // 25
            "....R............G...C..",  // 26
            "....G............O....C.",  // 27
            "....G............R.....C",  // 28
            "....G............R......",  // 29
            "....G............R......",  // 30
            "....G............R......",  // 31
            "....O............R......",  // 32
            "....R............G......",  // 33*/
        ];
        doTest(sim[0], sim, n);
    });
});
