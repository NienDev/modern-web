import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between py-4 mb-4">
      <img className="h-[24px]" src="/assets/logo.svg" alt="logo" />
      <ul className="flex flex-row gap-6 text[#FFFFFFB2]">
        <Link to="/modern-web/home">Home</Link>
        <Link to="/modern-web/about">About</Link>
        <Link to="/modern-web/feature">Feature</Link>
        <Link to="/modern-web/solution">Solution</Link>
      </ul>
    </div>
  );
};
