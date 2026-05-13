"use client";
import { useState, useEffect, useRef } from "react";

const COURSES = [
  {
    id: "btech",
    label: "B.Tech",
    icon: "⚙️",
    color: "#1a73e8",
    bg: "#e8f0fe",
    desc: "Computer Science, ECE, ME, Civil & more",
    duration: "4 Years",
    eligibility: "10+2 with PCM",
  },
  {
    id: "mba",
    label: "MBA",
    icon: "📊",
    color: "#137333",
    bg: "#e6f4ea",
    desc: "Marketing, Finance, HR, Operations",
    duration: "2 Years",
    eligibility: "Any Graduate",
  },
  {
    id: "bba",
    label: "BBA",
    icon: "💼",
    color: "#b31412",
    bg: "#fce8e6",
    desc: "Business Administration & Management",
    duration: "3 Years",
    eligibility: "10+2 Any Stream",
  },
  {
    id: "bca",
    label: "BCA",
    icon: "💻",
    color: "#c26401",
    bg: "#fef7e0",
    desc: "Application Dev, Data Science, Web Tech",
    duration: "3 Years",
    eligibility: "10+2 with Maths",
  },
];

const STATS = [
  { value: "500+", label: "Placement Offers" },
  { value: "₹12 LPA", label: "Highest Package" },
  { value: "90%", label: "Placement Rate" },
  { value: "25+", label: "Courses Offered" },
];

const RECRUITERS = [
  {
    name: "Microsoft",
    img: "https://hiet.org/wp-content/uploads/2025/05/ads-microsoft.png",
  },
  {
    name: "Google",
    img: "https://hiet.org/wp-content/uploads/2025/05/ads-google.png",
  },
  {
    name: "Deloitte",
    img: "https://hiet.org/wp-content/uploads/2025/05/ads-deloitte.png",
  },
  {
    name: "Amazon",
    img: "https://hiet.org/wp-content/uploads/2025/05/ads-amazon.png",
  },
  {
    name: "Cognizant",
    img: "https://hiet.org/wp-content/uploads/2025/05/ads-cognizant.png",
  },
  {
    name: "IBM",
    img: "https://hiet.org/wp-content/uploads/2025/05/ads-ibm.png",
  },
  {
    name: "Infosys",
    img: "https://hiet.org/wp-content/uploads/2025/05/ads-infosys.png",
  },
  {
    name: "Accenture",
    img: "https://hiet.org/wp-content/uploads/2025/05/ads-accenture.png",
  },
  {
    name: "Wipro",
    img: "https://hiet.org/wp-content/uploads/2025/05/ads-wipro.png",
  },
  {
    name: "TCS",
    img: "https://hiet.org/wp-content/uploads/2025/05/ads-tcs.jpg",
  },
  {
    name: "Axis Bank",
    img: "https://hiet.org/wp-content/uploads/2025/05/ads-axis.png",
  },
  {
    name: "Dell",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/320px-Dell_logo_2016.svg.png",
  },
];

const WHY = [
  {
    icon: "🏆",
    title: "AKTU Affiliated",
    desc: "Recognized by Dr. A.P.J. Abdul Kalam Technical University, Lucknow",
  },
  {
    icon: "🔬",
    title: "Research Labs",
    desc: "State-of-the-art labs with latest equipment and technology",
  },
  {
    icon: "🤝",
    title: "Industry Connect",
    desc: "Regular seminars, workshops and MoUs with top companies",
  },
  {
    icon: "🎯",
    title: "Placement Cell",
    desc: "Dedicated team ensuring top campus recruitment every year",
  },
  {
    icon: "🏫",
    title: "Modern Campus",
    desc: "Fully Wi-Fi enabled campus with world-class facilities",
  },
  {
    icon: "📚",
    title: "Expert Faculty",
    desc: "Highly qualified professors with industry experience",
  },
];

