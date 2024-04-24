import { atom, atomFamily, selector, selectorFamily } from "recoil";
import { fetchBlogs, readBlog } from "../services/blog";

export const blogsAtom = atom({
  key: "blogsAtom",
  default: selector({
    key: "blogsSelector",
    get: () => {
      const response = fetchBlogs();
      return response;
    },
  }),
});

export const blogAtomFamily = atomFamily({
  key: "blogAtomFamily",
  default: selectorFamily({
    key: "blogSelectorFamily",
    get: (id: string) => () => {
      const response = readBlog(id);
      return response;
    },
  }),
});
