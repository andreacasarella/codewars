const greenTimeUnits = 5;
const redTimeUnits = 5
const orangeTimeUnits = 1;

interface TrafficLight {
    index: number;
    cycle: number;
    color: 'G' | 'R' | 'O'
}

export function trafficLights(road: string, n: number): string[] {
    let states = [road];

    let trafficLights = findTrafficLights(road);

    for (let i = 1; i <= n; i++) {
        trafficLights = updateTrafficLights(trafficLights, i);

        for (let y = road.length - 1; y >= 0; y--) {
            let char = road.charAt(y);
            let next = road.charAt(y + 1);

            // change traffic light colors
            let trafficLight = trafficLights.find(p => p.index === y);
            if (trafficLight)
                road = road.substring(0, y) + trafficLight.color + road.substring(y + 1);

            if (char === 'C') {
                if (next === 'G' || next === '.') {
                    road = road.substring(0, y) + '.' + road.substring(y + 1);
                    road = road.substring(0, y + 1) + 'C' + road.substring(y + 2);
                } else if (next === '')
                    road = road.substring(0, y) + '.' + road.substring(y + 1);
                if (trafficLight)
                    road = road.substring(0, y) + trafficLight.color + road.substring(y + 1);
            }
        }
        states.push(road);
    }
    return states;
}

function findTrafficLights(road: string): TrafficLight[] {
    let trafficLights: TrafficLight[] = [];
    for (let i = 0; i < road.length; i++) {
        let step = road.charAt(i);
        if (step === 'G') trafficLights.push({index: i, cycle: greenTimeUnits, color: 'G'})
        if (step === 'R') trafficLights.push({index: i, cycle: redTimeUnits, color: 'R'})
    }
    return trafficLights;
}

function updateTrafficLights(trafficLights: TrafficLight[], iteration: number): TrafficLight[] {
    trafficLights.forEach(trafficLight => {
        trafficLight.cycle--;
        if (trafficLight.cycle === 0) {
            switch (trafficLight.color) {
                case "G":
                    trafficLight.color = 'O';
                    trafficLight.cycle = orangeTimeUnits;
                    break;
                case "O":
                    trafficLight.color = 'R';
                    trafficLight.cycle = redTimeUnits;
                    break;
                case "R":
                    trafficLight.color = 'G';
                    trafficLight.cycle = greenTimeUnits;
                    break;
            }
        }
    });
    return trafficLights;
}
