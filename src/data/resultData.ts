import imgYellow from '../assets/img/results/img_yellow.png';
import imgOrange from '../assets/img/results/img_orange.png';
import imgGreen from '../assets/img/results/img_green.png';
import imgSky from '../assets/img/results/img_sky.png';
import imgNavy from '../assets/img/results/img_navy.png';
import imgPink from '../assets/img/results/img_pink.png';
import imgBrown from '../assets/img/results/img_brown.png';
import imgWhite from '../assets/img/results/img_white.png';

import gifYellow from '../assets/img/results/gif_yellow.gif';
import gifOrange from '../assets/img/results/gif_orange.gif';
import gifGreen from '../assets/img/results/gif_green.gif';
import gifSky from '../assets/img/results/gif_sky.gif';
import gifNavy from '../assets/img/results/gif_navy.gif';
import gifPink from '../assets/img/results/gif_pink.gif';
import gifBrown from '../assets/img/results/gif_brown.gif';
import gifWhite from '../assets/img/results/gif_white.gif';

import webpYellow from '../assets/img/results/webp_yellow.webp';
import webpOrange from '../assets/img/results/webp_orange.webp';
import webpGreen from '../assets/img/results/webp_green.webp';
import webpSky from '../assets/img/results/webp_sky.webp';
import webpNavy from '../assets/img/results/webp_navy.webp';
import webpPink from '../assets/img/results/webp_pink.webp';
import webpBrown from '../assets/img/results/webp_brown.webp';
import webpWhite from '../assets/img/results/webp_white.webp';

import soundYellow from '../assets/sounds/r_yellow.mp3';
import soundOrange from '../assets/sounds/r_orange.mp3';
import soundGreen from '../assets/sounds/r_green.mp3';
import soundSky from '../assets/sounds/r_sky.mp3';
import soundNavy from '../assets/sounds/r_navy.mp3';
import soundPink from '../assets/sounds/r_pink.mp3';
import soundBrown from '../assets/sounds/r_pink.mp3';
import soundWhite from '../assets/sounds/r_white.mp3';

export type resultDataType = {
    color: string,
    img: string,
    gifImg: string,
    webpImg: string,
    sound: string,
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
    replayIconColor: string,
    dividerColor: string
}

