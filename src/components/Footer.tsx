import { Layout, Row, Col, Typography } from 'antd'
import { FacebookFilled, InstagramFilled } from '@ant-design/icons'
import Logo from './Logo'
import { site } from '../data/site'
import { brand } from '../theme'

const { Paragraph } = Typography

export default function Footer() {
  return (
    <Layout.Footer style={{ background: brand.bgAlt, padding: 0 }}>
      <div className="container" style={{ padding: '64px 20px' }}>
        <Row gutter={[40, 40]}>
          <Col xs={24} md={16}>
            <Logo />
            <Paragraph style={{ color: brand.textMuted, marginTop: 16 }}>
              A safe, non-toxic, and dynamic sensory play hub in central Durbanville.
              Dedicated to nurturing child brains through laughter, creative splats, and
              worry-free messy exploration.
            </Paragraph>
            <div style={{ display: 'flex', gap: 20, fontSize: '2rem', marginTop: 8 }}>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener"
                aria-label="Facebook"
                style={{ color: '#1877F2' }}
              >
                <FacebookFilled />
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
                style={{ color: '#E4405F' }}
              >
                <InstagramFilled />
              </a>
            </div>
          </Col>
        </Row>
      </div>

      <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', padding: '20px 0' }}>
        <div
          className="container"
          style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'space-between', color: brand.textMuted, fontSize: '0.9rem' }}
        >
          <p style={{ margin: 0 }}>
            © 2026 Squish Squash Studios. All Rights Reserved. Made with love for happy kids
            in Durbanville.
          </p>
          <p style={{ margin: 0 }}>Optimized for free hosting on GitHub Pages 🚀</p>
        </div>
      </div>
    </Layout.Footer>
  )
}
