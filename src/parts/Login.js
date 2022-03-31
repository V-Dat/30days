import "./Login.scss";
import { useState } from "react";
import Button from "../component/ReUse/Button/Button";
import { useNavigate } from "react-router-dom";
import Child from "../component/ReUse/Child/Child";
import IconLabel from "../component/ReUse/IconLabel/IconLabel";
import Title from "../component/ReUse/Title/Title";

import { Link } from "react-router-dom";
import InputComponent from "../component/ReUse/InputComponent/InputComponent";
import Content from "../component/ReUse/Content/Content";
import Container from "../component/ReUse/Container/Container";
import Row from "../component/ReUse/Row/Row";
import Column from "../component/ReUse/Column/Column";
export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [ , setData] = useState({});
  const navigate = useNavigate();

  const handleInputUsername = (e) => {
    setUser(e.target.value);
    setData((data) => ({ ...data, user }));
  };

  const handleInputPassword = (e) => {
    setPassword(e.target.value);
    setData((data) => ({ ...data, password }));
  };

  const handleLogin = (data) => {
    setData((prev) => ({ ...prev, ...data }));
    console.log(data);
    alert(`
    UserName:${data.user}
    Password:${data.password}`);
    navigate("/");
  };

  return (
    <Content className="login-page background-color">
      <Container>
        <Row className="row d-flex justify-content-center ">
          <Column className="col-md-8 col-lg-6 col-xl-5">
            <Child className="login py-4">
              <Row className="login__title">
                <Title title="Đăng Nhập Vào Website" />
              </Row>
              <Row className=" login__input-place">
                <InputComponent
                  className="input-username w-100"
                  caption="Tên Đăng Nhập"
                  placeholder="Username"
                  type="text"
                  value={user}
                  handleChange={handleInputUsername}
                />
              </Row>
              <Row className=" login__input-place">
                <InputComponent
                  className="input-password w-100"
                  caption="Mật Khẩu"
                  placeholder="Password"
                  type="password"
                  value={password}
                  handleChange={handleInputPassword}
                />
              </Row>

              <Row className="login__input-button ">
                <Button
                  className="button-login"
                  handleClick={handleLogin}
                  data={{ user, password }}
                >
                  Login
                </Button>
              </Row>

              <Row className="mt-2 d-flex justify-content-between">
                <Link to="/forgot-password">
                  <small
                    className="text-decoration-underline text-primary"
                    role="button"
                  >
                    Quên mật khẩu?
                  </small>
                </Link>
                <Link to="/Register">
                  <small
                    className="text-decoration-underline text-primary"
                    role="button"
                  >
                    Tạo tài khoản
                  </small>
                </Link>
              </Row>

              <Row className="mt-4">
                <Title Title className="mt-5 p-3">
                  Đăng Nhập Với
                </Title>
              </Row>

              <Row className="signin">
                <IconLabel className="signin-google" alt="Đăng nhập với Google">
                  <i className="fa-brands fa-google"></i>
                  <span>Tiếp Tục Với Google</span>
                </IconLabel>
                <IconLabel className="signin-github" alt="Đăng nhập với Github">
                  <i className="fa-brands fa-github"></i>
                  <span>Tiếp Tục Với Github</span>
                </IconLabel>
                <IconLabel
                  className="signin-facebook"
                  alt="Đăng nhập với Facebook"
                >
                  <i className="fa-brands fa-facebook"></i>
                  <span>Tiếp Tục Với Google</span>
                </IconLabel>
              </Row>
            </Child>
          </Column>
        </Row>
      </Container>
    </Content>
  );
}
