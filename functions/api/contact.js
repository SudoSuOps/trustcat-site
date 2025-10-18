import { Resend } from 'resend';

export async function onRequest(context) {
  const { request } = context;

  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const resend = new Resend(context.env.RESEND_API_KEY);
    const data = await request.json();
    
    const { name, email, message, workload, gpu_count, duration_days, budget_usd, type } = data;

    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: 'Name and email required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    let emailSubject = '';
    let emailHtml = '';

    if (type === 'compute-request') {
      emailSubject = `🔷 REQUEST: ${name} | ${gpu_count}x GPUs | ${duration_days}d`;
      emailHtml = `
        <h2 style="color:#00FF00; font-family:monospace;">NEW COMPUTE REQUEST</h2>
        <pre style="color:#C0C0C0; font-family:monospace; white-space:pre-wrap; background:#1C2526; padding:1rem;">
Name:        ${name}
Email:       ${email}
Workload:    ${workload || 'not specified'}
GPU Count:   ${gpu_count}
Duration:    ${duration_days} days
Budget:      ${budget_usd || 'not specified'}
        </pre>
      `;
    } else {
      emailSubject = `Message from ${name}`;
      emailHtml = `
        <h2 style="color:#00FF00; font-family:monospace;">NEW CONTACT</h2>
        <pre style="color:#C0C0C0; font-family:monospace; white-space:pre-wrap; background:#1C2526; padding:1rem;">
Name:    ${name}
Email:   ${email}
Message: ${message || 'not specified'}
        </pre>
      `;
    }

    await resend.emails.send({
      from: 'noreply@trustcat.ai',
      to: 'terminal@trustcat.ai',
      subject: emailSubject,
      html: emailHtml,
    });

    await resend.emails.send({
      from: 'noreply@trustcat.ai',
      to: email,
      subject: '✅ Message Received - TrustCat.ai',
      html: `
        <h2 style="color:#00FF00; font-family:monospace;">MESSAGE RECEIVED</h2>
        <p style="color:#C0C0C0; font-family:monospace;">Hey ${name},</p>
        <p style="color:#C0C0C0; font-family:monospace;">We got your message. Our team will review and get back to you within 24h.</p>
        <p style="color:#888; font-size:0.9rem;">—<br>trustcat.ai | terminal@trustcat.ai</p>
      `,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Message sent. Check your email.',
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: 'Server error', details: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
