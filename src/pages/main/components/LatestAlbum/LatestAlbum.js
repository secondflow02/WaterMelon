//최신앨범...........6개들어갈거

import styled from 'styled-components';

import SmallAlbum from './SmallAlbum';
// 1페어 이영록 장지영
const LatestAlbum = () => {
    return (
        <Styled.Wrapper>
            <Styled.LatestTitle>
                <h5>
                    최신 앨범 <Arrow>&gt;</Arrow>
                </h5>
                <Styled.CategoryBox>
                    <Styled.Category>
                        <Styled.CategoryName>
                            <a onClick={() => {}}>전체</a>
                        </Styled.CategoryName>
                        <Styled.CategoryName>
                            <a onClick={() => {}}>국내</a>
                        </Styled.CategoryName>
                        <Styled.CategoryName>
                            <a onClick={() => {}}>해외</a>
                        </Styled.CategoryName>
                        <CategoryIndex>1/9</CategoryIndex>
                        <button>&lt;</button>
                        <button>&gt;</button>
                    </Styled.Category>
                </Styled.CategoryBox>
            </Styled.LatestTitle>
            <SmallAlbumContainer>
                <SmallAlbum />
            </SmallAlbumContainer>
        </Styled.Wrapper>
    );
};
export default LatestAlbum;

// 최신 앨범
const Wrapper = styled.div`
    width: 476px;
    height: 340px;
    float: left;
`;
const LatestTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 24px;
    margin-top: 18px;
`;
const Arrow = styled.span`
    font-weight: lighter;
`;
const CategoryBox = styled.div``;
const Category = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
`;
const CategoryName = styled.li`
    font-size: 12px;
    font-weight: 700;
    color: #666;
    padding: 0 4px;
    &:not(:last-of-type)::after {
        content: '|';
        margin-left: 6px;
    }
`;
const CategoryIndex = styled.p`
    padding: 0 6px;
`;
const SmallAlbumContainer = styled.div`
    width: 476px;
    height: 340px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
`;

const Styled = {
    Wrapper,
    LatestTitle,
    Category,
    CategoryBox,
    CategoryName,
    CategoryIndex,
    SmallAlbumContainer,
};
