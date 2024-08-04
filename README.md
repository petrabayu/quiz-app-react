# Aplikasi Kuis React

## Deskripsi

Aplikasi Kuis ini adalah proyek aplikasi berbasis web yang dibuat menggunakan React. Aplikasi ini memungkinkan pengguna untuk mengikuti kuis dengan berbagai pertanyaan yang diambil dari API Open Trivia Database. Fitur-fitur utama dari aplikasi ini termasuk login, timer, dan navigasi soal

## Fitur

- **Login**: Pengguna harus login sebelum memulai kuis.
- **Pengambilan Soal dari API**: Soal-soal diambil secara acak dari Open Trivia Database.
- **Timer**: Timer yang menghitung mundur waktu pengerjaan kuis.
- **Navigasi Soal**: Setiap pertanyaan ditampilkan satu per satu. Setelah pengguna menjawab, pertanyaan berikutnya ditampilkan.
- **Hasil Akhir**: Menampilkan hasil akhir termasuk jumlah jawaban benar, salah, dan skor akhir.
- **Pengacakan Jawaban**: Jawaban diacak untuk setiap pertanyaan.

## Instalasi

Untuk menjalankan proyek ini secara lokal, ikuti langkah-langkah berikut:

1. **Clone repository**:

   ```bash
   git clone https://github.com/petrabayu/quiz-app-react.git

   cd quiz-app-react
   ```

2. **Instal dependensi**:

   ```bash
   npm install
   ```

3. **Jalankan aplikasi**:

   ```bash
   npm run dev
   ```

## Penggunaan

1. **Login**: Masukkan nama pengguna untuk memulai kuis.
2. **Mulai Kuis**: Setelah login, pengguna akan diarahkan ke halaman kuis.
3. **Jawab Pertanyaan**: Pilih jawaban yang menurut Anda benar. Setelah menjawab, pertanyaan berikutnya akan ditampilkan.
4. **Timer**: Perhatikan timer di bagian atas layar. Jika waktu habis, hasil kuis akan ditampilkan.
5. **Hasil Akhir**: Setelah semua pertanyaan dijawab atau waktu habis, hasil akhir akan ditampilkan.
6. **Play Again**: Untuk mengerjakan kuis baru, klik tombol "Play Again" di halaman hasil akhir.

## Teknologi yang Digunakan

- **React**: Library utama untuk membangun antarmuka pengguna.
- **Tailwind CSS**: Untuk styling.
- **React Router**: Untuk navigasi antar halaman.
- **Open Trivia Database API**: Sumber pertanyaan kuis.
- **Local Storage**: Untuk menyimpan data sesi dan memungkinkan resume kuis.
- **Clerk.com**: Platform Manajemen Pengguna, Clerk menawarkan rangkaian lengkap UI yang dapat disematkan, API fleksibel, dan dasbor admin untuk mengautentikasi dan mengelola pengguna Anda.

## Kontribusi

Kontribusi selalu diterima! Silakan buat pull request untuk fitur baru atau perbaikan bug. Untuk ide dan diskusi, Anda dapat membuka isu di repository ini.

## Penulis

- Petra Bayu Pangestu - [GitHub](https://github.com/petrabayu)
