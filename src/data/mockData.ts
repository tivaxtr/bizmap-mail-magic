
export type BusinessData = {
  id: string;
  name: string;
  address: string;
  category: string;
  phone: string;
  rating: number;
  reviews: number;
  website?: string;
  email?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
};

export const mockBusinessData: BusinessData[] = [
  {
    id: "1",
    name: "Cafe Istanbul",
    address: "Bağdat Caddesi No:123, Kadıköy, İstanbul",
    category: "Kafe",
    phone: "+90 212 123 45 67",
    rating: 4.7,
    reviews: 328,
    website: "https://cafeistanbul.com",
    coordinates: {
      lat: 40.9923307,
      lng: 29.0307656
    }
  },
  {
    id: "2",
    name: "Marmara Hukuk Bürosu",
    address: "İstiklal Caddesi No:45, Beyoğlu, İstanbul",
    category: "Avukat",
    phone: "+90 212 987 65 43",
    rating: 4.2,
    reviews: 152,
    website: "https://marmarahukuk.com",
    email: "info@marmarahukuk.com",
    coordinates: {
      lat: 41.0362369,
      lng: 28.9795081
    }
  },
  {
    id: "3",
    name: "Boğaz Balık Restaurant",
    address: "Bebek Sahil Yolu No:22, Beşiktaş, İstanbul",
    category: "Restoran",
    phone: "+90 212 555 67 89",
    rating: 4.8,
    reviews: 564,
    website: "https://bogazbalik.com",
    coordinates: {
      lat: 41.0859267,
      lng: 29.0422745
    }
  },
  {
    id: "4",
    name: "Anadolu Berber Salonu",
    address: "Moda Caddesi No:78, Kadıköy, İstanbul",
    category: "Kuaför",
    phone: "+90 216 333 22 11",
    rating: 4.5,
    reviews: 213,
    coordinates: {
      lat: 40.9830969,
      lng: 29.0335468
    }
  },
  {
    id: "5",
    name: "Deniz Kırtasiye",
    address: "Bağlarbaşı Caddesi No:56, Üsküdar, İstanbul",
    category: "Kırtasiye",
    phone: "+90 216 444 55 66",
    rating: 4.0,
    reviews: 95,
    website: "https://denizkirtasiye.com",
    email: "iletisim@denizkirtasiye.com",
    coordinates: {
      lat: 41.0249403,
      lng: 29.0413306
    }
  }
];
