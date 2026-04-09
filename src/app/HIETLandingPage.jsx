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
  "Microsoft",
  "Google",
  "Amazon",
  "Deloitte",
  "IBM",
  "Infosys",
  "TCS",
  "Wipro",
  "Accenture",
  "Cognizant",
  "Dell",
  "Axis Bank",
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

export default function HIETLanding() {
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
      const payload = new URLSearchParams({
        ...form,
        secret_key: "el8zD5D2IzezTKBFx3iO",
        institute_id: "[]",
        city: "70",
      });
      await fetch(
        "https://script.google.com/macros/s/AKfycbwHvUvMRNeCQ9MNw8QOke8FwEdXm5mikoWvPcu5clBl29ZQ1C5UgiKOQp8HWjmPaQQ3/exec",
        { method: "POST", body: payload },
      );
    } catch {}
    setSubmitting(false);
    setSubmitted(true);
  };

  const scrollToForm = () =>
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });

  const activeCourse = COURSES.find((c) => c.id === activeTab);

  return (
    <div
      style={{
        fontFamily: "'Google Sans', 'Segoe UI', Arial, sans-serif",
        color: "#202124",
        background: "#fff",
        margin: 0,
        padding: 0,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap');
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        .btn-primary {
          background: #1a73e8; color: #fff; border: none; border-radius: 4px;
          font-size: 15px; font-weight: 600; cursor: pointer; transition: background 0.2s, box-shadow 0.2s;
          letter-spacing: 0.3px;
        }
        .btn-primary:hover { background: #1558b0; box-shadow: 0 2px 8px rgba(26,115,232,0.35); }
        .btn-outline {
          background: transparent; color: #1a73e8; border: 2px solid #1a73e8;
          border-radius: 4px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s;
        }
        .btn-outline:hover { background: #e8f0fe; }
        input, select {
          width: 100%; padding: 10px 14px; border: 1.5px solid #dadce0; border-radius: 4px;
          font-size: 14px; font-family: inherit; background: #fff; transition: border 0.2s, box-shadow 0.2s;
          outline: none; color: #202124;
        }
        input:focus, select:focus { border-color: #1a73e8; box-shadow: 0 0 0 3px rgba(26,115,232,0.15); }
        .field-err { border-color: #d93025 !important; }
        .err-msg { color: #d93025; font-size: 12px; margin-top: 3px; }
        .tag { display: inline-block; background: #e8f0fe; color: #1a73e8; border-radius: 12px; padding: 2px 10px; font-size: 12px; font-weight: 600; }
        .recruiter-logo {
          display: flex; align-items: center; justify-content: center;
          border: 1px solid #e8eaed; border-radius: 8px; padding: 12px 16px;
          font-size: 13px; font-weight: 600; color: #5f6368;
          transition: box-shadow 0.2s, border-color 0.2s;
          letter-spacing: 0.2px;
        }
        .recruiter-logo:hover { box-shadow: 0 2px 10px rgba(0,0,0,0.1); border-color: #1a73e8; color: #1a73e8; }
        .course-tab {
          padding: 8px 20px; border-radius: 20px; border: 1.5px solid #dadce0;
          font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s;
          background: #fff; color: #5f6368;
        }
        .course-tab.active { background: #1a73e8; color: #fff; border-color: #1a73e8; }
        .why-card {
          border: 1px solid #e8eaed; border-radius: 12px; padding: 20px;
          transition: box-shadow 0.2s; background: #fff;
        }
        .why-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.1); }
        .stat-card {
          text-align: center; padding: 20px 16px; background: #f8f9fa;
          border-radius: 12px;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.6s ease forwards; }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.04); }
        }
        .pulse { animation: pulse 2.5s ease-in-out infinite; }
        .sticky-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          transition: all 0.3s;
        }
      `}</style>

      {/* Sticky Nav */}
      <nav
        className="sticky-nav"
        style={{
          background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
          boxShadow: scrolled ? "0 1px 6px rgba(0,0,0,0.1)" : "none",
          padding: "12px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 32,
              height: 32,
              background: "linear-gradient(135deg,#1a73e8,#0d47a1)",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: 800,
              fontSize: 16,
            }}
          >
            H
          </div>
          <span
            style={{
              fontWeight: 700,
              fontSize: 15,
              color: scrolled ? "#202124" : "#fff",
            }}
          >
            HIET Ghaziabad
          </span>
        </div>
        <button
          className="btn-primary"
          onClick={scrollToForm}
          style={{ padding: "8px 20px", fontSize: 13 }}
        >
          Apply Now →
        </button>
      </nav>

      {/* HERO */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #0d47a1 0%, #1a73e8 55%, #34a853 100%)",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "100px 16px 60px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 60%), radial-gradient(circle at 10% 80%, rgba(0,0,0,0.15) 0%, transparent 50%)",
          }}
        />
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 420px",
            gap: 48,
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Left */}
          <div className="fade-up">
            <div
              style={{
                display: "flex",
                gap: 8,
                marginBottom: 20,
                flexWrap: "wrap",
              }}
            >
              {[
                "AKTU Affiliated",
                "NAAC Accredited",
                "Admissions Open 2026-27",
              ].map((t) => (
                <span
                  key={t}
                  style={{
                    background: "rgba(255,255,255,0.2)",
                    color: "#fff",
                    borderRadius: 20,
                    padding: "4px 12px",
                    fontSize: 12,
                    fontWeight: 600,
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            <h1
              style={{
                fontSize: "clamp(28px,5vw,52px)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.15,
                marginBottom: 16,
              }}
            >
              Build Your Future at
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(90deg,#fff,rgba(255,255,255,0.8))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Hi-Tech Institute
              </span>
            </h1>
            <p
              style={{
                fontSize: 18,
                color: "rgba(255,255,255,0.88)",
                marginBottom: 32,
                lineHeight: 1.6,
                maxWidth: 520,
              }}
            >
              Top engineering & management college in Ghaziabad. Industry-driven
              programs, world-class faculty, and 90% placement rate.
            </p>
            {/* Stats row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: 12,
                marginBottom: 36,
              }}
            >
              {STATS.map((s) => (
                <div
                  key={s.label}
                  style={{
                    textAlign: "center",
                    background: "rgba(255,255,255,0.12)",
                    borderRadius: 12,
                    padding: "14px 8px",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "clamp(18px,3vw,26px)",
                      fontWeight: 800,
                      color: "#fff",
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "rgba(255,255,255,0.75)",
                      marginTop: 2,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button
                className="btn-primary pulse"
                onClick={scrollToForm}
                style={{ padding: "14px 32px", fontSize: 16 }}
              >
                Apply Now — Free
              </button>
              <button
                className="btn-outline"
                style={{
                  padding: "14px 28px",
                  fontSize: 15,
                  borderColor: "rgba(255,255,255,0.6)",
                  color: "#fff",
                }}
                onClick={scrollToForm}
              >
                Download Brochure
              </button>
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: 12,
                marginTop: 12,
              }}
            >
              📍 Ghaziabad, Uttar Pradesh — Limited Seats Available
            </p>
          </div>

          {/* Form */}
          <div
            ref={formRef}
            id="enrollNow"
            style={{
              background: "#fff",
              borderRadius: 16,
              padding: 28,
              boxShadow: "0 24px 64px rgba(0,0,0,0.3)",
            }}
            className="fade-up"
          >
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: 56, marginBottom: 12 }}>🎉</div>
                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: "#137333",
                    marginBottom: 8,
                  }}
                >
                  Application Received!
                </h3>
                <p style={{ color: "#5f6368", fontSize: 14 }}>
                  Our admissions team will contact you within 24 hours.
                </p>
                <button
                  className="btn-primary"
                  style={{ marginTop: 20, padding: "10px 28px" }}
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
                <div style={{ marginBottom: 20 }}>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#1a73e8",
                      letterSpacing: 1,
                      textTransform: "uppercase",
                      marginBottom: 4,
                    }}
                  >
                    Admissions Open 2026–27
                  </div>
                  <h2
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      margin: 0,
                      lineHeight: 1.3,
                    }}
                  >
                    Apply for Free Counselling
                  </h2>
                  <p style={{ fontSize: 13, color: "#5f6368", marginTop: 4 }}>
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
                    <div key={f.id} style={{ marginBottom: 14 }}>
                      <label
                        style={{
                          display: "block",
                          fontSize: 13,
                          fontWeight: 600,
                          marginBottom: 4,
                          color: "#3c4043",
                        }}
                      >
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        value={form[f.id]}
                        className={errors[f.id] ? "field-err" : ""}
                        onChange={(e) => {
                          setForm((p) => ({ ...p, [f.id]: e.target.value }));
                          setErrors((p) => ({ ...p, [f.id]: "" }));
                        }}
                      />
                      {errors[f.id] && (
                        <div className="err-msg">{errors[f.id]}</div>
                      )}
                    </div>
                  ))}
                  <div style={{ marginBottom: 14 }}>
                    <label
                      style={{
                        display: "block",
                        fontSize: 13,
                        fontWeight: 600,
                        marginBottom: 4,
                        color: "#3c4043",
                      }}
                    >
                      State
                    </label>
                    <select
                      value={form.state}
                      className={errors.state ? "field-err" : ""}
                      onChange={(e) => {
                        setForm((p) => ({ ...p, state: e.target.value }));
                        setErrors((p) => ({ ...p, state: "" }));
                      }}
                    >
                      <option value="">Select your state</option>
                      {[
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
                      ].map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    {errors.state && (
                      <div className="err-msg">{errors.state}</div>
                    )}
                  </div>
                  <div style={{ marginBottom: 20 }}>
                    <label
                      style={{
                        display: "block",
                        fontSize: 13,
                        fontWeight: 600,
                        marginBottom: 4,
                        color: "#3c4043",
                      }}
                    >
                      Course Interested In
                    </label>
                    <select
                      value={form.course}
                      className={errors.course ? "field-err" : ""}
                      onChange={(e) => {
                        setForm((p) => ({ ...p, course: e.target.value }));
                        setErrors((p) => ({ ...p, course: "" }));
                      }}
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
                      <div className="err-msg">{errors.course}</div>
                    )}
                  </div>
                  <button
                    className="btn-primary"
                    type="submit"
                    disabled={submitting}
                    style={{ width: "100%", padding: "13px", fontSize: 15 }}
                  >
                    {submitting ? "Submitting…" : "Apply Now — It's Free ✓"}
                  </button>
                  <p
                    style={{
                      fontSize: 11,
                      color: "#80868b",
                      textAlign: "center",
                      marginTop: 10,
                    }}
                  >
                    🔒 Your information is safe with us. No spam.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section style={{ padding: "80px 16px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#1a73e8",
                letterSpacing: 1.5,
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Programs We Offer
            </div>
            <h2 style={{ fontSize: 36, fontWeight: 800, marginBottom: 12 }}>
              Choose Your Course
            </h2>
            <p
              style={{
                color: "#5f6368",
                fontSize: 16,
                maxWidth: 500,
                margin: "0 auto",
              }}
            >
              Industry-aligned programs designed to launch your career from day
              one
            </p>
          </div>
          {/* Tabs */}
          <div
            style={{
              display: "flex",
              gap: 10,
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: 32,
            }}
          >
            {COURSES.map((c) => (
              <button
                key={c.id}
                className={`course-tab${activeTab === c.id ? " active" : ""}`}
                onClick={() => setActiveTab(c.id)}
              >
                {c.icon} {c.label}
              </button>
            ))}
          </div>
          {/* Course Detail Card */}
          {activeCourse && (
            <div
              style={{
                border: `2px solid ${activeCourse.color}`,
                borderRadius: 16,
                padding: "28px 32px",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: 24,
                alignItems: "center",
                background: activeCourse.bg,
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: activeCourse.color,
                    marginBottom: 6,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                  }}
                >
                  {activeCourse.label} Program
                </div>
                <h3 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8 }}>
                  {activeCourse.label} — {activeCourse.desc}
                </h3>
                <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                  <div>
                    <span style={{ fontSize: 12, color: "#5f6368" }}>
                      Duration
                    </span>
                    <br />
                    <strong style={{ fontSize: 15 }}>
                      {activeCourse.duration}
                    </strong>
                  </div>
                  <div>
                    <span style={{ fontSize: 12, color: "#5f6368" }}>
                      Eligibility
                    </span>
                    <br />
                    <strong style={{ fontSize: 15 }}>
                      {activeCourse.eligibility}
                    </strong>
                  </div>
                  <div>
                    <span style={{ fontSize: 12, color: "#5f6368" }}>
                      Seats
                    </span>
                    <br />
                    <strong style={{ fontSize: 15 }}>Limited</strong>
                  </div>
                </div>
              </div>
              <button
                className="btn-primary"
                onClick={scrollToForm}
                style={{
                  padding: "12px 28px",
                  fontSize: 15,
                  whiteSpace: "nowrap",
                }}
              >
                Apply for {activeCourse.label} →
              </button>
            </div>
          )}
          {/* All course cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: 20,
              marginTop: 32,
            }}
          >
            {COURSES.map((c) => (
              <div
                key={c.id}
                onClick={() => setActiveTab(c.id)}
                style={{
                  border: `1.5px solid ${activeTab === c.id ? c.color : "#e8eaed"}`,
                  borderRadius: 12,
                  padding: "20px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  background: activeTab === c.id ? c.bg : "#fff",
                  transform: activeTab === c.id ? "translateY(-3px)" : "none",
                  boxShadow:
                    activeTab === c.id ? `0 4px 16px ${c.color}30` : "none",
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 8 }}>{c.icon}</div>
                <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>
                  {c.label}
                </div>
                <div style={{ fontSize: 13, color: "#5f6368" }}>{c.desc}</div>
                <div style={{ marginTop: 12, display: "flex", gap: 6 }}>
                  <span
                    style={{
                      fontSize: 11,
                      background: c.bg,
                      color: c.color,
                      borderRadius: 10,
                      padding: "2px 8px",
                      fontWeight: 700,
                    }}
                  >
                    {c.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section style={{ padding: "80px 16px", background: "#f8f9fa" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#1a73e8",
                letterSpacing: 1.5,
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Why HIET
            </div>
            <h2 style={{ fontSize: 36, fontWeight: 800, marginBottom: 12 }}>
              Why Choose Hi-Tech Institute?
            </h2>
            <p
              style={{
                color: "#5f6368",
                fontSize: 16,
                maxWidth: 540,
                margin: "0 auto",
              }}
            >
              HIET offers a balanced learning experience with strong academics
              and hands-on research opportunities
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: 20,
            }}
          >
            {WHY.map((w) => (
              <div key={w.title} className="why-card">
                <div style={{ fontSize: 32, marginBottom: 12 }}>{w.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 6 }}>
                  {w.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "#5f6368",
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruiters */}
      <section style={{ padding: "80px 16px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#1a73e8",
                letterSpacing: 1.5,
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Placement Partners
            </div>
            <h2 style={{ fontSize: 36, fontWeight: 800, marginBottom: 8 }}>
              Our Top Recruiters
            </h2>
            <p style={{ color: "#5f6368", fontSize: 16 }}>
              500+ placement offers from India's top companies
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))",
              gap: 12,
            }}
          >
            {RECRUITERS.map((r) => (
              <div key={r} className="recruiter-logo">
                {r}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        style={{
          background: "linear-gradient(135deg,#0d47a1,#1a73e8)",
          padding: "60px 16px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: 36,
              fontWeight: 800,
              color: "#fff",
              marginBottom: 12,
            }}
          >
            Ready to Build Your Future?
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "rgba(255,255,255,0.85)",
              marginBottom: 28,
            }}
          >
            Seats are filling fast. Apply now for admissions 2026–27 and secure
            your spot at HIET.
          </p>
          <button
            className="btn-primary pulse"
            onClick={scrollToForm}
            style={{
              padding: "15px 40px",
              fontSize: 17,
              background: "#fff",
              color: "#1a73e8",
            }}
          >
            Apply Now — It's Free →
          </button>
          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: 12,
              marginTop: 14,
            }}
          >
            📞 Our counsellors will call you back within 2 hours
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#202124",
          color: "#9aa0a6",
          padding: "32px 16px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              marginBottom: 12,
            }}
          >
            <div
              style={{
                width: 30,
                height: 30,
                background: "#1a73e8",
                borderRadius: 6,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: 800,
                fontSize: 15,
              }}
            >
              H
            </div>
            <span style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>
              Hi-Tech Institute of Engineering & Technology
            </span>
          </div>
          <p style={{ fontSize: 13, marginBottom: 4 }}>
            Ghaziabad, Uttar Pradesh — AKTU Affiliated
          </p>
          <p style={{ fontSize: 12, color: "#5f6368" }}>
            © 2026 HIET. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
