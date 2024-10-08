import * as React from 'react';
import { amenitiesConst } from '@/app/constants';
import { amenitiesAssets } from '@/assets';
import Video from '@/components/ui/video';

type AmenitiesRouteProps = {
    pageRef: React.Ref<any>;
}

export const AmenitiesRoute: React.FC<AmenitiesRouteProps> = ({ pageRef }) => {
  return (
    <section 
        ref={pageRef} 
        className={``}
      >
        <div className={`flex flex-row w-full h-full`}>
          <div className={`flex-1`}>

          </div>
          
          <div className={`flex-1`}>
           
          </div>
        </div>
      </section>
  );
}
