// This file defines TypeScript types and interfaces used throughout the application.

export interface StatusResponse {
  message: string;
  environment?: string;
}

export interface ApiResponse<T> {
  data: T;
  error?: string;
}