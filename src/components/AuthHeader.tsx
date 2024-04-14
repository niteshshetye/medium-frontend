import { useSetRecoilState } from "recoil";
import { authState, IAuthInitialState } from "../store/auth";
import { AuthType } from "../configs/auth";

interface AuthHeaderProps {
  heading: string;
  paragraph: string;
  buttonText: string;
}

export function AuthHeader(props: AuthHeaderProps) {
  const { heading, paragraph, buttonText } = props;
  const setAuthState = useSetRecoilState(authState);

  function handleOnClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    setAuthState((auth: IAuthInitialState) => {
      return {
        ...auth,
        type: auth.type === AuthType.signin ? AuthType.signup : AuthType.signin,
      };
    });
  }

  return (
    <div className="mb-10">
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {heading}
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        {paragraph}{" "}
        <button
          onClick={handleOnClick}
          className="font-bold text-black hover:text-gray-700 underline"
        >
          {buttonText}
        </button>
      </p>
    </div>
  );
}
