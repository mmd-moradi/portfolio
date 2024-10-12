"use client";


export const ContactEmailTemplate = ({
  email,
  name,
  message,
}:
  {name: string; email: string; message: string}) => {

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f4f4f4',
      padding: '20px',
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        maxWidth: '600px',
        margin: 'auto',
        border: '1px solid #e5e7eb'
      }}>
        <h2 style={{
          color: '#1f2937',
          fontSize: '24px',
          marginBottom: '16px'
        }}>New Contact Form Submission</h2>
        <p style={{
          color: '#4b5563',
          fontSize: '16px',
          lineHeight: '1.5',
          marginBottom: '8px'
        }}>
          <strong>Name:</strong> {name}
        </p>
        <p style={{
          color: '#4b5563',
          fontSize: '16px',
          lineHeight: '1.5',
          marginBottom: '8px'
        }}>
          <strong>Email:</strong> {email}
        </p>
        <p style={{
          color: '#4b5563',
          fontSize: '16px',
          lineHeight: '1.5',
          marginBottom: '16px'
        }}>
          <strong>Message:</strong>
        </p>
        <p style={{
          color: '#4b5563',
          fontSize: '16px',
          lineHeight: '1.5',
          marginBottom: '16px'
        }}>
          {message}
        </p>

        <div style={{
          marginTop: '20px',
          fontSize: '12px',
          color: '#9ca3af',
          textAlign: 'center'
        }}>
          <p>This email was sent from your portfolio website.</p>
        </div>
      </div>
    </div>
  )
}












