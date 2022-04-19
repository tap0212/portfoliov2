import ReactFullpage from '@fullpage/react-fullpage';
import { Header } from '@/Components/Header';
import { useState } from 'react';
import { Github, LinkedIn, Twitter } from 'assets/svgLinks';

const Home = () => {
  const [navBarBgc, setNavBarBgc] = useState();
  const onLeave = function (_origin, destination, _direction) {
    console.log({ _origin, _direction });
    switch (destination.index) {
      case 0:
        setNavBarBgc('bg-void');
        break;
      case 1:
        setNavBarBgc('bg-stark');
        break;
      case 2:
        setNavBarBgc('bg-void');
        break;
      default:
        break;
    }
  };
  return (
    <div className="h-full w-full">
      <Header navBarBgc={navBarBgc} />
      <ReactFullpage
        afterLoad={onLeave}
        scrollingSpeed={700}
        scrollHorizontally={true}
        scrollHorizontallyKey={'YOUR KEY HERE'}
        keyboardScrolling
        render={() => (
          <ReactFullpage.Wrapper>
            <div className="section  bg-void p-4 px-8">
              <h1 className="text-white text-5xl font-thin">
                Hey, I&apos;m{' '}
                <span className="text-jewel font-medium">Tapan</span>
              </h1>
              <h2 className="text-white text-2xl font-thin">
                A sold soul to JavaScript
              </h2>
            </div>
            <div className="section bg-into p-4 px-8">
              <div className="w-full lg:w-2/5 lg:px-4">
                <h1 className="text-black text-5xl font-thin">
                  Who am <span className="text-stark">I</span>?
                </h1>
                <p>Opportunist | Believer | Tech Enthusiast</p>
                <p>
                  A software engineer who works with js and related technologies
                  like React, React Native Typescript and many more...
                </p>
                <p>A Potter head and a marvel fan</p>
              </div>
            </div>
            <div className="section bg-jewel p-4 px-8">
              <div className="w-full lg:w-2/5 lg:px-4">
                <h1 className="text-black text-5xl font-thin">Work</h1>
                <p>
                  Currently building{' '}
                  <a
                    className="text-flyfin-green underline"
                    href="https://flyfin.tax">
                    Flyfin
                  </a>{' '}
                  over web, leading a focussed team over growth of the product
                  and overall cutomer acquisition, building software to get max
                  reach of the product.
                </p>
                s
              </div>
            </div>
            <div className="section bg-sub p-4 px-8">
              <div className="w-full flex justify-center items-center flex-col">
                <div className="flex items-center justify-between w-1/4">
                  <a className="w-10" href="https://twitter.com/TapanAwasthi2">
                    <Twitter className="w-full h-full" />
                  </a>
                  <a
                    className="w-10"
                    href="https://www.linkedin.com/in/tapan-awasthi02">
                    <LinkedIn className="w-full h-full" />
                  </a>
                  <a className="w-10" href="https://github.com/tap0212">
                    <Github className="w-full h-full" />
                  </a>
                </div>
                <p className="text-white font-light my-4">
                  Let&apos;s catch up if you&apos;re in Bangalore
                </p>
                <p className="text-white font-light my-2">or</p>
                <p className="text-white font-light my-2">
                  {' '}
                  <a href="mailto:tapan.awasthi02@gmail.com">
                    tapan.awasthi02@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
};

export default Home;
