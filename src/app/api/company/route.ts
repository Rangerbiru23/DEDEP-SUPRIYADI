import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  try {
    const companyData = {
      name: "DEDEP SUPRIYADI",
      business: "Budidaya Ikan Tawar",
      address: "KP. PALASARI, Desa/Kelurahan Sukarame, Kec. Sukanagara, Kab Cianjur, Provinsi Jawa Barat",
      phone: "085285703497",
      email: "bismikakhatulistiwa@outlook.co.id",
      description: "Ahli dalam budidaya ikan tawar dengan pengalaman bertahun-tahun. Menyediakan ikan berkualitas dengan metode pembudidayaan modern dan berkelanjutan.",
      services: [
        {
          id: 1,
          name: "Budidaya Ikan Konsumsi",
          description: "Menyediakan berbagai jenis ikan tawar berkualitas untuk konsumsi rumah tangga dan restoran",
          icon: "fish"
        },
        {
          id: 2,
          name: "Benih Ikan Berkualitas",
          description: "Menyediakan benih ikan sehat dan berkualitas untuk pembudidayaan skala besar dan kecil",
          icon: "trending-up"
        },
        {
          id: 3,
          name: "Konsultasi Budidaya",
          description: "Layanan konsultasi teknis untuk membantu kesuksesan usaha budidaya ikan tawar Anda",
          icon: "users"
        }
      ],
      features: [
        {
          id: 1,
          title: "Berkualitas",
          description: "Ikan dengan kualitas terbaik, sehat dan segar hasil dari budidaya yang terkontrol",
          icon: "award",
          color: "blue"
        },
        {
          id: 2,
          title: "Berkelanjutan",
          description: "Metode budidaya ramah lingkungan yang menjaga keberlanjutan ekosistem perairan",
          icon: "trending-up",
          color: "green"
        },
        {
          id: 3,
          title: "Berpengalaman",
          description: "Tim ahli dengan pengalaman bertahun-tahun dalam industri perikanan tawar",
          icon: "users",
          color: "cyan"
        },
        {
          id: 4,
          title: "Terpercaya",
          description: "Reputasi terpercaya dengan ribuan pelanggan puas di seluruh Indonesia",
          icon: "shield",
          color: "purple"
        }
      ],
      stats: [
        {
          value: "10+",
          label: "Tahun Pengalaman"
        },
        {
          value: "1000+",
          label: "Pelanggan Puas"
        }
      ],
      operatingHours: {
        days: "Senin - Sabtu",
        hours: "06:00 - 18:00"
      },
      socialMedia: {
        facebook: null,
        instagram: null,
        twitter: null,
        whatsapp: "085285703497"
      }
    }

    return NextResponse.json({
      success: true,
      data: companyData
    })
  } catch (error) {
    console.error('Error fetching company data:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Handle contact form submission
    if (body.type === 'contact') {
      const { name, email, message } = body
      
      // Validate required fields
      if (!name || !email || !message) {
        return NextResponse.json(
          { success: false, error: 'All fields are required' },
          { status: 400 }
        )
      }

      // Here you would typically:
      // 1. Save to database
      // 2. Send email notification
      // 3. Send confirmation to customer
      
      console.log('Contact form submission:', { name, email, message })
      
      return NextResponse.json({
        success: true,
        message: 'Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.'
      })
    }

    return NextResponse.json(
      { success: false, error: 'Invalid request type' },
      { status: 400 }
    )
  } catch (error) {
    console.error('Error processing request:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}