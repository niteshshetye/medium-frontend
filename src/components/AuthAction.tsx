interface AuthActionProps {
  type: "submit" | "reset" | "button";
  text: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleSubmit: any;
  loading: boolean;
  isDisabled: boolean;
}

export function AuthAction(props: AuthActionProps) {
  const { handleSubmit, text, type, loading, isDisabled } = props;

  return (
    <button
      type={type}
      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
      onClick={handleSubmit}
      disabled={loading || isDisabled}
    >
      {loading ? "Please wait..." : `${text}`}
    </button>
  );
}
