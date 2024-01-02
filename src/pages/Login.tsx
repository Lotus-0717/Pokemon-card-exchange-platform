import ThemeButton, { SocialLogInButton } from "../components/ThemeButton";
import { Link } from 'react-router-dom';

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
                <svg width="100%" height="100%" viewBox="0 0 25 25"><g fill="none" fill-rule="evenodd"><path d="M20.66 12.693c0-.603-.054-1.182-.155-1.738H12.5v3.287h4.575a3.91 3.91 0 01-1.697 2.566v2.133h2.747c1.608-1.48 2.535-3.65 2.535-6.24z" fill="#4285F4"></path><path d="M12.5 21c2.295 0 4.22-.76 5.625-2.06l-2.747-2.132c-.76.51-1.734.81-2.878.81-2.214 0-4.088-1.494-4.756-3.503h-2.84v2.202A8.498 8.498 0 0012.5 21z" fill="#34A853"></path><path d="M7.744 14.115c-.17-.51-.267-1.055-.267-1.615s.097-1.105.267-1.615V8.683h-2.84A8.488 8.488 0 004 12.5c0 1.372.328 2.67.904 3.817l2.84-2.202z" fill="#FBBC05"></path><path d="M12.5 7.38c1.248 0 2.368.43 3.25 1.272l2.437-2.438C16.715 4.842 14.79 4 12.5 4a8.497 8.497 0 00-7.596 4.683l2.84 2.202c.668-2.01 2.542-3.504 4.756-3.504z" fill="#EA4335"></path></g></svg>
              </div>
              <p>使用Google登入</p>
            </div>
          </SocialLogInButton>
          <SocialLogInButton className="mb-4">
            <div className="flex">
              <div className="w-5">
                <svg width="100%" height="100%" viewBox="0 0 25 25"><path d="M20.292 4H4.709A.709.709 0 004 4.708v15.584c0 .391.317.708.709.708h8.323v-6.375h-2.125v-2.656h2.125V9.844c0-2.196 1.39-3.276 3.348-3.276.938 0 1.745.07 1.98.1v2.295h-1.358c-1.066 0-1.314.507-1.314 1.25v1.756h2.656l-.531 2.656h-2.125L15.73 21h4.562a.708.708 0 00.708-.708V4.708A.708.708 0 0020.292 4" fill="#3b5998"></path></svg>
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
