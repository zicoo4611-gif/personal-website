import React from 'react';
import { Link } from 'react-router-dom';

const Brand: React.FC = () => {
    const items = [
        { title: 'شعار متكامل', desc: 'شعار مع دليل لوان وخطوط.', img: '/images/project3.svg' },
        { title: 'بطاقة عمال', desc: 'تصميم هوية صغيرة للطباعة.', img: '/images/project1.svg' }
    ];

    return (
        <div className="container" style={{padding:'40px 20px'}}>
            <Link to="/" style={{color:'var(--muted)'}}>← العودة</Link>
            <h1 style={{marginTop:12}}>تصاميم الهوية البصرية</h1>
            <p className="lead">عمال العلامات التجارية والهوية البصرية.</p>

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

export default Brand;
