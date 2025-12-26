'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, FileText, Shield, AlertTriangle, CheckCircle, Scale } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-blue-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900">DEDEP SUPRIYADI</span>
            </Link>
            
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali ke Beranda
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Syarat dan Ketentuan
          </h1>
          <p className="text-xl text-gray-600">
            DEDEP SUPRIYADI - Ketentuan Penggunaan Layanan Budidaya Ikan Tawar
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-6 h-6 text-blue-600" />
                <span>Pengantar</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Selamat datang di DEDEP SUPRIYADI. Syarat dan Ketentuan ini mengatur penggunaan layanan 
                budidaya ikan tawar yang kami sediakan. Dengan mengakses atau menggunakan layanan kami, 
                Anda setuju untuk terikat oleh syarat dan ketentuan ini.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Harap baca dengan seksama syarat dan ketentuan ini sebelum menggunakan layanan kami. 
                Jika Anda tidak setuju dengan bagian mana pun dari syarat ini, jangan gunakan layanan kami.
              </p>
            </CardContent>
          </Card>

          {/* Services Description */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span>Layanan Kami</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                DEDEP SUPRIYADI menyediakan layanan-layanan berikut:
              </p>
              
              <div className="space-y-3">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">1. Penjualan Ikan Konsumsi</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Berbagai jenis ikan tawar berkualitas</li>
                    <li>Kondisi ikan sehat dan segar</li>
                    <li>Ukuran sesuai permintaan</li>
                    <li>Pengiriman terjamin</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">2. Penjualan Benih Ikan</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Benih ikan berkualitas unggul</li>
                    <li>Sertifikat kualitas terjamin</li>
                    <li>Dukungan teknis pembudidayaan</li>
                    <li>Garansi kualitas benih</li>
                  </ul>
                </div>
                
                <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">3. Konsultasi Budidaya</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Konsultasi teknis budidaya</li>
                    <li>Manajemen kualitas air</li>
                    <li>Program pakan yang optimal</li>
                    <li>Pengendalian penyakit ikan</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-purple-600" />
                <span>Tanggung Jawab Pengguna</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Sebagai pengguna layanan DEDEP SUPRIYADI, Anda setuju untuk:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Informasi Akurat</h4>
                  <p className="text-gray-700 text-sm">
                    Memberikan informasi yang benar, akurat, dan lengkap saat pendaftaran dan transaksi
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Pembayaran Tepat Waktu</h4>
                  <p className="text-gray-700 text-sm">
                    Melakukan pembayaran sesuai dengan kesepakatan yang telah ditetapkan
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Penggunaan yang Bertanggung Jawab</h4>
                  <p className="text-gray-700 text-sm">
                    Menggunakan layanan sesuai dengan tujuan yang ditetapkan dan tidak melanggar hukum
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Komunikasi yang Baik</h4>
                  <p className="text-gray-700 text-sm">
                    Berkomunikasi dengan sopan dan profesional dalam setiap interaksi
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Scale className="w-6 h-6 text-blue-600" />
                <span>Syarat Pembayaran</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Metode Pembayaran</h4>
                  <p className="text-gray-700">Kami menerima metode pembayaran berikut:</p>
                  <ul className="list-disc list-inside text-gray-700 mt-2">
                    <li>Transfer Bank (BCA, BNI, BRI, Mandiri)</li>
                    <li>E-Wallet (GoPay, OVO, DANA)</li>
                    <li>Pembayaran Tunai (untuk transaksi langsung)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Ketentuan Pembayaran</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Pembayaran dilakukan sebelum pengiriman produk</li>
                    <li>Pembayaran DP minimal 50% untuk pesanan besar</li>
                    <li>Pelunasan sebelum produk dikirim</li>
                    <li>Bukti pembayaran harus dikirimkan via email atau WhatsApp</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-medium text-yellow-800 mb-2">Kebijakan Pengembalian</h4>
                  <ul className="list-disc list-inside text-yellow-800">
                    <li>Pengembalian hanya berlaku untuk produk yang cacat atau tidak sesuai</li>
                    <li>Klaim pengembalian harus diajukan maksimal 24 jam setelah penerimaan</li>
                    <li>Produk harus dalam kondisi utuh dan belum digunakan</li>
                    <li>Biaya pengembalian ditanggung oleh pembeli</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Delivery Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span>Syarat Pengiriman</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Area Pengiriman</h4>
                  <p className="text-gray-700">Kami melayani pengiriman ke:</p>
                  <ul className="list-disc list-inside text-gray-700 mt-2">
                    <li>Area Cianjur dan sekitarnya (same day delivery)</li>
                    <li>Jabodetabek (1-2 hari kerja)</li>
                    <li>Jawa Barat (2-3 hari kerja)</li>
                    <li>Luar Pulau Jawa (sesuai kesepakatan)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Kemasan dan Transportasi</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Ikan dikemas dengan kemasan khusus untuk menjaga kualitas</li>
                    <li>Penggunaan oksigen dan pendingin untuk pengiriman jarak jauh</li>
                    <li>Transportasi yang tersedia: mobil box, motor, atau ekspedisi</li>
                    <li>Asuransi pengiriman untuk pesanan besar</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-purple-600" />
                <span>Hak Kekayaan Intelektual</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Semua konten, materi, dan merek dagang yang terdapat dalam layanan DEDEP SUPRIYADI 
                dilindungi oleh hukum hak kekayaan intelektual. Ini termasuk namun tidak terbatas pada:
              </p>
              
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Nama "DEDEP SUPRIYADI" dan logo perusahaan</li>
                <li>Desain dan tampilan website</li>
                <li>Foto produk dan materi promosi</li>
                <li>Informasi teknis dan metode budidaya</li>
                <li>Dokumen dan materi pendidikan</li>
              </ul>
              
              <p className="text-gray-700 leading-relaxed">
                Dilarang keras menggunakan, menyalin, atau mendistribusikan materi kami tanpa izin 
                tertulis dari DEDEP SUPRIYADI.
              </p>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="w-6 h-6 text-yellow-600" />
                <span>Pembatasan Tanggung Jawab</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-gray-700 leading-relaxed mb-3">
                  DEDEP SUPRIYADI tidak bertanggung jawab atas:
                </p>
                <ul className="list-disc list-inside text-yellow-800 space-y-1">
                  <li>Keterlambatan pengiriman yang disebabkan oleh pihak ketiga</li>
                  <li>Kerusakan produk akibat penanganan yang salah oleh pembeli</li>
                  <li>Kehilangan produk selama proses pengiriman</li>
                  <li>Kerugian tidak langsung atau konsekuensial</li>
                  <li>Kegagalan produk akibat faktor lingkungan yang tidak terkendali</li>
                </ul>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                Tanggung jawab maksimal kami terbatas pada nilai transaksi produk yang bersangkutan.
              </p>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                <span>Terminasi Layanan</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                DEDEP SUPRIYADI berhak untuk menghentikan atau menangguhkan layanan kepada pengguna 
                yang melanggar syarat dan ketentuan ini, termasuk namun tidak terbatas pada:
              </p>
              
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Pelanggaran berat terhadap syarat penggunaan</li>
                <li>Penggunaan layanan untuk aktivitas ilegal</li>
                <li>Gagal melakukan pembayaran sesuai kesepakatan</li>
                <li>Memberikan informasi palsu atau menyesatkan</li>
                <li>Merugikan reputasi atau bisnis DEDEP SUPRIYADI</li>
              </ul>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Scale className="w-6 h-6 text-blue-600" />
                <span>Hukum yang Berlaku</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. 
                Setiap sengketa yang timbul dari atau berhubungan dengan syarat ini akan diselesaikan 
                melalui musyawarah terlebih dahulu. Jika tidak mencapai kesepakatan, sengketa akan 
                diselesaikan melalui pengadilan yang berwenang di wilayah Cianjur, Jawa Barat.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-6 h-6 text-green-600" />
                <span>Informasi Kontak</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="space-y-3">
                  <div>
                    <span className="font-medium text-gray-800">Email:</span>
                    <span className="ml-2 text-gray-700">bismikakhatulistiwa@outlook.co.id</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-800">Telepon:</span>
                    <span className="ml-2 text-gray-700">085285703497</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-800">Alamat:</span>
                    <span className="ml-2 text-gray-700">KP. PALASARI, Sukarame, Sukanagara, Kab. Cianjur, Jawa Barat</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Policy Updates */}
          <Card>
            <CardHeader>
              <CardTitle>Perubahan Syarat dan Ketentuan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                DEDEP SUPRIYADI berhak mengubah syarat dan ketentuan ini dari waktu ke waktu. 
                Perubahan akan berlaku efektif setelah dipublikasikan di website kami. 
                Pengguna disarankan untuk secara berkala meninjau syarat dan ketentuan ini.
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                Syarat dan Ketentuan ini terakhir diperbarui pada: <strong>1 Januari 2024</strong>
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <Separator className="mb-8" />
          <p className="text-gray-600 mb-4">
            Terima kasih telah mempercayakan DEDEP SUPRIYADI sebagai mitra budidaya ikan tawar Anda.
          </p>
          <Link href="/">
            <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
              Kembali ke Beranda
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}