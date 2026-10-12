import "../style/Contact.css"

function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Reservation submitted successfully!");
  };

  return (
    <div className="contact-page">

      <div className="contact-line">
        <span></span>
        <b>•</b>
        <span></span>
      </div>
      <div className="contact-container">

        <div className="contact-info">

          <p className="contact-label">
            GET IN TOUCH
          </p>

          <h1>
            Reserve your
            <br />
            evening with us
          </h1>

          <p className="contact-description">
            We would love to host you. Fill out the form and
            our team will confirm your reservation within the hour.
          </p>
          <div className="info-item">

            <div className="info-icon">
              📍
            </div>

            <p>
              Beach Road, Kozhikode, Kerala 673001
            </p>

          </div>

          <div className="info-item">

            <div className="info-icon">
              ☎
            </div>

            <p>
              +91 495 000 1234
            </p>

          </div>

          <div className="info-item">

            <div className="info-icon">
              ✉
            </div>

            <p>
              hello@savoria.in
            </p>

          </div>

          <div className="info-item">

            <div className="info-icon">
              ◷
            </div>

            <p>
              Open daily · 12 PM – 11 PM
            </p>

          </div>

        </div>

        <div className="reservation-box">

          <form onSubmit={handleSubmit}>

            <div className="name-row">

              <div className="form-group">

                <label>
                  FIRST NAME
                </label>

                <input
                  type="text"
                  placeholder="Arjun"
                  required
                />

              </div>
              <div className="form-group">

                <label>
                  LAST NAME
                </label>

                <input
                  type="text"
                  placeholder="Nair"
                  required
                />

              </div>

            </div>

            <div className="form-group">

              <label>
                EMAIL
              </label>

              <input
                type="email"
                placeholder="you@email.com"
                required
              />

            </div>

            <div className="name-row">

              <div className="form-group">

                <label>
                  DATE
                </label>

                <input
                  type="date"
                  required
                />

              </div>
              <div className="form-group">

                <label>
                  GUESTS
                </label>

                <select required>

                  <option value="">
                    Select guests
                  </option>

                  <option>
                    1–2 guests
                  </option>

                  <option>
                    3–4 guests
                  </option>

                  <option>
                    5–6 guests
                  </option>

                  <option>
                    7+ guests
                  </option>

                </select>

              </div>

            </div>

            <div className="form-group">

              <label>
                SPECIAL REQUESTS
              </label>

              <textarea
                placeholder="Allergies, seating preferences, occasion..."
              ></textarea>

            </div>

            <button
              className="reservation-btn"
              type="submit"
            >
              Confirm Reservation
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Contact;