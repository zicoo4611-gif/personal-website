import React from 'react';
import './components.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container footer-inner">
                <p>© {new Date().getFullYear()} — جميع الحقوق محفوظة</p>
                <ul className="footer-links">
                    <li><a href="#">شروط الاستخدام</a></li>
                    <li><a href="#">سياسة الخصوصية</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;