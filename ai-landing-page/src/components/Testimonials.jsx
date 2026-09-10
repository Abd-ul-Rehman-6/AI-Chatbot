function Testimonials() {
  return (
    <section className="testimonials">

      <div className="container">

        <div className="section-heading">
          <span className="section-label">CUSTOMER STORIES</span>

          <h2>
            Loved by teams
            <br />
            <span>everywhere</span>
          </h2>
        </div>

        <div className="testimonial-grid">

          <div className="testimonial-card">
            <div className="stars">★★★★★</div>

            <p>
              "NovaAI completely changed the way our team
              works. We save hours every week through automation"
            </p>

            <div className="user">
              <div className="avatar">JD</div>
              <div>
                <strong>John Davis</strong>
                <small>Product Manager</small>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="stars">★★★★★</div>

            <p>
              "The interface is incredibly simple while
              still giving us all the powerful AI features we need."
            </p>

            <div className="user">
              <div className="avatar">SM</div>
              <div>
                <strong>Sarah Miller</strong>
                <small>Founder, Lumio</small>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="stars">★★★★★</div>

            <p>
              "Our productivity improved significantly after
              moving our workflows onto NovaAI."
            </p>

            <div className="user">
              <div className="avatar">MK</div>
              <div>
                <strong>Michael Kim</strong>
                <small>Engineering Lead</small>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;