import React from 'react';

const Contact: React.FC = () => {
    return (
        <section className="contact container" id="contact">
            <h2>تواصل معي</h2>
            <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('تم إرسال النموذج (محاكاة)'); }}>
                <label htmlFor="name">الاسم</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">البريد الإلكتروني</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">الرسالة</label>
                <textarea id="message" name="message" rows={6} required></textarea>

                <button type="submit" className="btn btn-primary">رسل</button>
            </form>
        </section>
    );
};

export default Contact;