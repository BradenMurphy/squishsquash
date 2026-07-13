import { Row, Col, Typography, Card } from 'antd'
import { commitments } from '../data/benefits'
import { brand } from '../theme'

const { Title, Paragraph } = Typography

export default function Classes() {
  return (
    <div id="classes" className="section-block">
      <div className="container">
        <div className="section-header">
          <span className="subheading">Our Play Sessions</span>
          <Title level={2} className="section-title">
            Designed for Happy Kids, Loved by Parents
          </Title>
          <Paragraph className="section-desc">
            I wanted to make a space where children and parents can come over and feel like they are just on a playdate. 
            All our ingredients are taste safe and fun proof.
          </Paragraph>
        </div>

        <Row gutter={[24, 24]}>
          {commitments.map((c) => (
            <Col xs={24} md={8} key={c.title}>
              <Card style={{ height: '100%' }}>
                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div
                    style={{
                      flexShrink: 0,
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: c.color,
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                    }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <Title level={4} style={{ margin: 0 }}>
                      {c.title}
                    </Title>
                    <Paragraph style={{ color: brand.textMuted, margin: 0 }}>{c.desc}</Paragraph>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}
