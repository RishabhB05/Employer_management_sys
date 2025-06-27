import React, { useState, useEffect } from 'react';
import '../../../styles.css';
import { Meteors } from "@/components/magicui/meteors";

const LoginModal = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 3 && !isOpen) {
        setIsOpen(true);
      }
    };

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleLogin(email.trim().toLowerCase(), password.trim());
    setEmail("");
    setPassword("");
  };

  return (
    <>  
      <div className="min-h-screen w-full relative"  style={{ 
    backgroundImage: "url('https://i.pinimg.com/736x/42/79/9f/42799f8abbe0d68dd96a7694759883b2.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>
        {/* Full Screen Meteors Background */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <Meteors 
            number={150} 
            minDuration={5}
            maxDuration={15}
            className="[&>span]:size-1.5 [&>span]:bg-white/90"
          />
        </div>

        {/* Workflow Logo - Top Left Corner */}
        <div className="absolute top-6 left-6 z-50">
          <h1 className="text-2xl font-bold text-white tracking-tight">
            <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              Workflow
            </span>
          </h1>
        </div>

        {/* Scroll Down Prompt */}
        {!isOpen && (
          <div className="scroll-down">
            <div className="text-center px-6 py-8 rounded-2xl bg-gradient-to-br from-blue-900/30 to-purple-900/20 backdrop-blur-lg border border-white/10 shadow-2xl">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-200">
                EMPLOYER MANAGEMENT SYSTEM
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 font-medium">
                Streamline Your Workforce Management
              </p>
              
              <div className="flex justify-center animate-bounce">
                <img
                  src="/workflow-logo.png"
                  alt="Workflow Logo"
                  className="w-24 h-24 opacity-90 hover:opacity-100 transition-opacity"
                  style={{ objectFit: 'contain' }}
                />
              </div>

              <p className="mt-8 text-blue-100/80 text-sm font-mono tracking-wider border-t border-white/10 pt-4">
                Developed by <span className="text-white font-semibold">Rishabh Baruah</span> • <span className="text-blue-300 animate-pulse">Scroll to continue</span>
              </p>
            </div>
          </div>
        )}

        {/* Modal */}
        <div className={`modal ${isOpen ? 'is-open' : ''}`}>
          <div className="modal-container">
            <div className="modal-left">
              <h1 className="modal-title">Welcome!</h1>
              <p className="modal-desc">Loggin with your employer credentials</p>
              
              <form onSubmit={handleSubmit}>
                <div className="input-block">
                  <label htmlFor="email" className="input-label">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>
                
                <div className="input-block">
                  <label htmlFor="password" className="input-label">Password</label>
                  <input 
                    type="password" 
                    id="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                </div>
                
                <div className="modal-buttons">
                  <a href="#">Forgot your password?</a>
                  <button type="submit" className="input-button">Login</button>
                </div>
              </form>
              
              <p className="sign-up">Don't have an account? <a href="#">Sign up now</a></p>
            </div>
            
            <div className="modal-right">
              <img 
                src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Decorative background" 
              />
            </div>
            
            <button 
              className="icon-button close-button"
              onClick={() => setIsOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                <path d="M 25 3 C 12.86158 3 3 12.86158 3 25 C 3 37.13842 12.86158 47 25 47 C 37.13842 47 47 37.13842 47 25 C 47 12.86158 37.13842 3 25 3 z M 25 5 C 36.05754 5 45 13.94246 45 25 C 45 36.05754 36.05754 45 25 45 C 13.94246 45 5 36.05754 5 25 C 5 13.94246 13.94246 5 25 5 z M 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.980469 15.990234 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 z"/>
              </svg>
            </button>
          </div>
          
          <button 
            className="modal-button"
            onClick={() => setIsOpen(true)}
          >
            Click here to login
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginModal;