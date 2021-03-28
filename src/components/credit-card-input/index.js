import connectToState from './connectToState';
import CCF from './CreditCardInput';
import LiteCCF from './LiteCreditCardInput';
import CV from './CardView';

export const _CreditCardInput = connectToState(CCF);
export const LiteCreditCardInput = connectToState(LiteCCF);
export const CardView = CV;
