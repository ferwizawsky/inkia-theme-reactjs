import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "@/components/inkia/Logo";
import { useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function AdminNavbar() {
  const [notTop, setNotTop] = useState(false);
  const list = [
    {
      to: "/admin/dashboard",
      text: "Dashboard",
    },
    {
      to: "/admin/invoice",
      text: "Invoices",
    },
  ];

  const handleScroll = () => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      const rect = navbar.getBoundingClientRect();
      setNotTop(rect.top <= 0);
    }
  };

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const location = useLocation();
  // const [url, setUrl] = useState(location.href);
  const [pathname, setPathname] = useState(location.pathname);

  useEffect(() => {
    // setUrl(location.href);
    setPathname(location.pathname);
  }, [location]);

  return (
    <div className="z-40 relative">
      <div className="flex justify-between p-4 items-center">
        <div className="flex space-x-4 items-center lg:pl-10 pt-1">
          <div className="text-lg font-medium tracking-widest">FIOEP</div>
        </div>
        <div className="flex space-x-4 items-center">
          <button
            onClick={toggleTheme}
            className="text-xs bg-foreground/10 px-3 py-1 rounded-full hover:bg-foreground/20"
          >
            Change Theme
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="w-8 h-8 cursor-pointer text-white bg-amber-400 flex items-center justify-center rounded-full">
                F
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Billing
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Settings
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Keyboard shortcuts
                  <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>Email</DropdownMenuItem>
                      <DropdownMenuItem>Message</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>More...</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuItem>
                  New Team
                  <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>GitHub</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuItem disabled>API</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div
        className={`${
          notTop ? "lg:pl-14 pl-4 pr-4" : "px-4"
        } linear navbar duration-100`}
        id="navbar"
      >
        {list.map((item, index) => (
          <Link
            key={index}
            className={`${
              pathname?.toLowerCase().search(item.to) != -1
                ? "text-foreground  border-b-[3px] border-current"
                : ""
            } hover:text-foreground cursor-pointer pb-4`}
            to={item.to}
          >
            {item.text}
          </Link>
        ))}
      </div>
      <Logo
        className={`fixed top-3 left-2 z-30 linear w-10 h-10 duration-100 ${
          notTop ? "scale-75" : ""
        } hidden lg:block`}
      />
    </div>
  );
}

export default AdminNavbar;
