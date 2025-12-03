# FurryGlow – Pet Winter Service Website

FurryGlow is a modern, responsive winter-season pet service website built with React, featuring service listings, detailed product pages, booking functionality with Local Storage, sorting filters, Firebase authentication, and a beautiful UI powered by Tailwind & DaisyUI.

## Live Demo

[https://furry-glow-services.web.app]

## Features

🐶 Pet Winter Care Services

Displays multiple winter-specific pet services.

Each service includes name, provider info, price, rating, and detailed description.

📄 Service Details Page

Full service information displayed on a dedicated details page.

Includes:

Provider details

Price, rating, location

Duration and max pets allowed

Availability status

## Book Service Functionality

Users can book a service by submitting:

Name

Email

Booking data automatically saved to LocalStorage:

User info

Selected service details

Timestamp

Success notification shown using react-hot-toast.

## Sorting Services

Users can sort other services on the details page by:

⭐ Rating – High → Low

💲 Price – Low → High

💲 Price – High → Low

🔤 A → Z sorting

🔤 Z → A sorting

## Local Storage Booking System

All booked services are stored under:

localStorage["bookings"]

This allows users to keep their bookings even after page reloads.

## Modern UI/UX

Fully responsive

TailwindCSS + DaisyUI components

Smooth animations using Framer Motion

Clean icons via React Icons & Lucide React

## Tech Stack

Frontend

⚛️ React 19

🎨 TailwindCSS 4.x

🌼 DaisyUI

🎞 Framer Motion

🔥 React Hot Toast

🧭 React Router 7

## Additional Tools

🔥 Firebase (for future auth/database)

📦 Vite 7 (lightning-fast development)

🎭 React Icons / Lucide Icons

🎡 Swiper.js (for sliders)

## Project Structure

src/
│── components/
│── firebase/
│── hooks/
│── layouts/
│── App.jsx
│── main.jsx

## Installation

git clone [https://github.com/roufrubelbd/furry-glow-services]
cd furry-glow-services
npm install
npm run dev

## Booking Data Structure (LocalStorage)

{
"userName": "John Doe",
"userEmail": "john@example.com",
"serviceId": 3,
"serviceName": "Winter Grooming",
"providerName": "Snow Pet Care",
"price": 45,
"rating": 4.8,
"date": "12/02/2025, 3:15 PM"
}

## Future Improvements

Firebase database for storing bookings permanently

User dashboard to view past bookings

Admin panel to manage services

Payment gateway integration

## Developer

[Mohammad Abdur Rouf]
[https://github.com/roufrubelbd]
