//김나영 (미니앨범 1개) 이영록,장지영

import styled from 'styled-components';

const albumdata = [
    {
        image: 'https://cdnimg.melon.co.kr/cm2/album/images/113/65/621/11365621_20231115141741_500.jpg?039040c6decae7b1fd9aaa7107049299/melon/resize/156/quality/80/optimize',
        title: "The Best of the 80's",
        singer: 'Various Artists',
        category: '국내',
    },
    {
        image: 'https://cdnimg.melon.co.kr/cm2/album/images/113/65/621/11365621_20231115141741_500.jpg?039040c6decae7b1fd9aaa7107049299/melon/resize/156/quality/80/optimize',
        title: 'Summer',
        singer: 'Joe Hisaishi',
        category: '국내',
    },
    {
        image: 'https://cdnimg.melon.co.kr/cm2/album/images/113/65/621/11365621_20231115141741_500.jpg?039040c6decae7b1fd9aaa7107049299/melon/resize/156/quality/80/optimize',
        title: 'Waving Through A Window',
        singer: 'Ben Platt',
        category: '국내',
    },
    {
        image: 'https://cdnimg.melon.co.kr/cm2/album/images/113/65/621/11365621_20231115141741_500.jpg?039040c6decae7b1fd9aaa7107049299/melon/resize/156/quality/80/optimize',
        title: 'GROWING IP IS ____',
        singer: 'Ruel',
        category: '국내',
    },
    {
        image: 'https://cdnimg.melon.co.kr/cm2/album/images/113/65/621/11365621_20231115141741_500.jpg?039040c6decae7b1fd9aaa7107049299/melon/resize/156/quality/80/optimize',
        title: 'Ghost Town',
        singer: 'Benson Boone',
        category: '국내',
    },
    {
        image: 'https://cdnimg.melon.co.kr/cm2/album/images/113/65/621/11365621_20231115141741_500.jpg?039040c6decae7b1fd9aaa7107049299/melon/resize/156/quality/80/optimize',
        title: 'Memories',
        singer: 'Conan Gray',
        category: '국내',
    },
    {
        image: 'https://cdnimg.melon.co.kr/cm2/album/images/113/65/621/11365621_20231115141741_500.jpg?039040c6decae7b1fd9aaa7107049299/melon/resize/156/quality/80/optimize',
        title: 'One',
        singer: 'Ed Sheeran',
        category: '해외',
    },
    {
        image: 'https://cdnimg.melon.co.kr/cm2/album/images/113/65/621/11365621_20231115141741_500.jpg?039040c6decae7b1fd9aaa7107049299/melon/resize/156/quality/80/optimize',
        title: 'I.O.U',
        singer: 'Carry & Ron',
        category: '해외',
    },
    {
        image: 'https://cdnimg.melon.co.kr/cm2/album/images/113/65/621/11365621_20231115141741_500.jpg?039040c6decae7b1fd9aaa7107049299/melon/resize/156/quality/80/optimize',
        title: 'Masquerade',
        singer: 'Elina',
        category: '해외',
    },
    {
        image: 'https://cdnimg.melon.co.kr/cm2/album/images/113/65/621/11365621_20231115141741_500.jpg?039040c6decae7b1fd9aaa7107049299/melon/resize/156/quality/80/optimize',
        title: 'Batter then this',
        singer: 'Lauv',
        category: '해외',
    },
    {
        image: 'https://cdnimg.melon.co.kr/cm2/album/images/113/65/621/11365621_20231115141741_500.jpg?039040c6decae7b1fd9aaa7107049299/melon/resize/156/quality/80/optimize',
        title: 'Masquerade',
        singer: 'Elina',
        category: '해외',
    },
    {
        image: 'https://cdnimg.melon.co.kr/cm2/album/images/113/65/621/11365621_20231115141741_500.jpg?039040c6decae7b1fd9aaa7107049299/melon/resize/156/quality/80/optimize',
        title: 'Batter then this',
        singer: 'Lauv',
        category: '해외',
    },
];
console.log(albumdata);

const SmallAlbum = () => {
    return (
        <Styled.SmallAlbumList>
            {albumdata.slice(0, 6).map((album, index) => (
                <Styled.Box key={index}>
                    <Styled.AlbumImage src={album.image} alt="앨범배경" />
                    <Styled.SingerName>{album.singer}</Styled.SingerName>
                    {/* <Styled.AlbumInfo></Styled.AlbumInfo> */}
                </Styled.Box>
            ))}
        </Styled.SmallAlbumList>
    );
};
export default SmallAlbum;

const SmallAlbumList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Box = styled.div`
    width: 150px;
    height: 150px;
    margin-bottom: 8px;
    box-sizing: border-box;
    border: 1px solid black;
    position: relative;
`;
const AlbumImage = styled.img`
    width: 150px;
    height: 150px;
`;
const SingerName = styled.div`
    width: 100%;
    height: 22px;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    bottom: 0;
    color: #ffffff;
    font-size: 12px;
    text-align: center;
    padding-top: 6px;
`;

const Styled = {
    SmallAlbumList,
    Box,
    AlbumImage,
    SingerName,
};
