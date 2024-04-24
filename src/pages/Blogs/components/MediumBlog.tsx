import { useRecoilValueLoadable } from "recoil";
import { Item } from "./Item";
import { Error } from "../../../components/Error";
import { DefaultSkeleton } from "../../../components/DefaultLoading";
import { blogsAtom } from "../../../store/blog";
import { IBlog } from "../../../services/blog";
import { State } from "../../../common";

export const MediumBlog = () => {
  const { state, contents } = useRecoilValueLoadable(blogsAtom);

  if (state === State.loading)
    return (
      <>
        {[...Array(10)].map((_, index: number) => (
          <DefaultSkeleton key={index} />
        ))}
      </>
    );

  if (state === State.hasError) return <Error />;

  return (
    <div>
      {contents.map((blog: IBlog) => (
        <Item key={blog.id} blog={blog} />
      ))}
    </div>
  );
};
