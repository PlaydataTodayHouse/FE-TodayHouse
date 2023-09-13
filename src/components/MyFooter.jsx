const MyFooter = () => {
  return (
    <div
      style={{
        backgroundColor: "#f7f9fa",
        width: "1497px",
        height: "320px",
        position: "relative",
        bottom: 0,
        display: "flex", // Flexbox를 사용하여 자식 요소를 가로로 배치합니다.
      }}
    >
      <div
        style={{
          width: "1256px",
          height: "240px",
          margin: "40px 120px", // 여백을 한 번에 설정합니다.
          padding: "0 60px", // 좌우 여백을 설정합니다.
          display: "flex", // Flexbox를 사용하여 자식 요소를 가로로 배치합니다.
        }}
      >
        <div
          style={{
            width: "253px",
            height: "240px",
            borderRight: "1px solid #EAEDEF",
            marginRight: "30px",
            float: "left", // 불필요한 float 스타일입니다.
          }}
        >
          <div>
            <a
              href="#"
              style={{
                textDecoration: "none",
                fontSize: "18px",
                fontWeight: "700",
                lineHeight: "20px",
                color: "#2f3438",
                display: "flex", // Flexbox를 사용하여 아이콘과 텍스트를 가로로 배치합니다.
                alignItems: "center", // 수직 가운데 정렬
              }}
            >
              고객센터
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                  <path
                    fill="#000000"
                    d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657Z"
                  />
                </g>
              </svg>
            </a>
            <div style={{ marginTop: "20px" }}>
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  paddingRight: "6px",
                  lineHeight: "20px",
                  color: "#2f3438",
                }}
              >
                1544-1544
              </span>
              <span style={{ fontSize: "14px" }}>09:00~18:00</span>
            </div>
            <p
              style={{
                fontSize: "12px",
                lineHeight: "20px",
                letterSpacing: "-0.3px",
                color: "#2f3438",
              }}
            >
              평일: 전체 문의 상담 가능 주말,
              <br /> {/* 줄 바꿈을 <br>로 변경 */}
              공휴일: 오늘의집 직접배송, 이사/시공/제품설치 <br />{" "}
              {/* 줄 바꿈을 <br>로 변경 */}
              문의 상담 가능
            </p>
          </div>
          <div
            style={{
              width: "187px",
              height: "32px",
              fontSize: "14px",
              lineHeight: "20px",
              boxShadow: "none",
              borderRadius: "4px",
              border: "1px solid #EAEDEF",
              marginBottom: "12px",
              textAlign: "center", // 텍스트 가운데 정렬
              display: "flex",
              alignItems: "center", // 수직 가운데 정렬
              color: "#2f3438",
            }}
          >
            <span style={{ padding: "0 8px", whiteSpace: "nowrap" }}>
              카톡 상담(평일 09:00~18:00)
            </span>
          </div>
          <div
            style={{
              width: "82px",
              height: "32px",
              fontSize: "14px",
              lineHeight: "20px",
              boxShadow: "none",
              borderRadius: "4px",
              border: "1px solid #EAEDEF",
              textAlign: "center", // 텍스트 가운데 정렬
              display: "flex",
              alignItems: "center", // 수직 가운데 정렬
              color: "#2f3438",
            }}
          >
            <span style={{ padding: "0 8px", whiteSpace: "nowrap" }}>
              이메일 문의
            </span>
          </div>
        </div>
        <div
          className="container"
          style={{
            margin: "0",
            padding: "0",
            width: "253px",
            marginLeft: "30px",
            marginRight: "30px",
            borderRight: "1px solid #EAEDEF",
          }}
        >
          <div
            className="row row-cols-2"
            style={{
              width: "253px",
              height: "240px",

              marginRight: "30px",
              color: "#424242",
            }}
          >
            {/* 다양한 링크 */}
            <div
              className="col"
              style={{
                width: "121px",
                height: "16px",
                padding: "0",
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "-0.3px",
              }}
            >
              회사소개
            </div>
            <div
              className="col"
              style={{
                width: "121px",
                height: "16px",
                padding: "0",
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "-0.3px",
              }}
            >
              입점신청
            </div>
            <div
              className="col"
              style={{
                width: "121px",
                height: "16px",
                padding: "0",
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "-0.3px",
              }}
            >
              채용정보
            </div>
            <div
              className="col"
              style={{
                width: "121px",
                height: "16px",
                padding: "0",
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "-0.3px",
              }}
            >
              제휴/광고 문의
            </div>
            <div
              className="col"
              style={{
                width: "121px",
                height: "16px",
                padding: "0",
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "-0.3px",
              }}
            >
              이용약관
            </div>
            <div
              className="col"
              style={{
                width: "121px",
                height: "16px",
                padding: "0",
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "-0.3px",
              }}
            >
              사업자 구매 회원
            </div>
            <div
              className="col"
              style={{
                width: "121px",
                height: "16px",
                padding: "0",
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "-0.3px",
              }}
            >
              개인정보 처리방침
            </div>
            <div
              className="col"
              style={{
                width: "121px",
                height: "16px",
                padding: "0",
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "-0.3px",
              }}
            >
              시공파트너 안내
            </div>
            <div
              className="col"
              style={{
                width: "121px",
                height: "16px",
                padding: "0",
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "-0.3px",
              }}
            >
              공지사항
            </div>
            <div
              className="col"
              style={{
                width: "121px",
                height: "16px",
                padding: "0",
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "-0.3px",
              }}
            >
              상품광고 소개
            </div>
            <div
              className="col"
              style={{
                width: "121px",
                height: "16px",
                padding: "0",
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "-0.3px",
              }}
            >
              안전거래센터
            </div>
            <div
              className="col"
              style={{
                width: "121px",
                height: "16px",
                padding: "0",
                fontSize: "12px",
                lineHeight: "16px",
                letterSpacing: "-0.3px",
              }}
            >
              고객의 소리
            </div>
          </div>
        </div>
        <div
          style={{
            width: "507px",
            height: "240px",
            float: "left",
            marginLeft: "30px",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              lineHeight: "20px",
              letterSpacing: "-0.3px",
              color: "#828c94",
              marginBottom: "16px",
            }}
          >
            (주)버킷플레이스 | 대표이사 이승재 |서울 서초구 서초대로74길 4
            삼성생명서초타워 25층, 27층 <tr />
            contact@bucketplace.net | 사업자등록번호 119-86-91245 사업자정보확인
            <tr />
            통신판매업신고번호 제2018-서울서초-0580호
          </p>
          <p
            style={{
              fontSize: "10px",
              lineHeight: "14px",
              letterSpacing: "-0.3px",
              color: "#828c94",
              marginBottom: "13px",
            }}
          >
            고객님이 현금결제한 금액에 대해 우리은행과 채무지급보증 계약을
            체결하여 안전거래를 보장하고 있습니다. 서비스가입사실확인
          </p>
          <div
            style={{
              display: "flex",
              width: "174.8px",
              height: "39px",
              padding: "0px 6px",
              gap: "6px",
              border: "1px solid rgba(0, 0, 0, 0.08)",
              whiteSpace: "nowrap",
              alignItems: "center",
              float: "left",
              marginRight: "6px",
            }}
          >
            <img
              width="32"
              alt="8f5b2c2e98ea1196"
              src="https://github.com/icebear2n2/ChatRoom/assets/87232411/ae62ff31-96db-4383-82b5-4d8db3dfe0d6"
            />
            <div
              style={{
                fontSize: "10px",
                lineHeight: "14px",
                letterSpacing: "-0.3px",
                color: "#828c94",
              }}
            >
              오늘의집 서비스 운영 <tr /> 2021. 09. 08 ~ 2024. 09. 07
            </div>
          </div>
          <div
            style={{
              width: "115px",
              height: "39px",
              padding: "0px 6px",
              marginRight: "6px",
              gap: "6px",
              border: "1px solid rgba(0, 0, 0, 0.08)",
              whiteSpace: "nowrap",
              alignItems: "center",
              textAlign: "center",
              float: "left",
            }}
          >
            <img
              width="32"
              alt="8f5b2c2e98ea1196"
              src="https://github.com/icebear2n2/ChatRoom/assets/87232411/8f2ae1a8-2773-414f-9d68-0c8d93eee3eb"
              style={{ marginTop: "3px", marginBottom: "5px" }}
            />
          </div>
          <div
            style={{
              width: "115px",
              height: "39px",
              padding: "0px 6px",
              gap: "6px",
              border: "1px solid rgba(0, 0, 0, 0.08)",
              whiteSpace: "nowrap",
              alignItems: "center",
              textAlign: "center",
              float: "left",
            }}
          >
            <img
              width="32"
              alt="8f5b2c2e98ea1196"
              src="https://github.com/icebear2n2/ChatRoom/assets/87232411/c6fc315a-835e-4987-866b-862baae03022"
              style={{ marginTop: "3px", marginBottom: "5px" }}
            />
          </div>
          <p
            style={{
              marginTop: "12px",
              marginBottom: "10px",
              float: "left",
              fontSize: "10px",
              lineHeight: "14px",
              letterSpacing: "-0.3px",
              color: "#828c94",
              whiteSpace: "nowrap",
            }}
          >
            주)버킷플레이스는 통신판매중개자로 거래 당사자가 아니므로, 판매자가
            등록한 상품정보 및 거래 등에 대해 책임을 지지 않습니다. 단,
            <tr />
            (주)버킷플레이스가 판매자로 등록 판매한 상품은 판매자로서 책임을
            부담합니다.
          </p>
          <div className="media" style={{ float: "left" }}>
            <span style={{ marginRight: "16px" }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#6b7280"
                  d="M11.603 9.833L9.357 8.785C9.161 8.694 9 8.796 9 9.013v1.974c0 .217.161.319.357.228l2.245-1.048c.197-.092.197-.242.001-.334zM10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4zm0 13.5c-4.914 0-5-.443-5-3.9s.086-3.9 5-3.9s5 .443 5 3.9s-.086 3.9-5 3.9z"
                />
              </svg>
            </span>
            <span style={{ marginRight: "16px" }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#6b7280"
                  d="M13 10a3 3 0 1 1-6 0c0-.171.018-.338.049-.5H6v3.997c0 .278.225.503.503.503h6.995a.503.503 0 0 0 .502-.503V9.5h-1.049c.031.162.049.329.049.5zm-3 2a2 2 0 1 0-.001-4.001A2 2 0 0 0 10 12zm2.4-4.1h1.199a.301.301 0 0 0 .301-.3V6.401a.301.301 0 0 0-.301-.301H12.4a.301.301 0 0 0-.301.301V7.6c.001.165.136.3.301.3zM10 .4A9.6 9.6 0 0 0 .4 10a9.6 9.6 0 0 0 9.6 9.6a9.6 9.6 0 0 0 9.6-9.6A9.6 9.6 0 0 0 10 .4zm5 13.489C15 14.5 14.5 15 13.889 15H6.111C5.5 15 5 14.5 5 13.889V6.111C5 5.5 5.5 5 6.111 5h7.778C14.5 5 15 5.5 15 6.111v7.778z"
                />
              </svg>
            </span>
            <span style={{ marginRight: "16px" }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#6b7280"
                  d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131c.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                />
              </svg>
            </span>
            <span style={{ marginRight: "16px" }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#6b7280"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27c.68 0 1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                />
              </svg>
            </span>
            <span style={{ marginRight: "16px" }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#6b7280"
                  d="M14.608 12.172c0 .84.239 1.175.864 1.175c1.393 0 2.28-1.775 2.28-4.727c0-4.512-3.288-6.672-7.393-6.672c-4.223 0-8.064 2.832-8.064 8.184c0 5.112 3.36 7.896 8.52 7.896c1.752 0 2.928-.192 4.727-.792l.386 1.607c-1.776.577-3.674.744-5.137.744c-6.768 0-10.393-3.72-10.393-9.456c0-5.784 4.201-9.72 9.985-9.72c6.024 0 9.215 3.6 9.215 8.016c0 3.744-1.175 6.6-4.871 6.6c-1.681 0-2.784-.672-2.928-2.161c-.432 1.656-1.584 2.161-3.145 2.161c-2.088 0-3.84-1.609-3.84-4.848c0-3.264 1.537-5.28 4.297-5.28c1.464 0 2.376.576 2.782 1.488l.697-1.272h2.016v7.057h.002zm-2.951-3.168c0-1.319-.985-1.872-1.801-1.872c-.888 0-1.871.719-1.871 2.832c0 1.68.744 2.616 1.871 2.616c.792 0 1.801-.504 1.801-1.896v-1.68z"
                />
              </svg>
            </span>
            <p
              style={{
                marginTop: "10px",
                fontSize: "10px",
                lineHeight: "14px",
                letterSpacing: "-0.3px",
                color: "#828c94",
                whiteSpace: "nowrap",
              }}
            >
              Copyright 2014. bucketplace, Co., Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyFooter;
