import ThemeButton, { SocialLogInButton } from "../components/ThemeButton";
import { Link } from 'react-router-dom';
import fbIcon from '../assets/fb.svg';
import googleIcon from '../assets/google.svg';

function LogIn() {
  return (
    <div>
      <div className="shadow-lg p-4 rounded-lg max-w-xs m-auto border">
        <h5 className="mb-4 text-center font-bold">登入帳號</h5>
        <div className="mb-2">
          <input className=" rounded-sm focus-visible:outline-none w-full border px-2 h-8" type="text" placeholder="請輸入帳號" />
        </div>
        <div className="mb-2">
          <input className=" rounded-sm focus-visible:outline-none w-full border px-2 h-8" type="text" placeholder="請輸入密碼" />
        </div>
        <div className="mb-5 text-sm text-right text-lightBlue">
          <p className="inline-block cursor-pointer">忘記密碼</p>
        </div>
        <ThemeButton className="mb-4">
          登入
        </ThemeButton>
        <div>
          <div className="text-center midline mb-4">
            <p className=" text-gray-500">快速登入</p>
          </div>
          <SocialLogInButton className="mb-2">
            <div className="flex">
              <div className="w-5">
                <img src={googleIcon} alt="" />
              </div>
              <p>使用Google登入</p>
            </div>
          </SocialLogInButton>
          <SocialLogInButton className="mb-4">
            <div className="flex">
              <div className="w-5">
                <img src={fbIcon} alt="" />
              </div>
              <p>使用Facebook登入</p>
            </div>
          </SocialLogInButton>

        </div>
        <div className="text-center text-lightBlue">
          <Link to={'/SignUp'}><p className="inline-block cursor-pointer">立即註冊</p></Link>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
