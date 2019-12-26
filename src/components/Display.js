import React, { useState } from 'react';
import DrumPad from './DrumPad';
import animals from '../animals';

const Display = () => {
  const displayAnimal = animal => {
    return animal;
  };

  const [currentlyPlaying, setPlaying] = useState(displayAnimal('farm'));

  return (
    <div id="display">
      <DrumPad
        audioDescription="cow"
        keyboardKey="Q"
        audioFile={animals.cow.audioFile}
        image={animals.cow.image}
        imageAlt={animals.cow.imageAlt}
        displayAnimal={setPlaying}
      />
      <DrumPad
        audioDescription="goose"
        keyboardKey="W"
        audioFile={animals.goose.audioFile}
        image={animals.goose.image}
        imageAlt={animals.goose.imageAlt}
        displayAnimal={setPlaying}
      />
      <DrumPad
        audioDescription="cat"
        keyboardKey="E"
        audioFile={animals.cat.audioFile}
        image={animals.cat.image}
        imageAlt={animals.cat.imageAlt}
        displayAnimal={setPlaying}
      />
      <DrumPad
        audioDescription="dog"
        keyboardKey="A"
        audioFile={animals.dog.audioFile}
        image={animals.dog.image}
        imageAlt={animals.dog.imageAlt}
        displayAnimal={setPlaying}
      />
      <DrumPad
        audioDescription="horse"
        keyboardKey="S"
        audioFile={animals.horse.audioFile}
        image={animals.horse.image}
        imageAlt={animals.horse.imageAlt}
        displayAnimal={setPlaying}
      />
      <DrumPad
        audioDescription="pig"
        keyboardKey="D"
        audioFile={animals.pig.audioFile}
        image={animals.pig.image}
        imageAlt={animals.pig.imageAlt}
        displayAnimal={setPlaying}
      />
      <DrumPad
        audioDescription="sheep"
        keyboardKey="Z"
        audioFile={animals.sheep.audioFile}
        image={animals.sheep.image}
        imageAlt={animals.sheep.imageAlt}
        displayAnimal={setPlaying}
      />
      <DrumPad
        audioDescription="chicken"
        keyboardKey="X"
        audioFile={animals.chicken.audioFile}
        image={animals.chicken.image}
        imageAlt={animals.chicken.imageAlt}
        displayAnimal={setPlaying}
      />
      <DrumPad
        audioDescription="duck"
        keyboardKey="C"
        audioFile={animals.duck.audioFile}
        image={animals.duck.image}
        imageAlt={animals.duck.imageAlt}
        displayAnimal={setPlaying}
      />
      <div id="currentlyPlaying">
        That's what a {currentlyPlaying} sounds like!
      </div>
      <div id="attribution">
        This farm animal "drum kit" was built with{' '}
        <a href="https://reactjs.org/">React</a> as a{' '}
        <a href="https://freecodecamp.org">freeCodeCamp</a> project. Sound
        effects were obtained from{' '}
        <a href="https://www.zapsplat.com">https://www.zapsplat.com</a>. The
        photos were obtained from{' '}
        <a href="https://www.unsplash.com">https://www.unsplash.com</a>. If you
        want to see more of my work, connect with me on{' '}
        <a href="https://www.twitter.com/ronaldvdb">Twitter</a>,{' '}
        <a href="https://www.linkedin.com/in/ronaldvanderbergh">LinkedIn</a>,{' '}
        <a href="https://github.com/rhvdbergh">or GitHub</a>. You can also read
        my blog at <a href="https://vanderbergh.com">vanderbergh.com</a>.
      </div>
    </div>
  );
};

export default Display;
