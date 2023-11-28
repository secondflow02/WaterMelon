//최신앨범...........6개들어갈거

import { useState } from 'react';
import styled from 'styled-components';

import SmallAlbum, { albumdata } from './SmallAlbum';

// 1페어 이영록 장지영
const LatestAlbum = () => {
    const [slideAlbumListIndex, setSlideAlbumListIndex] = useState(0);
    const [albumCategory, setAlbumCategory] = useState(albumdata);

    const albumListData = albumdata.length;

    // prev 버튼 클릭 이벤트
    const onClickPrevAlbum = () => {
        setSlideAlbumListIndex(prev => {
            // prev - 6 < 0 ? prev + albumListData - 6 : prev - 6,
            const newIndex = prev - 6 < 0 ? prev : prev - 6;

            const categoryIndex = Math.floor((newIndex - 6) / 6);

            const category =
                albumdata[categoryIndex]?.category ||
                albumCategory[0]?.category ||
                '전체';
            onClickFilterCategory(category, categoryIndex);
            return newIndex;

            /** Todos
             * if.. 카테고리를 클릭한 후 prev 버튼을 클릭했을 때 더이상 해당 카테고리의 데이터가 없다면 이전 카테고리로 이동
             * * 카테고리가 이동할 경우 focus 효과 그대로 적용되도록..
             */
        });
    };

    // next 버튼 클릭 이벤트
    const onClickNextAlbum = () => {
        setSlideAlbumListIndex(prev => {
            const newIndex = prev + 6 >= albumListData ? prev : prev + 6;
            const categoryIndex = Math.floor((newIndex + 6) / 6);
            const nextCategoryIndex =
                categoryIndex >= albumdata.length / 6 - 1
                    ? 0
                    : categoryIndex + 1;
            const category =
                albumdata[nextCategoryIndex]?.category ||
                albumdata[0]?.category ||
                '전체';
            onClickFilterCategory(category, nextCategoryIndex);

            return newIndex;

            /** Todos
             * if.. 카테고리를 클릭한 후 prev 버튼을 클릭했을 때 더이상 해당 카테고리의 데이터가 없다면 이후 카테고리로 이동
             * 카테고리가 이동할 경우 focus 효과 그대로 적용되도록..
             */
        });
    };

    // 각 카테고리 클릭 이벤트
    /** Todos
     * 카테고리 변경 시 categoryIndex 바꿔주기
     */
    const onClickFilterCategory = category => {
        if (albumCategory[0]?.category === category) {
            return;
        }
        const filterAlbumCategory = albumdata.filter(
            album => album.category === category,
        );
        setAlbumCategory(filterAlbumCategory);

        setSlideAlbumListIndex(0);
        console.log(filterAlbumCategory);
    };

    /* useEffect(() => {
        const categoryIndex = Math.floor((slideAlbumListIndex - 6) / 6);
        const category =
            albumdata[categoryIndex]?.category ||
            albumCategory[0]?.category ||
            '전체';
        onClickFilterCategory(category, categoryIndex);
    }, [slideAlbumListIndex]); */
    return (
        <Styled.Wrapper>
            <Styled.LatestTitle>
                <Styled.Title>
                    최신 앨범 <Arrow>&gt;</Arrow>
                </Styled.Title>
                <Styled.CategoryBox>
                    <Styled.Category>
                        <Styled.CategoryName>
                            <Styled.A href="#" onClick={() => {}}>
                                전체
                            </Styled.A>
                        </Styled.CategoryName>
                        <Styled.CategoryName>

                            <Styled.A
                                href="#"
                                onClick={() => onClickFilterCategory('국내')}
                            >

                                국내
                            </Styled.A>
                        </Styled.CategoryName>
                        <Styled.CategoryName>
                            <Styled.A
                                href="#"
                                onClick={() => onClickFilterCategory('해외')}
                            >
                                해외

                            </Styled.A>

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
    font-weight: 900;
    color: gray;
    padding: 0 4px;
    &:not(:last-of-type)::after {
        content: '|';
        margin-left: 6px;
    }
    a {
        cursor: pointer;
    }
`;
const A = styled.a`
    color: gray;
    text-decoration: none;
    &:focus {
        color: black;
        font-weight: 900;
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
    A,
    CategoryIndex,
    SmallAlbumContainer,
};
