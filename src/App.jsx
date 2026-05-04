import React, { useState, useEffect, useRef } from 'react';

const globalStyles = `
  :root {
    --gold: #c9a84c;
    --gold-light: #e8c87a;
    --gold-dim: #8b6f35;
    --bg: #080a0f;
    --bg2: #0d1018;
    --bg3: #111520;
    --surface: #161b27;
    --surface2: #1e2535;
    --text: #e8e4dc;
    --text-muted: #8a8070;
    --text-dim: #5a5548;
    --white: #f8f5ef;
    --accent: #2a6b8c;
    --radius: 2px;
  }

  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'DM Sans', sans-serif;
    font-weight: 300;
    overflow-x: hidden;
    cursor: none;
  }

  /* === CUSTOM CURSOR === */
  #cursor {
    width: 12px; height: 12px;
    background: var(--gold);
    border-radius: 50%;
    position: fixed; pointer-events: none;
    z-index: 9999; mix-blend-mode: difference;
    transition: transform 0.15s ease, width 0.3s, height 0.3s;
    transform: translate(-50%, -50%);
  }
  #cursor-ring {
    width: 40px; height: 40px;
    border: 1px solid rgba(201,168,76,0.5);
    border-radius: 50%;
    position: fixed; pointer-events: none;
    z-index: 9998;
    transition: transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94), width 0.3s, height 0.3s, border-color 0.3s;
    transform: translate(-50%, -50%);
  }
  body:has(a:hover) #cursor, body:has(button:hover) #cursor { transform: translate(-50%,-50%) scale(2); }
  body:has(a:hover) #cursor-ring, body:has(button:hover) #cursor-ring { width: 60px; height: 60px; border-color: var(--gold); }

  /* === CANVAS BACKGROUND === */
  #particle-canvas {
    position: fixed; top: 0; left: 0;
    width: 100%; height: 100%;
    z-index: 0; pointer-events: none;
    opacity: 0.4;
  }

  /* === SCROLLBAR === */
  ::-webkit-scrollbar { width: 3px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: var(--gold); }

  /* === NAV === */
  nav {
    position: fixed; top: 0; left: 0; right: 0;
    z-index: 1000;
    padding: 0 5%;
    display: flex; align-items: center; justify-content: space-between;
    height: 80px;
    transition: background 0.5s, backdrop-filter 0.5s, border-bottom 0.5s;
  }
  nav.scrolled {
    background: rgba(8,10,15,0.92);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(201,168,76,0.15);
  }
  .nav-logo {
    font-family: 'Cinzel', serif;
    font-size: 1.35rem;
    font-weight: 600;
    color: var(--gold);
    letter-spacing: 0.2em;
    text-decoration: none;
  }
  .nav-logo span { color: var(--text); font-weight: 400; }
  .nav-links { display: flex; gap: 2.5rem; list-style: none; }
  .nav-links a {
    color: var(--text-muted);
    text-decoration: none;
    font-size: 0.78rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-weight: 500;
    transition: color 0.3s;
    position: relative;
  }
  .nav-links a::after {
    content: ''; position: absolute; bottom: -4px; left: 0;
    width: 0; height: 1px; background: var(--gold);
    transition: width 0.3s ease;
  }
  .nav-links a:hover { color: var(--gold); }
  .nav-links a:hover::after { width: 100%; }
  .nav-cta {
    background: transparent;
    border: 1px solid var(--gold);
    color: var(--gold);
    padding: 0.55rem 1.5rem;
    font-size: 0.72rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    font-family: 'DM Sans', sans-serif;
    cursor: none;
    transition: background 0.3s, color 0.3s;
  }
  .nav-cta:hover { background: var(--gold); color: var(--bg); }
  .hamburger { display: none; flex-direction: column; gap: 5px; cursor: none; }
  .hamburger span { display: block; width: 24px; height: 1px; background: var(--gold); transition: all 0.3s; }

  /* === HERO === */
  #hero {
    position: relative; z-index: 1;
    min-height: 100vh;
    display: flex; align-items: center;
    overflow: hidden;
  }
  .hero-bg-wrap {
    position: absolute; inset: 0; overflow: hidden;
  }
  .hero-bg {
    position: absolute; inset: -5%;
    background-image: url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=80');
    background-size: cover;
    background-position: center;
    filter: brightness(0.35) contrast(1.1);
    animation: cinematicZoom 20s ease-in-out infinite alternate;
  }
  .hero-bg::after {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(160deg, rgba(8,10,15,0.85) 0%, rgba(13,18,32,0.4) 50%, #080a0f 100%);
  }
  @keyframes cinematicZoom {
    0% { transform: scale(1); }
    100% { transform: scale(1.08); }
  }
  .hero-grid-overlay {
    position: absolute; inset: 0;
    background-image: 
      linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px);
    background-size: 80px 80px;
    mask-image: radial-gradient(ellipse at center, black 30%, transparent 80%);
  }
  .hero-content {
    position: relative; z-index: 2;
    padding: 0 5%;
    max-width: 900px;
    padding-top: 100px; /* Safely clear the 80px navbar on short screens */
  }
  .hero-eyebrow {
    display: flex; align-items: center; gap: 1rem;
    margin-bottom: 2rem;
    opacity: 0; transform: translateY(20px);
    animation: fadeUp 0.8s 0.3s forwards;
  }
  .hero-eyebrow-line { width: 50px; height: 1px; background: var(--gold); }
  .hero-eyebrow-text {
    font-size: 0.72rem; letter-spacing: 0.25em;
    text-transform: uppercase; color: var(--gold);
    font-weight: 500;
  }
  .hero-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(3.5rem, 8vw, 8rem);
    font-weight: 300;
    line-height: 0.95;
    color: var(--white);
    margin-bottom: 2rem;
    opacity: 0; transform: translateY(30px);
    animation: fadeUp 1s 0.5s forwards;
  }
  .hero-title em {
    font-style: italic;
    color: var(--gold);
    display: block;
  }
  .hero-subtitle {
    font-size: 1.05rem;
    color: var(--text-muted);
    max-width: 480px;
    line-height: 1.8;
    margin-bottom: 3rem;
    opacity: 0; transform: translateY(20px);
    animation: fadeUp 0.8s 0.7s forwards;
  }
  .hero-actions {
    display: flex; gap: 1.5rem; align-items: center;
    opacity: 0; transform: translateY(20px);
    animation: fadeUp 0.8s 0.9s forwards;
  }
  .btn-primary {
    background: var(--gold);
    color: var(--bg);
    border: none;
    padding: 1rem 2.5rem;
    font-size: 0.78rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    cursor: none;
    text-decoration: none;
    display: inline-block;
    position: relative; overflow: hidden;
    transition: transform 0.3s;
  }
  .btn-primary::before {
    content: ''; position: absolute; inset: 0;
    background: rgba(255,255,255,0.15);
    transform: translateX(-100%); transition: transform 0.4s;
  }
  .btn-primary:hover::before { transform: translateX(0); }
  .btn-secondary {
    color: var(--text);
    text-decoration: none;
    font-size: 0.78rem;
    letter-spacing: 0.1em;
    display: flex; align-items: center; gap: 0.6rem;
    transition: color 0.3s;
  }
  .btn-secondary:hover { color: var(--gold); }
  .btn-secondary .arrow {
    width: 32px; height: 32px;
    border: 1px solid currentColor;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 0.8rem;
    transition: transform 0.3s;
  }
  .btn-secondary:hover .arrow { transform: rotate(45deg); }

  .hero-stats {
    position: absolute; right: 5%; bottom: 10%;
    display: flex; flex-direction: column; gap: 2rem;
    opacity: 0; animation: fadeLeft 0.8s 1.2s forwards;
    z-index: 2;
  }
  .hero-stat { text-align: right; }
  .hero-stat-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.8rem; font-weight: 300;
    color: var(--gold); line-height: 1;
  }
  .hero-stat-label {
    font-size: 0.65rem; letter-spacing: 0.2em;
    text-transform: uppercase; color: var(--text-dim);
    margin-top: 0.3rem;
  }



  /* === SECTION COMMON === */
  section { position: relative; z-index: 1; }
  .section-header {
    text-align: center;
    margin-bottom: 5rem;
  }
  .section-tag {
    display: inline-flex; align-items: center; gap: 1rem;
    font-size: 0.7rem; letter-spacing: 0.25em;
    text-transform: uppercase; color: var(--gold);
    font-weight: 500; margin-bottom: 1.5rem;
  }
  .section-tag::before, .section-tag::after {
    content: ''; width: 30px; height: 1px; background: var(--gold-dim);
  }
  .section-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    font-weight: 300;
    color: var(--white);
    line-height: 1.1;
  }
  .section-title em { font-style: italic; color: var(--gold); }
  .section-desc {
    margin-top: 1.5rem;
    color: var(--text-muted);
    font-size: 1rem;
    max-width: 550px;
    margin-inline: auto;
    line-height: 1.8;
  }

  /* === SEARCH BAR === */
  #search-section {
    padding: 3rem 5% 0;
    margin-bottom: 4rem;
    position: relative; z-index: 10;
  }
  .search-box {
    background: var(--surface);
    border: 1px solid rgba(201,168,76,0.2);
    padding: 2rem 2.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr auto;
    gap: 1.5rem;
    align-items: end;
    box-shadow: 0 40px 80px rgba(0,0,0,0.5);
  }
  .search-field label {
    display: block;
    font-size: 0.65rem; letter-spacing: 0.2em;
    text-transform: uppercase; color: var(--gold);
    margin-bottom: 0.6rem;
  }
  .search-field select, .search-field input {
    width: 100%;
    background: transparent;
    border: none; border-bottom: 1px solid rgba(255,255,255,0.1);
    color: var(--text);
    font-size: 0.95rem;
    font-family: 'DM Sans', sans-serif;
    padding: 0.5rem 0;
    outline: none;
    appearance: none;
    cursor: none;
    transition: border-color 0.3s;
  }
  .search-field select:focus, .search-field input:focus { border-bottom-color: var(--gold); }
  .search-field select option { background: var(--surface); }
  .search-btn {
    background: var(--gold);
    border: none; color: var(--bg);
    padding: 0.85rem 2rem;
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    cursor: none;
    white-space: nowrap;
    transition: background 0.3s, transform 0.2s;
  }
  .search-btn:hover { background: var(--gold-light); transform: translateY(-1px); }

  /* === FEATURED PROPERTIES === */
  #properties {
    padding: 8rem 5%;
  }
  .properties-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  .property-card {
    background: var(--surface);
    border: 1px solid rgba(255,255,255,0.04);
    position: relative;
    overflow: hidden;
    transition: transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94), border-color 0.3s, box-shadow 0.5s;
    opacity: 0; transform: translateY(40px);
  }
  .property-card.visible { opacity: 1; transform: translateY(0); }
  .property-card:hover {
    transform: translateY(-8px);
    border-color: rgba(201,168,76,0.3);
    box-shadow: 0 30px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(201,168,76,0.1);
  }
  .property-card.featured {
    grid-column: span 2; grid-row: span 1;
  }
  .property-img-wrap {
    position: relative; overflow: hidden;
    height: 280px;
  }
  .property-card.featured .property-img-wrap { height: 380px; }
  .property-img {
    width: 100%; height: 100%;
    object-fit: cover;
    transition: transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94);
  }
  .property-card:hover .property-img { transform: scale(1.08); }
  .property-img-bg {
    width: 100%; height: 100%;
    transition: transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94);
    position: relative;
  }
  .property-card:hover .property-img-bg { transform: scale(1.08); }
  .property-badge {
    position: absolute; top: 1.2rem; left: 1.2rem;
    background: var(--gold);
    color: var(--bg);
    font-size: 0.62rem; letter-spacing: 0.15em;
    text-transform: uppercase;
    padding: 0.3rem 0.8rem;
    font-weight: 500;
  }
  .property-badge.new { background: #2a8c6b; }
  .property-badge.sold { background: #8c2a2a; }
  .property-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(8,10,15,0.9) 0%, transparent 50%);
  }
  .property-quick-view {
    position: absolute; bottom: -50px; left: 50%; transform: translateX(-50%);
    background: rgba(201,168,76,0.95);
    color: var(--bg);
    padding: 0.6rem 1.5rem;
    font-size: 0.7rem; letter-spacing: 0.15em;
    text-transform: uppercase;
    white-space: nowrap;
    transition: bottom 0.4s cubic-bezier(0.25,0.46,0.45,0.94);
    cursor: none;
  }
  .property-card:hover .property-quick-view { bottom: 1.5rem; }
  .property-body { padding: 1.5rem; }
  .property-type {
    font-size: 0.65rem; letter-spacing: 0.2em;
    text-transform: uppercase; color: var(--gold-dim);
    margin-bottom: 0.5rem;
  }
  .property-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.4rem; font-weight: 400;
    color: var(--white); margin-bottom: 0.4rem;
  }
  .property-location {
    font-size: 0.8rem; color: var(--text-muted);
    display: flex; align-items: center; gap: 0.3rem;
    margin-bottom: 1.2rem;
  }
  .property-features {
    display: flex; gap: 1.2rem;
    padding: 1rem 0;
    border-top: 1px solid rgba(255,255,255,0.06);
    border-bottom: 1px solid rgba(255,255,255,0.06);
    margin-bottom: 1.2rem;
  }
  .property-feature {
    font-size: 0.75rem; color: var(--text-muted);
    display: flex; align-items: center; gap: 0.35rem;
  }
  .property-feature .icon { font-size: 0.9rem; }
  .property-footer {
    display: flex; justify-content: space-between; align-items: center;
  }
  .property-price {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.5rem; font-weight: 400;
    color: var(--gold);
  }
  .property-price small { font-size: 0.7rem; color: var(--text-dim); }
  .property-link {
    width: 36px; height: 36px;
    border: 1px solid rgba(201,168,76,0.3);
    display: flex; align-items: center; justify-content: center;
    color: var(--gold); font-size: 0.8rem;
    text-decoration: none;
    transition: background 0.3s, border-color 0.3s;
    cursor: none;
  }
  .property-link:hover { background: var(--gold); color: var(--bg); border-color: var(--gold); }

  /* === STATS MARQUEE === */
  #stats-bar {
    background: var(--surface);
    border-top: 1px solid rgba(201,168,76,0.15);
    border-bottom: 1px solid rgba(201,168,76,0.15);
    padding: 2rem 0;
    overflow: hidden;
  }
  .marquee-track {
    display: flex; gap: 5rem;
    animation: marqueeAnim 20s linear infinite;
    width: max-content;
  }
  @keyframes marqueeAnim { from{transform:translateX(0)} to{transform:translateX(-50%)} }
  .marquee-item {
    display: flex; align-items: center; gap: 2rem;
    white-space: nowrap;
  }
  .marquee-item .num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.8rem; color: var(--gold);
  }
  .marquee-item .label {
    font-size: 0.7rem; letter-spacing: 0.15em;
    text-transform: uppercase; color: var(--text-dim);
  }
  .marquee-dot { width: 4px; height: 4px; background: var(--gold-dim); border-radius: 50%; }

  /* === WHY US === */
  #why-us { padding: 8rem 5%; background: var(--bg2); }
  .why-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
  }
  .why-visual {
    position: relative;
  }
  .why-main-img {
    width: 100%; height: 550px;
    background: linear-gradient(135deg, var(--surface) 0%, var(--surface2) 100%);
    border: 1px solid rgba(201,168,76,0.15);
    position: relative; overflow: hidden;
    display: flex; align-items: center; justify-content: center;
  }
  .why-img-art {
    width: 100%; height: 100%;
    position: relative;
    background: 
      linear-gradient(135deg, rgba(201,168,76,0.05) 0%, transparent 50%),
      repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(201,168,76,0.02) 30px, rgba(201,168,76,0.02) 31px);
  }
  .why-img-art::before {
    content: '';
    position: absolute; inset: 15%;
    border: 1px solid rgba(201,168,76,0.2);
  }
  .why-img-art::after {
    content: 'LUMIÈRE';
    position: absolute; inset: 0;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Cinzel', serif;
    font-size: 4rem; letter-spacing: 0.5em;
    color: rgba(201,168,76,0.08);
    font-weight: 700;
  }
  .why-accent-card {
    position: absolute; bottom: -2rem; right: -2rem;
    background: var(--surface2);
    border: 1px solid rgba(201,168,76,0.25);
    padding: 1.8rem 2rem;
    width: 200px;
  }
  .why-accent-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 3rem; color: var(--gold); line-height: 1;
  }
  .why-accent-label {
    font-size: 0.7rem; letter-spacing: 0.15em;
    text-transform: uppercase; color: var(--text-muted);
    margin-top: 0.5rem; line-height: 1.5;
  }
  .why-content { padding-right: 2rem; }
  .why-features { margin-top: 3rem; display: flex; flex-direction: column; gap: 1.5rem; }
  .why-feature {
    display: flex; gap: 1.5rem;
    padding: 1.5rem;
    background: var(--surface);
    border: 1px solid rgba(255,255,255,0.04);
    border-left: 3px solid transparent;
    transition: border-left-color 0.3s, transform 0.3s;
    opacity: 0; transform: translateX(-20px);
  }
  .why-feature.visible { opacity: 1; transform: translateX(0); }
  .why-feature:hover { border-left-color: var(--gold); transform: translateX(5px); }
  .why-feature-icon {
    width: 44px; height: 44px; flex-shrink: 0;
    background: rgba(201,168,76,0.1);
    border: 1px solid rgba(201,168,76,0.2);
    display: flex; align-items: center; justify-content: center;
    font-size: 1.1rem;
  }
  .why-feature-text h4 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.1rem; color: var(--white);
    margin-bottom: 0.3rem;
  }
  .why-feature-text p { font-size: 0.85rem; color: var(--text-muted); line-height: 1.7; }

  /* === PROCESS === */
  #process { padding: 8rem 5%; }
  .process-steps {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
    margin-top: 5rem;
    position: relative;
  }
  .process-steps::before {
    content: '';
    position: absolute;
    top: 3rem; left: 12.5%; right: 12.5%;
    height: 1px;
    background: linear-gradient(to right, transparent, var(--gold-dim), var(--gold-dim), transparent);
    z-index: 0;
  }
  .process-step {
    padding: 0 2rem;
    text-align: center;
    position: relative; z-index: 1;
    opacity: 0; transform: translateY(30px);
    transition: all 0.6s ease;
  }
  .process-step.visible { opacity: 1; transform: translateY(0); }
  .process-num {
    width: 60px; height: 60px;
    background: var(--bg);
    border: 1px solid var(--gold);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 2rem;
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.3rem;
    color: var(--gold);
    position: relative;
    transition: background 0.3s;
  }
  .process-step:hover .process-num { background: var(--gold); color: var(--bg); }
  .process-step h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.2rem; color: var(--white);
    margin-bottom: 0.8rem;
  }
  .process-step p { font-size: 0.82rem; color: var(--text-muted); line-height: 1.7; }

  /* === TESTIMONIALS === */
  #testimonials { padding: 8rem 5%; background: var(--bg2); overflow: hidden; }
  .testimonials-track-wrap { position: relative; }
  .testimonials-track {
    --slide-pct: 50%;
    display: flex; gap: 2rem;
    transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94);
    transform: translateX(calc(var(--slide-pct) * -1 * var(--t-index) - var(--t-index) * 2rem));
  }
  .testimonial-card {
    min-width: calc(50% - 1rem);
    background: var(--surface);
    border: 1px solid rgba(255,255,255,0.05);
    padding: 2.5rem;
    position: relative;
    flex-shrink: 0;
  }
  .testimonial-card::before {
    content: '\\201C';
    font-family: 'Cormorant Garamond', serif;
    font-size: 6rem; color: rgba(201,168,76,0.12);
    position: absolute; top: 0.5rem; left: 1.5rem;
    line-height: 1;
  }
  .testimonial-text {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.15rem; font-style: italic;
    color: var(--text); line-height: 1.8;
    margin-bottom: 2rem;
    position: relative; z-index: 1;
  }
  .testimonial-author { display: flex; gap: 1rem; align-items: center; }
  .testimonial-avatar {
    width: 50px; height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--gold-dim), var(--surface2));
    border: 2px solid rgba(201,168,76,0.3);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Cinzel', serif;
    font-size: 0.9rem; color: var(--gold);
  }
  .testimonial-author-name {
    font-weight: 500; font-size: 0.9rem; color: var(--white);
  }
  .testimonial-author-role {
    font-size: 0.72rem; letter-spacing: 0.1em;
    color: var(--text-muted); margin-top: 0.2rem;
  }
  .testimonial-stars { color: var(--gold); font-size: 0.75rem; margin-bottom: 0.3rem; }
  .testimonials-nav {
    display: flex; gap: 1rem; justify-content: center;
    margin-top: 3rem;
  }
  .tslide-btn {
    width: 44px; height: 44px;
    border: 1px solid rgba(201,168,76,0.3);
    background: transparent;
    color: var(--gold);
    font-size: 1rem;
    display: flex; align-items: center; justify-content: center;
    cursor: none;
    transition: background 0.3s, border-color 0.3s;
  }
  .tslide-btn:hover { background: var(--gold); color: var(--bg); border-color: var(--gold); }

  /* === AGENTS === */
  #agents { padding: 8rem 5%; }
  .agents-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
  .agent-card {
    text-align: center;
    opacity: 0; transform: translateY(30px);
    transition: all 0.6s;
  }
  .agent-card.visible { opacity: 1; transform: translateY(0); }
  .agent-photo-wrap {
    position: relative; margin-bottom: 1.5rem;
    overflow: hidden;
  }
  .agent-photo {
    width: 100%; height: 280px;
    background: var(--surface);
    border: 1px solid rgba(201,168,76,0.1);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Cinzel', serif;
    font-size: 3rem; color: rgba(201,168,76,0.3);
    transition: border-color 0.3s;
    position: relative; overflow: hidden;
  }
  .agent-photo::after {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(201,168,76,0.1) 0%, transparent 50%);
    opacity: 0; transition: opacity 0.3s;
  }
  .agent-card:hover .agent-photo { border-color: rgba(201,168,76,0.4); }
  .agent-card:hover .agent-photo::after { opacity: 1; }
  .agent-social {
    position: absolute; bottom: -50px; left: 0; right: 0;
    display: flex; justify-content: center; gap: 0.5rem;
    transition: bottom 0.4s;
    padding-bottom: 1rem;
  }
  .agent-card:hover .agent-social { bottom: 0; }
  .agent-social-btn {
    width: 32px; height: 32px;
    background: rgba(8,10,15,0.9);
    border: 1px solid rgba(201,168,76,0.4);
    color: var(--gold); font-size: 0.7rem;
    display: flex; align-items: center; justify-content: center;
    text-decoration: none; cursor: none;
    transition: background 0.3s;
  }
  .agent-social-btn:hover { background: var(--gold); color: var(--bg); }
  .agent-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.15rem; color: var(--white);
  }
  .agent-title {
    font-size: 0.7rem; letter-spacing: 0.15em;
    text-transform: uppercase; color: var(--gold-dim);
    margin-top: 0.3rem;
  }
  .agent-deals {
    font-size: 0.78rem; color: var(--text-muted);
    margin-top: 0.5rem;
  }

  /* === CTA BANNER === */
  #cta {
    padding: 7rem 5%;
    background: linear-gradient(135deg, var(--surface) 0%, var(--bg3) 100%);
    border-top: 1px solid rgba(201,168,76,0.15);
    border-bottom: 1px solid rgba(201,168,76,0.15);
    text-align: center;
    position: relative; overflow: hidden;
  }
  #cta::before {
    content: 'LUMIÈRE';
    position: absolute; inset: 0;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Cinzel', serif;
    font-size: 15rem; letter-spacing: 0.3em;
    color: rgba(201,168,76,0.025);
    font-weight: 700; pointer-events: none;
    white-space: nowrap;
  }
  #cta .section-title { margin-bottom: 1.5rem; }
  .cta-desc {
    color: var(--text-muted); font-size: 1rem;
    max-width: 500px; margin: 0 auto 3rem;
    line-height: 1.8;
  }
  .cta-actions { display: flex; gap: 1.5rem; justify-content: center; }

  /* === NEWSLETTER === */
  #newsletter { padding: 5rem 5%; background: var(--bg2); }
  .newsletter-box {
    display: flex; gap: 1.5rem; align-items: end;
    max-width: 600px; margin: 0 auto;
  }
  .newsletter-input-wrap { flex: 1; }
  .newsletter-input-wrap label {
    display: block;
    font-size: 0.65rem; letter-spacing: 0.2em;
    text-transform: uppercase; color: var(--gold);
    margin-bottom: 0.6rem;
  }
  .newsletter-input {
    width: 100%;
    background: transparent;
    border: none; border-bottom: 1px solid rgba(255,255,255,0.15);
    color: var(--text);
    font-size: 0.95rem;
    font-family: 'DM Sans', sans-serif;
    padding: 0.6rem 0; outline: none;
    transition: border-color 0.3s;
  }
  .newsletter-input:focus { border-bottom-color: var(--gold); }
  .newsletter-input::placeholder { color: var(--text-dim); }

  /* === FOOTER === */
  footer {
    background: var(--bg);
    border-top: 1px solid rgba(255,255,255,0.04);
    padding: 5rem 5% 2rem;
  }
  .footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 4rem;
    margin-bottom: 4rem;
  }
  .footer-brand .nav-logo { font-size: 1.5rem; display: block; margin-bottom: 1.5rem; }
  .footer-brand p {
    font-size: 0.85rem; color: var(--text-muted);
    line-height: 1.8; max-width: 280px;
  }
  .footer-socials { display: flex; gap: 0.8rem; margin-top: 1.5rem; }
  .footer-social {
    width: 36px; height: 36px;
    border: 1px solid rgba(201,168,76,0.2);
    display: flex; align-items: center; justify-content: center;
    color: var(--text-muted); font-size: 0.75rem;
    text-decoration: none;
    transition: all 0.3s; cursor: none;
  }
  .footer-social:hover { border-color: var(--gold); color: var(--gold); }
  .footer-col h4 {
    font-family: 'Cinzel', serif;
    font-size: 0.75rem; letter-spacing: 0.2em;
    color: var(--gold); margin-bottom: 1.5rem;
  }
  .footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 0.8rem; }
  .footer-col ul a {
    font-size: 0.85rem; color: var(--text-muted);
    text-decoration: none;
    transition: color 0.3s; display: flex; align-items: center; gap: 0.5rem;
  }
  .footer-col ul a::before { content: '—'; font-size: 0.6rem; color: var(--gold-dim); }
  .footer-col ul a:hover { color: var(--gold); }
  .footer-bottom {
    padding-top: 2rem;
    border-top: 1px solid rgba(255,255,255,0.04);
    display: flex; justify-content: space-between; align-items: center;
  }
  .footer-copy {
    font-size: 0.72rem; color: var(--text-dim);
    letter-spacing: 0.05em;
  }
  .footer-legal { display: flex; gap: 2rem; }
  .footer-legal a {
    font-size: 0.72rem; color: var(--text-dim);
    text-decoration: none; letter-spacing: 0.05em;
    transition: color 0.3s;
  }
  .footer-legal a:hover { color: var(--gold); }

  /* === KEYFRAMES === */
  @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }
  @keyframes fadeLeft { to { opacity: 1; transform: translateX(0); } }
  @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-15px)} }
  @keyframes shimmer {
    0%{background-position:-200% center}
    100%{background-position:200% center}
  }
  .shimmer-text {
    background: linear-gradient(90deg, var(--gold) 0%, var(--gold-light) 40%, var(--gold) 60%, var(--gold-light) 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shimmer 4s linear infinite;
  }


  /* property icon decoration */
  .prop-deco {
    position: absolute; inset: 0;
    display: flex; align-items: center; justify-content: center;
    flex-direction: column; gap: 1rem;
  }
  .prop-deco-icon { font-size: 4rem; opacity: 0.15; }
  .prop-deco-name {
    font-family: 'Cinzel', serif;
    font-size: 0.8rem; letter-spacing: 0.3em;
    color: rgba(201,168,76,0.2); text-transform: uppercase;
  }

  /* === RESPONSIVE === */
  @media (max-width: 1100px) {
    .properties-grid { grid-template-columns: 1fr 1fr; }
    .property-card.featured { grid-column: span 1; }
    .search-box { grid-template-columns: 1fr 1fr; }
    .footer-grid { grid-template-columns: 1fr 1fr; gap: 3rem; }
    .hero-location-tag, .hero-stats { display: none; }
    .nav-links, .nav-cta { display: none; }
    .hamburger { display: flex; }
  }
  @media (max-width: 768px) {
    .search-box { grid-template-columns: 1fr; }
    .properties-grid { grid-template-columns: 1fr; }
    .why-grid { grid-template-columns: 1fr; }
    .why-visual { display: none; }
    .process-steps { grid-template-columns: 1fr 1fr; }
    .process-steps::before { display: none; }
    .agents-grid { grid-template-columns: 1fr 1fr; }
    .footer-grid { grid-template-columns: 1fr; }
    .testimonials-track { --slide-pct: 100%; }
    .testimonial-card { min-width: 100%; }
    .cta-actions { flex-direction: column; align-items: center; }
    .newsletter-box { flex-direction: column; }
  }

  /* === MOBILE NAV === */
  .mobile-menu {
    position: fixed; inset: 0;
    background: rgba(8,10,15,0.98);
    backdrop-filter: blur(20px);
    z-index: 999;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center; gap: 2rem;
    transform: translateX(100%);
    transition: transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94);
  }
  .mobile-menu.open { transform: translateX(0); }
  .mobile-menu a {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2rem; color: var(--text);
    text-decoration: none;
    transition: color 0.3s;
  }
  .mobile-menu a:hover { color: var(--gold); }

  /* === LOADING SCREEN === */
  #loader {
    position: fixed; inset: 0;
    background: var(--bg);
    z-index: 99999;
    display: flex; align-items: center; justify-content: center;
    flex-direction: column; gap: 2rem;
    transition: opacity 0.8s, visibility 0.8s;
  }
  #loader.hidden { opacity: 0; visibility: hidden; }
  .loader-logo {
    font-family: 'Cinzel', serif;
    font-size: 2rem; letter-spacing: 0.4em;
    color: var(--gold);
    animation: pulse 1.5s ease infinite;
  }
  @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
  .loader-bar-wrap { width: 200px; height: 1px; background: rgba(201,168,76,0.2); }
  .loader-bar {
    height: 100%; background: var(--gold);
    animation: loadBar 1.5s ease forwards;
  }
  @keyframes loadBar { from{width:0} to{width:100%} }

  /* Gold separator */
  .gold-sep { width: 60px; height: 1px; background: var(--gold); margin: 2rem auto; }

  /* map pin on hero */
  .hero-location-tag {
    position: absolute; right: 5%; top: 40%;
    background: rgba(201,168,76,0.1);
    border: 1px solid rgba(201,168,76,0.3);
    padding: 0.8rem 1.5rem;
    display: flex; align-items: center; gap: 0.8rem;
    animation: float 4s ease infinite;
    opacity: 0; animation: fadeLeft 0.8s 1.4s forwards, float 4s 2.2s ease infinite;
    z-index: 2;
    backdrop-filter: blur(10px);
  }
  .hero-location-tag .pin { color: var(--gold); font-size: 1rem; }
  .hero-location-tag .loc-text { font-size: 0.75rem; color: var(--text); }
  .hero-location-tag .loc-text strong { display: block; font-size: 0.68rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold-dim); }

  /* === AI CHATBOT === */
  .chatbot-fab {
    position: fixed; bottom: 2rem; right: 2rem;
    width: 60px; height: 60px;
    background: var(--gold);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    color: var(--bg); font-size: 1.5rem;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    z-index: 9999; cursor: none;
    transition: transform 0.3s, background 0.3s;
    border: none;
  }
  .chatbot-fab:hover { transform: scale(1.1); background: var(--gold-light); }
  
  .chatbot-window {
    position: fixed; bottom: 6rem; right: 2rem;
    width: 350px; height: 500px;
    background: rgba(13, 16, 24, 0.95);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(201,168,76,0.3);
    border-radius: 10px;
    z-index: 9999;
    display: flex; flex-direction: column;
    transform: translateY(20px); opacity: 0; pointer-events: none;
    transition: all 0.4s cubic-bezier(0.25,0.46,0.45,0.94);
    box-shadow: 0 20px 50px rgba(0,0,0,0.6);
    overflow: hidden;
  }
  .chatbot-window.open {
    transform: translateY(0); opacity: 1; pointer-events: auto;
  }
  .chatbot-header {
    padding: 1.2rem;
    background: var(--surface);
    border-bottom: 1px solid rgba(201,168,76,0.15);
    display: flex; align-items: center; justify-content: space-between;
  }
  .chatbot-title {
    font-family: 'Cinzel', serif; font-size: 1rem; color: var(--gold); letter-spacing: 0.1em;
  }
  .chatbot-close { background: none; border: none; color: var(--text); font-size: 1.2rem; cursor: none; }
  .chatbot-body {
    flex: 1; padding: 1.5rem; overflow-y: auto;
    display: flex; flex-direction: column; gap: 1rem;
  }
  .chat-msg { max-width: 80%; padding: 0.8rem 1rem; font-size: 0.85rem; line-height: 1.5; }
  .chat-msg.ai {
    background: var(--surface2); color: var(--text);
    border-radius: 10px 10px 10px 0; align-self: flex-start;
    border: 1px solid rgba(255,255,255,0.05);
  }
  .chat-msg.user {
    background: var(--gold); color: var(--bg);
    border-radius: 10px 10px 0 10px; align-self: flex-end;
  }
  .chatbot-input-area {
    padding: 1rem; background: var(--surface);
    border-top: 1px solid rgba(201,168,76,0.15);
    display: flex; gap: 0.5rem;
  }
  .chatbot-input {
    flex: 1; background: var(--bg); border: 1px solid rgba(255,255,255,0.1);
    color: var(--text); padding: 0.6rem 1rem; font-family: 'DM Sans', sans-serif;
    border-radius: 20px; outline: none; transition: border-color 0.3s;
    font-size: 0.85rem;
  }
  .chatbot-input:focus { border-color: var(--gold); }
  .chatbot-send {
    background: var(--gold); color: var(--bg); border: none;
    width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
    cursor: none; transition: transform 0.2s;
  }
  .chatbot-send:hover { transform: scale(1.1); }
`;

