import imgYellow from '../assets/img/results/img_yellow.jpg';
import imgOrange from '../assets/img/results/img_orange.jpg';
import imgGreen from '../assets/img/results/img_green.jpg';
import imgSky from '../assets/img/results/img_sky.jpg';
import imgNavy from '../assets/img/results/img_navy.jpg';
import imgPink from '../assets/img/results/img_pink.jpg';
import imgBrown from '../assets/img/results/img_brown.jpg';
import imgWhite from '../assets/img/results/img_white.jpg';

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
import soundBrown from '../assets/sounds/r_brown.mp3';
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
    question_en: string,
    questionFontColor: string,
    text: string,
    text_en: string,
    tipstext: string,
    tipstext_en: string,
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
        question_en: "Are you feeling down?",
        questionFontColor: "#E66100",
        text: "혹시 자신감이 떨어지거나 자꾸 무기력해지고 우울해지시나요? 아니면 실패를 경험한 후 좌절을 느끼고 계신가요? 그렇다고 너무 속상해 하지 마세요. 잘 알고 계시겠지만 누구나 실패를 경험합니다. 또 실패는 새로운 도전을 위한 좋은 밑거름이 되기도 하죠. 지금의 힘듦은 비온 후에 생긴 물웅덩이 같은 거라고 생각하세요. 이제 해가 비치면 다시 땅은 단단해질 것입니다. 스스로에게 잘 하고 있다고 응원의 말을 건네주세요! 어떠한 상황에서도 당신을 위로하고 믿어줄 사람은 당신 자신이랍니다. 큰 소리로 웃어 보는 것도 좋아요. 웃음이 따뜻한 햇살처럼 당신의 마음 속 어둠을 밝혀줄 거예요.",
        text_en: "Did you lose confidence? Feel depressed often? Or are you feeling uncertain or less confident because of a failure you experienced? Don’t be too sad. As you know, everyone experiences some failures. Sometimes, failure becomes a good base for a new challenge. Think of your hardship now as a puddle of water after rain. When the sun comes up, the ground will be firm again. Tell yourself you are doing good now.  The one who could comfort and trust you in every condition is yourself. Try to laugh out loud. Laughter will shed light on your darkness of mind, like warm sunshine.",
        tipstext: "노란색은 긍정적인 에너지를 주는 색으로, 우울하고 무기력하거나 자존감이 부족할 때 도움이 됩니다. 흰색 벽의 일부분을 노란색으로 칠하거나 커튼을 활용해 화사한 분위기를 더해 보세요. 햇살이 잘 들어오게 하고 자연광과 비슷한 느낌의 조명을 활용해도 좋습니다. 채도가 높은 빨간색은 활력을 북돋아 주므로 작은 가구나 장식품, 식물을 활용해 포인트 컬러로 사용해 보세요.",
        tipstext_en: "Yellow is a colour that gives positive energy, and it is helpful when you are down or not sure about yourself. To bring a brighter feel, add yellow on part of a white wall or use a yellow curtain. Make the sunshine get in your room or use the light similar to natural light. Red with high saturation can give you more energy in life, so use red as an accent colour to small pieces of furniture, ornament or plant.",
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
        question_en: "Are you lost without a direction in life?",
        questionFontColor: "#D34800",
        text: "내가 하고 싶은 것이 무엇인지, 어디로 나아가야할지, 방향도 목표도 모른 채 방황할 때가 있습니다. 또 그런 상황에서도 여전히 반복되는 일상에 의욕을 잃고 무기력해지기도 하죠. 그럴 때는 지금 당신이 하고 있는 일을 방황이 아닌 탐험이라고 생각해보면 어떨까요? 다양한 것들을 경험해 보면서 스스로가 좋아하고 잘하는 것을 알아가는 여행의 시간인 거죠! 오늘은 또 어떤 새로운 일이 생길지 기대에 부푼 마음으로 하루를 시작해보세요. 그리고 푹 자고 일어난 아침, 창문을 열고 기지개를 쭉 펴서 따뜻한 햇살과 상쾌한 공기를 맞이해 보세요. 자꾸만 소심해지고 움츠러드는 마음이 활짝 열리도록 말이죠!",
        text_en: "Sometimes, you wander around in your life not knowing what you want to do, where to go, a sense of direction or a goal. And still, repetitive life makes you lose energy and exhaust you. When you feel that way, can you try to think of your work as an expedition? Think of it as a journey you can take to explore different things and find out what you like or good at. Begin your day with a hopeful thought which today may present. Wake up and open the window, stretch yourself, and feel the warm sunshine and fresh air. This will allow you to let your mind open wide, instead of closing in!",
        tipstext: "주황색은 열정적인 에너지의 색으로, 무기력하거나 방황하는 삶에 활력을 줍니다. 또한 상실, 이별로 인한 슬픔의 치유에 도움이 되고 사교성을 증진시키는 데에도 효과적입니다. 밖과 연결된 커다란 창문에 화사한 주황색 커튼을 달아 보세요. 넓은 영역에 사용하는 것이 부담스럽다면 보색인 연한 파란색 바탕에 포인트로 사용하거나 주황빛 열매가 열리는 식물을 키워도 좋습니다.",
        tipstext_en: "Orange is the colour of passionate energy. It can energize the life that may be lost or down at times. And it helps to heal the sorrow from the breakup and is effective in building more social skills. Hang the bright orange curtain on the window that connects to the outside. If you feel too flashy to use orange in a wide space, use it as an accent colour on the sky blue background which is a contrast colour. Any plant with orange colour fruit is helpful too.",
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
        question_en: "Are you stressed out and nervous?",
        questionFontColor: "#FFFFFF",
        text: "나는 앞으로 어떤 사람이 될까? 내 미래를 알 수 있다면 얼마나 좋을까? 보이지 않는 앞날이 너무 불안하고 지금 하는 일에 확신이 없어 방황할 때가 있습니다. 또 스트레스는 당신을 자꾸만 지치게 하죠. 그럴 때는 쉼 없이 달리던 발걸음을 잠시 멈춰 보세요. 그리고 공원이나 숲으로 나가 풀밭에 누워보세요. 따스한 햇살과 싱긋한 풀내음이 당신의 불안을 가라앉혀 줄 거예요.밖으로 나가기 어렵다면 눈을 감고 초록 빛 숲 속을 상상해 봐도 좋습ㄴ다. 지금 쉬면 내가 너무 뒤쳐질까 걱정하지 마세요. 누구에게나 저마다의 속도가 있답니다. 휴식은 지쳐있는 당신에게 다시 나아갈 힘을 선물해 줄 거예요.",
        text_en: "What kind of person will I be in the future? How nice would it be to know the future? Sometimes you are nervous about the unforeseeable future and that can make you wander because you are not sure of what you are doing now. And stressing about it makes you even more exhausted. Then, stop for a moment from running around in your life. Go to a park or forest, and lie down on the lawn. Warm sunshine and fresh scent or lawn will calm you down. If you can’t go outside, close your eyes and picture yourself in the green forest. Don’t think that you will be behind if you take a rest now. Everyone has his/her own pace. Rest will give you the energy to move forward again from the exhaustion.",
        tipstext: "초록색은 우리 눈에 가장 편안한 색으로, 스트레스를 완화시키는 데 도움이 됩니다. 또한 방황하거나 계속해서 불안을 느끼는 사람에게 은신처같은 편안함을 제공합니다. 초록색 벽지를 활용하거나 숲 속을 연상시키는 사진 또는 그림을 걸어보세요. 방 안에 화분을 두거나 당신만의 작은 테라리움을 꾸며도 좋습니다.",
        tipstext_en: "Green is the most comfortable colour for human eyes and It is helpful to relieve stress. Also, it can be a resting area for those who are wandering and feeling nervous. Use green wallpaper or hang a picture or painting that reminds you of the forest. A plant or your own small terrarium is good too.",
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
        question_en: "Are you feeling pressured and tired?",
        questionFontColor: "#FFFFFF",
        text: "해결해야할 일들이 너무 많지만 원하는 만큼 되지 않을 때가 있습니다. 마음은 급한데 자꾸만 나아가지 못하게 무언가가 나를 붙잡고 있는 것 같기도 하죠. 그럴 때는 잠시 일상에서 벗어나 바닷가를 찾아가 보세요. 그리고 탁 트인 하늘과 끝없이 펼쳐진 푸른 빛 바다, 평화로운 파도소리에만 집중하세요. 끊임없이 흐르는 물처럼 당신도 다시 나아갈 수 있습니다. 만약 절대 넘어설 수 없을 것 같은 산이 당신 앞을 가로막고 있다면 너무 걱정말고 천천히 돌아서 가세요. 당신이 몰두해 있던 것들, 당신을 긴장하게 만든 것들에서 잠시 벗어나면 오히려 문제를 해결할 방법이 보이기도 한답니다.",
        text_en: "Sometimes you have too much to do but things are not working as you wanted. You have to hurry, but you feel like something is holding you back. Then, try to step back from your daily life and go to a beach. And pay close attention only to a cloudless sky, wide-open blue ocean, and peaceful waves. Just like flowing water, you can move forward again. If you think that there’s a big mountain blocking your way, don’t worry about it and just go around it slowly. Staying away from things you are focused on or make you anxious may help you find a solution to the problem.",
        tipstext: "파란색은 진정효과가 좋은 색으로, 마음을 침착하게 유지시켜 줍니다. 또 광활한 하늘과 바다를 연상시키는 하늘색은 갑갑한 일상에서 벗어나 자유로움을 느끼게 합니다. 파란색 벽지나 커튼 등을 활용해 방 안에 하늘과 바다를 만들어 보세요. 실내용 작은 분수대를 설치해 휴식이 필요할 때마다 조용히 바라보는 것도 좋습니다.",
        tipstext_en: "Blue is a soothing colour, and it maintains your mind calm. In particular, sky blue that reminds of wide-open sky and ocean helps you feel free from your emotionally demanding daily lives. Make your own sky and ocean in your room using blue wallpaper or curtain. Install a small indoor fountain and just staring at it whenever you need rest is good as well.",
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
        question_en: "Are you feeling tired or worried about something?",
        questionFontColor: "#FFF5A5",
        text: "오늘도 바쁘고 정신없는 하루를 보내고 나니 벌써 밤이 되었네요. 하루하루가 너무 빨리 지나가 버리는 것 같고, 이러다가 길도 방향도 찾지 못한 채 나이만 들어버리는 게 아닐까 두렵기도 합니다. 그럴 때는 창밖의 밤하늘을 바라보세요. 처음에는 보이지 않던 별들이 서서히 깜깜한 어둠을 뚫고 저마다의 빛으로 반짝이는 것이 보이시나요? 이처럼 지금은 어둠에 묻혀있는 것 같아도, 거대한 세상의 작은 점인 것 같아도 당신은 이 세상을 비추는 또 하나의 별이랍니다. 때로는 구름에 가려 그 빛이 약해보일 수 있지만 별은 여전히 빛나고 있다는 걸 잊지마세요. 오늘도 수고한 당신, 활기찬 내일을 위해 잠시 쉬어가세요.",
        text_en: "You had a busy day again today, and it already became night time. You feel the time flies by too fast and worried that you might be only getting old without finding your way. Then, take a moment and look at the night sky. Maybe it is hard to see any stars at first. But keep looking. Do you see the sparkling stars through the pitch-black darkness shining in their own way? You are a star lighting the world too. Even if you may think everything is stuck in the darkness, or you see yourself as a tiny speckle in the vast world. Sometimes, you may be covered behind clouds and its light may look dim. But don’t forget that the star is still shining. Great job today. Take a rest for the brighter tomorrow.",
        tipstext: "남색은 두려움을 치료하는 데 효과적이고, 지친 마음에 휴식을 줍니다. 남색의 벽지나 침구를 활용하면 불면증에도 도움이 됩니다. 금색 장식품이나 조명을 포인트로 사용하면 새로운 시작을 위한 활기를 얻을 수 있습니다. 혹시 창밖이 잘 보이지 않는다면 벽에 남색 계열의 밤하늘 그림이 인쇄된 패브릭 포스터를 걸어놔도 좋습니다.",
        tipstext_en: "Navy is a colour effective to help when you are worried about something and gives comfort to a restless mind. Navy coloured wallpaper or comforter helps with insomnia. If you use gold-coloured accessories or light fixtures as an accent in your space, you may get energy for a new start. If you can’t see the night sky from your room, hang a fabric poster with a picture of the navy coloured night sky.",
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
        question_en: "Are you having difficulties with mood swings?",
        questionFontColor: "#FFF5A5",
        text: "요즘들어 사소한 일에도 금방 화가 나고 특별한 사건이 없는데도 기분이 급격히 변하나요? 그럴 때는 스스로에게서 거리를 두고 자신을 돌아보세요. 내가 왜 불안해하고 있는지, 무엇이 나를 압박하고 있는지를 찬찬히 생각해 보세요. 스쳐가듯 떠오르는 것도 중요한 이유일 수 있습니다. 만약 떠오르는 것이 없다면 생각을 멈추고 따뜻한 차와 함께 좋아하는 노래를 들으며 창밖의 잔잔한 바람을 느껴 보세요. 바깥으로 나가 발길 닿는대로 걷는 것도 좋습니다. 실제로 많은 사람들이 산책을 하며 마음의 안정을 얻거나 생각을 정리한다고 해요. 조급해하지 말고 천천히, 당신이 느끼는 감정의 이야기를 들어주세요.",
        text_en: "Have you been experiencing sudden flare ups or mood swing at tiny little things? Then, take a rest and look back on yourself. Think of why you are nervous or what is stressing you out. Something that pops in your head could provide you with a clue. If nothing comes to your mind, take a moment to listen to your favourite music with a cup of warm tea, and feel the light breeze outside the window. Going outside and walking anywhere could be helpful too. In fact, many people feel comfortable taking a stroll to organize their thoughts. Be patient and just listen to your emotions.",
        tipstext: "파스텔 톤의 분홍색은 감정이 격해질 때 마음을 편안하게 안정시켜 줍니다. 그리고 좌절감을 느끼는 사람에게 따뜻한 위로를 주기도 합니다. 벽지나 침구류에 분홍색을 사용하여 온화한 분위기를 만들어 보세요. 연한 회색이나 흰색과 함께 사용하면 더 좋습니다. 보라색도 감정 기복이 심하거나 스트레스가 많을 때 효과적이므로 가구나 장식품에 포인트로 활용하세요.",
        tipstext_en: "Baby pink can help you to relax while you are experiencing emotional stirrups. And it sometimes gives warm comfort to those who feel frustration. Decorate your space using baby pink. Baby pink wallpapers or beddings can be a good idea. It works better with light grey or white. Purple is also effective for an unstable mood and extreme stress. So, apply purple as an accent colour in your space, for furniture or other accessories.",
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
        question_en: "Are you feeling anxious or worrying about something?",
        questionFontColor: "#FFCC5A",
        text: "일어나지도 않은 일들이 걱정되고 그 걱정이 꼬리에 꼬리를 물고 멈추지 않을 때가 있습니다. 이러한 걱정들은 대게 극심한 스트레스와 불안감때문에 생긴다고 합니다. 걱정이 너무 많아 힘들 때는 스스로에게 ‘괜찮아. 결국에는 일어나지 않을 일들이야.’ 라며 위로의 말을 건네주세요. 그리고 모닥불 소리나 흙 길을 걷는 발소리같은 ASMR을 들어보세요. 몸의 긴장을 풀고 눈을 감은 채, 소리에만 집중하다 보면 마음 속 불안들이 천천히 가라앉을 거예요. 소리에 맞춰 자연의 이미지를 떠올려보거나 도예, 원예와 같이 흙을 직접 만지는 활동을 하는 것도 강박적 사고에서 벗어나는 데 도움이 됩니다.",
        text_en: "It usually happens because of extreme stress and nervousness. When you are worried too much, say to yourself, “It’s ok, don’t worry. You shouldn’t have to worry so much.” And spend some time listening to the ASMR videos of nature, like the sound of the bonfire or footsteps walking on the soil. Relax, close your eyes, pay full attention to the sound, and your worries will go away gradually. Imagining nature along with the sound, or working with clay such as pottery or gardening is also good to be free from obsessive thoughts.",
        tipstext: "갈색은 걱정이 너무 많거나 강박적 사고를 하는 사람들의 불안을 줄여주고, 억압된 감정을 해소하는 데 도움을 줍니다. 벽돌로 벽을 장식하거나 바닥에 따뜻한 갈색 러그를 깔아 자연의 분위기를 내보세요. 밝은 분위기를 내고 싶다면 흰색 방에 갈색의 원목가구들과 손으로 빚은 흙 도자기들을 포인트로 배치해도 좋습니다.",
        tipstext_en: "Brown is a colour that reduces too many worries or obsessive thinking. Also, it is effective to relieve the suppressed feeling. Decorate your wall with bricks or put a brown rug on the floor to give a natural atmosphere. If you want a brighter atmosphere, place handmade clay pottery or brown wood furniture in a white room.",
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
        question_en: "You are an emotionally stable and secure person!",
        questionFontColor: "#A3B900",
        text: "당신은 현재 크게 걱정되거나 불안한 것이 없는 분이네요. 다양한 빛깔의 감정들이 당신 안에서 조화로운 정원을 이루고 있어요. 당신은 이미 스스로의 마음을 보살피고 위로하는 방법을 알고 계시는 것 같네요. 앞으로도 자신의 감정을 돌보고 아끼며 행복한 삶을 살아가기를 바랄게요. 만약 주변에 불안한 감정으로 인해 힘들어하는 사람이 있다면 먼저 다가가서 손을 내밀어 주실 래요? 당신의 행복이 다른 사람에게도 전해진다면 조금 더 나은 세상이 될 수 있을 거예요. 혹시라도 마음에 흔들림이 생긴다면 언제든 다시 찾아와 주세요. 당신을 위한 방이 항상 준비되어 있답니다 :)",
        text_en: "You are someone with no significant concern or worry. Emotion with various colours makes a harmonious garden in you. You seem to already know how to help and comfort yourself. I hope you continue living a happy life that cares for and values your emotion. If you see anyone who is nervous, could you offer your help? When your happiness is delivered to them, the world would be a better place. Come back whenever your mind wobbles! There’s always a room for you :)",
        tipstext: "은은한 아이보리 빛 방에 파스텔 톤의 다양한 컬러들로 포인트를 주면 어떨까요? 당신의 마음 속 정원처럼요. 그리고 따스한 햇살이 잘 들어오도록 해서 건강한 상태를 유지시켜 주세요. 변화를 주고 싶을 때마다 포인트 컬러들을 바꿔줘도 좋습니다.",
        tipstext_en: "How about adding various pastel colours in a calm ivory-coloured room? Just like your colourful emotional garden. And make the warm sunshine get in your room to maintain a healthy state of mind. If you want to make a difference, just change or add some accent colours.",
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
