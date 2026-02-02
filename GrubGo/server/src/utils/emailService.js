import sendEmail from "../config/email.js";

export const sendOTPEmail = async (to, otp) => {
  const subject = "🔐 GrubGo OTP – Reset Your Password";

  const message = `
  <body style="margin:0; padding:0; background:#fef7f2; font-family: 'Segoe UI', Arial, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="padding:30px 0;">
      <tr>
        <td align="center">

          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:14px; box-shadow:0 10px 40px rgba(0,0,0,0.08); overflow:hidden;">

            <!-- Header -->
            <tr>
              <td style="background:linear-gradient(135deg,#ff7a18,#ff3d00); padding:30px; text-align:center;">
                <h1 style="margin:0; color:#fff; font-size:28px;">🍔 GrubGo</h1>
                <p style="margin:5px 0 0; color:#ffe9dc; font-size:14px;">
                  Restaurant Partner Portal
                </p>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:40px 30px; color:#333;">
                <h2 style="margin-top:0; color:#ff3d00;">Reset Your Password</h2>

                <p style="font-size:16px; line-height:1.6;">
                  Hi Partner 👋,<br/>
                  You requested to reset your GrubGo account password.  
                  Use the OTP below to continue:
                </p>

                <!-- OTP -->
                <div style="text-align:center; margin:40px 0;">
                  <div style="
                    display:inline-block;
                    padding:18px 40px;
                    font-size:32px;
                    letter-spacing:8px;
                    font-weight:700;
                    color:#ff3d00;
                    background:#fff3ed;
                    border-radius:12px;
                    border:2px dashed #ff7a18;
                  ">
                    ${otp}
                  </div>
                </div>

                <p style="font-size:15px; color:#555;">
                  ⏳ This OTP is valid for <strong>5 minutes</strong>.  
                  For security, please do not share it with anyone.
                </p>

                <p style="font-size:14px; color:#777; margin-top:30px;">
                  If you didn’t request this, simply ignore this email and your account will remain safe.
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#fff7f2; padding:20px; text-align:center;">
                <p style="margin:0; font-size:13px; color:#999;">
                  © ${new Date().getFullYear()} GrubGo • Powering Restaurants Digitally
                </p>
                <p style="margin:5px 0 0; font-size:12px; color:#bbb;">
                  Need help? Contact support@grubgo.in
                </p>
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>
  </body>
  `;

  await sendEmail(to, subject, message);
};
