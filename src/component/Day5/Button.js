import "./Button.scss";
import "../../assets/css/grid.css";

function Button({ user, password, email }) {
  const handleLogin = () => {
    console.log("id: " + user + "pw: " + password + "em: " + email);
  };

  const handleRegister = () => {
    console.log("id: " + user + "pw: " + password + "em: " + email);
  };

  // vấn đề: mỗi lần input => re-render => hàm sẽ được khởi tạo lại => vậy làm sao

  return (
    <div className="input__button input__place">
      <button className="input__button--register" onClick={handleRegister}>
        Đăng Ký
      </button>
      <button className="input__button--login" onClick={handleLogin}>
        Đăng Nhập
      </button>
    </div>
  );
}

export default Button;
