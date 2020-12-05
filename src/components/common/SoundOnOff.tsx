import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import useSound from '../../hooks/useSound';
import './soundOnOff.scss';
import musicIcon from '../../assets/icons/music-fill.svg';
import musicOffIcon from '../../assets/icons/music-fill-off.svg';

const StyledIcon = styled.i<{
}>`
    color: ${props => props.color || "#FFF"};
`

const StyledButton = styled.button<{
}>`
    color: ${props => props.color || "#FFF"};
`

function SoundOnOff() {

    const { isSoundOn, soundOn, soundOff } = useSound();

    const onClickBtn = function (e: MouseEvent<HTMLButtonElement>) {
        if (isSoundOn) {
            soundOff();
        }
        else {
            soundOn();
        }
    }

    return (
        <div className="sound-onoff">
            <StyledButton className={`btn-sound${isSoundOn ? "" : " disabled"}`} color={"#FFF"} onClick={onClickBtn}>
                {
                    isSoundOn ?
                        <svg version="1.1" id="레이어_1" x="0px" y="0px" viewBox="0 0 96 96">
                            <path fill="#FFF" d="M0,0h96v96H0V0z" />
                            <path d="M82.6,11.7v56c0,8.8-7.2,16-16,16s-16-7.2-16-16c0-8.8,7.2-16,16-16c2.8,0,5.6,0.7,8,2.1V23.7h-36v44c0,8.8-7.2,16-16,16 s-16-7.2-16-16c0-8.8,7.2-16,16-16c2.8,0,5.6,0.7,8,2.1V11.7H82.6z" />
                        </svg>

                        :
                        <svg version="1.1" id="레이어_1" x="0px"
                            y="0px" viewBox="0 0 96 96" >
                            <path d="M0,0h96v96H0V0z" />
                            <g>
                                <g>
                                    <path d="M89.7,7.8c-32,32-48.4,48.4-80.4,80.4" />
                                    <path d="M89.6,7.8c-1.6-1.6-4.1-1.6-5.7,0l-3.9,3.9H30.6v42.1c-2.4-1.4-5.2-2.1-8-2.1c-8.8,0-16,7.2-16,16c0,4.8,2.1,9.1,5.5,12l-2.8,2.8c-1.6,1.6-1.6,4.1,0,5.7c1.6,1.6,4.1,1.6,5.7,0l4.8-4.8c0.9,0.2,1.9,0.3,2.9,0.3c8.8,0,16-7.2,16-16v-3.2l36-36v25.3c-2.4-1.4-5.2-2.1-8-2.1c-8.8,0-16,7.2-16,16s7.2,16,16,16c8.8,0,16-7.2,16-16V20.5l7-7C91.2,11.9,91.2,9.3,89.6,7.8z M38.6,23.7h29.5L38.6,53.2V23.7z" />
                                </g>
                            </g>
                        </svg>
                }
                {/* <i className="ri-music-2-fill"></i> */}
            </StyledButton>
        </div >
    );
}

export default SoundOnOff;
