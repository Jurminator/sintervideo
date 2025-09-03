import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "68a86d78d8e2f33c8d4d93db", 
  requiresAuth: true // Ensure authentication is required for all operations
});