const resultData: resultDataType[] = [
    {
        color: "red",
        img: imgYellow,
        gifImg: gifYellow,
        webpImg: webpYellow,
        sound: soundYellow,
        backgroundColor: "#FFCE00",
        usernameFontColor: "#846B00",
        soundIconColor: "#FFD899",
        title: "Yellow & Red",
        titleFontColor: "#E30000",
        question: "마음이 울적한가요?",
        questionFontColor: "#E66100",
        text: "노란색은 긍정적인 에너지를 주는 색으로, 우울하고 무기력하거나 자존감이 부족할 때 도움이 됩니다. 빨간색은 활력을 북돋아주므로 포인트 컬러로 활용하면 좋습니다. 따뜻하고 화사한 빛깔의 방에서 행복한 웃음을 지어 보세요.",
        textFontColor: "#846B00",
        buttonColor: "#ee5200",
        buttonFontColor: "#ffffff",
        contactFontColor: "#6A6A6A",
        contactIconColor: "#6A6A6A",
        emailBackgroundColor: "#F89C00",
        replayIconColor: "#E66100",
        dividerColor: "#6a6a6a"
    },
    {
        color: "orange",
        img: imgOrange,
        gifImg: gifOrange,
        webpImg: webpOrange,
        sound: soundOrange,
        backgroundColor: "#FF9D00",
        usernameFontColor: "#9A4F00",
        soundIconColor: "#FFD899",
        title: "Orange",
        titleFontColor: "#FFFFFF",
        question: "삶의 의욕이 없어 방황하고 있나요?",
        questionFontColor: "#D34800",
        text: "주황색은 열정적인 에너지의 색으로, 무기력하거나 방황하는 삶에 활력을 줍니다. 또한 상실, 이별로 인한 슬픔의 치유에 도움이 되고 사교성을 증진시키는 데에도 효과적입니다. 방 안의 큰 창문처럼 활짝 열린 마음으로 희망찬 하루를 맞이해 보세요.",
        textFontColor: "#9A4F00",
        buttonColor: "#FFD899",
        buttonFontColor: "#FF5800",
        contactFontColor: "#FFFFFF",
        contactIconColor: "#FFFFFF",
        emailBackgroundColor: "#F78400",
        replayIconColor: "#FFFFFF",
        dividerColor: "#FFFFFF"
    },

    {
        color: "green",
        img: imgGreen,
        gifImg: gifGreen,
        webpImg: webpGreen,
        sound: soundGreen,
        backgroundColor: "#316200",
        usernameFontColor: "#BEE300",
        soundIconColor: "#D6E0CC",
        title: "Green",
        titleFontColor: "#BEE300",
        question: "스트레스가 많고 불안한가요?",
        questionFontColor: "#FFFFFF",
        text: "초록색은 우리 눈에 가장 편안한 색으로, 스트레스를 완화시키는 데 도움이 됩니다. 또한 방황하거나 계속해서 불안을 느끼는 사람에게 은신처같은 편안함을 제공합니다. 따스한 햇살과 싱그러운 초록빛 식물들로 가득한 방에서 마음 편히 쉬어 가세요.",
        textFontColor: "#ADC91C",
        buttonColor: "#7CA011",
        buttonFontColor: "#FFFFFF",
        contactFontColor: "#FFFFFF",
        contactIconColor: "#FFFFFF",
        emailBackgroundColor: "#2E4C11",
        replayIconColor: "#7CA011",
        dividerColor: "#FFFFFF"
    },
    {
        color: "sky",
        img: imgSky,
        gifImg: gifSky,
        webpImg: webpSky,
        sound: soundSky,
        backgroundColor: "#67DCFF",
        usernameFontColor: "#007EBE",
        soundIconColor: "#E1F8FF",
        title: "Sky Blue",
        titleFontColor: "#00A2F4",
        question: "마음이 갑갑하고 피곤한가요?",
        questionFontColor: "#FFFFFF",
        text: "파란색은 진정효과가 좋은 색으로, 마음을 침착하게 유지시켜줍니다. 또한 광활한 하늘과 바다를 연상시키는 하늘색은 갑갑한 일상에서 벗어나 자유로움을 느끼게 합니다. 시원한 푸른 빛의 방에서 마음 속 긴장과 피로를 풀어 보세요.",
        textFontColor: "#007EBE",
        buttonColor: "#29AEE8",
        buttonFontColor: "#FFFFFF",
        contactFontColor: "#FFFFFF",
        contactIconColor: "#FFFFFF",
        emailBackgroundColor: "#29AEE8",
        replayIconColor: "#FFFFFF",
        dividerColor: "#FFFFFF"
    },
    {
        color: "navy",
        img: imgNavy,
        gifImg: gifNavy,
        webpImg: webpNavy,
        sound: soundNavy,
        backgroundColor: "#092255",
        usernameFontColor: "#00A0FF",
        soundIconColor: "#063B75",
        title: "Navy & Gold",
        titleFontColor: "#00A0FF",
        question: "지치고 두려운 마음이 드나요?",
        questionFontColor: "#FFF5A5",
        text: "남색은 두려움을 치료하는 데 효과적이고, 지친 마음에 휴식을 주어 불면증에 도움이 됩니다. 금색을 포인트로 사용하면 새로운 시작을 위한 활기를 얻을 수 있습니다. 밤하늘의 별처럼 빛나는 당신, 활기찬 내일을 위해 잠시 쉬어 가세요.",
        textFontColor: "#00A0FF",
        buttonColor: "#045EA2",
        buttonFontColor: "#FFFFFF",
        contactFontColor: "#FFFFFF",
        contactIconColor: "#FFFFFF",
        emailBackgroundColor: "#063B75",
        replayIconColor: "#063B75",
        dividerColor: "#FFFFFF"
    },
    {
        color: "pink",
        img: imgPink,
        gifImg: gifPink,
        webpImg: webpPink,
        sound: soundPink,
        backgroundColor: "#F491AC",
        usernameFontColor: "#C40071",
        soundIconColor: "#FDE9EE",
        title: "Pink & Purple",
        titleFontColor: "#830AC3",
        question: "감정 기복이 심해 힘든가요?",
        questionFontColor: "#FFF5A5",
        text: "분홍색과 보라색은 마음을 편안하게 안정시켜주며, 무기력하거나 의기소침해질 때 도움이 됩니다. 특히 보라색은 감정 기복이 심한 사람에게 효과적이므로 포인트 색상으로 사용하면 좋습니다. 화사하고 따뜻한 방에서 안정을 취해 보세요.",
        textFontColor: "#C40071",
        buttonColor: "#B140BA",
        buttonFontColor: "#FFFFFF",
        contactFontColor: "#FFFFFF",
        contactIconColor: "#FFFFFF",
        emailBackgroundColor: "#CF2381",
        replayIconColor: "#FFFFFF",
        dividerColor: "#FFFFFF"
    },
    {
        color: "brown",
        img: imgBrown,
        gifImg: gifBrown,
        webpImg: webpBrown,
        sound: soundBrown,
        backgroundColor: "#7C5431",
        usernameFontColor: "#C99A48",
        soundIconColor: "#C99A48",
        title: "Brown",
        titleFontColor: "#FBEED8",
        question: "걱정이 많고 불안한가요?",
        questionFontColor: "#FFCC5A",
        text: "갈색은 걱정이 너무 많거나 강박적 사고를 하는 사람들의 불안을 줄여주고, 억압된 감정을 해소하는 데 도움을 줍니다. 마치 자연의 품에 안긴 듯한 방에서 안정을 취해 보세요. 도예, 원예와 같이 흙을 직접 만지는 활동을 함께 하면 더욱 좋습니다.",
        textFontColor: "#C99A48",
        buttonColor: "#CA9B49",
        buttonFontColor: "#FFFFFF",
        contactFontColor: "#FFFFFF",
        contactIconColor: "#FFFFFF",
        emailBackgroundColor: "#5C3E2E",
        replayIconColor: "#C99A48",
        dividerColor: "#FFFFFF"
    },
    {
        color: "white",
        img: imgWhite,
        gifImg: gifWhite,
        webpImg: webpWhite,
        sound: soundWhite,
        backgroundColor: "#FFFFFF",
        usernameFontColor: "#006820",
        soundIconColor: "#CCCCCC",
        title: "Colorful Garden",
        titleFontColor: "#7ED2DC",
        question: "마음이 편안하고 안정적이네요!",
        questionFontColor: "#A3B900",
        text: "당신은 마음의 정원을 잘 가꾸고 계시는 군요. 앞으로도 스스로의 감정을 돌보고 아끼며 행복한 삶을 살아가기를 바랄게요. 혹시라도 마음에 흔들림이 생긴다면 언제든 다시 찾아와 주세요. 당신을 위한 방이 항상 준비되어 있답니다 :)",
        textFontColor: "#006820",
        buttonColor: "#F8B4B4",
        buttonFontColor: "#FFFFFF",
        contactFontColor: "#6A6A6A",
        contactIconColor: "#6A6A6A",
        emailBackgroundColor: "#D1D1D1",
        replayIconColor: "#D1D1D1",
        dividerColor: "#6a6a6a"
    }
]

export default resultData;
