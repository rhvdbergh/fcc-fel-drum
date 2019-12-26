import React from 'react';
import DrumPad from './DrumPad';

const Display = () => {
    return (
        <div id="display">
            <DrumPad audioDescription="cow" keyboardKey="Q" audioFile="audio_hero_s-cow-moo.mp3" />
            <DrumPad audioDescription="goat" keyboardKey="W" />
            <DrumPad audioDescription="cat" keyboardKey="E" />
            <DrumPad audioDescription="dog" keyboardKey="A" />
            <DrumPad audioDescription="cow" keyboardKey="S" />
            <DrumPad audioDescription="pig" keyboardKey="D" />
            <DrumPad audioDescription="mouse" keyboardKey="Z" />
            <DrumPad audioDescription="chicken" keyboardKey="X" />
            <DrumPad audioDescription="duck" keyboardKey="C" />
        </div>
    )
}

export default Display;