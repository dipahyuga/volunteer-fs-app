volunteer-app (internship backend developer) + frontend

A. Cara Install
1. PHP >= 8.2
2. Composser
3. Node.js & NPM

B. Cara Menjalankan Project
Backend :
1.  `cd backend`
2.  `composer installl`
3.  `cp .env.example .env`
4.  `php artisan key:generate `
5.  `php artisan migrate --seed`
6.  `php artisan serve`

frontend: 
1. `cd frontend`
2. `npm install`
3. `npm run dev`

C. Daftar Endpoint API
Methode | Endpoint | Fungsi | Akses |
POST | /api/register | Daftar User Baru | Public
POST | /api/login | Dapatkan Token Autentikasi | Public
GET | /api/events | Tampilan Daftar Kegiatan | Public/User (beserta detail kegiatan)
POST | /api/events | Membuat Kegiatan Baru | Admin
POST | /api/events/{id}/join | Daftar diri pada kegiatan | User 

D. Catatan Asumsi/Desain
1. Database: Menggunakan SQLite
2. Autentikasi: Menggunakan Larave Sanctum
3. Validasi: Password minimal 8 karakter

