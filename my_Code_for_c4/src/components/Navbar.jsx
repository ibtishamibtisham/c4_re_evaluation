import { Link } from "react-router-dom";
const links = [
  {
    title: "Home",
    link: "/home",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Products",
    link: "/products",
  },
  //   add the other link as well
];
export const Navbar = () => {
  return (
    //map through the link ad display it in header
    links.map(({ title, link }) => {
      return <Link to={link}>{title}</Link>;
    })
  );
};
