function Dashboard() {
  return (
    <section className="dashboard-section" id="dashboard">

      <div className="container">

        <div className="dashboard-heading">
          <span className="section-label">YOUR AI WORKSPACE</span>

          <h2>
            One place for
            <br />
            <span>everything</span>
          </h2>

          <p>
            Bring your tools, data and workflows together
            in one intelligent workspace.
          </p>
        </div>

        <div className="large-dashboard">

          <div className="dashboard-sidebar">

            <div className="side-logo">
              ✦ IX AI Chatbot
            </div>

            <div className="side-menu active">
              ▦ Overview
            </div>

            <div className="side-menu">
              ◇ Projects
            </div>

            <div className="side-menu">
              ◎ Analytics
            </div>

            <div className="side-menu">
              ⚡ Automations
            </div>

            <div className="side-menu">
              ⚙ Settings
            </div>

          </div>

          <div className="dashboard-main">

            <div className="dash-top">
              <div>
                <small>Good morning, Abdul</small>
                <h3>Here's your overview</h3>
              </div>

              <button className="small-btn">
                + New workflow
              </button>
            </div>

            <div className="dash-cards">

              <div>
                <small>Tasks completed</small>
                <strong>1,284</strong>
                <span>↑ 18.2%</span>
              </div>

              <div>
                <small>Hours saved</small>
                <strong>248h</strong>
                <span>↑ 24.8%</span>
              </div>

              <div>
                <small>AI efficiency</small>
                <strong>94.8%</strong>
                <span>↑ 9.4%</span>
              </div>

            </div>

            <div className="dash-bottom">

              <div className="activity-card">
                <h4>Recent activity</h4>

                <div className="activity">
                  <div className="activity-icon">✦</div>
                  <div>
                    <strong>Invoice processed</strong>
                    <small>AI automation completed</small>
                  </div>
                  <span>2m</span>
                </div>

                <div className="activity">
                  <div className="activity-icon">⚡</div>
                  <div>
                    <strong>Workflow completed</strong>
                    <small>Marketing automation</small>
                  </div>
                  <span>14m</span>
                </div>

                <div className="activity">
                  <div className="activity-icon">◈</div>
                  <div>
                    <strong>New report generated</strong>
                    <small>Analytics dashboard</small>
                  </div>
                  <span>32m</span>
                </div>

              </div>

              <div className="progress-card">
                <h4>Weekly productivity</h4>

                <div className="progress-circle">
                  <span>87%</span>
                </div>

                <p>Great work this week!</p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Dashboard;