import React, { useState } from 'react';
import './TopHelpers.css';

const helpers = [
  {
    id: 1,
    name: 'Satyam Sharma',
    level: 'Mentor Lv. 2',
    solved: 54,
    bio: 'Expert in DSA and Open Source. Loves to help juniors and guide them in coding interviews.',
    expertise: ['DSA', 'Open Source', 'Coding Interviews'],
    rating: 4.9,
    avatar: '👨‍💻',
    badges: ['Top Mentor', 'DSA Expert', 'Open Source Contributor']
  },
  {
    id: 2,
    name: 'Ananya Jain',
    level: 'Helpful Peer',
    solved: 39,
    bio: 'Passionate about web development and always ready to clear doubts and share resources.',
    expertise: ['Web Development', 'React', 'JavaScript'],
    rating: 4.7,
    avatar: '👩‍💻',
    badges: ['Web Dev Expert', 'React Guru', 'Helpful Peer']
  },
  {
    id: 3,
    name: 'Rohit Yadav',
    level: 'Mentor Lv. 1',
    solved: 42,
    bio: 'Enjoys teaching algorithms and helping others understand complex concepts easily.',
    expertise: ['Algorithms', 'Data Structures', 'Problem Solving'],
    rating: 4.8,
    avatar: '👨‍🎓',
    badges: ['Algorithm Expert', 'Problem Solver', 'Great Teacher']
  },
  {
    id: 4,
    name: 'Priya Patel',
    level: 'Mentor Lv. 2',
    solved: 67,
    bio: 'Full-stack developer with expertise in modern web technologies and cloud computing.',
    expertise: ['Full Stack', 'Cloud Computing', 'DevOps'],
    rating: 4.9,
    avatar: '👩‍🔬',
    badges: ['Full Stack Expert', 'Cloud Specialist', 'Senior Mentor']
  },
  {
    id: 5,
    name: 'Amit Kumar',
    level: 'Helpful Peer',
    solved: 28,
    bio: 'Mobile app developer passionate about Flutter and helping others learn mobile development.',
    expertise: ['Flutter', 'Mobile Development', 'UI/UX'],
    rating: 4.6,
    avatar: '👨‍📱',
    badges: ['Mobile Expert', 'Flutter Developer', 'UI Designer']
  }
];

export function TopHelpers() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleOpen = (helper) => {
    setSelected(helper);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelected(null);
  };

  return (
    <div className="top-helpers-section">
      <div className="section-header">
        <h2 className="section-title">🌟 Top Helpers</h2>
      </div>

      <div className="carousel-container">
        <div className="carousel-track">
          {helpers.map((helper) => (
            <div
              className="helper-card"
              key={helper.id}
              onClick={() => handleOpen(helper)}
            >
              <div className="helper-header">
                <div className="helper-avatar">
                  <span className="avatar-emoji">{helper.avatar}</span>
                  <div className="level-badge">{helper.level}</div>
                </div>
                <div className="helper-info">
                  <h3 className="helper-name">{helper.name}</h3>
                  <div className="helper-rating">
                    <span className="stars">⭐⭐⭐⭐⭐</span>
                    <span className="rating-text">{helper.rating}</span>
                  </div>
                </div>
              </div>

              <div className="helper-stats">
                <div className="stat-item">
                  <span className="stat-icon">🏆</span>
                  <span className="stat-value">{helper.solved}</span>
                  <span className="stat-label">Solved</span>
                </div>
              </div>

              <div className="helper-expertise">
                <h4>Expertise:</h4>
                <div className="expertise-tags">
                  {helper.expertise.map((skill, idx) => (
                    <span key={idx} className="expertise-tag">{skill}</span>
                  ))}
                </div>
              </div>

      

              <div className="helper-bio">
                <p>{helper.bio}</p>
              </div>

              <button className="view-profile-btn">
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>

      {open && selected && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content helper-modal" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={handleClose} aria-label="Close">
              &times;
            </button>
            
            <div className="modal-header">
              <div className="modal-avatar">
                <span className="avatar-emoji large">{selected.avatar}</span>
              </div>
              <div className="modal-info">
                <h2>{selected.name}</h2>
                <p className="modal-level">{selected.level}</p>
                <div className="modal-rating">
                  <span className="stars">⭐⭐⭐⭐⭐</span>
                  <span className="rating-text">{selected.rating} Rating</span>
                </div>
              </div>
            </div>

            <div className="modal-stats">
              <div className="stat-card">
                <span className="stat-icon">🏆</span>
                <div className="stat-details">
                  <span className="stat-value">{selected.solved}</span>
                  <span className="stat-label">Questions Solved</span>
                </div>
              </div>
            </div>

            <div className="modal-expertise">
              <h3>Expertise</h3>
              <div className="expertise-tags">
                {selected.expertise.map((skill, idx) => (
                  <span key={idx} className="expertise-tag">{skill}</span>
                ))}
              </div>
            </div>

        

            <div className="modal-bio">
              <h3>About</h3>
              <p>{selected.bio}</p>
            </div>

            <div className="modal-actions">
              <button className="contact-btn">Contact Helper</button>
              <button className="view-solutions-btn">View Solutions</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}