export default function App() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [tIndex, setTIndex] = useState(0);
  const [searchBtnText, setSearchBtnText] = useState('Search →');

  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const canvasRef = useRef(null);

  // Chatbot State
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMsgs, setChatMsgs] = useState([
    { sender: 'ai', text: 'Hello, I am Lumi, your personal AI concierge. How may I assist you with your luxury property search today?' }
  ]);
  const [chatInput, setChatInput] = useState('');

  // Load fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Cinzel:wght@400;600;700&family=DM+Sans:wght@300;400;500&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, []);

  // 1. Loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // 2. Cursor
  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;
    let animationFrameId;

    const onMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const animateCursor = () => {
      if (cursorRef.current && ringRef.current) {
        cursorRef.current.style.left = mx + 'px';
        cursorRef.current.style.top = my + 'px';
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        ringRef.current.style.left = rx + 'px';
        ringRef.current.style.top = ry + 'px';
      }
      animationFrameId = requestAnimationFrame(animateCursor);
    };

    window.addEventListener('mousemove', onMouseMove);
    animateCursor();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // 3. Navbar scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // 4. Particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.5 + 0.3,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.6 + 0.1
      });
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,168,76,${p.opacity})`;
        ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });

      particles.forEach((a, i) => {
        particles.slice(i+1).forEach(b => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(201,168,76,${0.06 * (1 - dist/120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animationFrameId = requestAnimationFrame(drawParticles);
    };
    drawParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // 5. Scroll Animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(el => {
        if (el.isIntersecting) el.target.classList.add('visible');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.property-card, .why-feature, .process-step, .agent-card').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // 6. Counter Animation
  useEffect(() => {
    const counters = document.querySelectorAll('[data-count]');
    const counterObs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = +el.dataset.count;
          let current = 0;
          const step = target / 60;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) { 
              el.textContent = target + '+'; 
              clearInterval(timer); 
            } else {
              el.textContent = Math.floor(current);
            }
          }, 25);
          counterObs.unobserve(el);
        }
      });
    });
    counters.forEach(c => counterObs.observe(c));
    return () => counterObs.disconnect();
  }, []);

  // Handlers
  const toggleMobile = () => setMenuOpen(!menuOpen);
  const closeMobile = () => setMenuOpen(false);

  const slideTestimonials = (dir) => {
    setTIndex(prev => Math.max(0, Math.min(2, prev + dir)));
  };

  const handleHeroMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const overlay = document.querySelector('.hero-grid-overlay');
    if (overlay) overlay.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
  };

  const handleCardMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `translateY(-8px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg)`;
  };

  const handleCardMouseLeave = (e) => {
    e.currentTarget.style.transform = '';
  };

  const handleSearchClick = () => {
    setSearchBtnText('Searching...');
    setTimeout(() => setSearchBtnText('Search →'), 1500);
  };

  const handleChatSend = () => {
    if (!chatInput.trim()) return;
    setChatMsgs(prev => [...prev, { sender: 'user', text: chatInput }]);
    const userInput = chatInput;
    setChatInput('');
    
    setTimeout(() => {
      let reply = "I can connect you with one of our senior partners to discuss this further. Would you like me to schedule a private consultation?";
      if (userInput.toLowerCase().includes('price') || userInput.toLowerCase().includes('cost')) {
        reply = "Our exclusive properties range from ₹5 Cr to over ₹100 Cr. I can filter options based on your specific investment criteria.";
      } else if (userInput.toLowerCase().includes('location') || userInput.toLowerCase().includes('where')) {
        reply = "We have prime listings in Mumbai, Delhi NCR, Bangalore, Dubai, London, and New York. Which city interests you?";
      }
      setChatMsgs(prev => [...prev, { sender: 'ai', text: reply }]);
    }, 1000);
  };

  return (
    <>
      <style>{globalStyles}</style>

      {/* LOADER */}
      <div id="loader" className={!loading ? 'hidden' : ''}>
        <div className="loader-logo">LUMIÈRE</div>
        <div className="loader-bar-wrap"><div className="loader-bar"></div></div>
      </div>

      {/* CURSOR */}
      <div id="cursor" ref={cursorRef}></div>
      <div id="cursor-ring" ref={ringRef}></div>

      {/* PARTICLE CANVAS */}
      <canvas id="particle-canvas" ref={canvasRef}></canvas>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobileMenu">
        <a href="#properties" onClick={closeMobile}>Properties</a>
        <a href="#why-us" onClick={closeMobile}>About</a>
        <a href="#agents" onClick={closeMobile}>Agents</a>
        <a href="#process" onClick={closeMobile}>Process</a>
        <a href="#cta" onClick={closeMobile}>Contact</a>
      </div>

      {/* NAV */}
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <a href="#hero" className="nav-logo">LUMIÈRE <span>ESTATES</span></a>
        <ul className="nav-links">
          <li><a href="#properties">Properties</a></li>
          <li><a href="#why-us">About</a></li>
          <li><a href="#agents">Agents</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#testimonials">Reviews</a></li>
        </ul>
        <button className="nav-cta" onClick={() => document.getElementById('cta')?.scrollIntoView({behavior:'smooth'})}>Schedule Viewing</button>
        <div className="hamburger" onClick={toggleMobile} id="hamburger">
          <span style={menuOpen ? {transform: 'rotate(45deg) translate(4px, 4px)'} : {}}></span>
          <span style={menuOpen ? {opacity: '0'} : {}}></span>
          <span style={menuOpen ? {transform: 'rotate(-45deg) translate(4px, -4px)'} : {}}></span>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero" onMouseMove={handleHeroMouseMove}>
        <div className="hero-bg-wrap"><div className="hero-bg"></div></div>
        <div className="hero-grid-overlay"></div>

        <div className="hero-content">
          <div className="hero-eyebrow">
            <div className="hero-eyebrow-line"></div>
            <span className="hero-eyebrow-text">Luxury Real Estate Group · Est. 2008</span>
          </div>
          <h1 className="hero-title">
            Find Your<br/>
            <em>Dream Estate</em><br/>
            Live Differently.
          </h1>
          <p className="hero-subtitle">We curate the world's most exceptional residences — from oceanfront villas to sky-high penthouses — for clients who demand nothing less than extraordinary.</p>
          <div className="hero-actions">
            <a href="#properties" className="btn-primary">Explore Properties</a>
            <a href="#why-us" className="btn-secondary">
              <span className="arrow">→</span>
              Our Story
            </a>
          </div>
        </div>

        <div className="hero-location-tag">
          <span className="pin">📍</span>
          <div className="loc-text">
            <strong>Featured Location</strong>
            Mumbai · Delhi · Dubai
          </div>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-num" data-count="1400">0</div>
            <div className="hero-stat-label">Properties Sold</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num" data-count="16">0</div>
            <div className="hero-stat-label">Years Experience</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-num" data-count="98">0</div>
            <div className="hero-stat-label">Client Satisfaction %</div>
          </div>
        </div>


      </section>

      {/* SEARCH */}
      <div id="search-section">
        <div className="search-box">
          <div className="search-field">
            <label>Location</label>
            <select>
              <option>Any City</option>
              <option>Mumbai</option>
              <option>Delhi NCR</option>
              <option>Bangalore</option>
              <option>Dubai</option>
              <option>London</option>
              <option>New York</option>
            </select>
          </div>
          <div className="search-field">
            <label>Property Type</label>
            <select>
              <option>All Types</option>
              <option>Penthouse</option>
              <option>Villa</option>
              <option>Mansion</option>
              <option>Apartment</option>
              <option>Townhouse</option>
            </select>
          </div>
          <div className="search-field">
            <label>Budget</label>
            <select>
              <option>Any Budget</option>
              <option>₹1Cr – ₹5Cr</option>
              <option>₹5Cr – ₹20Cr</option>
              <option>₹20Cr – ₹50Cr</option>
              <option>₹50Cr+</option>
            </select>
          </div>
          <button className="search-btn" onClick={handleSearchClick}>{searchBtnText}</button>
        </div>
      </div>

      {/* STATS MARQUEE */}
      <div id="stats-bar">
        <div className="marquee-track" id="marqueeTrack">
          <div className="marquee-item">
            <span className="num">1,400+</span>
            <span className="label">Properties Sold</span>
            <span className="marquee-dot"></span>
          </div>
          <div className="marquee-item">
            <span className="num">₹8,000Cr+</span>
            <span className="label">Total Portfolio Value</span>
            <span className="marquee-dot"></span>
          </div>
          <div className="marquee-item">
            <span className="num">16 Years</span>
            <span className="label">Market Experience</span>
            <span className="marquee-dot"></span>
          </div>
          <div className="marquee-item">
            <span className="num">98%</span>
            <span className="label">Client Satisfaction</span>
            <span className="marquee-dot"></span>
          </div>
          <div className="marquee-item">
            <span className="num">12</span>
            <span className="label">Cities Covered</span>
            <span className="marquee-dot"></span>
          </div>
          <div className="marquee-item">
            <span className="num">250+</span>
            <span className="label">Expert Agents</span>
            <span className="marquee-dot"></span>
          </div>
          {/* Duplicate for infinite scroll */}
          <div className="marquee-item">
            <span className="num">1,400+</span>
            <span className="label">Properties Sold</span>
            <span className="marquee-dot"></span>
          </div>
          <div className="marquee-item">
            <span className="num">₹8,000Cr+</span>
            <span className="label">Total Portfolio Value</span>
            <span className="marquee-dot"></span>
          </div>
          <div className="marquee-item">
            <span className="num">16 Years</span>
            <span className="label">Market Experience</span>
            <span className="marquee-dot"></span>
          </div>
          <div className="marquee-item">
            <span className="num">98%</span>
            <span className="label">Client Satisfaction</span>
            <span className="marquee-dot"></span>
          </div>
          <div className="marquee-item">
            <span className="num">12</span>
            <span className="label">Cities Covered</span>
            <span className="marquee-dot"></span>
          </div>
          <div className="marquee-item">
            <span className="num">250+</span>
            <span className="label">Expert Agents</span>
            <span className="marquee-dot"></span>
          </div>
        </div>
      </div>

      {/* PROPERTIES */}
      <section id="properties">
        <div className="section-header">
          <div className="section-tag">Our Portfolio</div>
          <h2 className="section-title">Featured <em>Residences</em></h2>
          <p className="section-desc">Handpicked properties that redefine luxury living. Each listing is meticulously vetted for excellence.</p>
        </div>

        <div className="properties-grid">

          {/* Featured Card 1 */}
          <div className="property-card featured" style={{transitionDelay:'0.1s'}} onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
            <div className="property-img-wrap">
              <div className="property-img-bg" style={{height:'100%', backgroundImage: "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="prop-deco">
                  <div className="prop-deco-icon">🏙️</div>
                  <div className="prop-deco-name">Skyline Penthouse</div>
                </div>
                <div className="property-overlay"></div>
              </div>
              <div className="property-badge">Featured</div>
              <div className="property-quick-view">Quick View →</div>
            </div>
            <div className="property-body">
              <div className="property-type">Luxury Penthouse</div>
              <div className="property-name">The Skyline Residences, Tower A</div>
              <div className="property-location">📍 Worli, Mumbai</div>
              <div className="property-features">
                <div className="property-feature"><span className="icon">🛏</span> 5 Beds</div>
                <div className="property-feature"><span className="icon">🚿</span> 5 Baths</div>
                <div className="property-feature"><span className="icon">📐</span> 6,200 sqft</div>
                <div className="property-feature"><span className="icon">🚗</span> 3 Parking</div>
              </div>
              <div className="property-footer">
                <div className="property-price">₹42 Cr <small>/ freehold</small></div>
                <a href="#" className="property-link">→</a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="property-card" style={{transitionDelay:'0.2s'}} onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
            <div className="property-img-wrap">
              <div className="property-img-bg" style={{height:'100%', backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="prop-deco">
                  <div className="prop-deco-icon">🌴</div>
                  <div className="prop-deco-name">Garden Villa</div>
                </div>
                <div className="property-overlay"></div>
              </div>
              <div className="property-badge new">New</div>
              <div className="property-quick-view">Quick View →</div>
            </div>
            <div className="property-body">
              <div className="property-type">Private Villa</div>
              <div className="property-name">The Palm Gardens Estate</div>
              <div className="property-location">📍 Juhu, Mumbai</div>
              <div className="property-features">
                <div className="property-feature"><span className="icon">🛏</span> 4 Beds</div>
                <div className="property-feature"><span className="icon">🚿</span> 4 Baths</div>
                <div className="property-feature"><span className="icon">📐</span> 4,800 sqft</div>
              </div>
              <div className="property-footer">
                <div className="property-price">₹28 Cr</div>
                <a href="#" className="property-link">→</a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="property-card" style={{transitionDelay:'0.3s'}} onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
            <div className="property-img-wrap">
              <div className="property-img-bg" style={{height:'100%', backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="prop-deco">
                  <div className="prop-deco-icon">🏛️</div>
                  <div className="prop-deco-name">Golf Estate</div>
                </div>
                <div className="property-overlay"></div>
              </div>
              <div className="property-badge">Premium</div>
              <div className="property-quick-view">Quick View →</div>
            </div>
            <div className="property-body">
              <div className="property-type">Luxury Bungalow</div>
              <div className="property-name">Golf Links Heritage Mansion</div>
              <div className="property-location">📍 Golf Links, New Delhi</div>
              <div className="property-features">
                <div className="property-feature"><span className="icon">🛏</span> 6 Beds</div>
                <div className="property-feature"><span className="icon">🚿</span> 6 Baths</div>
                <div className="property-feature"><span className="icon">📐</span> 9,000 sqft</div>
              </div>
              <div className="property-footer">
                <div className="property-price">₹65 Cr</div>
                <a href="#" className="property-link">→</a>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="property-card" style={{transitionDelay:'0.4s'}} onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
            <div className="property-img-wrap">
              <div className="property-img-bg" style={{height:'100%', backgroundImage: "url('https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="prop-deco">
                  <div className="prop-deco-icon">🌊</div>
                  <div className="prop-deco-name">Beachfront</div>
                </div>
                <div className="property-overlay"></div>
              </div>
              <div className="property-badge new">New</div>
              <div className="property-quick-view">Quick View →</div>
            </div>
            <div className="property-body">
              <div className="property-type">Beach Villa</div>
              <div className="property-name">Azure Shores Beachfront Villa</div>
              <div className="property-location">📍 Goa, India</div>
              <div className="property-features">
                <div className="property-feature"><span className="icon">🛏</span> 5 Beds</div>
                <div className="property-feature"><span className="icon">🚿</span> 5 Baths</div>
                <div className="property-feature"><span className="icon">📐</span> 5,500 sqft</div>
              </div>
              <div className="property-footer">
                <div className="property-price">₹18 Cr</div>
                <a href="#" className="property-link">→</a>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="property-card" style={{transitionDelay:'0.5s'}} onMouseMove={handleCardMouseMove} onMouseLeave={handleCardMouseLeave}>
            <div className="property-img-wrap">
              <div className="property-img-bg" style={{height:'100%', backgroundImage: "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="prop-deco">
                  <div className="prop-deco-icon">🏙️</div>
                  <div className="prop-deco-name">Sky Apartment</div>
                </div>
                <div className="property-overlay"></div>
              </div>
              <div className="property-badge sold">Sold</div>
              <div className="property-quick-view">Quick View →</div>
            </div>
            <div className="property-body">
              <div className="property-type">Sky Apartment</div>
              <div className="property-name">One Raisina — Level 42</div>
              <div className="property-location">📍 Aerocity, New Delhi</div>
              <div className="property-features">
                <div className="property-feature"><span className="icon">🛏</span> 3 Beds</div>
                <div className="property-feature"><span className="icon">🚿</span> 3 Baths</div>
                <div className="property-feature"><span className="icon">📐</span> 3,200 sqft</div>
              </div>
              <div className="property-footer">
                <div className="property-price">₹12 Cr</div>
                <a href="#" className="property-link">→</a>
              </div>
            </div>
          </div>

        </div>

        <div style={{textAlign:'center', marginTop:'4rem'}}>
          <a href="#" className="btn-primary">View All Properties →</a>
        </div>
      </section>

      {/* WHY US */}
      <section id="why-us">
        <div className="why-grid">
          <div className="why-visual">
            <div className="why-main-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="why-img-art"></div>
            </div>
            <div className="why-accent-card">
              <div className="why-accent-num">16+</div>
              <div className="why-accent-label">Years of<br/>Luxury Excellence</div>
            </div>
          </div>

          <div className="why-content">
            <div className="section-tag" style={{justifyContent:'flex-start'}}>Why Choose Us</div>
            <h2 className="section-title" style={{textAlign:'left'}}>
              Where <em>Luxury</em><br/>Meets Expertise
            </h2>
            <p className="section-desc" style={{marginInline:'0', marginTop:'1.5rem'}}>
              We are not just a real estate firm — we are curators of exceptional living. Our white-glove service transforms the property search into an unforgettable journey.
            </p>
            <div className="why-features">
              <div className="why-feature">
                <div className="why-feature-icon">🏆</div>
                <div className="why-feature-text">
                  <h4>Award-Winning Service</h4>
                  <p>Recognized 7 consecutive years as India's #1 Luxury Real Estate Agency by Property Awards.</p>
                </div>
              </div>
              <div className="why-feature">
                <div className="why-feature-icon">🔒</div>
                <div className="why-feature-text">
                  <h4>Private & Confidential</h4>
                  <p>Discretion is our foundation. Off-market listings and private viewings for ultra-HNI clients.</p>
                </div>
              </div>
              <div className="why-feature">
                <div className="why-feature-icon">🌐</div>
                <div className="why-feature-text">
                  <h4>Global Network</h4>
                  <p>Access to premium listings across 12 cities in India, UAE, UK, and USA through our partner network.</p>
                </div>
              </div>
              <div className="why-feature">
                <div className="why-feature-icon">💎</div>
                <div className="why-feature-text">
                  <h4>Concierge After-Sale</h4>
                  <p>Interior design partnerships, legal support, NRI services — we stay with you well beyond closing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process">
        <div className="section-header">
          <div className="section-tag">How We Work</div>
          <h2 className="section-title">Our <em>Process</em></h2>
          <p className="section-desc">A seamless, white-glove experience from first consultation to handing over the keys.</p>
        </div>

        <div className="process-steps">
          <div className="process-step" style={{transitionDelay:'0.1s'}}>
            <div className="process-num">01</div>
            <h3>Discovery Consultation</h3>
            <p>We understand your vision, lifestyle, and investment goals through a private one-on-one session.</p>
          </div>
          <div className="process-step" style={{transitionDelay:'0.2s'}}>
            <div className="process-num">02</div>
            <h3>Curated Selection</h3>
            <p>Our experts handpick properties that align perfectly with your criteria — often including off-market gems.</p>
          </div>
          <div className="process-step" style={{transitionDelay:'0.3s'}}>
            <div className="process-num">03</div>
            <h3>Private Viewings</h3>
            <p>Exclusive, arranged viewings at your convenience with detailed property insights and guidance.</p>
          </div>
          <div className="process-step" style={{transitionDelay:'0.4s'}}>
            <div className="process-num">04</div>
            <h3>Seamless Closing</h3>
            <p>Legal, financial, and documentation support through our trusted partner network for a stress-free close.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials">
        <div className="section-header">
          <div className="section-tag">Client Stories</div>
          <h2 className="section-title">Words That <em>Matter</em></h2>
        </div>

        <div className="testimonials-track-wrap">
          <div className="testimonials-track" id="testimonialsTrack" style={{ '--t-index': tIndex }}>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">"Lumière Estates found us a penthouse we didn't even know existed. Their off-market network is extraordinary, and the service throughout was nothing short of exceptional."</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">RK</div>
                <div>
                  <div className="testimonial-stars">★★★★★</div>
                  <div className="testimonial-author-name">Rahul Kapoor</div>
                  <div className="testimonial-author-role">CEO, TechVentures India · Mumbai</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">"As an NRI, I was anxious about purchasing property remotely. Lumière made the entire process completely transparent and handled everything flawlessly. I cannot recommend them enough."</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">PS</div>
                <div>
                  <div className="testimonial-stars">★★★★★</div>
                  <div className="testimonial-author-name">Priya Sharma</div>
                  <div className="testimonial-author-role">Investment Banker · Dubai</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">"The Golf Links property they sourced for us was beyond our expectations. Their knowledge of Delhi's luxury market is unparalleled, and they negotiated brilliantly on our behalf."</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">AM</div>
                <div>
                  <div className="testimonial-stars">★★★★★</div>
                  <div className="testimonial-author-name">Arjun Malhotra</div>
                  <div className="testimonial-author-role">Industrialist · New Delhi</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">"I've worked with luxury real estate firms worldwide. Lumière Estates stands in a class of their own — meticulous, discreet, and genuinely invested in finding the perfect home for you."</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">SJ</div>
                <div>
                  <div className="testimonial-stars">★★★★★</div>
                  <div className="testimonial-author-name">Sofia Jensen</div>
                  <div className="testimonial-author-role">Private Equity Director · London</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonials-nav">
          <button className="tslide-btn" onClick={() => slideTestimonials(-1)}>←</button>
          <button className="tslide-btn" onClick={() => slideTestimonials(1)}>→</button>
        </div>
      </section>

      {/* AGENTS */}
      <section id="agents">
        <div className="section-header">
          <div className="section-tag">Our Team</div>
          <h2 className="section-title">Meet the <em>Experts</em></h2>
          <p className="section-desc">Our award-winning agents bring decades of combined experience and a deeply personal approach to every transaction.</p>
        </div>

        <div className="agents-grid">
          <div className="agent-card" style={{transitionDelay:'0.1s'}}>
            <div className="agent-photo-wrap">
              <div className="agent-photo">DEMO</div>
              <div className="agent-social">
                <a href="#" className="agent-social-btn">in</a>
                <a href="#" className="agent-social-btn">@</a>
                <a href="#" className="agent-social-btn">☎</a>
              </div>
            </div>
            <div className="agent-name">Agent Placeholder 01</div>
            <div className="agent-title">Senior Director (Demo)</div>
            <div className="agent-deals">000 deals · Location A</div>
          </div>
          <div className="agent-card" style={{transitionDelay:'0.2s'}}>
            <div className="agent-photo-wrap">
              <div className="agent-photo">DEMO</div>
              <div className="agent-social">
                <a href="#" className="agent-social-btn">in</a>
                <a href="#" className="agent-social-btn">@</a>
                <a href="#" className="agent-social-btn">☎</a>
              </div>
            </div>
            <div className="agent-name">Agent Placeholder 02</div>
            <div className="agent-title">Luxury Specialist (Demo)</div>
            <div className="agent-deals">000 deals · Location B</div>
          </div>
          <div className="agent-card" style={{transitionDelay:'0.3s'}}>
            <div className="agent-photo-wrap">
              <div className="agent-photo">DEMO</div>
              <div className="agent-social">
                <a href="#" className="agent-social-btn">in</a>
                <a href="#" className="agent-social-btn">@</a>
                <a href="#" className="agent-social-btn">☎</a>
              </div>
            </div>
            <div className="agent-name">Agent Placeholder 03</div>
            <div className="agent-title">Investment Lead (Demo)</div>
            <div className="agent-deals">000 deals · Location C</div>
          </div>
          <div className="agent-card" style={{transitionDelay:'0.4s'}}>
            <div className="agent-photo-wrap">
              <div className="agent-photo">DEMO</div>
              <div className="agent-social">
                <a href="#" className="agent-social-btn">in</a>
                <a href="#" className="agent-social-btn">@</a>
                <a href="#" className="agent-social-btn">☎</a>
              </div>
            </div>
            <div className="agent-name">Agent Placeholder 04</div>
            <div className="agent-title">Portfolio Manager (Demo)</div>
            <div className="agent-deals">000 deals · Location D</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta">
        <div className="section-tag">Begin Your Journey</div>
        <h2 className="section-title shimmer-text">Ready to Find Your<br/><em>Perfect Estate?</em></h2>
        <div className="gold-sep"></div>
        <p className="cta-desc">Schedule a private consultation with our experts. No obligations, just an extraordinary conversation about your dream home.</p>
        <div className="cta-actions">
          <a href="tel:+911234567890" className="btn-primary">Call +91 12345 67890</a>
          <a href="mailto:hello@lumiereestates.com" className="btn-secondary">
            <span className="arrow">✉</span>
            hello@lumiereestates.com
          </a>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section id="newsletter">
        <div className="section-header" style={{marginBottom:'3rem'}}>
          <div className="section-tag">Stay Informed</div>
          <h2 className="section-title" style={{fontSize:'2rem'}}>Get <em>Exclusive</em> Listings First</h2>
        </div>
        <div className="newsletter-box">
          <div className="newsletter-input-wrap">
            <label>Your Email Address</label>
            <input type="email" className="newsletter-input" placeholder="name@example.com" />
          </div>
          <button className="btn-primary">Subscribe →</button>
        </div>
      </section>

      {/* AI CHATBOT */}
      <button className="chatbot-fab" onClick={() => setChatOpen(!chatOpen)}>
        {chatOpen ? '✕' : '💬'}
      </button>

      <div className={`chatbot-window ${chatOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <div className="chatbot-title">LUMI — AI CONCIERGE</div>
          <button className="chatbot-close" onClick={() => setChatOpen(false)}>✕</button>
        </div>
        <div className="chatbot-body">
          {chatMsgs.map((msg, i) => (
            <div key={i} className={`chat-msg ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="chatbot-input-area">
          <input 
            type="text" className="chatbot-input" placeholder="Type your message..." 
            value={chatInput} onChange={e => setChatInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleChatSend()}
          />
          <button className="chatbot-send" onClick={handleChatSend}>➤</button>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="nav-logo">LUMIÈRE <span>ESTATES</span></a>
            <p>India's premier luxury real estate group. Connecting exceptional people with extraordinary properties since 2008.</p>
            <div className="footer-socials">
              <a href="#" className="footer-social">in</a>
              <a href="#" className="footer-social">ig</a>
              <a href="#" className="footer-social">fb</a>
              <a href="#" className="footer-social">yt</a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Properties</h4>
            <ul>
              <li><a href="#">Penthouses</a></li>
              <li><a href="#">Villas</a></li>
              <li><a href="#">Mansions</a></li>
              <li><a href="#">Apartments</a></li>
              <li><a href="#">Commercial</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Awards</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="#">Mumbai Office</a></li>
              <li><a href="#">Delhi Office</a></li>
              <li><a href="#">Dubai Office</a></li>
              <li><a href="#">Schedule Viewing</a></li>
              <li><a href="#">NRI Services</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">© 2024 Lumière Estates. All rights reserved.</div>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">RERA Registrations</a>
          </div>
        </div>
      </footer>
    </>
  );
}
