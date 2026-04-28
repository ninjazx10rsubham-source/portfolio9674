# 🚀 Subham Dey | AI/ML Portfolio

## 👨‍💻 About Me

Hi, I'm **Subham Dey**, a B.Tech CSE (AI & ML) student at MIT Vishwaprayag University.
I am passionate about Artificial Intelligence, Machine Learning, and building smart systems.

---

## ✨ Features

* Animated portfolio UI
* Typing effect
* 3D hover animations
* Dark mode toggle
* Multi-page website
* Certificate & image showcase

---

## 📁 Project Structure

```id="q6l0fm"
portfolio/
│
├── index.html
├── about.html
├── projects.html
├── contact.html
├── styles.css
├── script.js
│
├── profile.jpg
├── certificates/
│   ├── cert1.jpg
│   ├── cert2.jpg
│   ├── cert3.jpg
│   ├── Certificate.pdf
│
└── README.md
```

---

## 🖼️ Adding Your Pictures (IMPORTANT)

### 📌 1. Profile Picture

* File name: `profile.jpg`
* Place it in main folder

```id="i6m4c3"
portfolio/profile.jpg
```

Used in `index.html`:

```html
<img src="profile.jpg" class="profile">
```

---

### 📌 2. Certificates (Images)

Put all certificate images inside:

```id="o9zq3a"
portfolio/certificates/
```

Example:

* cert1.jpg
* cert2.jpg
* cert3.jpg

---

### 📌 3. Show Images on Website

Add this inside **about.html**:

```html id="g84a2k"
<h2>My Certificates</h2>

<div class="certificates">
  <img src="certificates/cert1.jpg">
  <img src="certificates/cert2.jpg">
  <img src="certificates/cert3.jpg">
</div>
```

---

### 📌 4. Add CSS for Images

Add in **styles.css**:

```css id="3l8skx"
.certificates {
  display: flex;
  flex-wrap: wrap;
}

.certificates img {
  width: 250px;
  margin: 10px;
  border-radius: 10px;
  transition: 0.3s;
}

.certificates img:hover {
  transform: scale(1.1);
  box-shadow: 0 0 15px cyan;
}
```

---

### 📌 5. (Optional) Add PDF Certificates

You can also add clickable PDF links:

```html id="z2m9xv"
<a href="certificates/Certificate.pdf" target="_blank">
  View Certificate PDF
</a>
```

---

## ⚠️ Common Mistakes (Why images don’t show)

* ❌ Wrong file name (case-sensitive)
* ❌ Wrong folder path
* ❌ Spaces in file names (avoid them)
* ❌ Image not uploaded to GitHub

---

## 🛠 Setup

1. Upload all files to GitHub
2. Add your images in correct folders
3. Update HTML paths if needed

---

## 🌐 Deploy

* Go to **Settings → Pages**
* Select branch → Save

---

## 📬 Contact

* 📧 Email: [ninjazx10rsubham@gmail.com](mailto:ninjazx10rsubham@gmail.com)
* 📱 Phone: 9674218151
* 📷 Instagram: https://instagram.com/subhamdey5535

---

## 🎯 Goal

This portfolio represents my journey to becoming an AI/ML Engineer.

---

⭐ Tip: Keep images clean, not too many — quality > quantity
