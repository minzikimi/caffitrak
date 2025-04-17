This project may be vulnerable to XSS and CORS misconfigurations. 
XSS risks are minimal with predefined user selections. 
But input sanitization will be added for future text input. 
The current open CORS policy could expose the API. 
I could implement a stricter CORS policy for trusted domains.