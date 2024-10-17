import React from 'react';
import RegistrationBg from '../../assets/RegistrationBg.png';
import LogoZ from '../../assets/LogoZ.png';

const RegistrationLeft = () => {
  return (
    <div className="w-[50%] h-screen">
      <div className="relative">
        <picture>
          <img
            className="h-screen w-screen flex"
            src={RegistrationBg}
            alt={RegistrationBg}
          />
        </picture>
        <div className=" absolute top-0 pl-[65px] py-[50px]">
          <div className="flex flex-col gap-y-[720px]">
            <h3 className="flex items-center text-2xl font-semibold text-white">
              <picture>
                <img
                  src={LogoZ}
                  alt=""
                />
              </picture>
              Λᄂ-ΛMIП
            </h3>
            <h2 className="font-poppins w-[500px] font-bold text-white text-[52px]">
              SIGN IN TO YOUR <span className="text-[#AE69FF]">ADVENTURE!</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationLeft;
