import "./Register.scss";
import InputComponent from "../component/ReUse/InputComponent/InputComponent";
import Button from "../component/ReUse/Button/Button";
import Child from "../component/ReUse/Child/Child";
import IconLabel from "../component/ReUse/IconLabel/IconLabel";
import Title from "../component/ReUse/Title/Title";
import Content from "../component/ReUse/Content/Content";
import Container from "../component/ReUse/Container/Container";
import Row from "../component/ReUse/Row/Row";
import Column from "../component/ReUse/Column/Column";
import Text from "../component/ReUse/Text/Text";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const [email, setEmail] = useState("");
  const [inputYourName, setInputYourName] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [data, setData] = useState({email:'', password:'', user:'', rePassword:'', inputYourName:''});
  const navigate = useNavigate();

  const handleInputUserName = (e) => {
    setUser(e.target.value);
    setData((data) => ({ ...data, user:e.target.value }));
  };
  const handleInputYourName = (e) => {
    setInputYourName(e.target.value);
    setData((data) => ({ ...data, inputYourName: e.target.value }));
  };
  const handleInputPassword = (e) => {
    setPassword(e.target.value);
    setData((data) => ({ ...data, password: e.target.value }));
  };
  const handleReEnterPassword = (e) => {
    setRePassword(e.target.value);
    setData((data) => ({ ...data, rePassword: e.target.value }));
  };

  const handleInputEmail = (e) => {
    setEmail(e.target.value);
    setData((data) => ({ ...data, email: e.target.value }));
  };

  const handleRegister = () => {
    console.log(data);
    alert(`
    YourName:${data.inputYourName}
    UserName:${data.user}
    Email:${data.email}
    Password:${data.password}
    RePassword:${data.rePassword}`);
    navigate("/");
  };

  return (
    <Content className="register-pages background-color">
      <Container>
        <Row className="row d-flex justify-content-center ">
          <Column className="mx-auto col-sm-12 col-md-10 col-lg-8 col-xl-6">
            <Child className="register px-5 py-4">
              <Row className="register__title">
                <Title className="input__title" title="????ng K?? T??i Kho???n" />
              </Row>
              <Row className="register__input-place w-auto">
                <InputComponent
                  className="input-yourname w-100 mt-4"
                  placeholder="Yourname"
                  type="text"
                  name='yourname'
                  value={inputYourName}
                  handleChange={handleInputYourName}
                ></InputComponent>
              </Row>
              <Row className="register__input-place w-auto d-flex justify-content-between">
                <InputComponent
                  className="  input-email-username mt-4 w-100 me-3"
                  placeholder="Your Email"
                  name='email'
                  type="email"
                  value={email}
                  handleChange={handleInputEmail}
                ></InputComponent>

                <InputComponent
                  className="input-email-username mt-4 w-100 ms-3"
                  placeholder="Username"
                  name='email'
                  type="text"
                  value={user}
                  handleChange={handleInputUserName}
                ></InputComponent>
              </Row>

              <Row className="register__input-place">
                <InputComponent
                  className="input-password w-100 mt-4"
                  placeholder="Password"
                  type="password"
                  value={password}
                  handleChange={handleInputPassword}
                ></InputComponent>
              </Row>

              <Row className="register__input-place">
                <InputComponent
                  className="input-re-password w-100 mt-4"
                  placeholder="Re-enter password"
                  type="password"
                  value={rePassword}
                  handleChange={handleReEnterPassword}
                ></InputComponent>
              </Row>

              <Row className="register__button  mt-4">
                <Button
                  className="button-register"
                  handleClick={handleRegister}
                >
                  Register
                </Button>
              </Row>
              <Row className="mt-4">
                <Text className="text-center">
                  T??i ?????ng ?? v???i ??i???u kho???n d???ch v??? c???a Website
                </Text>
              </Row>
              <Row className="mt-4">
                <Title Title className="p-4">
                  ????ng Nh???p V???i
                </Title>
              </Row>
              <Row className="signin d-flex justify-content-around flex-wrap">
                <IconLabel className="signin-google" alt="????ng nh???p v???i Google">
                  <i className="fa-brands fa-google"></i>
                  <span>Ti???p T???c V???i Google</span>
                </IconLabel>
                <IconLabel className="signin-github" alt="????ng nh???p v???i Github">
                  <i className="fa-brands fa-github"></i>
                  <span>Ti???p T???c V???i Github</span>
                </IconLabel>
                <IconLabel
                  className="signin-facebook"
                  alt="????ng nh???p v???i Facebook"
                >
                  <i className="fa-brands fa-facebook"></i>
                  <span>Ti???p T???c V???i Google</span>
                </IconLabel>
              </Row>
            </Child>
          </Column>
        </Row>
      </Container>
    </Content>
  );
}
