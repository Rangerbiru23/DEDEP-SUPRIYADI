'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, Shield, Eye, Database, UserCheck } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-blue-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
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
            Kebijakan Privasi
          </h1>
          <p className="text-xl text-gray-600">
            DEDEP SUPRIYADI - Perlindungan Data Pribadi Anda
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-blue-600" />
                <span>Pengantar</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Di DEDEP SUPRIYADI, kami sangat memperhatikan privasi dan keamanan data pribadi Anda. 
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, 
                dan membagikan informasi pribadi Anda ketika Anda menggunakan layanan budidaya ikan tawar kami.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dengan menggunakan layanan kami, Anda menyetujui praktik-praktik yang dijelaskan dalam 
                kebijakan privasi ini. Kami berkomitmen untuk melindungi privasi Anda dan menjaga keamanan 
                informasi pribadi yang Anda percayakan kepada kami.
              </p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="w-6 h-6 text-green-600" />
                <span>Pengumpulan Data</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Informasi yang Kami Kumpulkan:</h3>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-800">Data Pribadi</h4>
                  <ul className="list-disc list-inside text-gray-700 mt-1">
                    <li>Nama lengkap</li>
                    <li>Alamat email</li>
                    <li>Nomor telepon</li>
                    <li>Alamat lengkap</li>
                    <li>Informasi pembayaran</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800">Data Bisnis</h4>
                  <ul className="list-disc list-inside text-gray-700 mt-1">
                    <li>Nama perusahaan (jika ada)</li>
                    <li>Jenis usaha budidaya</li>
                    <li>Kebutuhan produk</li>
                    <li>Riwayat transaksi</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800">Data Teknis</h4>
                  <ul className="list-disc list-inside text-gray-700 mt-1">
                    <li>Alamat IP</li>
                    <li>Jenis browser</li>
                    <li>Waktu akses</li>
                    <li>Data penggunaan website</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="w-6 h-6 text-cyan-600" />
                <span>Penggunaan Data</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Kami menggunakan data pribadi Anda untuk tujuan-tujuan berikut:
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-gray-800">Layanan Pelanggan</h4>
                    <p className="text-gray-700">Merespons pertanyaan, memberikan konsultasi, dan menyelesaikan masalah</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-gray-800">Pemrosesan Pesanan</h4>
                    <p className="text-gray-700">Memproses pesanan ikan dan benih, mengatur pengiriman, dan penagihan</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-gray-800">Peningkatan Layanan</h4>
                    <p className="text-gray-700">Menganalisis data untuk meningkatkan kualitas produk dan layanan</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-gray-800">Komunikasi</h4>
                    <p className="text-gray-700">Mengirim informasi produk, penawaran khusus, dan update layanan</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <UserCheck className="w-6 h-6 text-purple-600" />
                <span>Perlindungan Data</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Kami menerapkan berbagai langkah keamanan untuk melindungi data pribadi Anda:
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600">✓</span>
                    <span className="text-gray-700">Enkripsi data selama transmisi dan penyimpanan</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600">✓</span>
                    <span className="text-gray-700">Akses terbatas hanya untuk staf yang berwenang</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600">✓</span>
                    <span className="text-gray-700">Backup data secara teratur</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600">✓</span>
                    <span className="text-gray-700">Audit keamanan berkala</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600">✓</span>
                    <span className="text-gray-700">Kepatuhan terhadap regulasi perlindungan data</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* User Rights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <UserCheck className="w-6 h-6 text-green-600" />
                <span>Hak Anda Sebagai Pengguna</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Sebagai pengguna layanan kami, Anda memiliki hak-hak berikut:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Hak Akses</h4>
                  <p className="text-gray-700 text-sm">Mengakses dan melihat data pribadi yang kami simpan</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Hak Koreksi</h4>
                  <p className="text-gray-700 text-sm">Memperbaiki data yang tidak akurat atau tidak lengkap</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Hak Penghapusan</h4>
                  <p className="text-gray-700 text-sm">Meminta penghapusan data pribadi dalam kondisi tertentu</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Hak Pembatasan</h4>
                  <p className="text-gray-700 text-sm">Membatasi pemrosesan data pribadi Anda</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-blue-600" />
                <span>Informasi Kontak Privasi</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Jika Anda memiliki pertanyaan tentang kebijakan privasi kami atau ingin menggunakan hak-hak Anda, 
                silakan hubungi kami:
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="space-y-3">
                  <div>
                    <span className="font-medium text-gray-800">Email Privasi:</span>
                    <span className="ml-2 text-gray-700">privacy@dedepsupriyadi.com</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-800">Email Umum:</span>
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
              <CardTitle>Perubahan Kebijakan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu untuk mencerminkan perubahan 
                dalam praktik bisnis kami atau perubahan hukum yang berlaku. Setiap perubahan akan diposting 
                di halaman ini dengan tanggal pembaruan terbaru.
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                Kebijakan Privasi ini terakhir diperbarui pada: <strong>1 Januari 2024</strong>
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <Separator className="mb-8" />
          <p className="text-gray-600 mb-4">
            Terima kasih telah mempercayakan DEDEP SUPRIYADI untuk kebutuhan budidaya ikan tawar Anda.
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