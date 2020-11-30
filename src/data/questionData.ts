import q2Sound from '../assets/sounds/q2.mp3';
import q3Sound from '../assets/sounds/q3.mp3';
import q4Sound from '../assets/sounds/q4.mp3';
import q5Sound from '../assets/sounds/q5.mp3';
import q6Sound from '../assets/sounds/q6.mp3';
import q7Sound from '../assets/sounds/q7.mp3';
import q8Sound from '../assets/sounds/q8.mp3';

const questionData = [
    {
        idx: 1,
        question: [
            "\n오늘은 기다리던 여행을 가는 날입니다!\n​어디로 떠날 예정인가요?"
        ],
        "text-aline": "center",
        answer: [
            {
                "text": "사람이 적은 평화로운 자연",
                "score": ""
            },
            {
                "text": "다양한 문화생활이 가능한 도시",
                "score": ""
            },
            {
                "text": "활동적인 액티비티를 즐길 수 있는 곳",
                "score": ""
            },
            {
                "text": "잘 알려지지 않은 소도시 탐험",
                "score": ""
            },
            {
                "text": "새로운 사람들을 만날 수 있는 행사가 열리는 곳",
                "score": ""
            }
        ],
        "backgroudImg": "../assets/img/q1.jpg",
        backgroudColor: "#A1896B",
        questionColor: "#1385AD",
        answerColor: "#6A6A6A"
    },
    {
        idx: 2,
        question: [
            "\n여행지에 도착해서 잠시 산책을 하는 중,\n갑자기 비가 쏟아집니다.",
            "\n\n이때 가장 먼저 드는 생각은 무엇인가요?"
        ],
        "text-aline": "center",
        answer: [
            {
                "text": "아, 짜증나(험한 말). 갑자기 이게 뭐야!!!",
                "score": ""
            },
            {
                "text": "일단 근처 카페에서 비가 그치길 기다려보자",
                "score": ""
            },
            {
                "text": "비 오는 것도 운치있고 좋네~",
                "score": ""
            },
            {
                "text": "우산 사서 빨리 숙소로 가야지",
                "score": ""
            },
            {
                "text": "옷이랑 신발 더러워지면 어떡하지..",
                "score": ""
            }
        ],
        backgroudColor: "#023A7A",
        questionColor: "#FFFFFF",
        answerColor: "#57B6E9",
        sound: q2Sound
    },
    {
        idx: 3,
        question: [
            "\n\n다행히 비가 금방 그쳤네요!",
            "\n숙소로 돌아가는 길,\n저녁 노을을 보며 당신은 생각에 잠깁니다.",
            "\n\n요즘 당신의 가장 큰 고민은 무엇인가요?"
        ],
        "text-aline": "center",
        answer: [
            {
                "text": "나쁜 일이 생길 것 같아 걱정되고 두렵다.",
                "score": ""
            },
            {
                "text": "미래가 보이지 않아 불안하다.",
                "score": ""
            },
            {
                "text": "나의 존재가치를 잘 모르겠고 우울하다.",
                "score": ""
            },
            {
                "text": "사람들과의 관계로 인해 스트레스를 받는다.",
                "score": ""
            },
            {
                "text": "딱히 큰 걱정거리는 없다.",
                "score": ""
            }
        ],
        backgroudColor: "#1C243A",
        questionColor: "#4F6495",
        answerColor: "#57B6E9",
        sound: q3Sound
    },
    {
        idx: 4,
        question: [
            "\n\n지금 당신에게 가장 필요한 것은 무엇인가요?"
        ],
        "text-aline": "center",
        answer: [
            {
                "text": "나를 위로해주고 힘이 되어주는 사람",
                "score": ""
            },
            {
                "text": "아무 생각없이 쉴 수 있는 여유",
                "score": ""
            },
            {
                "text": "미래를 보여주는 마법 구슬",
                "score": ""
            },
            {
                "text": "명확한 목표와 열정",
                "score": ""
            },
            {
                "text": "특별히 필요한 건 없다",
                "score": ""
            }
        ],
        backgroudColor: "#15182B",
        questionColor: "#FFFFFF",
        answerColor: "#57B6E9",
        sound: q4Sound
    },
    {
        idx: 5,
        question: [
            "피곤했는지 숙소에\n도착하자마자 잠든\n당신.",
            "\n어떤 꿈을\n꾸고 있나요?"
        ],
        "text-aline": "left",
        answer: [
            {
                "text": "좁은 방 안에 사슬로 묶여있는 꿈",
                "score": ""
            },
            {
                "text": "끝이 없는 복도를 헤매는 꿈",
                "score": ""
            },
            {
                "text": "무언가를 하려는데 계속 이루지 못하는 꿈",
                "score": ""
            },
            {
                "text": "비행기 또는 엘리베이터가 추락하는 꿈",
                "score": ""
            },
            {
                "text": "좋은 꿈을 꾸거나 아예 꿈을 꾸지 않는다",
                "score": ""
            }
        ],
        backgroudColor: "#0E0843",
        questionColor: "#868AD3",
        answerColor: "#8186C9",
        sound: q5Sound
    },
    {
        idx: 6,
        question: [
            "다음 날\n아침식사 중,\n혼자 여행 온 사람을 만납니다.",
            "그/그녀가\n당신에게 오늘\n함께 다니자고 제안하네요.",
            "\n이때 당신은\n어떻게 할까요?"
        ],
        "text-aline": "left",
        answer: [
            {
                "text": "거절하기 곤란하니 알겠다고 한다.",
                "score": ""
            },
            {
                "text": "모르는 사람은 부담스럽다. 미안하지만 거절한다.",
                "score": ""
            },
            {
                "text": "나만의 시간을 뺏기는 것 같고 귀찮으니 거절한다.",
                "score": ""
            },
            {
                "text": "위험한 사람일까봐 걱정돼 조심스레 거절한다.",
                "score": ""
            },
            {
                "text": "새로운 사람과 함께하는 것은 늘 즐겁다. 당연히 OK!",
                "score": ""
            }
        ],
        backgroudColor: "#8E8550",
        questionColor: "#483D00",
        answerColor: "#57B6E9",
        sound: q6Sound
    },
    {
        idx: 7,
        question: [
            "\n어느덧 여행 마지막 날\n집으로 돌아가는 기차 안.",
            "\n당신은 이번 여행에서\n찍은 사진들을 보고 있습니다.",
            "\n가장 눈길이 가는 사진에서\n당신은 어떤 모습인가요?"
        ],
        "text-aline": "right",
        answer: [
            {
                "text": "카메라를 향해 활짝 웃고 있다.",
                "score": ""
            },
            {
                "text": "다양한 사람들과 함께 있다.",
                "score": ""
            },
            {
                "text": "작지만 배경과 어우러져 있다.",
                "score": ""
            },
            {
                "text": "눈을 감고 바람을 느끼고 있다.",
                "score": ""
            },
            {
                "text": "사진에 내가 나오지 않는다.",
                "score": ""
            }
        ],
        backgroudColor: "#B79873",
        questionColor: "#1F4700",
        answerColor: "#84A715",
        sound: q7Sound
    },
    {
        idx: 8,
        question: [
            "\n사진을 모두 보고나니\n어느새 날이 어두워졌습니다.",
            "\n이제 정말로\n여행이 끝나가네요.",
            "\n이번 여행에서 가장\n만족스러운 점은 무엇이었나요?"
        ],
        "text-aline": "right",
        answer: [
            {
                "text": "처음으로 혼자만의 여행에 도전한 것",
                "score": ""
            },
            {
                "text": "다양한 사람들을 만난 것",
                "score": ""
            },
            {
                "text": "나만의 시간을 통해 나를 다시 돌아볼 수 있었던 것",
                "score": ""
            },
            {
                "text": "SNS에 올릴 인생샷을 많이 건진 것",
                "score": ""
            },
            {
                "text": "내가 짠 계획에 맞춰 차질없이 여행을 다닌 것",
                "score": ""
            }
        ],
        backgroudColor: "#946667",
        questionColor: "#812E2E",
        answerColor: "#57B6E9",
        sound: q8Sound
    },
    {
        idx: 9,
        question: [
            "\n여행이 끝나고 집에 돌아온 당신.\n가장 먼저 무엇을 하나요?"
        ],
        "text-aline": "center",
        answer: [
            {
                "text": "캐리어의 모든 물건을 정리하고 샤워한다.",
                "score": ""
            },
            {
                "text": "일단 피곤하니 잔다.",
                "score": ""
            },
            {
                "text": "여행에서 있었던 일을 가족/친구에게 이야기한다.",
                "score": ""
            },
            {
                "text": "여행 중 찍은 사진들을 정리해서 SNS에 올린다.",
                "score": ""
            },
            {
                "text": "여행에서의 기억을 일기로 남긴다.",
                "score": ""
            }
        ],
        backgroudColor: "#A1896B",
        questionColor: "#1385AD",
        answerColor: "#1385AD"
    }
]

export default questionData;
