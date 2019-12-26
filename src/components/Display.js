import React, {useState} from 'react';
import DrumPad from './DrumPad';

const Display = () => {

    const displayAnimal = (animal) => {
        return animal;
    }

    const [currentlyPlaying, setPlaying] = useState(displayAnimal('Farm sounds!'));

    return (
        <div id="display">
            <div>{currentlyPlaying}</div>
            <DrumPad audioDescription="cow" keyboardKey="Q" audioFile="audio_hero_s-cow-moo.mp3" displayAnimal={setPlaying} />
            <DrumPad audioDescription="goose" keyboardKey="W" audioFile="animals_bird_goose_honk_twice.mp3" displayAnimal={setPlaying} />
            <DrumPad audioDescription="cat" keyboardKey="E" audioFile="animal_cat_meow.mp3" displayAnimal={setPlaying} />
            <DrumPad audioDescription="dog" keyboardKey="A" audioFile="ftus_animals_dog_bark_aggressive_242.mp3" displayAnimal={setPlaying} />
            <DrumPad audioDescription="horse" keyboardKey="S" audioFile="audio_hero_s-horse-whinny.mp3" displayAnimal={setPlaying} />
            <DrumPad audioDescription="pig" keyboardKey="D" audioFile="zapsplat_animals_pig_grunt_snort_002_17838.mp3" displayAnimal={setPlaying} />
            <DrumPad audioDescription="sheep" keyboardKey="Z" audioFile="animals_sheep_bleat_002.mp3" displayAnimal={setPlaying} />
            <DrumPad audioDescription="chicken" keyboardKey="X" audioFile="felix_blume_animals_chicken_cluck_single.mp3" displayAnimal={setPlaying} />
            <DrumPad audioDescription="duck" keyboardKey="C" audioFile="animal_bird_duck_quack_003.mp3" displayAnimal={setPlaying} />
            <div id="attribution">Sound effects obtained from <a href="https://www.zapsplat.com">https://www.zapsplat.com</a>.</div>
        </div>
    )
}

export default Display;