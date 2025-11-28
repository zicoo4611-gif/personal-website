import React, { useEffect, useRef, useState } from 'react';

type Slide = { image: string; title?: string; caption?: string };

const slides: Slide[] = [
    { image: '/images/project1.svg', title: 'قالب منشور ترويجي' },
    { image: '/images/project2.svg', title: 'واجهة صفحة منتجات' },
    { image: '/images/project3.svg', title: 'شعار وهوية بصرية' }
];

const Slider: React.FC = () => {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef<number | null>(null);

    useEffect(() => {
        start();
        return () => stop();
    }, [index]);

    const start = () => {
        stop();
        // autoplay every 3.5s
        // @ts-ignore
        timeoutRef.current = window.setTimeout(() => setIndex((index + 1) % slides.length), 3500);
    };

    const stop = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current as number);
            timeoutRef.current = null;
        }
    };

    const go = (i: number) => {
        setIndex(i % slides.length);
    };

    const next = () => setIndex((index + 1) % slides.length);
    const prev = () => setIndex((index - 1 + slides.length) % slides.length);

    return (
        <div className="slider" onMouseEnter={stop} onMouseLeave={start}>
            <div className="slider-inner">
                {slides.map((s, i) => (
                    <div key={i} className={`slide ${i === index ? 'active' : ''}`} aria-hidden={i !== index}>
                        <img src={s.image} alt={s.title || `Slide ${i + 1}`} />
                        <div className="slide-caption">
                            <h4>{s.title}</h4>
                        </div>
                    </div>
                ))}
            </div>

            <button className="slider-btn prev" onClick={prev} aria-label="السابق">‹</button>
            <button className="slider-btn next" onClick={next} aria-label="التالي">›</button>

            <div className="slider-dots">
                {slides.map((_, i) => (
                    <button key={i} className={`dot ${i === index ? 'active' : ''}`} onClick={() => go(i)} aria-label={`عرض الشريحة ${i + 1}`}></button>
                ))}
            </div>
        </div>
    );
};

export default Slider;
