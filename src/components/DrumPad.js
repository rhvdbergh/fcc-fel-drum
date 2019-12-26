import React, {useEffect} from 'react';

const DrumPad = props => {

    function playSound() {
        const aud = document.getElementById(props.keyboardKey); 
        aud.play();
        props.displayAnimal(props.audioDescription);
    }

    const handleKeyPress = evt => {
        if (evt.key.toUpperCase() === props.keyboardKey) {
            playSound();
        }
    }

    useEffect(() => {
        document.addEventListener('keypress', handleKeyPress);

        return () => {
            document.addEventListener('keypress', handleKeyPress);
        };
    }, [])

    return (
        <div className="drum-pad" id={`${props.audioDescription}`} onClick={playSound}>{props.keyboardKey}<audio className="clip" id={`${props.keyboardKey}`} src={`./media/sounds/${props.audioFile}`} />
        </div>
    )
}

export default DrumPad;