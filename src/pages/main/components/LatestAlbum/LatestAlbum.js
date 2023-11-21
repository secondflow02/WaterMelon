//최신앨범...........6개들어갈거
import React, { useState } from 'react';
import styled from 'styled-components';
import SmallAlbum, { albumdata } from './SmallAlbum';
// 1페어 이영록 장지영
const LatestAlbum = () => {
    const [slideAlbumListIndex, setSlideAlbumListtIndex] = useState(0);
    const [albumCategory, setAlbumCategory] = useState(albumdata);

    const albumListData = albumdata.length;
    console.log(albumListData);

    const onClickPrevAlbum = () => {
        setSlideAlbumListtIndex(prev =>
            prev - 6 < 0 ? prev + albumListData - 6 : prev - 6,
        );
    };
    const onClickNextAlbum = () => {
        setSlideAlbumListtIndex(prev =>
            prev + 6 >= albumListData ? 0 : prev + 6,
        );
    };

    const onClickFilterCategory = category => {
        const filterAlbumCategory = albumdata.filter(
            album => album.category === category,
        );
        setAlbumCategory(filterAlbumCategory);
        console.log(filterAlbumCategory);
        setSlideAlbumListtIndex(0);
    };

    return (
        <Styled.Wrapper>
            <Styled.LatestTitle>

                <Styled.Title>
                    최신 앨범 <Arrow>&gt;</Arrow>
                </Styled.Title>

                <Styled.CategoryBox>
                    <Styled.Category>
                        <Styled.CategoryName>
                            <a onClick={() => {}}>전체</a>
                        </Styled.CategoryName>
                        <Styled.CategoryName>

                            <a onClick={() => onClickFilterCategory('국내')}>
                                국내
                            </a>
                        </Styled.CategoryName>
                        <Styled.CategoryName>
                            <a onClick={() => onClickFilterCategory('해외')}>
                                해외
                            </a>

                        </Styled.CategoryName>
                        <Styled.CategoryIndex>
                            <Styled.CategoryIndex>
                                {`${
                                    Math.floor(slideAlbumListIndex / 6) + 1
                                }/${Math.ceil(albumListData / 6)}`}
                            </Styled.CategoryIndex>
                            {/* 1/4 */}
                        </Styled.CategoryIndex>
                        <button onClick={onClickPrevAlbum}>&lt;</button>
                        <button onClick={onClickNextAlbum}>&gt;</button>
                    </Styled.Category>
                </Styled.CategoryBox>
            </Styled.LatestTitle>

            <Styled.SmallAlbumContainer>
                <SmallAlbum
                    currentIndex={slideAlbumListIndex}
                    categoryData={albumCategory}
                    key={slideAlbumListIndex}
                />
            </Styled.SmallAlbumContainer>

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
const Title = styled.h5`
    font-weight: 900;
    cursor: pointer;

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
    a {
        cursor: pointer;
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
    Title,
    Category,
    CategoryBox,
    CategoryName,
    CategoryIndex,
    SmallAlbumContainer,
};
