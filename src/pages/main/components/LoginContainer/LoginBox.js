import { styled } from 'styled-components';

import Promotions from './Promotions';
//로그인
// 1페어 이영록 장지영
const LoginBox = () => {
    //const navigate = useNavigate();
    return (
        <Styled.Wrapper>
            <Styled.LoginContainer>
                <Styled.LoginSContainer>
                    <Styled.Explanation>
                        워터멜론을 더 안전하게 이용하세요.
                    </Styled.Explanation>
                    <Styled.SignUp href="SignUp">회원가입</Styled.SignUp>
                </Styled.LoginSContainer>
                <Styled.LoginBtn>
                    <span>로그인</span>
                </Styled.LoginBtn>
            </Styled.LoginContainer>
            <Promotions />
        </Styled.Wrapper>
    );
};
export default LoginBox;
//로그인 및 광고 박스
const Wrapper = styled.div`
    float: left;
    margin-left: 8px;
    margin-top: 24px;
    width: 280px;
    height: 316px;
`;
//로그인 박스
const LoginContainer = styled.div`
    width: 280px;
    height: 119px;
    position: relative;
    background-color: #fbfbfb;
    border: 1px solid #e0e0e0;
    text-align: center;
`;
//로그인 소박스
const LoginSContainer = styled.div`
    padding: 24px 17px 7px;
    overflow: hidden;
    text-align: center;
`;

//멜론설명
const Explanation = styled.p`
    color: #939393;
    font-size: 11px;
    float: left;
    margin: 0;
`;
//회원가입 버튼
const SignUp = styled.a`
    width: 42px;
    height: 18px;
    color: #818181;
    font-size: 11px;
    float: right;
    letter-spacing: -0.5px;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;
//로그인 버튼
const LoginBtn = styled.button`
    width: 88%;
    height: 42px;
    text-align: center;
    background-color: #00d344;
    margin: 0 17px;
    color: #fff;
    font-size: 14px;
    border: 0;
    &:hover {
        background-color: #01b925;
        cursor: pointer;
    }
`;
//스타일 컴포넌트
const Styled = {
    Wrapper,
    LoginContainer,
    LoginSContainer,

    Explanation,
    SignUp,
    LoginBtn,
};
