import { matemaatilisedArvutused } from '../kood.js';
import { expect } from 'chai';

describe('Matemaatika', () => {
    it('summa', () => {
        expect(matemaatilisedArvutused(10, 5).summa).to.equal(15);
    });

    it('vahe', () => {
        expect(matemaatilisedArvutused(10, 5).vahe).to.equal(5);
    });

    it('jagatis', () => {
        expect(matemaatilisedArvutused(10, 5).jagatis).to.equal(2);
    });

    it('korrutis', () => {
        expect(matemaatilisedArvutused(10, 5).korrutis).to.equal(50);
    });
});
