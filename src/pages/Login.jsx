import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { api, apiNoToken } from "../network/api";
import { setMe, setState } from "../feature/MeSlice";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router";
import "./Login.css";

export default function Login() {
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
      localStorage.setItem("token", data.data);
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
      <div className="min-full-flex-center">
        <div className="form-container">
          <div className="logo-container">
            <img
              className="logo-image"
              src="https://github.com/PlaydataTodayHouse/FE-TodayHouse/blob/dev/src/images/Logo/Logo1.png?raw=true', link: '/'"
              alt="Logo"
            />
            <h2 className="logo-text"> </h2>
          </div>

          <form className="space-y-6" onSubmit={onSubmitHandler}>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="userId" className="label"></label>
              </div>
              <div>
                <input
                  id="userId"
                  name="userId"
                  type="text"
                  onChange={onChangeHandler}
                  required
                  className="input-field"
                  placeholder="  아이디"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="label"></label>
              </div>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={onChangeHandler}
                  required
                  className="input-field"
                  placeholder="  비밀번호"
                />
              </div>
            </div>

            <div>
              <button type="submit" className="button">
                로그인
              </button>
            </div>
          </form>

          <div className="button-container">
            <button className="reset-btn">비밀번호 재설정</button>
            <button className="signup-btn">회원가입</button>
          </div>

          <p className="sns-text">SNS계정으로 간편 로그인/회원가입</p>
          <div className="sns-icons">
            <img
              src="https://github.com/PlaydataTodayHouse/FE-TodayHouse/blob/dev/src/images/Logo/Facebook.svg?raw=true"
              alt="Facebook"
              className="sns-icon"
            />
            <img
              src="https://github.com/PlaydataTodayHouse/FE-TodayHouse/blob/dev/src/images/Logo/Kakaotalk.svg?raw=true"
              alt="Kakaotalk"
              className="sns-icon"
            />
            <img
              src="https://github.com/PlaydataTodayHouse/FE-TodayHouse/blob/dev/src/images/Logo/Naver.svg?raw=true"
              alt="Naver"
              className="sns-icon"
            />
          </div>
          <p className="problem-text">로그인에 문제가 있으신가요?</p>
          <div className="divider"></div>
          <p className="nonmemberOrder-text">비회원 주문조회하기</p>
          <p className="copyWrite-text">© playdata, TomorrowHouse</p>
        </div>
      </div>
    </>
  );
}
