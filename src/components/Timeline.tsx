import React from "react";

import "../styles/Timeline.css"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


type TimelineEntryType = {
    title: string;
    date: string;
    desc: string;
    org: string;
    loc: string;
    href?: string;
};


const timelineData: TimelineEntryType[] = [
    {
        title: "Software Engineer",
        date: "2021.7 - Present",
        desc: "Chatbot for Web",
        org: "Google",
        loc: "Waterloo, ON, CA",
        href: "https://about.google/"
    },
    {
        title: "Software Engineer",
        date: "2019.6 - 2021.6",
        desc: "Chatbot and NLP-related task platform",
        org: "RSVP.ai",
        loc: "Waterloo, ON, CA",
        href: "https://rsvp.ai/"
    },
    {
        title: "MMath, Computer Science",
        date: "2016.9 - 2018.12",
        desc: "",
        org: "University of Waterloo",
        loc: "Waterloo, ON, CA",
        href: "https://uwaterloo.ca/"
    },
    {
        title: "BSc, Geomatics",
        date: "2014.9 - 2016.6",
        desc: "",
        org: "University of Waterloo",
        loc: "Waterloo, ON, CA",
        href: "https://uwaterloo.ca/"
    },
    {
        title: "BSc, Geographical Information System",
        date: "2012.9 - 2014.6",
        desc: "",
        org: "Wuhan University",
        loc: "Wuhan, Hubei, CN"
    }
];

class Timeline extends React.Component<Object, Object> {

    animateFromTo = (elem: any, direction: number = -1) => {
        const offset = 1000;
        let x = 0;
        let y = direction * offset;
        
        direction = direction | 1;
        
        if (elem.classList.contains("slide_from_left")) {
            x = -offset;
            y = 0;
        } else if (elem.classList.contains("slide_from_right")) {
            x = offset;
            y = 0;
        }
        
        gsap.fromTo(
            elem,
            { x: x, y: y, autoAlpha: 0 },
            {
                duration: 1.25,
                x: 0,
                y: 0,
                autoAlpha: 1,
                ease: "expo",
                overwrite: "auto",
            }
        );
    };

    hide = (elem: any) => {
        gsap.set(elem, { autoAlpha: 0 });
    };

    componentDidMount() {
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray(".animate").forEach((elem: any) => {
            this.hide(elem);

            ScrollTrigger.create({
                trigger: elem,
                onEnter: () => {
                    this.animateFromTo(elem);
                },
                // onEnterBack: () => {
                //     this.animateFromTo(elem, -1);
                // },
                // onLeave: () => {
                //     this.hide(elem);
                // },
            });
        });
    }

    animateDirection = (index: number) => {
        return `animate ${index % 2 === 0 ? "slide_from_left" : "slide_from_right"}`
    }

    render() {
        return (
            <div className="timeline">
                <ul>
                    {timelineData.map((data, index) => {
                        return (
                            <li key={index}>
                                <div className={`content ${this.animateDirection(index)}`}>
                                    <h3>{data.title}</h3>
                                    <p>{data.desc}</p>
                                    <hr />
                                    <p><a href={data.href}>{data.org}</a></p>
                                    <p>{data.loc}</p>
                                </div>
                                <div className={`time ${this.animateDirection(index^1)}`}>
                                    <h4>{data.date}</h4>
                                </div>
                            </li>
                        )
                    })}
                    <div style={{clear: "both"}}></div>
                </ul>
            </div>
        )
    }
}

export default Timeline;