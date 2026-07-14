import type { CSSProperties } from 'react'
import { Row, Col, Image, Typography } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { gallery } from '../data/gallery'

const { Title, Paragraph } = Typography

// Looping nav arrows for the lightbox: at either end they wrap around to the
// other end instead of disabling (antd's built-in arrows are hidden via CSS).
const navBtn: CSSProperties = {
  position: 'fixed',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 1100,
  width: 48,
  height: 48,
  borderRadius: '50%',
  border: 'none',
  cursor: 'pointer',
  background: 'rgba(0, 0, 0, 0.45)',
  color: '#fff',
  fontSize: 20,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export default function Gallery() {
  return (
    <div id="gallery" className="section-block">
      <div className="container">
        <div className="section-header">
          <span className="subheading">Look Inside the Fun</span>
          <Title level={2} className="section-title">
            Laughter, Splashes, &amp; Bright Discoveries
          </Title>
          <Paragraph className="section-desc">
            I don't know about you but when I go to a restaurant I love to view the menu before I go. 
            So here is a sneak peak at what our classes are about and what you can expect😄 
            We look forward to having you over ☕
          </Paragraph>
        </div>

        {/* Image.PreviewGroup gives a built-in lightbox with keyboard nav,
            replacing the hand-written modal from the original site. */}
        <Image.PreviewGroup
          preview={{
            // Only prev/next — the default zoom/rotate/flip toolbar
            // (originalNode) is intentionally not rendered.
            toolbarRender: (_originalNode, { actions: { onActive }, current, total }) => (
              <>
                <button
                  type="button"
                  aria-label="Previous image"
                  style={{ ...navBtn, right: '68px' }}
                  onClick={() => onActive?.(current === 0 ? total - 1 : -1)}
                >
                  <LeftOutlined />
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  style={{ ...navBtn, left: '68px' }}
                  onClick={() => onActive?.(current === total - 1 ? -(total - 1) : 1)}
                >
                  <RightOutlined />
                </button>
              </>
            ),
          }}
        >
          <Row gutter={[16, 16]}>
            {gallery.map((photo) => (
              <Col xs={12} md={6} key={photo.src}>
                <div style={{ borderRadius: 16, overflow: 'hidden', aspectRatio: '1 / 1' }}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width="100%"
                    height="100%"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </Col>
            ))}
          </Row>
        </Image.PreviewGroup>
      </div>
    </div>
  )
}
