export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  data?: Record<string, unknown>; // Replace 'any' with a more specific type
}

export interface ApiResponse {
  message: string;
  error?: string;
  data?: Record<string, unknown>; // Replace 'any' with a more specific type
}