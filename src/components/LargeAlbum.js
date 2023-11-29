
const LargeData = () => {
    const Image1 = () => (
        <img
            src="https://cdnimg.melon.co.kr/svc/images/main/imgUrl20231114014430.jpg/melon/quality/80"
            alt=""
        />
    );

    const Image2 = () => (
        <img
            src="https://cdnimg.melon.co.kr/svc/images/main/imgUrl20231114014449.jpg/melon/quality/80"
            alt=""
        />
    );

    const Image3 = () => (
        <img
            src="https://cdnimg.melon.co.kr/svc/images/main/imgUrl20231113050531.jpg/melon/quality/80"
            alt=""
        />
    );
    const Image4 = () => (
        <img
            src="https://cdnimg.melon.co.kr/svc/images/main/imgUrl20231110035157.png/melon/quality/80"
            alt=""
        />
    );
    const LargeAlbum = [Image1, Image2, Image3, Image4];

    return LargeAlbum;
};
export default LargeData;
// 여기서 완성시키고 export하면 생각에서 만들어봄 불러와서 .current하는 과정에 끝남
