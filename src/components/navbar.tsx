import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import logo from "/public/assets/images/logo.svg";
import MenuOpen from "/public/assets/images/icon-menu.svg";
import MenuClose from "/public/assets/images/icon-menu-close.svg";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <NavigationMenu className="py-10 justify-between items-center">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Image priority src={logo} className="w-12" alt="Logo" />
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList>
        <NavigationMenuItem>
          <div className="hidden md:block">
            <NavbarList />
          </div>
          <div className="md:hidden">
            <Drawer direction="right">
              <DrawerTrigger>
                <Image
                  priority
                  src={MenuOpen}
                  className="w-10"
                  alt="Open the navigation menu"
                />
              </DrawerTrigger>
              <DrawerContent className="p-5 h-full right-0 m-0 ml-24">
                <DrawerHeader className="justify-end">
                  <DrawerClose>
                    <Image
                      priority
                      src={MenuClose}
                      className="w-10"
                      alt="Close the navigation menu"
                    />
                  </DrawerClose>
                </DrawerHeader>
                <NavbarList />
              </DrawerContent>
            </Drawer>
          </div>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const NavbarList = () => {
  return (
    <NavigationMenuList className="flex flex-col items-start md:flex-row">
      <NavigationMenuItem className="p-2 py-4 text-xl font-medium md:font-light">
        <Link href="/" legacyBehavior passHref>
          <NavigationMenuLink>Home</NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem className="p-2 py-4 text-xl font-medium md:font-light">
        <Link href="/new" legacyBehavior passHref>
          <NavigationMenuLink>New</NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem className="p-2 py-4 text-xl font-medium md:font-light">
        <Link href="/popular" legacyBehavior passHref>
          <NavigationMenuLink>Popular</NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem className="p-2 py-4 text-xl font-medium md:font-light">
        <Link href="/trending" legacyBehavior passHref>
          <NavigationMenuLink>Trending</NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem className="p-2 py-4 text-xl font-medium md:font-light">
        <Link href="/categories" legacyBehavior passHref>
          <NavigationMenuLink>Categories</NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    </NavigationMenuList>
  );
};

export default Navbar;
