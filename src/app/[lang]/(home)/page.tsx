"use client";

import { useEffect } from "react";
import "./home.css";
import Link from "next/link";

export default function HomePage() {
  useEffect(() => {
    document.querySelectorAll(`a[href^="#"]`).forEach(anchor => {
      anchor.addEventListener("click", event => {
        var href = anchor.getAttribute("href");
        if (href && href != "#") {
          event.preventDefault();
          var target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              "behavior": "smooth",
              "block": "start"
            });
          }
        }
      });
    });

    var observerOptions = {
      "threshold": .1,
      "rootMargin": "0px 0px -50px 0px"
    };

    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    function handleScroll() {
      var scrollIndicator = document.querySelector(".scroll-indicator") as HTMLElement | null;
      if (scrollIndicator) {
        if (window.scrollY > 100) {
          scrollIndicator.style.opacity = "0";
        } else {
          scrollIndicator.style.opacity = "1";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    Array.from(document.querySelectorAll(".fade-in")).forEach(element => {
      observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="animated-background">
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
      </div>

      <nav>
        <div className="nav-container">
          <a href="https://catcore.topcatto.xyz" className="logo">
            <span>😺</span>
            <span>CatCore</span>
          </a>
          <ul className="nav-links">
            <li><Link href="/ru">EN/RU</Link></li>
            <li><Link href="/docs">Documentation</Link></li>
            <li><a href="#features">Features</a></li>
            <li><a href="https://github.com/CatCoreV" target="_blank">GitHub</a></li>
          </ul>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-emoji">😺</div>
          <h1>CatCore</h1>
          <p>It&apos;s easy to make your own OS with CatCore kernel</p>
          <div className="btn-group">
            <a href="/docs/get-started" target="_blank" className="btn btn-primary">
              Get Started
            </a>
            <a href="#features" className="btn btn-secondary">
              Learn More
            </a>
          </div>
        </div>
        <div className="scroll-indicator">
          <span></span>
        </div>
      </section>

      <section id="features">
        <div className="container">
          <h2 className="section-title fade-in">Why CatCore?</h2>
          <p className="section-subtitle fade-in">
            A powerful yet accessible operating system kernel designed to make OS development easy and fun.
          </p>
          <div className="features-grid">
            <div className="feature-card fade-in">
              <span className="feature-icon">✨</span>
              <h3>Easy to Use</h3>
              <p>Simple, intuitive API that makes OS development accessible to everyone</p>
            </div>
            <div className="feature-card fade-in">
              <span className="feature-icon">🖥️</span>
              <h3>Device Support</h3>
              <p>CatCore compiler can run on Windows, Linux or MacOS on x64, x86 or ARM64</p>
            </div>
            <div className="feature-card fade-in">
              <span className="feature-icon">🚀</span>
              <h3>Application VM</h3>
              <p>Run your OS as a normal app to quickly debug issues without the need of a VM</p>
            </div>
            <div className="feature-card fade-in">
              <span className="feature-icon">📚</span>
              <h3>Language Support</h3>
              <p>Write your OS in one or more easy high level languages (ie, Python, JavaScript, PHP)</p>
            </div>
            <div className="feature-card fade-in">
              <span className="feature-icon">👥</span>
              <h3>Free Quick Support</h3>
              <p>Join the community and get free quick support from CatCore developer</p>
            </div>
            <div className="feature-card fade-in">
              <span className="feature-icon">🔧</span>
              <h3>Maintained</h3>
              <p>If you find a bug, report it to GitHub and get a quick fix</p>
            </div>
            <div className="feature-card fade-in">
              <span className="feature-icon">🔒</span>
              <h3>Secure</h3>
              <p>CatCore got many layers of protection and apps run in containers to make sure your OS doesn&apos;t get hacked</p>
            </div>
            <div className="feature-card fade-in">
              <span className="feature-icon">🔗</span>
              <h3>Bonus</h3>
              <p>
                Get a free{" "}
                <a href="https://handshake.org/" target="_blank" rel="noopener noreferrer">
                  Handshake
                </a>{" "}
                domain for your OS
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="getting-started">
        <div className="container">
          <div className="getting-started fade-in">
            <h2>Ready to Get Started?</h2>
            <p>Begin your OS development journey with CatCore today, it&apos;s free!</p>
            <div className="code-block">
              <code>git clone https://github.com/CatCoreV/os-compiler.git</code>
            </div>
            <div className="btn-group">
              <a href="/docs/get-started" target="_blank" className="btn btn-primary">
                Get Started
              </a>
              <a href="https://github.com/CatCoreV/os-compiler" target="_blank" className="btn btn-secondary">
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-content">
          <div className="footer-links">
            <a href="https://github.com/CatCoreV" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://discord.gg/AU5PBWxeVN" target="_blank" rel="noopener noreferrer">
              Discord
            </a>
            <a href="/docs" target="_blank" rel="noopener noreferrer">
              Documentation
            </a>
          </div>
          <p className="footer-text">&copy; 2025 CatCore. Made with 💜 by topcatto.</p>
        </div>
      </footer>
    </>
  );
};