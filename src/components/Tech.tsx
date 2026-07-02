export default function Tech() {
  const techs = [
    { name: 'RISC-V ISA', icon: '📟', category: 'Hardware' },
    { name: 'ROS 2', icon: '🤖', category: 'Robotics' },
    { name: 'PyTorch', icon: '🔥', category: 'Software' },
    { name: 'C++ 20', icon: '⚙', category: 'Language' },
    { name: 'TensorRT', icon: '🧠', category: 'Optimization' },
    { name: 'SystemVerilog', icon: '💾', category: 'Hardware' },
    { name: 'LiDAR Integration', icon: '🛰', category: 'Sensor' },
    { name: 'Ouroboros', icon: '🌀', category: 'Protocol' },
    { name: 'Nvidia Jetson', icon: '🔌', category: 'Edge Computing' },
    { name: 'CUDA', icon: '☄', category: 'Compute' },
    { name: 'Cadence Virtuoso', icon: '🔬', category: 'CAD' },
    { name: 'Docker / ROS-Docker', icon: '🐳', category: 'DevOps' },
  ]

  return (
    <section className="tech" id="tech" aria-label="Technology Stack">
      <div className="container">
        <div className="tech__header">
          <div className="section-label">
            <span style={{ color: 'var(--clr-emerald)' }}>■</span> Technology Stack
          </div>
          <h2 className="section-title">Engineered with Precision</h2>
          <p className="section-subtitle" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            We work with industry-standard toolsets and cutting-edge paradigms to deliver robust, high-performance physical computing systems.
          </p>
        </div>

        <div className="tech__grid">
          {techs.map((tech, i) => (
            <div key={i} className="card-glass tech-item" id={`tech-item-${i}`}>
              <div className="tech-item__icon" aria-hidden="true">
                {tech.icon}
              </div>
              <div>
                <div className="tech-item__name">{tech.name}</div>
                <div 
                  style={{ 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: '0.62rem', 
                    color: 'var(--clr-emerald)', 
                    textTransform: 'uppercase', 
                    marginTop: '0.2rem',
                    opacity: 0.8
                  }}
                >
                  {tech.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
