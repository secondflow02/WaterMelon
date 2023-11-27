//세종문화회관 기획공연 세종시즌2023
import photo1 from 'imgs/watermelonTicketImg/1.png';
import photo2 from 'imgs/watermelonTicketImg/2.png';
import photo3 from 'imgs/watermelonTicketImg/3.png';
import { useState } from 'react';
import styled from 'styled-components';
import { flexCenter } from 'styles/common';

const TicketTopHeaderSideBanner = () => {
    // const slideRef = useRef(null);
    // const [currentImgOrder, setCurrentImgOrder] = useState(0);
    // console.log(currentImgOrder, 'test0');
    // useEffect(() => {
    //     slideRef.current.style.transition = 'all 0.5s ease-in-out';
    //     slideRef.current.style.transform = `translateX(-240px)`;
    // }, [currentImgOrder]);

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
        // if (currentImgOrder === 0) return;
        // setCurrentImgOrder(currentImgOrder - 1);
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
