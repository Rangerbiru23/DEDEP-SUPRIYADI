'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { 
  Fish, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Award,
  Users,
  TrendingUp,
  Shield,
  ChevronRight,
  Menu,
  X,
  Send
} from 'lucide-react'
import { toast } from 'sonner'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Semua field harus diisi')
      return
    }

    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/company', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'contact',
          ...formData
        })
      })

      const result = await response.json()
      
      if (result.success) {
        toast.success('Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.')
        setFormData({ name: '', email: '', message: '' })
      } else {
        toast.error(result.error || 'Gagal mengirim pesan')
      }
    } catch (error) {
      toast.error('Terjadi kesalahan. Silakan coba lagi.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-blue-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <Fish className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900">DEDEP SUPRIYADI</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#beranda" className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</a>
              <a href="#tentang" className="text-gray-700 hover:text-blue-600 transition-colors">Tentang</a>
              <a href="#layanan" className="text-gray-700 hover:text-blue-600 transition-colors">Layanan</a>
              <a href="#kontak" className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</a>
              <a href="/privacy" className="text-gray-700 hover:text-blue-600 transition-colors">Privacy</a>
              <a href="/terms" className="text-gray-700 hover:text-blue-600 transition-colors">Terms</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-1">
              <a href="#beranda" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Beranda</a>
              <a href="#tentang" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Tentang</a>
              <a href="#layanan" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Layanan</a>
              <a href="#kontak" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Kontak</a>
              <a href="/privacy" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Privacy</a>
              <a href="/terms" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Terms</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Budidaya Ikan Tawar
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  Berkualitas Tinggi
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                DEDEP SUPRIYADI - Ahli dalam budidaya ikan tawar dengan pengalaman bertahun-tahun. 
                Menyediakan ikan berkualitas dengan metode pembudidayaan modern dan berkelanjutan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                  Hubungi Kami
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg">
                  Pelajari Lebih Lanjut
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/fish-farm.jpg"
                  alt="Budidaya Ikan Tawar DEDEP SUPRIYADI"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-8">
                  <div className="text-center text-white">
                    <Fish className="w-16 h-16 mx-auto mb-3" />
                    <p className="text-2xl font-bold">DEDEP SUPRIYADI</p>
                    <p className="text-lg">Budidaya Ikan Tawar Berkualitas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih Kami
            </h2>
            <p className="text-xl text-gray-600">
              Keunggulan yang membuat kami unggul dalam industri budidaya ikan tawar
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Berkualitas</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Ikan dengan kualitas terbaik, sehat dan segar hasil dari budidaya yang terkontrol
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Berkelanjutan</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Metode budidaya ramah lingkungan yang menjaga keberlanjutan ekosistem perairan
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-cyan-600" />
                </div>
                <CardTitle className="text-xl">Berpengalaman</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Tim ahli dengan pengalaman bertahun-tahun dalam industri perikanan tawar
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Terpercaya</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Reputasi terpercaya dengan ribuan pelanggan puas di seluruh Indonesia
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tentang <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">DEDEP SUPRIYADI</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                DEDEP SUPRIYADI adalah usaha yang bergerak di bidang budidaya ikan tawar yang berlokasi 
                di Cianjur, Jawa Barat. Dengan komitmen terhadap kualitas dan keberlanjutan, kami telah 
                melayani berbagai kebutuhan ikan tawar untuk konsumsi dan budidaya lanjutan.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Kami menggunakan teknologi modern dalam setiap tahap pembudidayaan, mulai dari pemilihan 
                benih berkualitas, pemberian pakan yang terstandar, hingga pengolahan air yang optimal 
                untuk menghasilkan ikan yang sehat dan berkualitas premium.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                  <div className="text-gray-600">Tahun Pengalaman</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
                  <div className="text-gray-600">Pelanggan Puas</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-80 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/team-consultation.jpg"
                  alt="Tim Konsultasi Budidaya Ikan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Tim Ahli</h4>
                    <p className="text-sm text-gray-600">Profesional berpengalaman</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Layanan Kami
            </h2>
            <p className="text-xl text-gray-600">
              Solusi lengkap untuk kebutuhan budidaya ikan tawar Anda
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Fish className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-center">Budidaya Ikan Konsumsi</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Menyediakan berbagai jenis ikan tawar berkualitas untuk konsumsi rumah tangga dan restoran
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-center">Benih Ikan Berkualitas</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Menyediakan benih ikan sehat dan berkualitas untuk pembudidayaan skala besar dan kecil
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-cyan-600" />
                </div>
                <CardTitle className="text-xl text-center">Konsultasi Budidaya</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Layanan konsultasi teknis untuk membantu kesuksesan usaha budidaya ikan tawar Anda
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hubungi Kami
            </h2>
            <p className="text-xl text-gray-600">
              Siap melayani kebutuhan budidaya ikan tawar Anda
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">Informasi Kontak</CardTitle>
                <CardDescription className="text-lg">
                  DEDEP SUPRIYADI - Budidaya Ikan Tawar
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-semibold">Alamat</p>
                    <p className="text-gray-600">
                      KP. PALASARI, Desa/Kelurahan Sukarame<br />
                      Kec. Sukanagara, Kab. Cianjur<br />
                      Provinsi Jawa Barat
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="font-semibold">Telepon</p>
                    <p className="text-gray-600">085285703497</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-cyan-600" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">bismikakhatulistiwa@outlook.co.id</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-8">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">Kirim Pesan</CardTitle>
                <CardDescription>
                  Kami siap membantu kebutuhan Anda
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pesan
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tulis pesan Anda..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Kirim Pesan
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                  <Fish className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg">DEDEP SUPRIYADI</span>
              </div>
              <p className="text-gray-400">
                Ahli budidaya ikan tawar berkualitas tinggi dengan pengalaman bertahun-tahun.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Layanan</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Budidaya Ikan Konsumsi</li>
                <li>Benih Ikan Berkualitas</li>
                <li>Konsultasi Budidaya</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Perusahaan</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#tentang" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Kontak</h3>
              <ul className="space-y-2 text-gray-400">
                <li>085285703497</li>
                <li>bismikakhatulistiwa@outlook.co.id</li>
                <li>Cianjur, Jawa Barat</li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-800" />
          
          <div className="text-center text-gray-400">
            <p>&copy; 2024 DEDEP SUPRIYADI. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}