import React from 'react';
import { Link } from 'react-router-dom';

type Category = { id: string; title: string; description: string; image: string };

const categories: Category[] = [
    { id: 'social', title: 'تصاميم السوشال ميديا', description: 'صور ومنشورات ومحتوى بصري مخصص للسوشال ميديا.', image: '/images/project1.svg' },
    { id: 'web', title: 'تصاميم مواقع الويب', description: 'تصميم صفحات ومكونات مواقع احترافية وتجربة مستخدم ممتازة.', image: '/images/project2.svg' },
    { id: 'brand', title: 'تصاميم الهوية البصرية', description: 'شعارات وبطاقة عمال ودليل هوية متكامل للعلامات التجارية.', image: '/images/project3.svg' }
];

const Projects: React.FC = () => {
    return (
        <section className="projects container" id="projects">
            <h2>قسام العمال</h2>
            <p className="lead">اختر القسم للاطلاع على عمال مخصّصة لكل نوع وتصاميم تفصيلية.</p>
            <div className="projects-grid">
                {categories.map((c) => (
                    <article className="project-card fade-up" key={c.id}>
                        <div className="project-thumb">
                            <img src={c.image} alt={c.title} style={{width:'100%', height:'100%', objectFit:'cover'}} />
                        </div>
                        <div className="project-body">
                            <h3>{c.title}</h3>
                            <p>{c.description}</p>
                            <div style={{marginTop:'auto', display:'flex', gap:12}}>
                                <Link className="btn btn-primary btn-sm" to={`/projects/${c.id}`}>عرض القسم</Link>
                                <a className="btn btn-outline btn-sm" href="#contact">تواصل</a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Projects;