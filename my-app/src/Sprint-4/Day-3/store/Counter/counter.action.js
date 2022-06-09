
import { DECREMENT_COUNTER,
    INCREMENT_COUNTER,
    
} from './counter.type';



//counter App
export const counterInc = () => ({type: INCREMENT_COUNTER});
export const counterDec = () => ({type: DECREMENT_COUNTER});



