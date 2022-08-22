import create from 'zustand'

const store = create((set) => ({
   expanded: {},
   registerExpanded: (id) => set((state) => ({
      expanded: {...state.expanded, ...{[id]: false}} 
   })),
   toggleExpanded: (id) => set((state) => ({
      expanded: {...state.expanded, [id]: !state.expanded[id]}
   })),


   pageContent: "",
   updatePageContent: (content) => set(() => ({
      pageContent: content
   })),
}));

export default store;
