import React from "react";

export default function Footer() {
  return (
    <div className="mt-24">
      <div className="grid grid-cols-4 text-[18px] justify-items-center ">
        <div>
          <img src="/modern-web/assets/logo.svg" alt="logo" className="mb-4" />
          <p className=" text-[#FFFFFFB2]">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div>
          <h2 className="font-semibold mb-4">Useful Links</h2>
          <ul className="text-[#FFFFFFB2]">
            <li>
              <a href="#">Content</a>
            </li>
            <li>
              <a href="#">How it Works</a>
            </li>
            <li>
              <a href="#">Create</a>
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">Terms & Services</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mb-4">Community</h2>
          <ul className="text-[#FFFFFFB2]">
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
            <li>
              <a href="#">Suggestions</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Newsletters</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mb-4">Partner</h2>
          <ul className="text-[#FFFFFFB2]">
            <li>
              <a href="#">Our Partner</a>
            </li>
            <li>
              <a href="#">Become a partner</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="mt-8 px-6 " />
      <div className="flex flex-row justify-between mt-6 px-4 mb-6">
        <p>Copyright &copy; 2021 HooBank. All Rights Reserved.</p>
        <div className="flex flex-wrap gap-6">
          <a href="#">
            <img src="/modern-web/assets/instagram.svg" alt="icon" />
          </a>
          <a href="#">
            <img src="/modern-web/assets/facebook.svg" alt="icon" />
          </a>
          <a href="#">
            <img src="/modern-web/assets/twitter.svg" alt="icon" />
          </a>
          <a href="#">
            <img src="/modern-web/assets/linkedin.svg" alt="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
