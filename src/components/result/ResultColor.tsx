import React, { useState } from 'react';
import resultOutlineImgWhite from '../../assets/img/result_outline_white.png';
import resultOutlineImgBlack from '../../assets/img/result_outline_black.png';
import resultData from '../../data/resultData';
import styled from 'styled-components';
import ResultReference from './ResultReference';
import Footer from '../Footer';
import usePage from '../../hooks/usePage';
import useSound from '../../hooks/useSound';

type ResultColorProps = {
    color: string;
    username: string;
}

const StyledDiv = styled.div<{
    backgroundColor?: string,
    color?: string
}>`
    background-color: ${props => props.backgroundColor};
    text-align: center;
    color: ${props => props.color}
`

const StyledParagraph = styled.p<{
    margin?: string,
    fontSize?: string,
    lineHeight?: string
}>`
    color: ${props => props.color || "#FFFFFF"};
    margin: ${props => props.margin || "0"};
    font-size: ${props => props.fontSize || "1rem"};
    line-height: ${props => props.lineHeight || "1"};
`

const StyledButton = styled.button<{
    backgroundColor?: string,
    color?: string
}>`
    background-color: ${props => props.backgroundColor || '#FFFFFF'};
    color: ${props => props.color || '#FFFFFF'};
`

const StyledIcon = styled.i<{
    fontSize?: string
}>`
    color: ${props => props.color || "#FFF"};
    font-size: ${props => props.fontSize};
    font-weight: normal;
    cursor: pointer;
`

const StyledSvg = styled.svg<{
    fontSize?: string
}>`
    fill: ${props => props.fill || "#FFF"};
    font-size: ${props => props.fontSize || "1rem"};
    font-weight: normal;
`

