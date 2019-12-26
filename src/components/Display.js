import React, {useState} from 'react';
import DrumPad from './DrumPad';
import animals from '../animals';

const Display = () => {

    const displayAnimal = (animal) => {
        return animal;
    }

    const [currentlyPlaying, setPlaying] = useState(displayAnimal('Farm sounds!'));

    return (
        <div id="display">
            <div>{currentlyPlaying}</div>
            <DrumPad audioDescription="cow" keyboardKey="Q" audioFile={animals.cow.audioFile} image={animals.cow.image} imageAlt={animals.cow.imageAlt} displayAnimal={setPlaying} />
            <DrumPad audioDescription="goose" keyboardKey="W" audioFile={animals.goose.audioFile} image={animals.goose.image} imageAlt={animals.goose.imageAlt} displayAnimal={setPlaying} />
            <DrumPad audioDescription="cat" keyboardKey="E" audioFile={animals.cat.audioFile} image={animals.cat.image} imageAlt={animals.cat.imageAlt} displayAnimal={setPlaying} />
            <DrumPad audioDescription="dog" keyboardKey="A" audioFile={animals.dog.audioFile} image={animals.dog.image} imageAlt={animals.dog.imageAlt} displayAnimal={setPlaying} />
            <DrumPad audioDescription="horse" keyboardKey="S" audioFile={animals.horse.audioFile} image={animals.horse.image} imageAlt={animals.horse.imageAlt} displayAnimal={setPlaying} />
            <DrumPad audioDescription="pig" keyboardKey="D" audioFile={animals.pig.audioFile} image={animals.pig.image} imageAlt={animals.pig.imageAlt} displayAnimal={setPlaying} />
            <DrumPad audioDescription="sheep" keyboardKey="Z" audioFile={animals.sheep.audioFile} image={animals.sheep.image} imageAlt={animals.sheep.imageAlt} displayAnimal={setPlaying} />
            <DrumPad audioDescription="chicken" keyboardKey="X" audioFile={animals.chicken.audioFile} image={animals.chicken.image} imageAlt={animals.chicken.imageAlt} displayAnimal={setPlaying} />
            <DrumPad audioDescription="duck" keyboardKey="C" audioFile={animals.duck.audioFile} image={animals.duck.image} imageAlt={animals.duck.imageAlt} displayAnimal={setPlaying} />
            <div id="attribution">Sound effects obtained from <a href="https://www.zapsplat.com">https://www.zapsplat.com</a>. Photos found on <a href="https://www.unsplash.com">https://www.unsplash.com</a>.</div>
        </div>
    )
}

export default Display;