import { FC } from 'react';
import { Github, LinkedIn, Twitter } from 'assets/svgLinks';

interface HeaderProps {
  navBarBgc: string;
}

const Header: FC<HeaderProps> = ({ navBarBgc = 'bg-black' }) => {
  return (
    <div
      className={`sticky w-full h-16 backdrop-blur-sm top-0 p-4 px-8 flex items-center justify-between z-50 ${navBarBgc}`}>
      <h1 className="text-xl cursor-pointer font-bold text-white">@tap0212</h1>

      <div className="flex items-center justify-between w-48">
        <a href="https://twitter.com/TapanAwasthi2">
          <Twitter />
        </a>
        <a href="https://www.linkedin.com/in/tapan-awasthi02">
          <LinkedIn />
        </a>
        <a href="https://github.com/tap0212">
          <Github />
        </a>
      </div>
    </div>
  );
};

export default Header;
