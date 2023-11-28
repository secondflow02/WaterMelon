//세종문화회관 기획공연 세종시즌2023
import photo1 from 'imgs/watermelonTicketImg/1.png';
import photo2 from 'imgs/watermelonTicketImg/2.png';
import photo3 from 'imgs/watermelonTicketImg/3.png';
import { useState } from 'react';
import styled from 'styled-components';
import { flexCenter } from 'styles/common';

const TicketTopHeaderSideBanner = () => {
    //사진들 배열 상태
    const [image, setImage] = useState([photo1, photo2, photo3]);
    //사진 index값 상태태
    const [count, setCount] = useState(0);

    const onMoveNextBanner = () => {
        if (count === 2) return;
        setCount(count + 1);
        console.log(count, 'count');
        setImage(image[count]);
    };
    const onMovePrevBanner = () => {
        if (count === 0) return;
        setCount(count - 1);
        setImage(image[count]);
    };

    return (
        <>
            <Wrapper>
                <ImgBox>
                    <img src={image[count]} />
                </ImgBox>
            </Wrapper>
            <Button onClick={onMovePrevBanner}>prev</Button>
            <Button onClick={onMoveNextBanner}>Next</Button>
        </>
    );
};
export default TicketTopHeaderSideBanner;
const Wrapper = styled.div`
    width: 240px;
    height: 80px;
    /* overflow: hidden; */
`;
const ImgBox = styled.div`
    ${flexCenter}
    width: 100%;
    height: 100%;
`;
const Button = styled.button`
    border-radius: 5px;
`;
