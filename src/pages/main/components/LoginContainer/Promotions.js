//로그인 박스 밑 광고

import styled from 'styled-components';

// 1페어 이영록 장지영
const Promotions = () => {
    return (
        <Styled.PromotionsBox>
            <Styled.PromotionLink href="https://ticket.melon.com/performance/index.htm?prodId=209033">
                <Styled.PromotionImg src="https://cdnimg.melon.co.kr/svc/images/main/imgUrl20231113030435.png/melon/quality/80" />
            </Styled.PromotionLink>
        </Styled.PromotionsBox>
    );
};
export default Promotions;

// 프로모션 박스
const PromotionsBox = styled.div`
    width: 280px;
    height: 188px;
    overflow: hidden;
    margin-top: 8px;
`;

// 프로모션 이미지 크기 설정
const PromotionImg = styled.img`
    width: 280px;
    height: 100%;
`;
// 프로모션 링크
const PromotionLink = styled.a``;

const Styled = {
    PromotionsBox,
    PromotionLink,
    PromotionImg,
};
