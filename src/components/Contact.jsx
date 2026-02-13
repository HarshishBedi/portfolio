import React from 'react'
import './Contact.css'

export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact-container">
        <h2 className="section-title">
          <span className="section-prefix">03.</span> INIT_CONTACT
        </h2>
        
        <div className="contact-layout">
          <div className="contact-terminal">
            <div className="terminal-header">User@System:~/messages</div>
            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="terminal-form">
              <div className="terminal-line">
                <span className="prompt">$</span>
                <input type="text" name="name" placeholder="enter_name" required className="terminal-input" />
              </div>
              <div className="terminal-line">
                <span className="prompt">$</span>
                <input type="email" name="email" placeholder="enter_email" required className="terminal-input" />
              </div>
              <div className="terminal-line message-line">
                <span className="prompt">$</span>
                <textarea name="message" placeholder="write_message..." required rows="4" className="terminal-input"></textarea>
              </div>
              <button type="submit" className="terminal-submit">[ EXECUTE_SEND ]</button>
            </form>
          </div>

          <div className="contact-meta">
            <h3>Alternative Channels</h3>
            <ul className="meta-list">
              <li><a href="mailto:harshishsbedi@gmail.com">EMAIL :: harshishsbedi@gmail.com</a></li>
              <li><a href="tel:+17323222705">VOICE :: +1 (732) 322-2705</a></li>
              <li><a href="https://github.com/harshishbedi">GIT :: github.com/harshishbedi</a></li>
              <li><a href="https://linkedin.com/in/harshishbedi">LINK :: linkedin.com/in/harshishbedi</a></li>
            </ul>
          </div>
        </div>
        
        <footer className="footer-bar">
          <span>SYSTEM STATUS: OPERATIONAL</span>
          <span>© {new Date().getFullYear()} HSB_ENGINEERING</span>
        </footer>
      </div>
    </section>
  )
}
