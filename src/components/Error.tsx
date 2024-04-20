import { Typography } from "@material-tailwind/react";
import { FlagIcon } from "@heroicons/react/24/solid";

export function Error() {
  return (
    <div className="h-full mx-auto grid place-items-center text-center px-4">
      <div>
        <FlagIcon className="w-20 h-20 mx-auto" />
        <Typography
          variant="h1"
          color="blue-gray"
          className="mt-10 !text-3xl !leading-snug md:!text-4xl"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Error 404 <br /> It looks like something went wrong.
        </Typography>
        <Typography
          className="mt-8 mb-14 text-[18px] font-normal text-gray-500 mx-auto md:max-w-sm"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Don&apos;t worry, our team is already on it.Please try refreshing the
          page or come back later.
        </Typography>
      </div>
    </div>
  );
}
