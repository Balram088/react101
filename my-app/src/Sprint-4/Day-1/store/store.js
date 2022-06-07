import {legacy_creatStore} from 'redux';
import { reducer } from '../reducer';

export const store = legacy_creatStore(reducer);

