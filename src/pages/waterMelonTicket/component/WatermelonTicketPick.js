import pickImage from 'mock/pickImage.json';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

//pick추천공연 포스터 1개
const PickConcert = () => {
    const [image, setImage] = useState(pickImage.pickdata);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    '/WaterMelon/src/mock/pickImage.json',
                );
                const data = await response.pickdata.json();
                setImage(data);
            } catch (error) {
                console.log('Error', error);
            }
        };
        fetchData();
    }, []);

    console.log(image);

    return (
        <>
            {console.log(image)}
            {image.map((el, index) => (
                <Wrapper>
                    {console.log(pickImage.pickdata[index].url)}
                    <Img
                        src={`/WaterMelon/public/assets/images/${pickImage.pickdata[index].url}`}
                    />
                    {console.log(el[index])}
                    <P>{pickImage.pickdata[index].title}</P>
                    <P>{pickImage.pickdata[index].date}</P>
                    <P>{pickImage.pickdata[index].place}</P>
                </Wrapper>
            ))}
        </>
    );
};
export default PickConcert;

const Wrapper = styled.div`
    width: 200px;
    height: 340px;
    margin: 20px 20px;
    border: 1px solid #000;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
const Img = styled.img`
    width: 150px;
    height: 180px;
    border: 1px solid #000;
    margin-top: -30px;
    margin-left: 24px;
    margin-bottom: 10px;
`;

const P = styled.p`
    font-size: 12px;
    line-height: 0.9%;
    margin-left: 24px;
`;
