import React from 'react';
import { Link } from 'react-router-dom';

const Web: React.FC = () => {
    const items = [
        { title: 'واجهة صفحة منتجات', desc: 'تصميم صفحة منتجات واضحة وسريعة.', img: '/images/project2.svg' },
        { title: 'لوحة تحكم', desc: 'تصميم لوحة تحكم بسيطة وفعالة.', img: '/images/project3.svg' }
    ];

    return (
        <div className="container" style={{padding:'40px 20px'}}>
            <Link to="/" style={{color:'var(--muted)'}}>← العودة</Link>
            <h1 style={{marginTop:12}}>تصاميم مواقع الويب</h1>
            <p className="lead">نماذج صفحات ومكونات قابلة للاستخدام على الويب.</p>

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

export default Web;
