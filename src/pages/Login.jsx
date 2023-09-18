import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { api, apiNoToken } from "../network/api";
import { setMe, setState } from "../feature/MeSlice";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router";
import "./Login.css";

export default function LoginPage() {
  const dispatch = useDispatch();
  //로그인 정보
  const [user, setUser] = useState({
    userId: "",
    password: "",
  });
  //로그인 정보 SET
  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };
  //로그인
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await apiNoToken("/api/v1/auth/login", "POST", user);
      localStorage.setItem("token", data.data.accessToken);
      localStorage.setItem("refreshToken", data.data.refreshToken);
      dispatch(setState(data));
      nav("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
    const info = await api("/api/v1/auth/me", "GET");
    console.log(info);
    dispatch(
      setMe({
        id: info.data.id,
        userId: info.data.userid,
        name: info.data.name,
        phoneNumber: info.data.phoneNumber,
        address: info.data.address,
        email: info.data.email,
        birth: info.data.birth,
        profileImage: info.data.profileImage,
        sellerName: info.data.sellerName,
        sellerNumber: info.data.sellerNumber,
      })
    );
  };

  //로그인시 이동
  const nav = useNavigate();
  return (
    <>
      <ToastContainer position="top-center" />
      <div className="login-min-full-flex-center">
        <div className="login-form-container">
          <div className="login-logo-container">
            <img
              className="login-logo-image"
              src="https://github.com/PlaydataTodayHouse/FE-TodayHouse/blob/dev/src/images/Logo/Logo1.png?raw=true', link: '/'"
              alt="Logo"
            />
            <h2 className="login-logo-text"> </h2>
          </div>

          <form className="login-space-y-6" onSubmit={onSubmitHandler}>
            <div>
              <div className="login-flex items-center justify-between">
                <label htmlFor="userId" className="login-label"></label>
              </div>
              <div>
                <input
                  id="userId"
                  name="userId"
                  type="text"
                  onChange={onChangeHandler}
                  required
                  className="login-input-field"
                  placeholder="  아이디"
                />
              </div>
            </div>

            <div>
              <div className="login-flex items-center justify-between">
                <label htmlFor="password" className="login-label"></label>
              </div>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={onChangeHandler}
                  required
                  className="login-input-field"
                  placeholder="  비밀번호"
                />
              </div>
            </div>

            <div>
              <button type="submit" className="login-login-button">
                로그인
              </button>
            </div>
          </form>

          <div className="login-button-container">
            <button className="login-reset-btn">비밀번호 재설정</button>
            <button className="login-signup-btn">회원가입</button>
          </div>

          <p className="login-sns-text">SNS계정으로 간편 로그인/회원가입</p>
          <div className="login-sns-icons">
            <img
              src="https://github.com/PlaydataTodayHouse/FE-TodayHouse/blob/dev/src/images/Logo/Facebook.svg?raw=true"
              alt="Facebook"
              className="login-sns-icon"
            />
            <img
              src="https://github.com/PlaydataTodayHouse/FE-TodayHouse/blob/dev/src/images/Logo/Kakaotalk.svg?raw=true"
              alt="Kakaotalk"
              className="login-sns-icon"
            />
            <img
              src="https://github.com/PlaydataTodayHouse/FE-TodayHouse/blob/dev/src/images/Logo/Naver.svg?raw=true"
              alt="Naver"
              className="login-sns-icon"
            />
          </div>
          <p className="login-problem-text">로그인에 문제가 있으신가요?</p>
          <div className="login-divider"></div>
          <p className="login-nonmemberOrder-text">비회원 주문조회하기</p>
          <p className="login-copyWrite-text">© playdata, TomorrowHouse</p>
        </div>
      </div>
    </>
  );
}
