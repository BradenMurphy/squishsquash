import { Row, Col, Typography } from 'antd'
import { site } from '../data/site'
import StudioMap from './StudioMap'
import { brand } from '../theme'

const { Title } = Typography

const infoItems = [
  { icon: '📍', title: 'Our Durbanville Studio', value: site.address },
  {
    icon: '✉️',
    title: 'Email Support',
    value: <a href={`mailto:${site.email}`}>{site.email}</a>,
  },
  {
    icon: '📞',
    title: 'Call Us',
    value: (
      <>
        <a href={`tel:${site.phone.replace(/ /g, '')}`}>{site.phone}</a> ({site.coordinator})
      </>
    ),
  },
  {
    icon: '💬',
    title: 'WhatsApp',
    value: (
      <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
        Chat with {site.coordinator.split(' ')[0]}
      </a>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ paddingBottom: 0 }}>
      <div className="container">
        <div className="section-header">
          <span className="subheading">Get in Touch</span>
          <Title level={2} className="section-title">
            Find Us in Durbanville
          </Title>
        </div>

        <Row gutter={[24, 24]} style={{ marginBottom: 32 }}>
          {infoItems.map((item) => (
            <Col xs={24} sm={12} md={6} key={item.title}>
              <div style={{ display: 'flex', gap: 12 }}>
                <span style={{ fontSize: '1.4rem' }}>{item.icon}</span>
                <div>
                  <h5 style={{ margin: 0 }}>{item.title}</h5>
                  <p style={{ margin: 0, color: brand.textMuted }}>{item.value}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <StudioMap height={500} fullBleed />
      </div>
    </section>
  )
}
