// the first individual store
export const createSearchStore = (set) => ({
  searchTerm: '',
  setSearchTerm: (value) => set(() => ({ searchTerm: value })),
});
