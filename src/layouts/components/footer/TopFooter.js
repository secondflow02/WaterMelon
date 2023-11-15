import styled from "styled-components";
import { flexAlignCenter } from "../../../styles/common";

const TopFooter = () => {
    return (
        <Wrapper>
            <Box>
                <Ul>
                    <li>
                        <A href="@"> 워터멜론2조 둘러보기 </A>
                    </li>
                    <li>
                        <A href="@"> 멜론스튜디오 </A>
                    </li>
                    <li>
                        <A href="@"> Windows 플레이어 </A>
                    </li>
                    <li>
                        <A href="@"> Mac 플레이어 </A>
                    </li>
                    <li>
                        <A href="@"> iPad </A>
                    </li>
                    <li>
                        <A href="@"> 고객센터 </A>
                    </li>
                </Ul>
            </Box>
        </Wrapper>
    );
};

export default TopFooter;
const Wrapper = styled.div`
    width: 100%;
    height: 150px;
    position: absolute;
    bottom: 10%;
`;
const Ul = styled.ul`
    height: 50px;
    list-style: none;
    display: flex;
    ${flexAlignCenter}
    margin-left: 600px;
`;
const Box = styled.div`
    border-top: 1px solid #666;
    border-bottom: 1px solid #ccc;
`;
const A = styled.a`
    text-decoration: none;
    font-size: 16px;
    font-weight: 800;
    padding: 10px;
    color: #999;
    &:hover {
        cursor: pointer;
        color: #000;
    }
`;
