import React from 'react';
import RegistrationLeft from '../../Components/RegistrationComponent/RegistrationLeft';
import RegistrationRight from '../../Components/RegistrationComponent/RegistrationRight';

const Registration = () => {
  return (
    <>
      <div className="flex">
        <RegistrationLeft />
        <RegistrationRight />
      </div>
    </>
  );
};

export default Registration;
