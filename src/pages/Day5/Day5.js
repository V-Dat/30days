import "./index.css";
import "../../assets/css/grid.css";
import { useState, useCallback } from "react";
import InputComponent from "../../component/Day5/InputComponent";
import Button from "../../component/Day5/Button";

function Day5() {
  const [state, setSate] = useState("Vui Lòng Đăng Nhập");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleInputUsername = (e) => {
    setUser(e.target.value);
  };

  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleInputEmail = (e) => {
    setEmail(e.target.value);
  };

  // vấn đề: mỗi lần input => re-render => hàm sẽ được khởi tạo lại => vậy làm sao
  console.log(
    "||",
    "user:",
    user,
    "||",
    "password:",
    password,
    "email:",
    email
  );

  return (
    <div className="day5 grid wide">
      <div className="row">
        <div className="col l12 m-12 c-12">
          <div className="login">
            <form>
              <h3 className="input__title">
                {state}
                <i className="fa-solid fa-heart"></i>
              </h3>

              <InputComponent
                className="input__user input__place"
                caption="Tên Đăng Nhập"
                placeholder="Username"
                type="text"
                value={user}
                handleFunction={handleInputUsername}
              />
              <InputComponent
                className="input__password input__place"
                caption="Mật Khẩu"
                placeholder="Password"
                type="password"
                value={password}
                handleFunction={handleInputPassword}
              />

              <InputComponent
                className="input__email input__place"
                caption="Email"
                placeholder="Email"
                type="email"
                value={email}
                handleFunction={handleInputEmail}
              />
              <Button user={user} password={password} email={email}></Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Day5;
