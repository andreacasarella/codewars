import { group } from "console";

export class G964 {

    static ALPHABET: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    static SLOTS: number = 5;

    public static movingShift = (s: string, shift: number): string[] => {

        let result = new Array(G964.SLOTS).fill("");
        /* For passing tests on Codewars TS 2.4/ES3
        let result: string[] = [];
        for (let i = 0; i < G964.SLOTS; i++) {
            result.push('')
        }
        */

        let slotSize = Math.ceil(s.length / G964.SLOTS);

        const separator = (aIndex: number): string => { return (aIndex + 1) % slotSize == 0 ? '👻' : ''; }

        const encodeChar = (aChar: string, aIndex: number, aShift: number): string => {
            if (!(/[a-zA-Z]/g).test(aChar)) return aChar.concat(separator(aIndex));
            let cyperIndex = G964.ALPHABET.split('').indexOf(aChar.toUpperCase()) + aShift + aIndex % G964.ALPHABET.length;
            while (cyperIndex >= G964.ALPHABET.length) { cyperIndex -= G964.ALPHABET.length };
            return (aChar == aChar.toLowerCase() ? G964.ALPHABET[cyperIndex].toLowerCase() : G964.ALPHABET[cyperIndex]).concat(separator(aIndex));
        }

        let encodedGroups = s.split('').map((char, index) => encodeChar(char, index, shift)).join('').split('👻');

        encodedGroups.reverse().forEach(group => {
            result.unshift(group);
            result.pop();
        })

        return result;
    }

    public static demovingShift = (arr: string[], shift: number): string => {

        const decodeChar = (aChar: string, aIndex: number, aShift: number): string => {
            if (!(/[a-zA-Z]/g).test(aChar)) return aChar;
            let cyperIndex = G964.ALPHABET.split('').indexOf(aChar.toUpperCase()) - aShift - aIndex % G964.ALPHABET.length;
            while (cyperIndex < 0) { cyperIndex += G964.ALPHABET.length };
            return aChar == aChar.toLowerCase() ? G964.ALPHABET[cyperIndex].toLowerCase() : G964.ALPHABET[cyperIndex];
        }
        return arr.join('').split('').map((char, index) => decodeChar(char, index, shift)).join('');
    }

}
