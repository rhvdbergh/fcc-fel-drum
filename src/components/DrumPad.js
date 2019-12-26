import React from 'react';

const DrumPad = props => {

    function playSound() {
        console.log(props.keyboardKey);
        const aud = document.getElementById(props.keyboardKey); 
        aud.play();
    }
    return (
        <div className="drum-pad" id={`${props.audioDescription}`} onClick={playSound}>{props.keyboardKey}<audio className="clip" id={`${props.keyboardKey}`} src={`./media/sounds/${props.audioFile}`} />
        </div>
    )
}

export default DrumPad;