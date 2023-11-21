const Image1 = () => (
    <img src="https://cdnimg.melon.co.kr/svc/images/main/imgUrl20231114014430.jpg/melon/quality/80" />
);

const LargeData = () => {
    const Image1 = () => (
        <img src="https://cdnimg.melon.co.kr/svc/images/main/imgUrl20231114014430.jpg/melon/quality/80" />
    );

    const Image2 = () => (
        <img src="https://cdnimg.melon.co.kr/svc/images/main/imgUrl20231114014449.jpg/melon/quality/80" />
    );

    const Image3 = () => (
        <img src="https://cdnimg.melon.co.kr/svc/images/main/imgUrl20231113050531.jpg/melon/quality/80" />
    );
    const Image4 = () => (
        <img src="https://cdnimg.melon.co.kr/svc/images/main/imgUrl20231110035157.png/melon/quality/80" />
    );
    const LargeAlbum = [
        { component: <Image1 /> },
        { component: <Image2 /> },
        { component: <Image3 /> },
        { component: <Image4 /> },
    ];

    return LargeAlbum;
};
export default (LargeData, Image1);
// 여기서 완성시키고 export하면 생각에서 만들어봄 불러와서 .current하는 과정에 끝남