const STATES = [
  "Uttar Pradesh",
  "Delhi",
  "Delhi NCR",
  "Haryana",
  "Bihar",
  "Rajasthan",
  "Maharashtra",
  "Punjab",
  "Madhya Pradesh",
  "Gujarat",
  "West Bengal",
  "Karnataka",
  "Tamil Nadu",
  "Andhra Pradesh",
  "Telangana",
  "Kerala",
  "Jharkhand",
  "Chhattisgarh",
  "Uttarakhand",
  "Himachal Pradesh",
  "Jammu",
  "Kashmir",
  "Assam",
  "Odisha",
  "Goa",
  "Other",
];

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    course: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("btech");
  const [scrolled, setScrolled] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      e.email = "Valid email required";
    if (!form.phone.match(/^[6-9]\d{9}$/))
      e.phone = "Valid 10-digit mobile required";
    if (!form.state) e.state = "Select your state";
    if (!form.course) e.course = "Select a course";
    return e;
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const errs = validate();
  if (Object.keys(errs).length) {
    setErrors(errs);
    return;
  }
  setSubmitting(true);
  try {
    const payload = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      city: form.city,           // goes into address.city if your API maps it
      appliedCourse: form.course, // adjust key to match your form field name
      source: "Website",
    };

    await fetch("https://admisiioncrmbackend-production.up.railway.app/api/student", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {}
  setSubmitting(false);
  setSubmitted(true);
};

  const scrollToForm = () =>
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });

  const update = (key, val) => {
    setForm((p) => ({ ...p, [key]: val }));
    setErrors((p) => ({ ...p, [key]: "" }));
  };

  const activeCourse = COURSES.find((c) => c.id === activeTab);

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="navbar-inner">
          {/* Logo: use the actual HIET logo image; fallback to text block */}
          <a href="#" className="navbar-logo" aria-label="HIET Home">
            <img
              src="https://hiet.org/wp-content/uploads/2022/12/hiet_logo_240X44.png"
              alt="HIET Logo"
              className="navbar-logo-img"
              height="44"
              onError={(e) => {
                // If image fails to load, show fallback letter block
                e.currentTarget.style.display = "none";
                e.currentTarget.nextSibling.style.display = "flex";
              }}
            />
            {/* Fallback letter block (hidden by default, shown on image error) */}
            {/* <div className="navbar-logo-fallback" style={{ display: "none" }}>
              H
            </div>
            <span className="navbar-logo-text">HIET Ghaziabad</span> */}
          </a>

          <button className="btn btn-primary btn-sm" onClick={scrollToForm}>
            Apply Now →
          </button>
        </div>
      </nav>

      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-grid">
          {/* Left content */}
          <div className="fade-up">
            <div className="hero-badges">
              {[
                "AKTU Affiliated",
                "NAAC Accredited",
                "Admissions Open 2026-27",
              ].map((t) => (
                <span key={t} className="hero-badge">
                  {t}
                </span>
              ))}
            </div>

            <h1 className="hero-title">
              Build Your Future at
              <br />
              <span>Hi-Tech Institute</span>
            </h1>

            <p className="hero-sub">
              Top engineering &amp; management college in Ghaziabad.
              Industry-driven programs, world-class faculty, and 90% placement
              rate.
            </p>

            <div className="hero-stats">
              {STATS.map((s) => (
                <div key={s.label} className="hero-stat">
                  <div className="hero-stat-value">{s.value}</div>
                  <div className="hero-stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="hero-cta">
              <button
                className="btn btn-primary btn-lg pulse"
                onClick={scrollToForm}
              >
                Apply Now — Free
              </button>
              <button className="btn btn-outline btn-lg" onClick={scrollToForm}>
                Download Brochure
              </button>
            </div>

            <p className="hero-note">
              📍 Ghaziabad, Uttar Pradesh — Limited Seats Available
            </p>
          </div>

          {/* Enroll Form */}
          <div
            ref={formRef}
            id="enrollNow"
            className="form-card fade-up-delay-1"
          >
            {submitted ? (
              <div className="form-success">
                <div className="form-success-icon">🎉</div>
                <h3 className="form-success-title">Application Received!</h3>
                <p className="form-success-sub">
                  Our admissions team will contact you within 24 hours.
                </p>
                <button
                  className="btn btn-primary btn-md"
                  style={{ marginTop: 20 }}
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      email: "",
                      phone: "",
                      state: "",
                      course: "",
                    });
                  }}
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <>
                <div>
                  <div className="form-card-label">Admissions Open 2026–27</div>
                  <h2 className="form-card-title">
                    Apply for Free Counselling
                  </h2>
                  <p className="form-card-sub">
                    Get a callback from our experts within 2 hours
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate>
                  {[
                    {
                      id: "name",
                      label: "Full Name",
                      type: "text",
                      placeholder: "Enter your full name",
                    },
                    {
                      id: "email",
                      label: "Email Address",
                      type: "email",
                      placeholder: "your@email.com",
                    },
                    {
                      id: "phone",
                      label: "Phone Number",
                      type: "tel",
                      placeholder: "10-digit mobile number",
                    },
                  ].map((f) => (
                    <div key={f.id} className="field">
                      <label className="field-label">{f.label}</label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        value={form[f.id]}
                        className={`field-input${errors[f.id] ? " has-error" : ""}`}
                        onChange={(e) => update(f.id, e.target.value)}
                      />
                      {errors[f.id] && (
                        <div className="field-error">{errors[f.id]}</div>
                      )}
                    </div>
                  ))}

                  <div className="field">
                    <label className="field-label">State</label>
                    <select
                      value={form.state}
                      className={`field-input${errors.state ? " has-error" : ""}`}
                      onChange={(e) => update("state", e.target.value)}
                    >
                      <option value="">Select your state</option>
                      {STATES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    {errors.state && (
                      <div className="field-error">{errors.state}</div>
                    )}
                  </div>

                  <div className="field" style={{ marginBottom: 20 }}>
                    <label className="field-label">Course Interested In</label>
                    <select
                      value={form.course}
                      className={`field-input${errors.course ? " has-error" : ""}`}
                      onChange={(e) => update("course", e.target.value)}
                    >
                      <option value="">Select a course</option>
                      <option value="B.Tech">B.Tech (Engineering)</option>
                      <option value="MBA">MBA (Management)</option>
                      <option value="BBA">BBA (Business Administration)</option>
                      <option value="BCA">BCA (Computer Applications)</option>
                      <option value="MCA">MCA (Computer Applications)</option>
                      <option value="PGDM">PGDM</option>
                    </select>
                    {errors.course && (
                      <div className="field-error">{errors.course}</div>
                    )}
                  </div>

                  <button
                    className="btn btn-primary btn-full"
                    type="submit"
                    disabled={submitting}
                  >
                    {submitting ? "Submitting…" : "Apply Now — It's Free ✓"}
                  </button>
                  <p className="form-note">
                    🔒 Your information is safe with us. No spam.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ── COURSES ────────────────────────────────────────────────────── */}
      <section className="courses-section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-label">Programs We Offer</div>
            <h2 className="section-title">Choose Your Course</h2>
            <p className="section-sub">
              Industry-aligned programs designed to launch your career from day
              one
            </p>
          </div>

          {/* Tab buttons */}
          <div className="tabs">
            {COURSES.map((c) => (
              <button
                key={c.id}
                className={`tab-btn${activeTab === c.id ? " active" : ""}`}
                onClick={() => setActiveTab(c.id)}
              >
                {c.icon} {c.label}
              </button>
            ))}
          </div>

          {/* Active course detail */}
          {activeCourse && (
            <div
              className="course-detail"
              style={{
                border: `2px solid ${activeCourse.color}`,
                background: activeCourse.bg,
              }}
            >
              <div>
                <div
                  className="course-detail-tag"
                  style={{ color: activeCourse.color }}
                >
                  {activeCourse.label} Program
                </div>
                <h3 className="course-detail-title">
                  {activeCourse.label} — {activeCourse.desc}
                </h3>
                <div className="course-detail-meta">
                  {[
                    { l: "Duration", v: activeCourse.duration },
                    { l: "Eligibility", v: activeCourse.eligibility },
                    { l: "Seats", v: "Limited" },
                  ].map((m) => (
                    <div key={m.l} className="course-meta-item">
                      <span>{m.l}</span>
                      <strong>{m.v}</strong>
                    </div>
                  ))}
                </div>
              </div>
              <button className="btn btn-primary btn-md" onClick={scrollToForm}>
                Apply for {activeCourse.label} →
              </button>
            </div>
          )}

          {/* Course cards */}
          <div className="course-cards">
            {COURSES.map((c) => (
              <div
                key={c.id}
                className={`course-card${activeTab === c.id ? " active" : ""}`}
                onClick={() => setActiveTab(c.id)}
                style={{
                  borderColor: activeTab === c.id ? c.color : undefined,
                  background: activeTab === c.id ? c.bg : undefined,
                  boxShadow:
                    activeTab === c.id ? `0 4px 16px ${c.color}30` : undefined,
                }}
              >
                <div className="course-card-icon">{c.icon}</div>
                <div className="course-card-name">{c.label}</div>
                <div className="course-card-desc">{c.desc}</div>
                <span
                  className="course-card-tag"
                  style={{ background: c.bg, color: c.color }}
                >
                  {c.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY HIET ───────────────────────────────────────────────────── */}
      <section className="why-section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-label">Why HIET</div>
            <h2 className="section-title">Why Choose Hi-Tech Institute?</h2>
            <p className="section-sub">
              HIET offers a balanced learning experience with strong academics
              and hands-on research opportunities
            </p>
          </div>
          <div className="why-grid">
            {WHY.map((w) => (
              <div key={w.title} className="why-card">
                <div className="why-card-icon">{w.icon}</div>
                <h3 className="why-card-title">{w.title}</h3>
                <p className="why-card-desc">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECRUITERS ─────────────────────────────────────────────────── */}
      <section className="recruiters-section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-label">Placement Partners</div>
            <h2 className="section-title">Our Top Recruiters</h2>
            <p className="section-sub" style={{ margin: "0 auto" }}>
              500+ placement offers from India's top companies
            </p>
          </div>
          <div className="recruiters-grid">
            {RECRUITERS.map((r) => (
              <div key={r.name} className="recruiter-chip">
                <img
                  src={r.img}
                  alt={r.name}
                  className="recruiter-logo-img"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextSibling.style.display = "block";
                  }}
                />
                <span className="recruiter-logo-fallback">{r.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ─────────────────────────────────────────────────── */}
      <section className="cta-banner">
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 className="cta-banner-title">Ready to Build Your Future?</h2>
          <p className="cta-banner-sub">
            Seats are filling fast. Apply now for admissions 2026–27 and secure
            your spot at HIET.
          </p>
          <button className="btn btn-white btn-xl pulse" onClick={scrollToForm}>
            Apply Now — It's Free →
          </button>
          <p className="cta-banner-note">
            📞 Our counsellors will call you back within 2 hours
          </p>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────── */}
      <footer className="footer">
        <div className="container">
          <div className="footer-logo">
            <div className="footer-logo-box">H</div>
            <span className="footer-logo-name">
              Hi-Tech Institute of Engineering &amp; Technology
            </span>
          </div>
          <p className="footer-addr">
            Ghaziabad, Uttar Pradesh — AKTU Affiliated
          </p>
          <p className="footer-copy">© 2026 HIET. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
