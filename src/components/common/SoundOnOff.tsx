import React from 'react';
import styled from 'styled-components';
import useSound from '../../hooks/useSound';


const StyledIcon = styled.i<{
}>`
    color: ${props => props.color || "#FFF"};
`

function SoundOnOff() {

    const { isSoundOn, soundOn, soundOff } = useSound();

    return (
        <div className="sound-onoff">
            {
                isSoundOn ?
                    <button className="btn-sound" onClick={() => soundOff()}>
                        <StyledIcon className="ri-music-2-fill" color={"#FFFFFF"}></StyledIcon>
                        {/* <i className="ri-music-2-fill"></i> */}
                    </button>
                    :
                    <button className="btn-sound" onClick={() => soundOn()}>
                        <StyledIcon className="ri-music-2-line" color={"#EEEEEE"}></StyledIcon>
                        <StyledIcon className="ri-subtract-line" color={"#EEEEEE"}></StyledIcon>
                    </button>
            }

        </div>
    );
}

export default SoundOnOff;
