CaffiTrak includes some core security measures, with plans to expand them in future iterations:

XSS Protection XSS risks are currently low because the app only accepts predefined input (dropdowns and selectors). In future versions, if user-generated text inputs (like custom drink names) are added, we will implement: Input sanitization Output encoding To prevent injection attacks.

🙅🏻Rate Limiting CaffiTrak uses rate limiting with the express-rate-limit package to restrict requests from a single IP to a set number within 15 minutes. Exceeding the limit results in a 403 Forbidden response, protecting the API from abuse.

CORS Configuration The app currently uses an open CORS policy, which allows requests from any origin (for development convenience). In the future, we plan to restrict CORS to trusted frontend domains to prevent misuse from unknown or malicious origins.

Safe Deletion with Confirmation On the frontend, a confirmation modal appears before deleting a drink, helping users avoid accidental data loss. On the backend, deletion is handled securely with proper HTTP status codes.