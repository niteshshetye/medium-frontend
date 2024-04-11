import { Link } from "react-router-dom";

interface AuthHeaderProps {
  heading: string;
  paragraph: string;
  linkUrl: string;
  linkName: string;
}

export function AuthHeader(props: AuthHeaderProps) {
  const { heading, paragraph, linkName, linkUrl = "#" } = props;

  return (
    <div className="mb-10">
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {heading}
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        {paragraph}{" "}
        <Link
          to={linkUrl}
          className="font-medium text-neutral-600 hover:text-neutral-500"
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
}
