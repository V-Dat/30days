import "./ForgotPassword.scss";
import { useState } from "react";
import InputComponent from "../component/ReUse/InputComponent/InputComponent";
import Button from "../component/ReUse/Button/Button";
import Child from "../component/ReUse/Child/Child";
import Title from "../component/ReUse/Title/Title";

import { Link, useNavigate } from "react-router-dom";
import Content from "../component/ReUse/Content/Content";
import Container from "../component/ReUse/Container/Container";
import Row from "../component/ReUse/Row/Row";
import Column from "../component/ReUse/Column/Column";
import Detail from "../component/ReUse/Detail/Detail";
export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [, setData] = useState({});
  const navigate = useNavigate();

  const handleInputEmail = (e) => {
    setEmail(e.target.value);
    setData((data) => ({ ...data, email }));
  };

  const handleSendEmail = (data) => {
    setData((prev) => ({ ...prev, ...data }));
    console.log(data);
    alert(`
    Email:${data.email}`);
    navigate("/");
  };

  return (
    <Content className="forgot-password-page background-color">
      <Container>
        <Row className="row d-flex justify-content-center">
          <Column className="mx-auto col-sm-12 col-md-10 col-lg-8 col-xl-6">
            <Child className=" forgot-password px-5 py-4">
              <Row className="forgot-password__title">
                <Title title="Quên Mật Khẩu" className="text-start" />
              </Row>
              <Row className="description">
                <Detail>
                  Bạn quên mật khẩu của mình? Đừng lo lắng! Hãy cung cấp cho
                  chúng tôi email bạn sử dụng để đăng ký tài khoản Website.
                  Chúng tôi sẽ gửi cho bạn một liên kết để đặt lại mật khẩu của
                  bạn qua email đó.
                </Detail>
              </Row>
              <Row className="forgot-password__input-place">
                <InputComponent
                  className="input__email"
                  placeholder="Email"
                  type="email"
                  data={email}
                  handleChange={handleInputEmail}
                />
              </Row>

              <Row className="forgot-password__input-button">
                <Button
                  className="input__button-send"
                  handleClick={handleSendEmail}
                  data={{ email }}
                >
                  Gửi Email Cho Chúng Tôi
                </Button>
              </Row>

              <Row className="d-flex justify-content-between my-2">
                <Link to="/Login">
                  <small
                    className="text-decoration-underline text-primary"
                    role="button"
                  >
                    Đăng Nhập
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
            </Child>
          </Column>
        </Row>
      </Container>
    </Content>
  );
}
