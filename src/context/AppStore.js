import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createTaskStore } from './TaskStore';
import { createSearchStore } from './SearchStore';

// slicing the store into smaller stores
export const useStore = create(devtools((...a) => ({
  ...createTaskStore(...a),
  ...createSearchStore(...a),
})));
