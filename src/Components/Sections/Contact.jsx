import { useState } from "react";
import { OnScroll } from "./OnScroll";
import "./Contact.css";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email address";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus("loading");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "c03307c6-42b3-4ecf-a53c-b8abe755cf67",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New message from ${formData.name} — Portfolio Contact`,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact-root">
      <div className="contact-orb" />
      <OnScroll>
        <div className="contact-inner">

          <div className="section-label">
            <div className="section-label-line" />
            Let's talk
          </div>

          <h2 className="section-heading">
            Get In <span>Touch</span>
          </h2>

          <p className="contact-subheading">
            Have a project in mind or just want to say hello? Fill out the form
            or reach out directly — I'll get back to you promptly.
          </p>

          <div className="contact-layout">

            {/* Left: Form */}
            <form className="contact-form" onSubmit={handleSubmit} noValidate>

              {status === "success" && (
                <div className="form-alert form-alert--success">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="#14b8a6" strokeWidth="1.3" />
                    <path
                      d="M5 8l2 2 4-4"
                      stroke="#14b8a6"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {status === "error" && (
                <div className="form-alert form-alert--error">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="#f87171" strokeWidth="1.3" />
                    <path
                      d="M8 5v3M8 11v.5"
                      stroke="#f87171"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    />
                  </svg>
                  Something went wrong. Please try again or contact me directly.
                </div>
              )}

              <div className="form-group">
                <label className="form-label" htmlFor="name">
                  Full Name <span className="form-required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Anthony Doe"
                  className={`form-input ${errors.name ? "form-input--error" : ""}`}
                />
                {errors.name && (
                  <span className="form-error-msg">{errors.name}</span>
                )}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email Address <span className="form-required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`form-input ${errors.email ? "form-input--error" : ""}`}
                />
                {errors.email && (
                  <span className="form-error-msg">{errors.email}</span>
                )}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">
                  Message <span className="form-required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className={`form-input form-textarea ${errors.message ? "form-input--error" : ""}`}
                />
                {errors.message && (
                  <span className="form-error-msg">{errors.message}</span>
                )}
              </div>

              <button
                type="submit"
                className="form-btn"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <span className="form-btn-spinner" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M1 7h12M8 2l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </>
                )}
              </button>

            </form>

            {/* Right: Contact info */}
            <div className="contact-info">

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M3 3h12a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"
                      stroke="#6366f1"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M2 5l7 5 7-5"
                      stroke="#6366f1"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div>
                  <div className="contact-info-label">Email</div>
                  <a href="mailto:adegbileanthony@gmail.com" className="contact-info-value">
                    adegbileanthony@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M3.6 2h2.8l1.2 3-1.7 1a10 10 0 0 0 4.1 4.1l1-1.7 3 1.2v2.8A1.6 1.6 0 0 1 12.4 14 10.4 10.4 0 0 1 2 3.6 1.6 1.6 0 0 1 3.6 2z"
                      stroke="#14b8a6"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <div className="contact-info-label">WhatsApp</div>
                  
                   <a href="https://wa.me/+2348034605554"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-info-value contact-info-value--teal"
                  >
                    +234 803 460 5554
                  </a>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="7" stroke="#f59e0b" strokeWidth="1.3" />
                    <path
                      d="M9 5v4l3 2"
                      stroke="#f59e0b"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div>
                  <div className="contact-info-label">Availability</div>
                  <div className="contact-info-value contact-info-value--amber">
                    Open to opportunities
                  </div>
                </div>
              </div>

              <div className="contact-socials">
                <div
                  className="contact-info-label"
                  style={{ marginBottom: "0.75rem" }}
                >
                  Socials
                </div>
                <div className="socials-row">
                  
               <a     href="https://github.com/renton-hash"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M8 1a7 7 0 0 0-2.213 13.641c.35.064.478-.152.478-.337v-1.18C4.03 13.5 3.622 12.2 3.622 12.2c-.319-.81-.779-1.026-.779-1.026-.637-.435.048-.426.048-.426.704.05 1.074.723 1.074.723.626 1.072 1.641.763 2.04.583.064-.453.245-.763.445-.938-1.557-.177-3.194-.778-3.194-3.465 0-.765.274-1.39.722-1.88-.072-.178-.313-.892.069-1.858 0 0 .588-.188 1.927.718A6.71 6.71 0 0 1 8 4.757c.596.003 1.196.08 1.756.237 1.338-.906 1.925-.718 1.925-.718.383.966.142 1.68.07 1.857.45.49.721 1.116.721 1.881 0 2.694-1.64 3.286-3.202 3.459.252.217.476.645.476 1.3v1.926c0 .187.127.405.482.337A7.001 7.001 0 0 0 8 1z"
                        fill="currentColor"
                      />
                    </svg>
                    GitHub
                  </a>
                  
                <a    href="https://www.linkedin.com/in/anthony-adegbile-3835121b1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M13.5 1h-11A1.5 1.5 0 0 0 1 2.5v11A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 13.5 1zM5.5 12.5h-2v-6h2v6zm-1-6.8a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4zm9 6.8h-2V9.3c0-.74-.27-1.25-1-1.25-.55 0-.87.37-1.01.73-.05.13-.06.3-.06.48v3.24h-2s.02-5.26 0-6h2v.85a2 2 0 0 1 1.8-1c1.31 0 2.27.86 2.27 2.7v3.45z"
                        fill="currentColor"
                      />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </OnScroll>
    </section>
  );
};