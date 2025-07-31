export class AuthEntity {
  message: string;
  userId?: string;
  statusCode?: number;
  error?: string;
}

export class VerifyEntity {
  message: string;
  statusCode?: number;
  error?: string;
}
