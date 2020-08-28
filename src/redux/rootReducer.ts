import { combineReducers } from '@reduxjs/toolkit';

import todos from 'components/todoList/todoSlice';
import visibilityFilter from 'components/visibilityFilter/visibilityFilterSlice';

const rootReducer = combineReducers({
  todos,
  visibilityFilter,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
