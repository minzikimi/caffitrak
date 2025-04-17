This project may be vulnerable to Cross-Site Scripting (XSS) and CORS misconfigurations.
XSS risks are currently low because the application only accepts predefined input from dropdowns and selections. 
However, in the future, if user-generated text input is added (e.g. custom drink names), proper input sanitization and output encoding will be implemented to mitigate injection attacks.

Another potential vulnerability is the open CORS policy, which currently allows requests from any origin. This could expose the API to misuse from untrusted domains. To address this, I plan to implement a stricter CORS configuration, allowing only trusted front-end origins.

Additionally, to protect users from accidental data deletion, on detail component a confirmation modal is implemented before any drink is removed. This small UI safeguard helps avoid unintended actions and contributes to user trust and data safety.