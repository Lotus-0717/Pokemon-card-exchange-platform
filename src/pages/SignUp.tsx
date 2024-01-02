import ThemeButton from "../components/ThemeButton";

function SignUp() {
  return (
    <div>
      <div className="shadow-lg p-4 rounded-lg max-w-xs m-auto border">
        <h5 className="mb-4 text-center font-bold">基本資料</h5>
        <div className="mb-2">
          <p className="text-sm text-gray-600 mb-1">暱稱</p>
          <input className="rounded-sm focus-visible:outline-none w-full border px-2 h-8" type="text" placeholder="請輸入暱稱" />
        </div>
        <div className="mb-2">
          <p className="text-sm text-gray-600 mb-1">姓名</p>
          <input className="rounded-sm focus-visible:outline-none w-full border px-2 h-8" type="text" placeholder="請輸入真實姓名" />
        </div>
        <div className="mb-2">
          <p className="text-sm text-gray-600 mb-1">連絡電話</p>
          <input className="rounded-sm focus-visible:outline-none w-full border px-2 h-8" type="tel" placeholder="請輸入手機號碼" />
        </div>
        <hr className=" my-5" />
        <h5 className="mb-4 text-center font-bold">註冊帳號</h5>
        <div className="mb-2">
          <p className="text-sm text-gray-600 mb-1">帳號</p>
          <input className="rounded-sm focus-visible:outline-none w-full border px-2 h-8" type="email" placeholder="請輸入Email" />
        </div>
        <div className="mb-2">
          <p className="text-sm text-gray-600 mb-1">密碼</p>
          <input maxLength={16} className="rounded-sm focus-visible:outline-none w-full border px-2 h-8" type="password" placeholder="請輸入密碼" />
          <p className="text-xs mt-2 text-right text-gray-600">請輸入8到16位大小寫英文、數字</p>
        </div>
        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-1">確認密碼</p>
          <input maxLength={16} className="rounded-sm focus-visible:outline-none w-full border px-2 h-8" type="password" placeholder="請輸入密碼" />
        </div>
        <ThemeButton className="mb-4">
          註冊
        </ThemeButton>
      </div>
    </div>
  );
}

export default SignUp;