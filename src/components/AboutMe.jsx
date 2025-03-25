import React, {useEffect, useState} from 'react';
import {base_url} from "../utils/constants.js";
import main from "../assets/main.jpg";

const AboutMe = () => {
    const [hero, setHero] = useState('Loading...');
    useEffect(() => {
        fetch(`${base_url}/v1/peoples/1`)
            .then(res => res.json())
            .then(data => {
                setHero({
                    name: data.name,
                    gender: data.gender,
                    height: data.height,
                    eye_color: data.eye_color,
                    mass: data.mass,
                    birth_year: data.birth_year,
                });
            })
            .catch(() => setHero('Error'))
    })
    return (
        <div className={'farGalaxy'}>
            <img className="float-start w-25 me-3" src={main} alt="Hero"/>
            <p>Name: {hero.name}</p>
            <p>Gender: {hero.gender}</p>
            <p>Height: {hero.height}</p>
            <p>Eye color: {hero.eye_color}</p>
            <p>Mass: {hero.mass}</p>
            <p>Birth year: {hero.birth_year}</p>
        </div>
    );
};

export default AboutMe;