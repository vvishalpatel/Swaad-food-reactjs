# Swaad 🍛

**Swaad** is a simple and efficient food ordering platform inspired by Swiggy.  
It allows users to browse restaurants, view menus, explore food options and adding items to cart — with real-time Swiggy API integration using a custom-built proxy server to avoid CORS issues.

## 🚀 Features

- Browse a variety of restaurants and menus
- Search funtionality  to search restaurants
- Live data fetched from Swiggy's public APIs
- Smooth and responsive frontend experience
- Simple and clean UI for easy navigation
- Redux Toolkit - Efficient state management and seamless Add to Cart functionality with the Redux Toolkit library
- CORS-free integration using a Serverless proxy



##  Tech Stack

- **Frontend:** React.js, Redux, TailwindCSS, Parcel (bundler)
- **Backend Proxy:** Node.js Serverless function (`api/proxy.js`) {Not have deep knowledge of this till now,just done that to solve CORS issue}
- **Hosting:** Vercel
## Images
<img width="1277" alt="Screenshot 2025-05-04 at 9 27 11 AM" src="https://github.com/user-attachments/assets/08f7d991-86b4-4a82-978a-fbcec3193d46" />
<img width="1280" alt="Screenshot 2025-05-04 at 9 27 31 AM" src="https://github.com/user-attachments/assets/824ac473-de54-4c26-bf8c-1c0a1c7632a3" />
<img width="1280" alt="Screenshot 2025-05-04 at 9 28 41 AM" src="https://github.com/user-attachments/assets/932735ca-8480-44ed-8e0a-8bb4f7b930e5" />



##  How It Works

- The frontend sends a request to `/api/proxy?url=<Swiggy_API_URL>`.
- The proxy server (`api/proxy.js`) fetches data from Swiggy’s API while bypassing CORS restrictions.
- The proxy server forwards the data back to the frontend safely.
- The frontend displays live restaurant and menu data.

✅ This architecture completely avoids browser CORS errors while fetching from external APIs!

##  Live Demo

Live project here: [Swaad](https://swaad-food-reactjs-wfg2.vercel.app/) .   
Feel free to navigate through the application, provide feedback.  
 (Do wait or refresh if restaurant cards not show up and if menu of any restaurant not visibile check other restaurant)

