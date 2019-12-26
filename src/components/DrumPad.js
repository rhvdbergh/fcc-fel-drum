import React from 'react';

const DrumPad = props => {
    return (
        <div className="drum-pad" id={`${props.audioDescription}`}>{props.keyboardKey}<audio className="clip" id={`${props.keyboardKey}`} src="../media/sounds/audio_hero_s-cow-moo.mp3"/></div>
    )
}

export default DrumPad;