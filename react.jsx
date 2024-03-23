import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const EdventurersPrograms = () => {
    const programs = [
        { title: 'Introduction to electrical circuits', description: 'Learn the basics of electrical circuits and components.' },
        { title: 'Introduction to game development', description: 'Learn the fundamentals of game development using popular game engines.' },
        { title: 'Microbits', description: 'Explore the world of Microbits and their potential applications.' },
        { title: 'Robotics', description: 'Learn the basics of robotics and how to build your own robots.' },
    ];

    return (
        <section className="edventurers-programs">
            <h2>Edventurer Programs</h2>
            <Carousel showThumbs={false} showStatus={false}>
                {programs.map((program, index) => (
                    <div key={index}>
                        <h3>{program.title}</h3>
                        <p>{program.description}</p>
                    </div>
                ))}
            </Carousel>
        </section>
    );
};