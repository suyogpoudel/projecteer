type NavLink = {
  href: string;
  label: string;
};

const navlinks: NavLink[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/ideas",
    label: "Ideas",
  },
  {
    href: "/profile",
    label: "Profile",
  },
  {
    href: "/create",
    label: "Create",
  },
];

const NavLinks = () => {
  return <div>NavLinks</div>;
};

export default NavLinks;
