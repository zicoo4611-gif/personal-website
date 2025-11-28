import React from 'react';
import { Link } from 'react-router-dom';

const Social: React.FC = () => {
    const items = [
        { title: 'قالب منشور ترويجي', desc: 'تصميم جاهز بمقاسات السوشال.', img: '/images/project1.svg' },
        { title: 'ستوري تفاعلي', desc: 'ستوري جذاب يظهر العروض.', img: '/images/project2.svg' }
    ];

    return (
        <div className="container" style={{padding:'40px 20px'}}>
            <Link to="/" style={{color:'var(--muted)'}}>← العودة</Link>
            <h1 style={{marginTop:12}}>تصاميم السوشال ميديا</h1>
            <p className="lead">مجموعة من التصاميم المهية لمنصات التواصل الاجتماعي.</p>

            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:20, marginTop:20}}>
                {items.map((it, i) => (
                    <article key={i} className="project-card">
                        <div className="project-thumb"><img src={it.img} alt={it.title} style={{width:'100%', height:'100%', objectFit:'cover'}}/></div>
                        <div className="project-body">
                            <h3>{it.title}</h3>
                            <p>{it.desc}</p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default Social;
