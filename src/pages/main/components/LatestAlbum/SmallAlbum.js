 //김나영 (미니앨범 1개) 이영록,장지영

import AlbumData from "../../../../mock/albumData.json";
import styled from "styled-components";

console.log(AlbumData);

const SmallAlbum = () => {
  return (
    // <Styled.SmallAlbumList>
    //   {AlbumData.albumdata.map((album, index) => (
    //     <Styled.Box key={index}>
    //       <img src={album.image} alt="앨범배경" />
    //       <Styled.SingerName>{album.singer}</Styled.SingerName>
    //     </Styled.Box>
    //   ))}
    // </Styled.SmallAlbumList>
    <Styled.SmallAlbumList>
      <Styled.Box>
        <img
          src="https://cdnimg.melon.co.kr/cm2/album/images/113/64/396/11364396_20231114104345_500.jpg?47a7318b6dbf5c3af71f5d8af344be27/melon/resize/156/quality/80/optimize"
          alt="앨범배경"
        />
        <Styled.SingerName>다비치</Styled.SingerName>
      </Styled.Box>
    </Styled.SmallAlbumList>
  );
};
export default SmallAlbum;

const SmallAlbumList = styled.div`
  width: 156px;
  height: 156px;
  margin-right: 4px;
  position: relative;
`;

const Box = styled.div`
  width: 156px;
  height: 156px;
`;

const SingerName = styled.div`
  width: 156px;
  height: 22px;
  background-color: rgba(0, 0, 0, 0.5);
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
  SingerName,
};
