# Foram Gandhi — Portfolio

A dark, aesthetic portfolio website with Multer + Cloudinary image upload.

## 🚀 Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment
Edit `.env` with your Cloudinary credentials (from https://cloudinary.com/console):
```
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
PORT=3000
```

### 3. Run
```bash
# Development (auto-restart)
npm run dev

# Production
npm start
```

Open http://localhost:3000

## 📸 Photo Upload
- Click the photo frame on the hero section
- Select or drag-and-drop your image
- It uploads to Cloudinary and is saved permanently
- The URL is cached in localStorage for future visits

## 🛠 Tech Used
- **Backend**: Node.js + Express
- **Upload**: Multer + multer-storage-cloudinary
- **CDN**: Cloudinary (face-crop, auto-quality)
- **Frontend**: Vanilla HTML/CSS/JS (no framework)
- **Icons**: Devicons
- **Fonts**: Syne + DM Mono + Outfit
