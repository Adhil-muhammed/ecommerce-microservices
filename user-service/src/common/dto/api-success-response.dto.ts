export class ApiSuccessResponse<T> {
  status: true;
  message: string;
  data: T;
}
