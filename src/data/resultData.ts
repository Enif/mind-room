import imgYellow from '../assets/img/results/result_yellow.gif';
import imgGreen from '../assets/img/results/result_green.gif';


export type resultDataType = {
    color: string,
    img: string,
    backgroundColor: string
    usernameFontColor: string,
    soundIconColor: string,
    title: string,
    titleFontColor: string,
    question: string,
    questionFontColor: string,
    text: string,
    textFontColor: string,
    buttonColor: string,
    buttonFontColor: string,
    contactFontColor: string,
    contactIconColor: string,
    emailBackgroundColor: string,
    replayIconColor: string
}

const resultData: resultDataType[] = [
    {
        color: "red",
        img: imgYellow,
        backgroundColor: "#FFCE00",
        usernameFontColor: "#846B00",
        soundIconColor: "aaaaaa",
        title: "Yellow & Red",
        titleFontColor: "#E30000",
        question: "마음이 울적한가요?",
        questionFontColor: "#E66100",
        text: "노란색은 긍정적인 에너지를 주는 색으로, 우울하고 무기력하거나 자존감이 부족할 때 도움이 됩니다. 빨간색은 활력을 북돋아주므로 포인트 컬러로 활용하면 좋습니다. 따뜻하고 화사한 빛깔의 방에서 행복한 웃음을 지어 보세요.",
        textFontColor: "#846B00",
        buttonColor: "#ee5200",
        buttonFontColor: "aaaaaa",
        contactFontColor: "#6A6A6A",
        contactIconColor: "#aaaaaa",
        emailBackgroundColor: "#F89C00",
        replayIconColor: "#E66100"    
    }
]

export default resultData;
