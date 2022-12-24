import create from 'zustand';
export const useSearchStore = create((set) => ({
  searchItem: [],
  setSearchItem: (items) => {
    set(() => ({
      searchItem: items,
    }));
  },
}));

export const profileStore = create((set) => ({
  profile: {},

  updateProfile: (profile) => set({ profile }),
}));
export const postProfileStore = create((set) => ({
  post: [],
  loading: false,
  updatePost: (post) => set({ post }),
  updateLoading: (loading) => set({ loading }),
}));

export const useSubmenuStore = create((set) => ({
  submenus: null,
  setSubmenus: (menu) => {
    set(() => ({
      submenus: menu,
    }));
  },
}));
