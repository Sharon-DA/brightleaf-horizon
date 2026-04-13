"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './onboarding.module.css';

const slides = [
  {
    id: 1,
    leftTitle: "FIND YOUR\nDREAM JOB",
    rightTitle: "WELCOME.",
    description: "CONNECT WITH TOP EMPLOYERS ACTIVELY RECRUITING FROM OUR CAMPUS. BROWSE INTERNSHIPS, PART-TIME ROLES, AND GRADUATE POSITIONS.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.icon}>
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    )
  },
  {
    id: 2,
    leftTitle: "BUILD YOUR\nNETWORK",
    rightTitle: "CONNECT.",
    description: "ENGAGE WITH ALUMNI AND INDUSTRY PROFESSIONALS. JOIN GROUPS BASED ON YOUR MAJOR AND DISCOVER CAREER PATHS THROUGH SHARED EXPERIENCES.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.icon}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round"></path>
        <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    )
  },
  {
    id: 3,
    leftTitle: "REACH YOUR\nGOALS",
    rightTitle: "ACHIEVE.",
    description: "SET YOUR CAREER TRAJECTORY AND ACCESS EXCLUSIVE RESOURCES TO PREPARE YOU FOR THE PROFESSIONAL WORLD. START YOUR JOURNEY TODAY.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.icon}>
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" strokeLinecap="round" strokeLinejoin="round"></path>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
    )
  }
];

export default function Onboarding() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const slide = slides[currentSlide];

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* Left Pane */}
        <div className={styles.leftPane}>
          {/* Decorative background lines */}
          <svg className={styles.decorativeBg} viewBox="0 0 400 600" preserveAspectRatio="none">
             <path d="M-50 200 Q 150 100 250 300 T 450 400" stroke="#a3a3a3" strokeWidth="3" fill="none"/>
             <path d="M100 600 Q 200 400 400 450" stroke="#a3a3a3" strokeWidth="3" fill="none"/>
             <circle cx="200" cy="80" r="150" stroke="#a3a3a3" strokeWidth="3" fill="none" />
          </svg>

          <button 
            type="button" 
            className={styles.backButton} 
            onClick={() => {
              if (currentSlide > 0) {
                  prevSlide();
              } else {
                  window.location.href = "/";
              }
            }}
            aria-label="Go Back"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className={styles.iconBox}>
            {slide.icon}
          </div>
          
          <h1 className={styles.leftTitle}>
            {slide.leftTitle.split('\n').map((line, i) => (
              <span key={i}>{line}<br/></span>
            ))}
          </h1>
        </div>

        {/* Right Pane */}
        <div className={styles.rightPane}>
          <div className={styles.contentWrapper}>
            <h2 className={styles.rightTitle}>{slide.rightTitle}</h2>
            <p className={styles.description}>{slide.description}</p>
            
            <div className={styles.buttonContainer}>
              {currentSlide < slides.length - 1 ? (
                <button onClick={nextSlide} className={styles.nextButton}>
                  NEXT 
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.nextIcon}>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              ) : (
                <Link href="/" className={styles.nextButton}>
                  GET STARTED
                </Link>
              )}
            </div>
            
            <div className={styles.pagination}>
              {slides.map((_, index) => (
                <div 
                  key={index} 
                  className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
