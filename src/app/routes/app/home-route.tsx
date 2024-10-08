import * as React from 'react';
import { homeConst as CONST } from '@/app/constants';
import { homeAssets as ASSETS } from '@/assets';

type HomeRouteProps = {
    pageRef: React.Ref<any>;
    navigateTo: (pageRef: string) => void;
}

export const HomeRoute: React.FC<HomeRouteProps> = ({ pageRef, navigateTo }) => {
    return (
      <section 
        ref={pageRef} 
        className={``}
      >
        <div className={`flex flex-row w-full h-full`}>
          <div className={`flex-1`}>
          IMAGE GOES HERE
          </div>
          
          <div className={`flex-1`}>
            <div className={`flex flex-column`}>
              <h2>
                  {CONST.title}
              </h2>
              <p>
                  {CONST.paragraph}
              </p>
              <button onClick={() => navigateTo("availability")}>
                  {CONST.button}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
}
