import { Row, Col, Form, Input, Select, Button, Typography } from 'antd'
import { WhatsAppOutlined } from '@ant-design/icons'
import { site } from '../data/site'
import { sessionOptions } from '../data/schedule'
import { brand } from '../theme'

const { Title, Paragraph } = Typography
const { TextArea } = Input

interface MessageValues {
  parent_name: string
  phone: string
  child_info: string
  preferred_session: string
  allergies_requirements?: string
}

// Build a pre-filled WhatsApp message from the form details.
function buildWhatsAppLink(v: MessageValues): string {
  const lines = [
    'Hi Squish Squash Studios! 🎨 I’d love to book a messy play class.',
    '',
    `Parent: ${v.parent_name}`,
    `Child: ${v.child_info}`,
    `Preferred session: ${v.preferred_session}`,
    `My WhatsApp: ${v.phone}`,
  ]
  if (v.allergies_requirements?.trim()) {
    lines.push(`Allergies / requirements: ${v.allergies_requirements.trim()}`)
  }
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`
}

export default function MessageForm() {
  const onFinish = (values: MessageValues) => {
    window.open(buildWhatsAppLink(values), '_blank', 'noopener')
  }

  return (
    <div
      style={{
        background: brand.bgCard,
        borderRadius: 24,
        padding: 32,
        boxShadow: '0 10px 15px -3px rgba(0,0,0,0.08)',
      }}
    >
      <Title level={3} style={{ marginTop: 0 }}>
        Send Us a Message
      </Title>
      <Paragraph style={{ color: brand.textMuted }}>
        Fill in the quick details and tap below — we’ll open WhatsApp with your message ready
        to send to our Durbanville coordinator.
      </Paragraph>

      <Form layout="vertical" onFinish={onFinish} requiredMark={false}>
        <Form.Item
          label="Parent's Full Name"
          name="parent_name"
          rules={[{ required: true, message: 'Please enter your name' }]}
        >
          <Input placeholder="Annelie van der Merwe" />
        </Form.Item>

        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              label="WhatsApp Number"
              name="phone"
              rules={[{ required: true, message: 'Please enter your number' }]}
            >
              <Input placeholder="082 579 1653" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Child's Age & Name"
              name="child_info"
              rules={[{ required: true, message: 'Please tell us about your child' }]}
            >
              <Input placeholder="Leo, 2 years old" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          label="Preferred Session"
          name="preferred_session"
          rules={[{ required: true, message: 'Please choose a session' }]}
        >
          <Select placeholder="Select a session..." options={sessionOptions} />
        </Form.Item>

        <Form.Item
          label="Dietary Requirements or Skin Allergies (if any)"
          name="allergies_requirements"
        >
          <TextArea
            rows={2}
            placeholder="e.g. Leo is allergic to gluten. We'd love a gluten-safe sensory tub!"
          />
        </Form.Item>

        <Button
          htmlType="submit"
          size="large"
          icon={<WhatsAppOutlined />}
          block
          style={{
            background: brand.whatsapp,
            borderColor: brand.whatsapp,
            color: '#fff',
          }}
        >
          Send via WhatsApp
        </Button>
      </Form>
    </div>
  )
}
