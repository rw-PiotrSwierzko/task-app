// another individual store
export const createTaskStore = (set) => ({
  taskId: '',
  setTaskId: () => set((state) => ({ taskId: state.taskId })),
});
