import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { IBlog } from "../../../services/blog";
import { nameInitials } from "../../../common/utility";

const imageURL =
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlYWN0JTIwYmxvZ3xlbnwwfHwwfHx8MA%3D%3D";

interface MediumBlogListItemProps {
  blog: IBlog;
}

export const Item: React.FC<MediumBlogListItemProps> = ({ blog }) => {
  return (
    <Link to={`/blog/${blog.id}`}>
      <div className="bg-white shadow-lg cursor-pointer rounded-lg overflow-hidden p-6 my-4">
        <div className="flex items-center py-4">
          <div className="h-10 w-10 rounded-full mr-4 flex justify-center items-center bg-black text-white">
            {nameInitials(blog.author.name)}
          </div>
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
            <div
              dangerouslySetInnerHTML={{ __html: blog.content }}
              className="text-gray-700 text-base mb-4"
            />
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
    </Link>
  );
};
