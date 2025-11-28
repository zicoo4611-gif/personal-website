import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './components.css';

const Header: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [dark, setDark] = useState(false);

    useEffect(() => {
        // initialize theme from localStorage or prefers-color-scheme
        const saved = localStorage.getItem('theme');
        if (saved) {
            const isDark = saved === 'dark';
            setDark(isDark);
            document.documentElement.setAttribute('data-theme', isDark ? 'dark' : '');
        } else {
            const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            setDark(prefersDark);
            if (prefersDark) document.documentElement.setAttribute('data-theme', 'dark');
        }
    }, []);

    const toggleTheme = () => {
        const next = !dark;
        setDark(next);
        if (next) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <header className="header">
            <div className="container header-inner">
                <div className="logo">
                    <Link to="/" className="brand">المصمم العربي</Link>
                </div>
                <div style={{display: 'flex', gap: '12px', alignItems: 'center'}}>
                    <button className="theme-toggle" onClick={toggleTheme} aria-pressed={dark} aria-label="تبديل الوضع">
                        <span className="dot" aria-hidden></span>
                        <span style={{fontSize:12, color:'var(--muted)'}}>{dark ? 'داكن' : 'فاتح'}</span>
                    </button>
                    <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="قائمة">☰</button>
                </div>
                <nav className={`nav ${open ? 'open' : ''}`} aria-label="التنقل الرئيسي">
                    <ul className="nav-links">
                        <li><Link to="/">الرئيسية</Link></li>
                        <li><a href="#about">عنّي</a></li>
                        <li><a href="#projects">المشاريع</a></li>
                        <li><a href="#contact">تواصل</a></li>
                        <li><Link to="/resume">السيرة</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;