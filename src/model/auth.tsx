import { useRecoilValue } from "recoil";
import { AuthForm } from "../components/AuthForm";
import { AuthHeader } from "../components/AuthHeader";
import { authModalTypeState } from "../store/auth";
import { AuthType, signinHeaders, signupHeaders } from "../configs/auth";
import { Dialog } from "@material-tailwind/react";
import { appSettingStore } from "../store/app-setting";

export const Auth = () => {
  const type = useRecoilValue(authModalTypeState);
  const { loginModal } = useRecoilValue(appSettingStore);
  return (
    <Dialog
      open={loginModal}
      size="sm"
      handler={(value) => {
        console.log(value);
      }}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <div className="flex w-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full space-y-8">
          <AuthHeader
            {...(type === AuthType.signin ? signinHeaders : signupHeaders)}
          />
          <AuthForm type={type} />
        </div>
      </div>
    </Dialog>
  );
};
