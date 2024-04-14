import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { SnackBarType, toasterState } from "../store/toaster";
import { SuccessIcon } from "../assets/SuccessIcon";
import { WarnIcon } from "../assets/WarnIcon";
import { ErrorIcon } from "../assets/ErrorIcon";

export const Toster = () => {
  const [toastState, setToastState] = useRecoilState(toasterState);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    timerRef.current = setTimeout(() => {
      setToastState({ message: "", type: SnackBarType.idle });
    }, 3000);
  }, [setToastState]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, []);

  function handleCloseClick() {
    setToastState({ message: "", type: SnackBarType.idle });
  }

  return (
    <div
      id="toast-success"
      className="flex items-center w-full max-w-xs p-2 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 absolute top-4 right-3"
      role="alert"
    >
      {toastState.type === SnackBarType.success ? (
        <SuccessIcon />
      ) : toastState.type === SnackBarType.warn ? (
        <WarnIcon />
      ) : toastState.type === SnackBarType.error ? (
        <ErrorIcon />
      ) : null}

      <div className="ms-3 text-sm font-normal">{toastState.message}</div>
      <button
        type="button"
        className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        data-dismiss-target="#toast-success"
        aria-label="Close"
        onClick={handleCloseClick}
      >
        <span className="sr-only">Close</span>
        <svg
          className="w-3 h-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );
};