function ResultColor({ color, username }: ResultColorProps) {


    const result = resultData.find((data) => data.color === color)

    const [isOpenRef, setIsOpenRef] = useState(false);
    const { goPage } = usePage();
    const { isSoundOn, soundOn, soundOff } = useSound();

    console.log(result)
    console.log(color)
    return (
        <>
            {
                result ?
                    <StyledDiv className="result-wrp" backgroundColor={result.backgroundColor}>
                        <div className="result-top">
                            {
                                result.color === "white" ?
                                    <img className="result-outline" src={resultOutlineImgBlack} />
                                    :
                                    <img className="result-outline" src={resultOutlineImgWhite} />
                            }
                            <div className="result-inner">
                                {
                                    isSoundOn ?
                                        <button className="btn-sound result" onClick={() => soundOff()}>
                                            <StyledIcon className="ri-music-2-fill" color={result.textFontColor}></StyledIcon>
                                        </button>
                                        :
                                        <button className="btn-sound result" onClick={() => soundOn()}>
                                            <StyledIcon className="ri-music-2-line" color={result.textFontColor}></StyledIcon>
                                        </button>
                                }
                                <StyledParagraph color={result.textFontColor} margin="1rem" fontSize="1.2rem" lineHeight="1.3" className="result-username">For.<br />{username}</StyledParagraph>
                                <picture className="result-img">
                                    <source type="image/webp" srcSet={result.webpImg} />
                                    <img src={result.gifImg} />
                                </picture>
                                <StyledParagraph color={result.titleFontColor} margin="1rem" fontSize="2rem">{result.title}</StyledParagraph>
                                <StyledParagraph color={result.questionFontColor} margin="1rem" fontSize="1.5rem">{result.question}</StyledParagraph>
                                <StyledParagraph color={result.textFontColor} margin="1rem" fontSize="1.3rem" lineHeight="1.1">{result.text}</StyledParagraph>
                            </div>
                        </div>
                        <div className="result-middle">
                            {/* <i className="ri-book-mark-line"></i> */}
                            <StyledIcon className="ri-book-mark-line" color={result.buttonColor} fontSize="2.5rem" onClick={() => setIsOpenRef(true)}></StyledIcon>
                            <a href={result.img} target="_blank" rel="noreferrer" download>
                                <StyledButton className="result-btn-save" color={result.buttonFontColor} backgroundColor={result.buttonColor}>이미지 저장</StyledButton>
                            </a>
                            <StyledIcon className="ri-share-fill" color={result.buttonColor} fontSize="2.5rem"></StyledIcon>

                        </div>
                        <StyledDiv className="result-divider" color={result.dividerColor}></StyledDiv>
                        <div className="result-middle contact">
                            <StyledParagraph color={result.contactFontColor} fontSize="1.5rem">Syeon's artworks &gt;&gt;</StyledParagraph>
                            <div className="result-icons-right">
                                <a href="https://www.instagram.com/syeon.artist/" target="_blank" rel="noopener noreferrer">
                                    <StyledIcon color={result.contactFontColor} fontSize="2rem" className="ri-instagram-line"></StyledIcon>
                                </a>
                                <a href="https://grafolio.naver.com/syeon" target="_blank" rel="noopener noreferrer">
                                    <StyledSvg fill={result.contactFontColor} height="2rem" xmlns="http://www.w3.org/2000/svg" id="레이어_1" data-name="레이어 1" viewBox="0 0 161 161"><defs></defs><title>그라</title><path className="cls-1" d="M62.63,54.79c-.21,2-1.53,3.09-3.19,4A5.42,5.42,0,0,0,57,61.14a110.53,110.53,0,0,0-4.74,13.32c-2.46,9.73,0,18.53,5.89,26.52,1.52,2.07,4.33,3.2,4.53,6.26,0,.22.81.39,1.24.57,7.44,3.17,14.94,6,23.31,5a32.77,32.77,0,0,0,13.7-5c1.33-.84,1.74-1.46-.1-2.55-6.53-3.83-12.86-8-19.41-11.79-2-1.17-1.94-2-.86-3.69q5.59-8.73,11-17.6c1.13-1.86,2-2.13,4-.9,9.33,5.86,18.77,11.54,28.17,17.28,4.64,2.83,9.24,5.7,13.94,8.43,1.78,1,2,1.91,1.23,3.94-7.47,19.9-21.65,32.74-42.05,37.45-18.72,4.33-36.31.66-51.46-12.11A57.11,57.11,0,0,1,25.41,92,58.33,58.33,0,0,1,69.66,24.09c19.26-4.49,37.06,0,52.17,13.1,3.72,3.21,6.54,7.45,9.76,11.24,1.18,1.4,1.25,2.47-.64,3.54-3.21,1.81-6.71,3.23-9.29,6.07-.35.39-1.34.74-1.66.53-1.36-.87-1.62-.73-1.19.85.09.33-.52,1.23-.8,1.22-1.46,0-2,.8-3,1.79-2.67,2.7-4.3,2.39-6.47-.63-1.42-2-2.64-4.09-4.11-6a13.93,13.93,0,0,0-2.5-2c-.81-.65-1.6-1.32-2.4-2h0l.78-.7-.79-.33-1-.84a1,1,0,0,0-.94-.13H95.62l-1.13-.86-2-.07.1-.23-1.06-.85h-.85l-2.07-.92-2,0-1.14-.07-1-.87a1.5,1.5,0,0,0-1,0,1.82,1.82,0,0,0-.92-.11H81.43l-1,.11a.84.84,0,0,0-.84,0l-1-.11-2.23,1.05-1.78.83-.1,1.21-1,0a1.42,1.42,0,0,0-.91-.09l-.65-.74-.39.69h-1l-1,.85a2.9,2.9,0,0,1-1,.16l-1,.81-1,1.26a2.07,2.07,0,0,0-.86,0l-1.12,0-1,1.07,0,0-1,1.07A1.28,1.28,0,0,0,62.63,54.79Z" /></StyledSvg>
                                </a>
                            </div>
                        </div>
                        <div className="result-middle">
                            <StyledParagraph color={result.contactFontColor} fontSize="1.5rem">Enif's Github &gt;&gt;</StyledParagraph>
                            <div className="result-icons-right">
                                <a href="https://github.com/KYJ-Enif" target="_blank" rel="noopener noreferrer">
                                    <StyledIcon color={result.contactFontColor} fontSize="2rem" className="ri-github-fill"></StyledIcon>
                                </a>
                            </div>
                        </div>
                        <StyledDiv className="result-divider" color={result.dividerColor}></StyledDiv>
                        <div className="result-middle contact">
                            <StyledDiv className="result-contact-email" backgroundColor={result.emailBackgroundColor}>
                                <StyledIcon className="ri-mail-line" fontSize="1.7rem"></StyledIcon>
                                <StyledParagraph fontSize="1.5rem">syeon.artist@gmail.com</StyledParagraph>
                            </StyledDiv>
                        </div>
                        <div className="result-middle center">
                            <StyledSvg onClick={() => goPage(0)} fill={result.replayIconColor} height="3em" xmlns="http://www.w3.org/2000/svg" version="1.1" id="레이어_1" x="0px" y="0px" viewBox="0 0 96 96" >
                                <path d="M84,80c0,2.2-1.8,4-4,4H16c-2.2,0-4-1.8-4-4V38c0-1.2,0.6-2.4,1.5-3.2l32-24.9c1.4-1.1,3.5-1.1,4.9,0l32,24.9  c1,0.8,1.5,1.9,1.5,3.2C84,38,84,80,84,80z M76,76V39.9L48,18.1L20,39.9V76H76z" />
                                <path d="M48,67.8L27.3,51.2L48,34.7V45c11.4,0,20.7,9.3,20.7,20.7c0,0.6,0,1.1-0.1,1.7c-3-5.7-9-9.7-15.8-9.9l-0.6,0H48V67.8z" />
                            </StyledSvg>
                        </div>
                        {
                            isOpenRef &&
                            <ResultReference close={() => { setIsOpenRef(false) }} />
                        }
                        {/* <Footer /> */}

                        <audio muted={!isSoundOn} src={result.sound} autoPlay loop />

                    </StyledDiv>
                    :
                    <div>ERROR</div>
            }
        </>
    )
}

export default ResultColor;
