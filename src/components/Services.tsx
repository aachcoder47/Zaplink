export default function Services() {
  const services = [
    {
      no: '01',
      icon: '💾',
      title: 'Semiconductor Design',
      desc: 'Custom silicon architectures, RISC-V co-processors, and advanced analog/mixed-signal design for edge-AI applications with sub-5nm node precision.',
      tags: ['ASIC', 'FPGA', 'RISC-V', 'System-on-Chip'],
      color: 'rgba(52,211,153,0.08)',
      iconBg: 'rgba(52,211,153,0.1)',
      iconBorder: 'rgba(52,211,153,0.25)',
      line: 'linear-gradient(135deg, #34d399, #10b981)',
    },
    {
      no: '02',
      icon: '🧠',
      title: 'Artificial Intelligence',
      desc: 'Edge-native neural network optimization, tinyML pipelines, transformer fine-tuning, and ultra-low-latency computer vision for production environments.',
      tags: ['PyTorch', 'TensorRT', 'Edge AI', 'Computer Vision'],
      color: 'rgba(245,158,11,0.08)',
      iconBg: 'rgba(245,158,11,0.1)',
      iconBorder: 'rgba(245,158,11,0.25)',
      line: 'linear-gradient(135deg, #f59e0b, #d97706)',
    },
    {
      no: '03',
      icon: '🤖',
      title: 'Robotics Engineering',
      desc: 'Autonomous mobile robots (AMR), kinematic control loops, ROS2 navigation stack, and multi-sensor fusion engines for industrial and research applications.',
      tags: ['ROS2', 'LiDAR', 'SLAM', 'Control Systems'],
      color: 'rgba(45,212,191,0.08)',
      iconBg: 'rgba(45,212,191,0.1)',
      iconBorder: 'rgba(45,212,191,0.25)',
      line: 'linear-gradient(135deg, #2dd4bf, #0d9488)',
    },
  ]

  return (
    <section className="services" id="services" aria-label="Services section">
      <div className="container">
        <div className="services__header">
          <div className="section-label">
            <span style={{ color: 'var(--clr-emerald)' }}>⚙</span> Core Expertise
          </div>
          <h2 className="section-title">Our <span className="gradient-text">Capability</span> Spectrum</h2>
          <p className="section-subtitle">
            We bridge the gap between complex hardware and cognitive AI. Our multidisciplinary engineering teams deliver end-to-end cyber-physical systems.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, i) => (
            <div
              key={i}
              className="card-glass service-card"
              style={{
                '--card-glow': service.color,
                '--card-line': service.line,
              } as React.CSSProperties}
              id={`service-card-${i}`}
            >
              <div className="service-card__number">{service.no}</div>
              <div
                className="service-card__icon"
                style={{
                  background: service.iconBg,
                  borderColor: service.iconBorder,
                }}
              >
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <div className="service-card__tags">
                {service.tags.map((tag, j) => (
                  <span key={j} className="service-card__tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
