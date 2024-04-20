import React, { useEffect } from "react";
import moment from "moment";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Error } from "../../../components/Error";
import { DefaultSkeleton } from "../../../components/DefaultLoading";
import { SnackBarType, toasterState } from "../../../store/toaster";
import { blogState, IBlogInitialState, State } from "../../../store/blog";
import { authState } from "../../../store/auth";
import { fetchBlogs, IBlog } from "../../../services/blog";

const imageURL =
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlYWN0JTIwYmxvZ3xlbnwwfHwwfHx8MA%3D%3D";

interface MediumBlogListItemProps {
  blog: IBlog;
}

const MediumBlogListItem: React.FC<MediumBlogListItemProps> = ({ blog }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 my-4">
      <div className="flex items-center py-4">
        <img
          className="h-10 w-10 rounded-full mr-4 object-cover"
          src={imageURL}
          alt={blog.author.name}
        />
        <div>
          <p className="text-gray-900 font-medium">{blog.author.name}</p>
          <p className="text-gray-500 text-sm">
            {moment(blog.createAt).fromNow()}
          </p>
        </div>
      </div>

      <div className="flex justify-between">
        <div className=" md:w-3/4 w-full">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {blog.title}
          </h2>
          <p className="text-gray-700 text-base mb-4">{blog.content}</p>
        </div>
        <div className=" md:block hidden">
          <img
            className="h-28 w-28 object-cover object-center"
            src={imageURL}
            alt={blog.title}
          />
        </div>
      </div>
    </div>
  );
};

export const MediumBlog = () => {
  const { access_token } = useRecoilValue(authState);
  const { blogs, state } = useRecoilValue(blogState);
  const setBlogState = useSetRecoilState(blogState);
  const setToastState = useSetRecoilState(toasterState);

  useEffect(() => {
    function successCb(payload: IBlog[]) {
      setBlogState((preValue: IBlogInitialState) => ({
        ...preValue,
        state: State.idle,
        blogs: payload,
      }));
      setToastState({
        message: "Blogs fetch Succesfully",
        type: SnackBarType.success,
      });
    }

    function errorCb(message: string, type: SnackBarType) {
      setToastState({ message, type });
      setBlogState((preValue: IBlogInitialState) => ({
        ...preValue,
        state: State.error,
        blogs: [],
      }));
    }

    setBlogState((preValue: IBlogInitialState) => ({
      ...preValue,
      state: State.loading,
    }));

    (async () => {
      await fetchBlogs(access_token, successCb, errorCb);
    })();
  }, [access_token, setBlogState, setToastState]);

  if (state === State.loading)
    return (
      <>
        {[...Array(10)].map((loader: number) => (
          <DefaultSkeleton key={loader} />
        ))}
      </>
    );

  if (state === State.error) return <Error />;

  return (
    <div>
      {blogs.map((blog: IBlog) => (
        <MediumBlogListItem key={blog.id} blog={blog} />
      ))}
    </div>
  );
};
