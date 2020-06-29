export class Kata {
    static spinWords(words: string) {
        return words.split(' ').map(v => v.length < 5 ? v : v.split('').reverse().join('')).join(' ');
    }
}