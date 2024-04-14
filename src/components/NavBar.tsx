import React, { useEffect } from "react";
import {
  Navbar,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  LifebuoyIcon,
  PowerIcon,
  Bars2Icon,
  PencilSquareIcon,
  BellIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  appSettingIntialState,
  appSettingStore,
  IAppSettingIntialState,
} from "../store/app-setting";
import { authInitialState, authState } from "../store/auth";
import { Auth } from "../model/auth";

// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
    to: "/my-profile",
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
    to: "/help",
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const setAppSetting = useSetRecoilState(appSettingStore);
  const setAuthState = useSetRecoilState(authState);

  const closeMenu = () => setIsMenuOpen(false);

  function handleSignOut(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    event.stopPropagation();

    setAppSetting(appSettingIntialState);
    setAuthState(authInitialState);
    closeMenu();
  }

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList
        className="p-1"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {profileMenuItems.map(({ label, icon, to = "" }) => {
          return (
            <MenuItem
              key={label}
              onClick={to ? closeMenu : handleSignOut}
              className={"flex items-center gap-2 rounded text-gray-700"}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {React.createElement(icon, {
                className: `h-4 w-4`,
                strokeWidth: 2,
              })}

              {to ? (
                <Link to={to} className="font-normal">
                  {label}
                </Link>
              ) : (
                <span onClick={handleSignOut} className="font-normal">
                  {label}
                </span>
              )}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

// nav list component
const navListItems = [
  {
    label: "Write",
    icon: PencilSquareIcon,
    to: "/write",
  },
  {
    icon: BellIcon,
    to: "/notification",
  },
];

function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(({ label, icon, to }, index: number) => (
        <Link
          key={index}
          to={to}
          color="gray"
          className="font-medium text-blue-gray-500"
        >
          <MenuItem
            className="flex items-center gap-2 lg:rounded-full"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            {label ? <span className="text-gray-900"> {label}</span> : null}
          </MenuItem>
        </Link>
      ))}
    </ul>
  );
}

export function NavBar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const setAppSetting = useSetRecoilState(appSettingStore);
  const { isLoggedIn } = useRecoilValue(authState);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
  const { loginModal } =
    useRecoilValue<IAppSettingIntialState>(appSettingStore);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  function handleLoginClick() {
    setAppSetting((preValue: IAppSettingIntialState) => ({
      ...preValue,
      loginModal: true,
    }));
  }

  return (
    <Navbar
      className="rounded-none p-2 lg:pl-6 w-full max-w-full"
      placeholder={"navbar"}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <Link to="/" className="mr-4 ml-2 cursor-pointer py-1.5 font-medium">
          Medium
        </Link>
        <div className="flex justify-center">
          {isLoggedIn ? (
            <>
              <div className="mx-3 hidden lg:block">
                <NavList />
              </div>
              <IconButton
                size="sm"
                color="blue-gray"
                variant="text"
                onClick={toggleIsNavOpen}
                className="ml-auto mr-2 self-center lg:hidden"
                placeholder={"burger-icon"}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <Bars2Icon className="h-6 w-6" />
              </IconButton>
              <ProfileMenu />
            </>
          ) : (
            <Button
              size="sm"
              variant="text"
              data-dialog-target="sign-in-dialog"
              data-ripple-light="true"
              placeholder={"Log In"}
              onClick={handleLoginClick}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <span>Log In</span>
            </Button>
          )}
          {loginModal ? <Auth /> : null}
        </div>
      </div>
      <Collapse open={isNavOpen} className="overflow-scroll">
        <NavList />
      </Collapse>
    </Navbar>
  );
}
