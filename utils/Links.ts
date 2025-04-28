type NavLink = {
    href: string;
    label: string;
  };
  
export const Links: NavLink[]= [
    { href: "/", label: "Home" },
    { href: "/profile", label: "My Profile" },
    { href: "/likes", label: "My Likes" },
    { href: "/corn", label: "My Corn" },
    { href: "/corn/create", label: "Adding your own Corn" },
  ]
  