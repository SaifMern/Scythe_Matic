import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(req) {
  try {
    const { from_name, from_email, phone, subject, message } = await req.json();

    if (!from_name || !from_email || !message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const emailSubject = subject
      ? subject + ' — ' + from_name
      : 'New Message from ' + from_name;

    // 1 — Email to you
    await transporter.sendMail({
      from: '"Scythematic Contact" <' + process.env.GMAIL_USER + '>',
      to: process.env.GMAIL_USER,
      replyTo: from_email,
      subject: emailSubject,
      html:
        '<div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;background:#0B111E;color:#F8FAFC;padding:40px 32px;border-radius:16px;">' +
        '<div style="margin-bottom:28px;"><span style="font-size:22px;font-weight:800;letter-spacing:-0.04em;color:#00D2C4;">Scythematic</span></div>' +
        '<h2 style="font-size:18px;font-weight:700;margin:0 0 20px;color:#F8FAFC;">New Contact Form Submission</h2>' +
        '<table style="width:100%;border-collapse:collapse;">' +
        '<tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#94a3b8;font-size:12px;width:100px;text-transform:uppercase;letter-spacing:0.05em;">Name</td>' +
        '<td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);font-size:14px;font-weight:500;">' + from_name + '</td></tr>' +
        '<tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#94a3b8;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;">Email</td>' +
        '<td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);font-size:14px;font-weight:500;">' + from_email + '</td></tr>' +
        '<tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#94a3b8;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;">Phone</td>' +
        '<td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);font-size:14px;font-weight:500;">' + (phone || 'Not provided') + '</td></tr>' +
        '<tr><td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#94a3b8;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;">Subject</td>' +
        '<td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);font-size:14px;font-weight:500;">' + (subject || 'Not provided') + '</td></tr>' +
        '</table>' +
        '<div style="margin-top:20px;">' +
        '<p style="color:#94a3b8;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;margin:0 0 10px;">Message</p>' +
        '<div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:16px;font-size:14px;line-height:1.75;color:#cbd5e1;">' + message + '</div>' +
        '</div>' +
        '<div style="margin-top:28px;padding-top:20px;border-top:1px solid rgba(255,255,255,0.08);font-size:12px;color:#475569;">Sent via Scythematic contact form.</div>' +
        '</div>',
    });

    // 2 — Auto-reply to user
    await transporter.sendMail({
      from: '"Scythematic" <' + process.env.GMAIL_USER + '>',
      to: from_email,
      subject: 'We received your message — Scythematic',
      html:
        '<div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;background:#0B111E;color:#F8FAFC;padding:40px 32px;border-radius:16px;">' +
        '<div style="margin-bottom:28px;"><span style="font-size:22px;font-weight:800;letter-spacing:-0.04em;color:#00D2C4;">Scythematic</span></div>' +
        '<h2 style="font-size:18px;font-weight:700;margin:0 0 10px;color:#F8FAFC;">Thank you, ' + from_name + '!</h2>' +
        '<p style="color:#94a3b8;font-size:14px;line-height:1.75;margin:0 0 24px;">We have received your message and our team will get back to you within 24 hours.</p>' +
        '<div style="background:rgba(0,210,196,0.06);border:1px solid rgba(0,210,196,0.2);border-radius:12px;padding:18px;margin-bottom:24px;">' +
        '<p style="color:#94a3b8;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 8px;">Your Message</p>' +
        '<p style="font-size:14px;line-height:1.75;color:#cbd5e1;margin:0;">' + message + '</p>' +
        '</div>' +
        '<div style="background:rgba(255,255,255,0.04);border-radius:12px;padding:18px;margin-bottom:28px;">' +
        '<p style="color:#94a3b8;font-size:13px;margin:0 0 10px;">You can also reach us directly:</p>' +
        '<p style="font-size:13px;color:#cbd5e1;margin:0 0 5px;">Email: vortaxstudio6@gmail.com</p>' +
        '<p style="font-size:13px;color:#cbd5e1;margin:0;">Website: scythematic.com</p>' +
        '</div>' +
        '<div style="text-align:center;margin-bottom:24px;">' +
        '<a href="https://scythematic.com" style="display:inline-block;background:#00D2C4;color:#0B111E;font-weight:700;font-size:14px;padding:12px 28px;border-radius:999px;text-decoration:none;">Visit Our Website</a>' +
        '</div>' +
        '<div style="padding-top:20px;border-top:1px solid rgba(255,255,255,0.08);font-size:12px;color:#475569;text-align:center;">' +
        '&copy; ' + new Date().getFullYear() + ' Scythematic. All rights reserved.' +
        '</div>' +
        '</div>',
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error('Nodemailer error:', err);
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
