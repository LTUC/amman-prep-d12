# Frontend Deployment on Netlfy:

1. Create **.env** file next to the src folder, and your environment variables should be started with
**`REACT_APP_.....`**

2. Change all your **server local URL** in your code with the environment variable.

3. Create a new file in the public directory and call it **`_redirects`** and type inside it: **`/* /index.html 200`**

4. **Push** your updates to the GitHub repo.

5. Open **Netlify** and create new app on it.

6. Add you environment variables on Netlify:
    - Add your **ServerURL** variable, and check slashes.
    - Add **`CI`** variable and it's value is **`false`**

7. Click delpoy.

