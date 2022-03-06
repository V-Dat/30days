import "./index.css";
import "../../assets/css/grid.css";
import { useState } from "react";

function Day5() {
  // counter

  // register
  const [email, setEmail] = useState();
  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  const handleLogin = () => {
    console.log('id: '+ user + 'pw: ' +  password+'em: '+ email);
  };

  const handleRegister = () => {
    console.log('id: '+ user + 'pw: ' +  password+'em: '+ email);
  };

  const handleInputUsername = (e) => {
    setUser(e.target.value);
  };

  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleInputEmail = (e) => {
    setEmail(e.target.value);
  };

  console.log("Register - ReRender: ", email || 'email' , user || 'user', password || 'password');

  return (
    <div className="day5 grid wide">
      <div className="row">
        <div className="col l12 m-12 c-12">
          <div className="login">
            <form>
              <h3 className="input__title">Vui Lòng Đăng Nhập <i className="fa-solid fa-heart"></i></h3>

              <div className="input__user input__place">
                <p className='caption'>Tên Đăng Nhập</p>
                <input
                  type="text"
                  onChange={(e) => handleInputUsername(e)}
                  value={user}
                  placeholder="Username"
                />
              </div>
              <div className="input__password input__place">
              <p className='caption'>Mật Khẩu</p>
                <input
                  type="password"
                  onChange={(e) => handleInputPassword(e)}
                  value={password}
                  placeholder="Password"
                />
              </div>

              <div className="input__email input__place">
              <p className='caption'>Email</p>
                <input
                  type="email"
                  onChange={(e) => handleInputEmail(e)}
                  value={email}
                  placeholder="Email"
                />
              </div>
              <div className="input__button input__place">
                <button className="input__button--register" onClick={handleRegister}>
                  Đăng Ký
                </button>
                <button className="input__button--login" onClick={handleLogin}>
                  Đăng Nhập
                </button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Day5;
