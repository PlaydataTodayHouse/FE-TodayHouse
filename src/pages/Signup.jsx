import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { apiNoToken } from "../network/api";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./Signup.css";

export default function SignUp() {
  const [user, setUser] = useState({
    userId: "",
    password: "",
    name: "",
    phoneNumber: "",
    email: "",
    birth: "",
    profileImage: "",
  });

  const [errors, setErrors] = useState({});

  const validateInput = () => {
    const newErrors = {};

    for (const key in user) {
      if (!user[key]) {
        newErrors[key] = "필수 입력 항목입니다";
      }
    }

    setErrors(newErrors);
    return !Object.keys(newErrors).length;
  };

  const onChangeHandler = (e) => {
    const { value, name } = e.target;

    if (name === "emailFront") {
      setUser((prev) => ({
        ...prev,
        email: `${value}@${prev.email.split("@")[1] || ""}`,
      }));
    } else if (name === "emailBack") {
      setUser((prev) => ({
        ...prev,
        email: `${prev.email.split("@")[0] || ""}@${value}`,
      }));
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  const nav = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (validateInput()) {
      try {
        await apiNoToken("/api/v1/auth/signup", "POST", user);
        toast.success("회원가입이 성공적으로 완료되었습니다.", {
          autoClose: 1000,
          onClose: () => nav("/login"),
        });
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <>
      <ToastContainer position="top-center" />
      <div className="container">
        <Link to="/">
          <img
            className="logoImage"
            src="https://github.com/PlaydataTodayHouse/FE-TodayHouse/blob/dev/src/images/Logo/Logo1.png?raw=true'"
            alt="Your Company"
          />
        </Link>

        <p className="signupText">회원가입</p>
        <p className="sns-text">SNS계정으로 간편하게 회원가입</p>
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

        <div className="divider"></div>

        <div>
          <form onSubmit={onSubmitHandler}>
            {/* 유저 아이디 */}
            <div>
              <div>
                <label
                  htmlFor="userId"
                  style={{
                    color: errors.userId ? "rgb(255, 119, 119)" : "#2f3438",
                  }}
                >
                  아이디
                </label>
              </div>
              <div className="input-container">
                <input
                  id="userId"
                  name="userId"
                  onChange={onChangeHandler}
                  placeholder="아이디"
                  style={
                    errors.userId ? { borderColor: "rgb(255, 119, 119)" } : {}
                  }
                />
                {errors.userId && (
                  <span className="error-text">{errors.userId}</span>
                )}
              </div>
            </div>

            {/* Password */}
            <div>
              <div>
                <label
                  htmlFor="password"
                  style={{
                    color: errors.password ? "rgb(255, 119, 119)" : "#2f3438",
                  }}
                >
                  비밀번호
                </label>
              </div>
              <div className="input-container">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={onChangeHandler}
                  placeholder="비밀번호"
                  style={
                    errors.password ? { borderColor: "rgb(255, 119, 119)" } : {}
                  }
                />
                {errors.password && (
                  <span className="error-text">{errors.password}</span>
                )}
              </div>
            </div>

            {/* Name */}
            <div>
              <div>
                <label
                  htmlFor="name"
                  style={{
                    color: errors.name ? "rgb(255, 119, 119)" : "#2f3438",
                  }}
                >
                  이름
                </label>
              </div>
              <div className="input-container">
                <input
                  id="name"
                  name="name"
                  onChange={onChangeHandler}
                  placeholder="이름"
                  style={
                    errors.name ? { borderColor: "rgb(255, 119, 119)" } : {}
                  }
                />
                {errors.name && (
                  <span className="error-text">{errors.name}</span>
                )}
              </div>
            </div>

            {/* 핸드폰 번호 */}
            <div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  style={{
                    color: errors.phoneNumber
                      ? "rgb(255, 119, 119)"
                      : "#2f3438",
                  }}
                >
                  전화번호
                </label>
              </div>
              <div className="input-container">
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  onChange={onChangeHandler}
                  placeholder="전화번호"
                  style={
                    errors.phoneNumber
                      ? { borderColor: "rgb(255, 119, 119)" }
                      : {}
                  }
                />

                {errors.phoneNumber && (
                  <span className="error-text">{errors.phoneNumber}</span>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="emailFront"
                style={{
                  color: errors.emailFront ? "rgb(255, 119, 119)" : "#2f3438",
                }}
              >
                이메일
              </label>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "360px",
                }}
              >
                <input
                  id="emailFront"
                  name="emailFront"
                  onChange={onChangeHandler}
                  placeholder="Email"
                  style={{
                    boxSizing: "border-box",
                    flex: 1, // 이 값을 조절하여 원하는 너비 비율을 설정할 수 있습니다.
                    marginRight: 5,
                    borderColor: errors.email
                      ? "rgb(255, 119, 119)"
                      : undefined,
                  }}
                />
                <span>@</span>
                <select
                  id="emailBack"
                  name="emailBack"
                  onChange={onChangeHandler}
                  style={{
                    boxSizing: "border-box",
                    flex: 1,
                    marginLeft: 5,
                    height: "40px",
                    borderColor: errors.email
                      ? "rgb(255, 119, 119)"
                      : undefined,
                  }}
                >
                  <option value="nate.com">nate.com</option>
                  <option value="gmail.com">gmail.com</option>
                  <option value="yahoo.com">yahoo.com</option>
                  <option value="naver.com">naver.com</option>
                </select>
              </div>
            </div>

            {/* 생년월일 */}
            <div>
              <div>
                <label
                  htmlFor="birth"
                  style={{
                    color: errors.birth ? "rgb(255, 119, 119)" : "#2f3438",
                  }}
                >
                  생년월일
                </label>
              </div>
              <div className="input-container">
                <input
                  id="birth"
                  name="birth"
                  type="date"
                  onChange={onChangeHandler}
                  placeholder="생년월일"
                  style={
                    errors.birth ? { borderColor: "rgb(255, 119, 119)" } : {}
                  }
                />

                {errors.birth && (
                  <span className="error-text">{errors.birth}</span>
                )}
              </div>
            </div>

            {/* 프로필 이미지 */}
            <div>
              <div className="input-container">
                <label
                  htmlFor="profileImage"
                  style={{
                    color: errors.profileImage
                      ? "rgb(255, 119, 119)"
                      : "#2f3438",
                  }}
                >
                  프로필 사진
                </label>
              </div>
              <div>
                <input
                  id="profileImage"
                  name="profileImage"
                  onChange={onChangeHandler}
                  placeholder="URL"
                  style={
                    errors.profileImage
                      ? { borderColor: "rgb(255, 119, 119)" }
                      : {}
                  }
                />

                {errors.profileImage && (
                  <span className="error-text">{errors.profileImage}</span>
                )}
              </div>
            </div>
            <button type="submit">회원가입하기</button>
          </form>
          <div className="center-align">
            <span>이미 아이디가 있으신가요?</span>
            <button className="text-button" onClick={() => nav("/login")}>
              로그인
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
