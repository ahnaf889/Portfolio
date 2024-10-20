import React, {useState} from 'react';
import {FaGoogle} from 'react-icons/fa';
import GoogleLogo from '../../assets/GoogleLogo.png';
import FacebookLogo from '../../assets/FacebookLogo.png';
import {ValidateEmail} from '../../Utils/Validate';

const RegistrationRight = () => {
  // Toggle handelEmail visibility
  const [regInfo, setregInfo] = useState({
    email: '',
  });

  // Toggle handelEmail visibility
  const handleEmail = (event) => {
    setregInfo({
      ...regInfo,
      [event.target.id]: event.target.value,
    });
    console.log(event.target.value);
  };

  // Toggle regError visibility
  const [regError, setregError] = useState({
    emailError: '',
  });

  /**
   * todo: handelbutton funtion emplement
   * @param({})
   */
  const handelbutton = () => {
    const {email} = regInfo;
    if (!email || !ValidateEmail(email)) {
      setregError({
        ...regError,
        emailError: 'Your email is wrong !!',
      });
    } else {
      setregInfo({
        ...regInfo,
        email: '',
      });

      setregError({
        ...regError,
        emailError: '',
      });
    }
  };

  return (
    <div className="w-[50%] bg-[#160430] h-screen">
      <div className="m-auto flex flex-col items-center justify-center h-screen">
        <div className="w-[80%]">
          <div className="flex flex-col">
            <h1 className="font-poppins text-white font-bold text-7xl mb-14">
              SIGN IN
            </h1>
            <p className="font-poppins text-white font-bold mb-4 text-base">
              Sign in with email address
            </p>
            <div className=" mb-8">
              <input
                type="email"
                value={regInfo.email}
                className="w-full text-white font-poppins tracking-wider inputEdit h-[70px] bg-[#261046] rounded-xl px-5 placeholder:font-medium placeholder:text-base placeholder:font-poppins"
                id="email"
                placeholder="Yourname@gmail.com"
                onChange={handleEmail}
              />
              <div className="mt-2">
                <span className="text-red-600 font-poppins font-normal text-base">
                  {regError.emailError}
                </span>
              </div>
            </div>
            <button
              onClick={handelbutton}
              className="w-full mb-[90px] h-[62px] bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-poppins rounded-xl text-center font-medium text-xl"
            >
              Sign up
            </button>
          </div>
          <div>
            <p className="font-poppins font-semibold opacity-80 mb-5 text-base text-white">
              Or continue with
            </p>
            <div className="flex justify-between mb-8">
              <p className="font-poppins cursor-pointer justify-center tracking-wide font-semibold w-[48%] h-[60px] rounded-xl bg-[#3B2063] flex gap-x-3 items-center text-white text-base">
                <picture>
                  <img
                    className="w-6"
                    src={GoogleLogo}
                    alt={GoogleLogo}
                  />
                </picture>
                Google
              </p>
              <p className="font-poppins cursor-pointer tracking-wide justify-center font-semibold w-[48%] h-[60px] rounded-xl bg-[#3B2063] flex gap-x-3 items-center text-white text-base">
                <picture>
                  <img
                    className="w-6"
                    src={FacebookLogo}
                    alt={FacebookLogo}
                  />
                </picture>
                Facebook
              </p>
            </div>
            <p className="font-poppins font-medium leading-10 text-base text-white">
              By registering you with our{' '}
              <span className="text-[#9D5CE9] cursor-pointer">
                Terms and Conditions
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationRight;
