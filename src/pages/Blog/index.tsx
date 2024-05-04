import { useParams } from "react-router-dom";
import { useRecoilValueLoadable } from "recoil";
import { State } from "../../common";
import { DefaultSkeleton } from "../../components/DefaultLoading";
import { blogAtomFamily } from "../../store/blog";
import { Error } from "../../components/Error";
import moment from "moment";
import { nameInitials } from "../../common/utility";

const imageURL =
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlYWN0JTIwYmxvZ3xlbnwwfHwwfHx8MA%3D%3D";

export const Blog = () => {
  const params = useParams();

  const { state, contents } = useRecoilValueLoadable(
    blogAtomFamily(params.id || "")
  );

  if (state === State.loading) return <DefaultSkeleton />;

  if (state === State.hasError) return <Error />;

  return (
    <div className="py-0 px-0 md:py-4 md:px-10">
      <div className="max-w-3xl mx-auto">
        <img
          className="w-full h-64 object-cover object-center mb-6"
          src={imageURL}
          alt={contents.title}
        />
        <h1 className="text-3xl font-bold mb-4">{contents.title}</h1>
        <div className="flex items-center mb-4">
          <div className="h-10 w-10 rounded-full mr-4 flex justify-center items-center bg-black text-white">
            {nameInitials(contents.author.name)}
          </div>
          <div className="flex flex-col ">
            <p className="text-gray-600 text-sm">{contents.author.name}</p>
            <p className="text-gray-600 text-sm">
              {moment(contents.createAt).format("LL")}
            </p>
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: contents.content }}
          className="text-gray-800 leading-relaxed mb-8"
        />
      </div>
    </div>
  );
};
