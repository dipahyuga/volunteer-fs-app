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

PERTANYAAN WAJIB 
1. Bagian tersulit apa dari assignment ini?
  pada bagian setting Laravel Sanctum untuk proses login dan register.
(+) menghubungkan antara backend dan frontend
  
2. Jika diberi waktu 1 minggu, apa yang akan kamu perbaiki?
   Saya ingin memperbaiki tampilan error. karena tampilannya sedikit kaku dan saya ingin menambahkan fitur upload & menghapus daftar kegiatan yang sudah selesai

3. Kenapa memilih pendekatan teknis tersebut?
   Pada tugas kali ini saya ingin belajar lebih dari backend developer. alasannya saya menambahkan frontend adalah agar implementasi CRUD (alur endpoint) menjadi lebih mudah. sedikit terasa lebih sulit tetapi saya berniat untuk belajar lebih dan lebih baik. dan pada tugas ini saya kembali belajar untuk menggunakan Sanctum. Karena saya ingin menambah wawasan 
