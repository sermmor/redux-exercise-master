import { combineReducers} from 'redux';
import { memberReducer, MemberState } from './memberReducer';

export interface State {  
  memberReducer : MemberState;
};

export const reducers = combineReducers<State>({
  memberReducer,
});
