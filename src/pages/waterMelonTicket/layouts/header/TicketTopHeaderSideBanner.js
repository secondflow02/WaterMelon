//세종문화회관 기획공연 세종시즌2023
import photo1 from 'imgs/watermelonTicketImg/1.png';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import { flexCenter } from 'styles/common';
// import photo2 from 'imgs/watermelonTicketImg/2.png';
// import photo3 from 'imgs/watermelonTicketImg/3.png';

const TicketTopHeaderSideBanner = () => {
    const slideRef = useRef(null);
    const [currentImgOrder, setCurrentImgOrder] = useState(0);
    // const Img_Width = 200;
    // const SlideRange = currentImgOrder * Img_Width;
    // useEffect(() => {
    //     slideRef.current.style.transform = `translateX(-${SlideRange})`;
    // }, [currentImgOrder]);
    const onMoveNextBanner = () => {
        if (currentImgOrder === 2)
            return setCurrentImgOrder(currentImgOrder + 1);
    };

    return (
        <>
            <Wrapper>
                <ImgBox>
                    <Ul>
                        <li>
                            <a href="&">
                                <img src={photo1}></img>
                            </a>
                            {/* <a href="&">
                            <img src={photo2}></img>
                        </a>
                        <a href="&">
                            <img src={photo3}></img>
                        </a> */}
                        </li>
                    </Ul>
                    <Button>&lt;</Button>
                    <Button>&gt;</Button>
                </ImgBox>
            </Wrapper>
        </>
    );
};
export default TicketTopHeaderSideBanner;
const Wrapper = styled.div``;
const ImgBox = styled.div`
    ${flexCenter}
`;
const Ul = styled.ul`
    list-style: none;
`;
const Button = styled.button`
    border-radius: 5px;
`;
