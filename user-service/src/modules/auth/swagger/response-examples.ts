export const AuthExamples = {
  RegisterSuccess: {
    message: 'Registration successful. Please verify your email.',
    userId: 'ckv1l2z8g0000v7v8z1q2x1w2'
  },
  RegisterConflict: {
    statusCode: 400,
    message: 'Email or phone already exists',
    error: 'Bad Request'
  },
  VerifySuccess: {
    message: 'Email verified successfully.'
  },
  VerifyInvalid: {
    statusCode: 400,
    message: 'Invalid or expired OTP code',
    error: 'Bad Request'
  }
};
