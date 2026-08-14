const PRODUCTS = [
    {   
        id: 29,
        name: "Rolex (رجالي)",
        brand: "Rolex",
        category: "Rolex",
        gender: "men",
        genderText: "رجالي",
        price: 600000,
        oldPrice: 650000,
        rating: 4.7,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/ساعات رجالى rolex-black-solver.jpg",
        isFeatured: true,
        specs: {
            movement: "قوي تشكيل رجالى ",
            caseMaterial: "استانلس ضد الصدا",
            color: "سيلفر ومن الداخل اسود",
        }
    },
    {   
        id: 30,
        name: "Rolex (رجالي)",
        brand: "Rolex",
        category: "Rolex",
        gender: "men",
        genderText: "رجالي",
        price: 600000,
        oldPrice: 650000,
        rating: 4.7,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/ساعات رجالى rolex-white-solver.jpg",
        isFeatured: true,
        specs: {
            movement: "قوي تشكيل رجالى",
            caseMaterial: "استانلس ضد الصدا",
            color: "سيلفر ومن الداخل ابيض",
        }
    },
    {
        id: 1,
        name: "Chanel (حريمي)",
        brand: "Chanel",
        category: "Chanel",
        gender: "women",
        genderText: "حريمي",
        price: 250000,
        oldPrice: 270000,
        rating: 4.9,
        reviewsCount: 198,
        badge: "الأكثر طلبـاً",
        image: "./Img/ساعات حريمى chanel.jpg",
        isFeatured: false,
        specs: {
            movement: "قوي تشكيل انسيال ماركات حريمي",
            caseMaterial: "استانلس ضد الصدا",
            color: "دهبى / فضى / دهبى وفضى",
        }
    },
    {
        id: 2,
        name: "Chanel (حريمي)",
        brand: "Chanel",
        category: "Chanel",
        gender: "women",
        genderText: "حريمي",
        price: 250000,
        oldPrice: 270000,
        rating: 5.0,
        reviewsCount: 142,
        badge: "إصدار نادر",
        image: "./Img/ساعات حريمى chanel2.jpg",
        isFeatured: false,
        specs: {
            movement: "قوي تشكيل انسيال ماركات حريمي",
            caseMaterial: "استانلس ضد الصدا",
            color: "دهبى / فضى / دهبى وفضى",
        }
    },
    {
        id: 3,
        name: "Ck (حريمي)",
        brand: "Ck",
        category: "Ck",
        gender: "women",
        genderText: "حريمي",
        price: 250000,
        oldPrice: 280000,
        rating: 4.8,
        reviewsCount: 76,
        badge: "خصم خاص",
        image: "./Img/ساعات حريمى ck.jpg",
        isFeatured: false,
        specs: {
            movement: "قوي تشكيل انسيال ماركات حريمي",
            caseMaterial: "استانلس ضد الصدا",
            color: "دهبى / فضى / دهبى وفضى",
        }
    },
    {
        id: 4,
        name: "Dior (حريمي)",
        brand: "Dior",
        category: "Dior",
        gender: "women",
        genderText: "حريمي",
        price: 250000,
        oldPrice: 290000,
        rating: 4.9,
        reviewsCount: 110,
        badge: "كلاسيك VIP",
        image: "./Img/ساعات حريمى dior.jpg",
        isFeatured: false,
        specs: {
            movement: "قوي تشكيل انسيال ماركات حريمي",
            caseMaterial: "استانلس ضد الصدا",
            color: "دهبى / فضى / دهبى وفضى",
        }
    },
    {
        id: 5,
        name: "Dior (حريمي)",
        brand: "Dior",
        category: "Dior",
        gender: "women",
        genderText: "حريمي",
        price: 250000,
        oldPrice: 290000,
        rating: 4.7,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/ساعات حريمى dior2.jpg",
        isFeatured: false,
        specs: {
            movement: "قوي تشكيل انسيال ماركات حريمي",
            caseMaterial: "استانلس ضد الصدا",
            color: "دهبى / فضى / دهبى وفضى",
        }
    },
    {
        id: 6,
        name: "Festna (حريمي)",
        brand: "Festna",
        category: "Festna",
        gender: "women",
        genderText: "حريمي",
        price: 250000,
        oldPrice: 300000,
        rating: 5.0,
        reviewsCount: 42,
        badge: "ملكي 2026",
        image: "./Img/ساعات حريمى festna.jpg",
        isFeatured: false,
        specs: {
            movement: "قوي تشكيل انسيال ماركات حريمي",
            caseMaterial: "استانلس ضد الصدا",
            color: "دهبى / فضى / دهبى وفضى",
        }
    },
    {
        id: 7,
        name: "Gucci (حريمي)",
        brand: "Gucci",
        category: "classic",
        gender: "women",
        genderText: "حريمي",
        price: 250000,
        oldPrice: 290000,
        rating: 4.8,
        reviewsCount: 88,
        badge: "أنيق جداً",
        image: "./Img/ساعات حريمى guccl.jpg",
        isFeatured: false,
        specs: {
            movement: "قوي تشكيل انسيال ماركات حريمي",
            caseMaterial: "استانلس ضد الصدا",
            color: "دهبى / اسود",
        }
    },
    {
        id: 8,
        name: "Gucci (حريمي)",
        brand: "Gucci",
        category: "classic",
        gender: "women",
        genderText: "حريمي",
        price: 250000,
        oldPrice: 280000,
        rating: 4.7,
        reviewsCount: 54,
        badge: "سباقات رالي",
        image: "./Img/ساعات حريمى guccl2.jpg",
        isFeatured: false,
        specs: {
            movement: "قوي تشكيل انسيال ماركات حريمي",
            caseMaterial: "استانلس ضد الصدا",
            color: "دهبى / فضى / دهبى وفضى",
        }
    },
    {
        id: 9,
        name: "Michael Kors (حريمي)",
        brand: "Michael Kors",
        category: "MichaelKors",
        gender: "women",
        genderText: "حريمي",
        price: 250000,
        oldPrice: 300000,
        rating: 4.7,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/ساعات حريمى michael kors.jpg",
        isFeatured: false,
        specs: {
            movement: "قوي تشكيل انسيال ماركات حريمي",
            caseMaterial: "استانلس ضد الصدا",
            color: "دهبى / فضى / دهبى وفضى",
        }
    },
    {   
        id: 10,
        name: "Ralax (حريمي)",
        brand: "Ralax",
        category: "Ralax",
        gender: "women",
        genderText: "حريمي",
        price: 250000,
        oldPrice: 380000,
        rating: 4.7,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/ساعات حريمى ralax.jpg",
        isFeatured: false,
        specs: {
            movement: "قوي تشكيل انسيال ماركات حريمي",
            caseMaterial: "استانلس ضد الصدا",
            color: "دهبى / فضى / دهبى وفضى",
        }
    },
    {   
        id: 11,
        name: "Ralax (حريمي)",
        brand: "Ralax",
        category: "Ralax",
        gender: "women",
        genderText: "حريمي",
        price: 250000,
        oldPrice: 300000,
        rating: 4.7,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/ساعات حريمى ralax2.jpg",
        isFeatured: false,
        specs: {
            movement: "قوي تشكيل انسيال ماركات حريمي",
            caseMaterial: "استانلس ضد الصدا",
            color: "دهبى / فضى / دهبى وفضى",
        }
    },
    {   
        id: 12,
        name: "Rolex (حريمي)",
        brand: "Rolex",
        category: "Rolex",
        gender: "women",
        genderText: "حريمي",
        price: 250000,
        oldPrice: 280000,
        rating: 4.7,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/ساعات حريمى rolex.jpg",
        isFeatured: false,
        specs: {
            movement: "قوي تشكيل انسيال ماركات حريمي",
            caseMaterial: "استانلس ضد الصدا",
            color: "دهبى / فضى / دهبى وفضى",
        }
    },
    {   
        id: 13,
        name: "Rolex (حريمي)",
        brand: "Rolex",
        category: "Rolex",
        gender: "women",
        genderText: "حريمي",
        price: 250000,
        oldPrice: 280000,
        rating: 4.7,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/ساعات حريمى rolex2.jpg",
        isFeatured: false,
        specs: {
            movement: "قوي تشكيل انسيال ماركات حريمي",
            caseMaterial: "استانلس ضد الصدا",
            color: "دهبى / فضى / دهبى وفضى",
        }
    },
    {   
        id: 14,
        name: "Shein (حريمي)",
        brand: "Shein",
        category: "Shein",
        gender: "women",
        genderText: "حريمي",
        price: 250000,
        oldPrice: 270000,
        rating: 4.7,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/ساعات حريمى shein.jpg",
        isFeatured: false,
        specs: {
            movement: "قوي تشكيل انسيال ماركات حريمي",
            caseMaterial: "استانلس ضد الصدا",
            color: "دهبى / فضى / دهبى وفضى",
        }
    },
    {   
        id: 15,
        name: "Shein (حريمي)",
        brand: "Shein",
        category: "Shein",
        gender: "women",
        genderText: "حريمي",
        price: 250000,
        oldPrice: 280000,
        rating: 4.7,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/ساعات حريمى shein2.jpg",
        isFeatured: false,
        specs: {
            movement: "قوي تشكيل انسيال ماركات حريمي",
            caseMaterial: "استانلس ضد الصدا",
            color: "دهبى / فضى / دهبى وفضى",
        }
    },
    {   
        id: 16,
        name: "Xll (حريمي)",
        brand: "Xll",
        category: "Xll",
        gender: "women",
        genderText: "حريمي",
        price: 250000,
        oldPrice: 280000,
        rating: 4.7,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/ساعات حريمى xll.jpg",
        isFeatured: false,
        specs: {
            movement: "قوي تشكيل انسيال ماركات حريمي",
            caseMaterial: "استانلس ضد الصدا",
            color: "دهبى / فضى / دهبى وفضى",
        }
    },
    {   
        id: 17,
        name: "AUDEMARS PIGUET (رجالي)",
        brand: "AUDEMARS PIGUET",
        category: "AUDEMARSPIGUET",
        gender: "men",
        genderText: "رجالي",
        price: 500000,
        oldPrice: 570000,
        rating: 4.7,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/ساعات رجالى AUDEMARS PIGUET-black-solver.jpg",
        isFeatured: false,
        specs: {
            movement: "قوي تشكيل رجالى",
            caseMaterial: "استانلس ضد الصدا",
            color: "سيلفر ومن الداخل اسود",
        }
    },
    {   
        id: 18,
        name: "AUDEMARS PIGUET (رجالي)",
        brand: "AUDEMARS PIGUET",
        category: "AUDEMARSPIGUET",
        gender: "men",
        genderText: "رجالي",
        price: 500000,
        oldPrice: 570000,
        rating: 4.7,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/ساعات رجالى AUDEMARS PIGUET-white غامق-solver.jpg",
        isFeatured: true,
        specs: {
            movement: "قوي تشكيل رجالى",
            caseMaterial: "استانلس ضد الصدا",
            color: "سيلفر ومن الداخل ابيض غامق",
        }
    },
    {   
        id: 19,
        name: "AUDEMARS PIGUET (رجالي)",
        brand: "AUDEMARS PIGUET",
        category: "AUDEMARSPIGUET",
        gender: "men",
        genderText: "رجالي",
        price: 500000,
        oldPrice: 570000,
        rating: 4.7,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/ساعات رجالى AUDEMARS PIGUET-white-solver.jpg",
        isFeatured: false,
        specs: {
            movement: "قوي تشكيل رجالى",
            caseMaterial: "استانلس ضد الصدا",
            color: " اسود ومن الداخل اسود",
        }
    },
    {   
        id: 20,
        name: "Casio (رجالي)",
        brand: "Casio",
        category: "Casio",
        gender: "men",
        genderText: "رجالي",
        price: 200000,
        oldPrice: 250000,
        rating: 4.7,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/ساعات رجالى casio-black.jpg",
        isFeatured: false,
        specs: {
            movement: "قوي تشكيل رجالى",
            caseMaterial: "استانلس ضد الصدا",
            color: "سيلفر ومن الداخل اسود",
        }
    },
    {   
        id: 21,
        name: "Casio (رجالي)",
        brand: "Casio",
        category: "Casio",
        gender: "men",
        genderText: "رجالي",
        price: 200000,
        oldPrice: 250000,
        rating: 4.7,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/ساعات رجالى casio-blue.jpg",
        isFeatured: false,
        specs: {
            movement: "قوي تشكيل رجالى",
            caseMaterial: "استانلس ضد الصدا",
            color: "سيلفر ومن الداخل ازرق",
        }
    },
    {   
        id: 22,
        name: "Casio (رجالي)",
        brand: "Casio",
        category: "Casio",
        gender: "men",
        genderText: "رجالي",
        price: 200000,
        oldPrice: 250000,
        rating: 4.7,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/ساعات رجالى casio-greeny.jpg",
        isFeatured: false,
        specs: {
            movement: "قوي تشكيل رجالى",
            caseMaterial: "استانلس ضد الصدا",
            color: "سيلفر ومن الداخل اخضر",
        }
    },
    {   
        id: 23,
        name: "Casio (رجالي)",
        brand: "Casio",
        category: "Casio",
        gender: "men",
        genderText: "رجالي",
        price: 200000,
        oldPrice: 250000,
        rating: 4.7,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/ساعات رجالى casio-mint-blue.jpg",
        isFeatured: false,
        specs: {
            movement: "قوي تشكيل رجالى",
            caseMaterial: "استانلس ضد الصدا",
            color: "سيلفر ومن الداخل منت بلو",
        }
    },
    {   
        id: 24,
        name: "Casio (رجالي)",
        brand: "Casio",
        category: "Casio",
        gender: "men",
        genderText: "رجالي",
        price: 200000,
        oldPrice: 250000,
        rating: 4.7,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/ساعات رجالى casio-white.jpg",
        isFeatured: false,
        specs: {
            movement: "قوي تشكيل رجالى",
            caseMaterial: "استانلس ضد الصدا",
            color: "سيلفر ومن الداخل ابيض",
        }
    },
    {   
        id: 25,
        name: "Patek Philippe (رجالي)",
        brand: "Patek Philippe",
        category: "PatekPhilippe",
        gender: "men",
        genderText: "رجالي",
        price: 450000,
        oldPrice: 500000,
        rating: 4.7,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/ساعات رجالى Patek Philippe-silver-black.jpg",
        isFeatured: false,
        specs: {
            movement: "قوي تشكيل رجالى",
            caseMaterial: "استانلس ضد الصدا",
            color: "سيلفر ومن الداخل اسود",
        }
    },
    {   
        id: 26,
        name: "Patek Philippe (رجالي)",
        brand: "Patek Philippe",
        category: "PatekPhilippe",
        gender: "men",
        genderText: "رجالي",
        price: 450000,
        oldPrice: 500000,
        rating: 4.7,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/ساعات رجالى Patek Philippe-silver-blue.jpg",
        isFeatured: false,
        specs: {
            movement: "قوي تشكيل رجالى",
            caseMaterial: "استانلس ضد الصدا",
            color: "سيلفر ومن الداخل ازرق",
        }
    },
    {   
        id: 27,
        name: "Patek Philippe (رجالي)",
        brand: "Patek Philippe",
        category: "PatekPhilippe",
        gender: "men",
        genderText: "رجالي",
        price: 450000,
        oldPrice: 500000,
        rating: 4.7,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/ساعات رجالى Patek Philippe-silver-navy.jpg",
        isFeatured: false,
        specs: {
            movement: "قوي تشكيل رجالى",
            caseMaterial: "استانلس ضد الصدا",
            color: "سيلفر ومن الداخل كحلي",
        }
    },
    {   
        id: 28,
        name: "Patek Philippe (رجالي)",
        brand: "Patek Philippe",
        category: "PatekPhilippe",
        gender: "men",
        genderText: "رجالي",
        price: 450000,
        oldPrice: 500000,
        rating: 4.7,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/ساعات رجالى Patek Philippe-silver-white.jpg",
        isFeatured: false,
        specs: {
            movement: "قوي تشكيل رجالى",
            caseMaterial: "استانلس ضد الصدا",
            color: "سيلفر ومن الداخل ابيض",
        }
    },

    {   
        id: 31,
        name: "Omega (رجالي)",
        brand: "Omega",
        category: "Omega",
        gender: "men",
        genderText: "رجالي",
        price: 350000,
        oldPrice: 400000,
        rating: 4.7,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/ساعات رجالى جلد استيك اخضر من الداخل اخضر omega.jpg",
        isFeatured: false,
        specs: {
            movement: "كوارتز ياباني فاخر",
            caseMaterial: "جلد طبيعي واستانلس",
            color: "استيك جلد أخضر ومن الداخل أخضر",
        }
    },

    {   
        id: 32,
        name: "Omega (رجالي)",
        brand: "Omega",
        category: "Omega",
        gender: "men",
        genderText: "رجالي",
        price: 350000,
        oldPrice: 400000,
        rating: 4.7,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/ساعات رجالى جلد استيك ازرق من الداخل ازرق omega.jpg",
        isFeatured: true,
        specs: {
            movement: "كوارتز ياباني فاخر",
            caseMaterial: "جلد طبيعي واستانلس",
            color: "استيك جلد أزرق ومن الداخل أزرق",
        }
    },

    {   
        id: 33,
        name: "Omega (رجالي)",
        brand: "Omega",
        category: "Omega",
        gender: "men",
        genderText: "رجالي",
        price: 350000,
        oldPrice: 400000,
        rating: 4.7,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/ساعات رجالى جلد استيك اسود من الداخل ابيض 2 omega.jpg",
        isFeatured: false,
        specs: {
            movement: "كوارتز ياباني فاخر",
            caseMaterial: "جلد طبيعي واستانلس",
            color: "استيك جلد أسود ومن الداخل أبيض",
        }
    },

    {   
        id: 34,
        name: "Omega (رجالي)",
        brand: "Omega",
        category: "Omega",
        gender: "men",
        genderText: "رجالي",
        price: 350000,
        oldPrice: 400000,
        rating: 4.7,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/ساعات رجالى جلد استيك اسود من الداخل ابيض omega.jpg",
        isFeatured: false,
        specs: {
            movement: "كوارتز ياباني فاخر",
            caseMaterial: "جلد طبيعي واستانلس",
            color: "استيك جلد أسود ومن الداخل أبيض",
        }
    },

    {   
        id: 35,
        name: "Omega (رجالي)",
        brand: "Omega",
        category: "Omega",
        gender: "men",
        genderText: "رجالي",
        price: 350000,
        oldPrice: 400000,
        rating: 4.7,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/ساعات رجالى جلد استيك اسود من الداخل اخضر omega.jpg",
        isFeatured: false,
        specs: {
            movement: "كوارتز ياباني فاخر",
            caseMaterial: "جلد طبيعي واستانلس",
            color: "استيك جلد أسود ومن الداخل أخضر",
        }
    },

    {   
        id: 36,
        name: "Omega (رجالي)",
        brand: "Omega",
        category: "Omega",
        gender: "men",
        genderText: "رجالي",
        price: 350000,
        oldPrice: 400000,
        rating: 4.7,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/ساعات رجالى جلد استيك اسود من الداخل ازرق omega.jpg",
        isFeatured: false,
        specs: {
            movement: "كوارتز ياباني فاخر",
            caseMaterial: "جلد طبيعي واستانلس",
            color: "استيك جلد أسود ومن الداخل أزرق",
        }
    },

    {   
        id: 37,
        name: "Cartier (رجالي)",
        brand: "Cartier",
        category: "Cartier",
        gender: "men",
        genderText: "رجالي",
        price: 300000,
        oldPrice: 380000,
        rating: 4.7,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/ساعات رجالى كارتير معدن سيلفر استيك سيلفر من الداخل ازرق و ابيض و اسود.jpg",
        isFeatured: false,
        specs: {
            movement: "قوي تشكيل رجالى",
            caseMaterial: "استانلس ضد الصدا",
            color: "استيك سيلفر ومن الداخل أزرق وأبيض وأسود",
        }
    },

    {   
        id: 38,
        name: "Bestwin (رجالي)",
        brand: "Bestwin",
        category: "Bestwin",
        gender: "men",
        genderText: "رجالي",
        price: 550000,
        oldPrice: 600000,
        rating: 4.7,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/ساعات رجالى معدن سيلفر استيك سلفر من الداخل ابيض bestwin.jpg",
        isFeatured: false,
        specs: {
            movement: "قوي تشكيل رجالى",
            caseMaterial: "استانلس ضد الصدا",
            color: "استيك سيلفر ومن الداخل أبيض",
        }
    },

    {   
        id: 39,
        name: "Delux (رجالي)",
        brand: "Delux",
        category: "Delux",
        gender: "men",
        genderText: "رجالي",
        price: 550000,
        oldPrice: 600000,
        rating: 4.7,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/ساعات رجالى معدن سيلفر استيك سلفر من الداخل ابيض delux.jpg",
        isFeatured: false,
        specs: {
            movement: "قوي تشكيل رجالى",
            caseMaterial: "استانلس ضد الصدا",
            color: "استيك سيلفر ومن الداخل أبيض",
        }
    },

    {   
        id: 40,
        name: "Delux (رجالي)",
        brand: "Delux",
        category: "Delux",
        gender: "men",
        genderText: "رجالي",
        price: 550000,
        oldPrice: 600000,
        rating: 4.7,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/ساعات رجالى معدن سيلفر استيك سلفر من الداخل ابيض delux2.jpg",
        isFeatured: false,
        specs: {
            movement: "قوي تشكيل رجالى",
            caseMaterial: "استانلس ضد الصدا",
            color: "استيك سيلفر ومن الداخل أبيض",
        }
    },

    {   
        id: 41,
        name: "Hublot (رجالي)",
        brand: "Hublot",
        category: "Hublot",
        gender: "men",
        genderText: "رجالي",
        price: 450000,
        oldPrice: 500000,
        rating: 4.7,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/ساعات رجالى معدن سيلفر استيك سلفر من الداخل ابيض hublot.jpg",
        isFeatured: false,
        specs: {
            movement: "قوي تشكيل رجالى",
            caseMaterial: "استانلس ضد الصدا",
            color: "استيك سيلفر ومن الداخل أبيض",
        }
    },

    {   
        id: 42,
        name: "Casio (رجالي)",
        brand: "Casio",
        category: "Casio",
        gender: "men",
        genderText: "رجالي",
        price: 450000,
        oldPrice: 500000,
        rating: 4.7,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/ساعات رجالى معدن سيلفر استيك سلفر من الداخل ابيض و اسود و كحلى casio.jpg",
        isFeatured: false,
        specs: {
            movement: "قوي تشكيل رجالى",
            caseMaterial: "استانلس ضد الصدا",
            color: "استيك سيلفر ومن الداخل أبيض وأسود وكحلي",
        }
    },

    {   
        id: 43,
        name: "Tissot (رجالي)",
        brand: "Tissot",
        category: "Tissotprx",
        gender: "men",
        genderText: "رجالي",
        price: 300000,
        oldPrice: 390000,
        rating: 4.7,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/ساعات رجالى معدن سيلفر استيك سلفر من الداخل اخضر tissotprx.jpg",
        isFeatured: false,
        specs: {
            movement: "قوي تشكيل رجالى",
            caseMaterial: "استانلس ضد الصدا",
            color: "استيك سيلفر ومن الداخل أخضر",
        }
    },

    {   
        id: 45,
        name: "Tissot (رجالي)",
        brand: "Tissot",
        category: "Tissotprx",
        gender: "men",
        genderText: "رجالي",
        price: 300000,
        oldPrice: 390000,
        rating: 4.7,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/ساعات رجالى معدن سيلفر استيك سلفر من الداخل اسود tissotprx.jpg",
        isFeatured: false,
        specs: {
            movement: "قوي تشكيل رجالى",
            caseMaterial: "استانلس ضد الصدا",
            color: "استيك سيلفر ومن الداخل أسود",
        }
    },

    {   
        id: 46,
        name: "Tissot (رجالي)",
        brand: "Tissot",
        category: "Tissotprx",
        gender: "men",
        genderText: "رجالي",
        price: 300000,
        oldPrice: 390000,
        rating: 4.7,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/ساعات رجالى معدن سيلفر استيك سلفر من الداخل منت tissotprx.jpg",
        isFeatured: false,
        specs: {
            movement: "قوي تشكيل رجالى",
            caseMaterial: "استانلس ضد الصدا",
            color: "استيك سيلفر ومن الداخل منت جرين",
        }
    },

    {   
        id: 47,
        name: "Hublot (رجالي)",
        brand: "Hublot",
        category: "Hublot",
        gender: "men",
        genderText: "رجالي",
        price: 450000,
        oldPrice: 500000,
        rating: 4.7,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/ساعات رجالى معدن سيلفر استيك سلفر من الداخل اسود hublot.jpg",
        isFeatured: false,
        specs: {
            movement: "قوي تشكيل رجالى",
            caseMaterial: "استانلس ضد الصدا",
            color: "استيك سيلفر ومن الداخل أسود",
        }
    },

    {   
        id: 48,
        name: "Hublot (رجالي)",
        brand: "Hublot",
        category: "Hublot",
        gender: "men",
        genderText: "رجالي",
        price: 450000,
        oldPrice: 500000,
        rating: 4.7,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/ساعات رجالى معدن سيلفر استيك سلفر من الداخل كحلى hublot.jpg",
        isFeatured: false,
        specs: {
            movement: "قوي تشكيل رجالى",
            caseMaterial: "استانلس ضد الصدا",
            color: "استيك سيلفر ومن الداخل كحلي",
        }
    },

    {   
        id: 50,
        name: "Bestwin (رجالي)",
        brand: "Bestwin",
        category: "Bestwin",
        gender: "men",
        genderText: "رجالي",
        price: 550000,
        oldPrice: 600000,
        rating: 4.7,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/ساعات رجالى معدن سيلفر استيك سلفر من الداخل اسود bestwin.jpg",
        isFeatured: false,
        specs: {
            movement: "قوي تشكيل رجالى",
            caseMaterial: "استانلس ضد الصدا",
            color: "استيك سيلفر ومن الداخل أسود",
        }
    },

    {   
        id: 51,
        name: "Bestwin (رجالي)",
        brand: "Bestwin",
        category: "Bestwin",
        gender: "men",
        genderText: "رجالي",
        price: 550000,
        oldPrice: 600000,
        rating: 4.7,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/ساعات رجالى معدن سيلفر استيك سلفر من الداخل كحلى bestwin.jpg",
        isFeatured: false,
        specs: {
            movement: "قوي تشكيل رجالى",
            caseMaterial: "استانلس ضد الصدا",
            color: "استيك سيلفر ومن الداخل كحلي",
        }
    },

    {   
        id: 52,
        name: "Delux (رجالي)",
        brand: "Delux",
        category: "Delux",
        gender: "men",
        genderText: "رجالي",
        price: 550000,
        oldPrice: 600000,
        rating: 4.7,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/ساعات رجالى معدن سيلفر استيك سلفر من الداخل نصين ابيض و اسود delux.jpg",
        isFeatured: false,
        specs: {
            movement: "قوي تشكيل رجالى",
            caseMaterial: "استانلس ضد الصدا",
            color: "استيك سيلفر ومن الداخل نصين أبيض وأسود",
        }
    },

    {   
        id: 53,
        name: "Glasses (النضارة الترند)",
        brand: "Glasses",
        category: "Glasses",
        gender: "all",
        genderText: "رجالي / حريمي",
        price: 100000,
        oldPrice: 150000,
        rating: 4.8,
        reviewsCount: 65,
        badge: "تصميم عصري",
        image: "./Img/النضاره الترند اسود.jpg",
        isFeatured: false,
        specs: {
            movement: "نظارة شمسية ترند",
            caseMaterial: "خامات عالية الجودة",
            color: "أسود",
        }
    }
];


// Check and apply stored theme immediately
const savedTheme = localStorage.getItem('chrono_royal_theme');
if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
}


let cart = JSON.parse(localStorage.getItem('chrono_royal_cart')) || [];

function saveCartToStorage() {
    localStorage.setItem('chrono_royal_cart', JSON.stringify(cart));
    updateCartUI();
}

document.addEventListener('DOMContentLoaded', () => {
    runAutoCinematicIntro();
    init180Degree3DHeroCanvas();
    renderFeaturedProducts();
    renderCatalogProducts();
    updateCartUI();
    setupEventListeners();
});

function runAutoCinematicIntro() {
    const introScreen = document.getElementById('introScreen');
    const progressBar = document.getElementById('introProgressBar');
    const percentTxt = document.getElementById('introPercent');
    const statusTxt = document.getElementById('introStatusTxt');

    let progress = 0;

    const interval = setInterval(() => {
        progress += 2;
        if (progressBar) progressBar.style.width = `${progress}%`;
        if (percentTxt) percentTxt.textContent = `${progress}%`;

        if (progress === 30) {
            if (statusTxt) statusTxt.textContent = "تحميل التشكيلة وتجهيز الساعات...";
        } else if (progress === 70) {
            if (statusTxt) statusTxt.textContent = "تأكيد معايير الفخامة والضمان الملكي...";
        } else if (progress >= 100) {
            clearInterval(interval);
            if (statusTxt) statusTxt.textContent = "مرحباً بكم في Aqrab";

            setTimeout(() => {
                introScreen?.classList.add('open');
                setTimeout(() => {
                    introScreen?.classList.add('completed');
                }, 1000);
            }, 300);
        }
    }, 25);
}

function init180Degree3DHeroCanvas() {
    const canvas = document.getElementById('watch3dCanvas');
    if (!canvas) return;

    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, 7);

    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.6);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xFFD700, 3.5);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xFFFFFF, 2);
    dirLight2.position.set(-5, -5, 5);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0xD4AF37, 4, 10);
    pointLight.position.set(0, 2, 2);
    scene.add(pointLight);

    const watchGroup = new THREE.Group();

    const caseGeometry = new THREE.CylinderGeometry(1.8, 1.8, 0.4, 64);
    const goldMaterial = new THREE.MeshStandardMaterial({
        color: 0xD4AF37,
        metalness: 0.92,
        roughness: 0.12,
    });
    const watchCase = new THREE.Mesh(caseGeometry, goldMaterial);
    watchCase.rotation.x = Math.PI / 2;
    watchGroup.add(watchCase);

    const bezelGeometry = new THREE.TorusGeometry(1.85, 0.12, 16, 100);
    const bezelMaterial = new THREE.MeshStandardMaterial({
        color: 0x111111,
        metalness: 0.85,
        roughness: 0.18
    });
    const bezel = new THREE.Mesh(bezelGeometry, bezelMaterial);
    watchGroup.add(bezel);

    const dialGeometry = new THREE.CylinderGeometry(1.65, 1.65, 0.05, 64);
    const dialMaterial = new THREE.MeshStandardMaterial({
        color: 0x0A0B0E,
        metalness: 0.4,
        roughness: 0.3
    });
    const dial = new THREE.Mesh(dialGeometry, dialMaterial);
    dial.rotation.x = Math.PI / 2;
    dial.position.z = 0.18;
    watchGroup.add(dial);

    for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2;
        const markerGeo = new THREE.BoxGeometry(0.08, 0.25, 0.04);
        const marker = new THREE.Mesh(markerGeo, goldMaterial);
        const radius = 1.35;
        marker.position.x = Math.sin(angle) * radius;
        marker.position.y = Math.cos(angle) * radius;
        marker.position.z = 0.21;
        marker.rotation.z = -angle;
        watchGroup.add(marker);
    }

    const handMat = new THREE.MeshStandardMaterial({ color: 0xFFF0B8, metalness: 0.9, roughness: 0.1 });
    
    const hourHandGeo = new THREE.BoxGeometry(0.1, 0.8, 0.03);
    const hourHand = new THREE.Mesh(hourHandGeo, handMat);
    hourHand.position.set(0, 0.3, 0.23);
    hourHand.rotation.z = -Math.PI / 4;
    watchGroup.add(hourHand);

    const minHandGeo = new THREE.BoxGeometry(0.07, 1.2, 0.03);
    const minHand = new THREE.Mesh(minHandGeo, handMat);
    minHand.position.set(0, 0.5, 0.24);
    minHand.rotation.z = Math.PI / 3;
    watchGroup.add(minHand);

    const secHandMat = new THREE.MeshBasicMaterial({ color: 0xD4AF37 });
    const secHandGeo = new THREE.BoxGeometry(0.03, 1.4, 0.02);
    const secHand = new THREE.Mesh(secHandGeo, secHandMat);
    secHand.position.set(0, 0.4, 0.25);
    watchGroup.add(secHand);

    const strapMat = new THREE.MeshStandardMaterial({ color: 0x1A1A1A, roughness: 0.8 });
    const strapTopGeo = new THREE.BoxGeometry(1.4, 1.6, 0.2);
    const strapTop = new THREE.Mesh(strapTopGeo, strapMat);
    strapTop.position.set(0, 2.3, -0.1);
    watchGroup.add(strapTop);

    const strapBottom = new THREE.Mesh(strapTopGeo, strapMat);
    strapBottom.position.set(0, -2.3, -0.1);
    watchGroup.add(strapBottom);

    const glassGeo = new THREE.CylinderGeometry(1.75, 1.75, 0.08, 64);
    const glassMat = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.25,
        roughness: 0,
        transmission: 0.9,
        thickness: 0.5
    });
    const glass = new THREE.Mesh(glassGeo, glassMat);
    glass.rotation.x = Math.PI / 2;
    glass.position.z = 0.28;
    watchGroup.add(glass);

    scene.add(watchGroup);

    const particlesGeo = new THREE.BufferGeometry();
    const particleCount = 120;
    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 12;
    }

    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
        size: 0.04,
        color: 0xD4AF37,
        transparent: true,
        opacity: 0.6
    });

    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlesMesh);

    let clock = new THREE.Clock();
    function animate() {
        requestAnimationFrame(animate);
        
        const elapsedTime = clock.getElapsedTime();
        
        const rotY = Math.sin(elapsedTime * 0.8) * (Math.PI / 2);
        watchGroup.rotation.y = rotY;
        watchGroup.rotation.x = 0.25;

        watchGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.08;

        secHand.rotation.z -= 0.03;
        particlesMesh.rotation.y += 0.0008;

        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
        if (!canvas) return;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    });
}

function renderFeaturedProducts() {
    const grid = document.getElementById('featuredGrid');
    if (!grid) return;

    const featuredList = PRODUCTS.filter(p => p.isFeatured);
    grid.innerHTML = featuredList.map(product => createProductCardHTML(product)).join('');
}

function renderCatalogProducts(filterCategory = 'all', sortBy = 'featured', filterGender = 'all') {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    let list = [...PRODUCTS];

    if (filterGender !== 'all') {
        list = list.filter(p => p.gender === filterGender);
    }

    if (filterCategory !== 'all') {
        list = list.filter(p => p.category === filterCategory);
    }

    if (sortBy === 'price-low') {
        list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
        list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'popular') {
        list.sort((a, b) => b.rating - a.rating);
    }

    if (list.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px 0;">لا توجد ساعات متطابقة مع الاختيارات الحالية.</div>`;
        return;
    }

    grid.innerHTML = list.map(product => createProductCardHTML(product)).join('');
}

function createProductCardHTML(product) {
    return `
        <div class="product-card" data-id="${product.id}">
            <span class="product-badge">${product.badge}</span>
            <div class="product-image-wrap">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="quick-view-overlay">
                    <button class="btn btn-secondary quick-view-btn" onclick="openQuickView(${product.id})">
                        <i class="fa-solid fa-eye"></i> معاينة سريعة
                    </button>
                </div>
            </div>
            <div class="product-details">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                    <span class="product-brand">${product.brand}</span>
                    <span class="product-gender-badge">${product.genderText}</span>
                </div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <span>(${product.rating} / ${product.reviewsCount} تقييم)</span>
                </div>
                <div class="product-footer">
                    <div class="price-box">
                        <span class="old-price">${product.oldPrice.toLocaleString('ar-EG')} ج.م</span>
                        <span class="current-price">${product.price.toLocaleString('ar-EG')} ج.م</span>
                    </div>
                    <button class="add-cart-btn" onclick="addToCart(${product.id})">
                        <i class="fa-solid fa-cart-plus"></i>
                        <span>إضافة للسلة</span>
                    </button>
                </div>
            </div>
        </div>
    `;
}

function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCartToStorage();
    showToast(`تمت إضافة "${product.name}" إلى السلة بنجاح!`);
    openCartDrawer();
}

function updateCartQuantity(productId, delta) {
    const index = cart.findIndex(item => item.id === productId);
    if (index > -1) {
        cart[index].quantity += delta;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        saveCartToStorage();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToStorage();
    showToast('تم إزالة المنتج من السلة.');
}

function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const cartCountEl = document.getElementById('cartCount');
    const cartDrawerCountEl = document.getElementById('cartDrawerCount');
    if (cartCountEl) cartCountEl.textContent = totalCount;
    if (cartDrawerCountEl) cartDrawerCountEl.textContent = totalCount;

    const cartBody = document.getElementById('cartBody');
    const cartFooter = document.getElementById('cartFooter');

    if (!cartBody) return;

    if (cart.length === 0) {
        cartBody.innerHTML = `
            <div class="empty-cart">
                <i class="fa-solid fa-basket-shopping"></i>
                <p>سلة المشتريات فارغة حالياً</p>
                <a href="#catalog" class="btn btn-primary" style="margin-top: 15px;" onclick="closeCartDrawer()">تصفح الساعات</a>
            </div>
        `;
        if (cartFooter) cartFooter.style.display = 'none';
    } else {
        if (cartFooter) cartFooter.style.display = 'block';
        cartBody.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <div class="cart-item-price">${(item.price * item.quantity).toLocaleString('ar-EG')} ج.م</div>
                    <div class="cart-item-qty">
                        <button class="qty-btn" onclick="updateCartQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="delete-item-btn" onclick="removeFromCart(${item.id})" title="حذف">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        `).join('');
    }

    const subtotalEl = document.getElementById('cartSubtotal');
    const totalEl = document.getElementById('cartTotal');
    if (subtotalEl) subtotalEl.textContent = `${subtotal.toLocaleString('ar-EG')} ج.م`;
    if (totalEl) totalEl.textContent = `${subtotal.toLocaleString('ar-EG')} ج.م`;
}

function openCartDrawer() {
    document.getElementById('cartOverlay')?.classList.add('active');
    document.getElementById('cartDrawer')?.classList.add('active');
}

function closeCartDrawer() {
    document.getElementById('cartOverlay')?.classList.remove('active');
    document.getElementById('cartDrawer')?.classList.remove('active');
}

function openQuickView(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const modalContent = document.getElementById('quickViewContent');
    if (!modalContent) return;

    modalContent.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="quickview-img">
        <div class="quickview-details">
            <div style="display:flex; gap:10px; align-items:center;">
                <span class="product-brand">${product.brand}</span>
                <span class="product-gender-badge">${product.genderText}</span>
            </div>
            <h2>${product.name}</h2>
            <div class="product-rating" style="margin: 10px 0;">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <span>(${product.rating} من 5)</span>
            </div>
            <div class="current-price" style="font-size: 1.8rem; margin-bottom: 20px;">
                ${product.price.toLocaleString('ar-EG')} ج.م
                <span class="old-price" style="font-size: 1rem; margin-right: 10px;">${product.oldPrice.toLocaleString('ar-EG')} ج.م</span>
            </div>
            <h4 style="margin-bottom: 8px; color: var(--gold-light);">المواصفات الفنية:</h4>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px; font-size: 0.9rem; color: var(--text-muted); margin-bottom: 24px;">
                <li><strong style="color:#FFF;">النوع:</strong> ${product.specs.movement} </li>
                <li><strong style="color:#FFF;">الهيكل:</strong> ${product.specs.caseMaterial}</li>
                <li><strong style="color:#FFF;">الألوان:</strong> ${product.specs.color}</li>
            </ul>
            <button class="btn btn-primary btn-block glow-effect" onclick="addToCart(${product.id}); closeQuickView();">
                <i class="fa-solid fa-bag-shopping"></i> إضافة إلى السلة الآن
            </button>
        </div>
    `;

    document.getElementById('quickViewModalOverlay')?.classList.add('active');
}

function closeQuickView() {
    document.getElementById('quickViewModalOverlay')?.classList.remove('active');
}

function openCheckoutModal() {
    if (cart.length === 0) {
        showToast('السلة فارغة، أضف بعض الساعات أولاً!');
        return;
    }

    closeCartDrawer();

    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const countEl = document.getElementById('modalItemsCount');
    const priceEl = document.getElementById('modalTotalPrice');

    if (countEl) countEl.textContent = `${totalCount} قطعة`;
    if (priceEl) priceEl.textContent = `${totalPrice.toLocaleString('ar-EG')} ج.م`;

    document.getElementById('checkoutModalOverlay')?.classList.add('active');
}

function closeCheckoutModal() {
    document.getElementById('checkoutModalOverlay')?.classList.remove('active');
}

function handleCheckoutSubmit(e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const primaryPhone = document.getElementById('primaryPhone').value.trim();
    const secondaryPhone = document.getElementById('secondaryPhone').value.trim();
    const address = document.getElementById('address').value.trim();
    const governorate = document.getElementById('governorate').value;

    const nameWords = fullName.split(/\s+/);
    if (nameWords.length < 2) {
        alert('يرجى كتابة الاسم بالكامل رباعي (على الأقل 2 أسماء)');
        return;
    }

    const targetNumber = "201080860634";
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    let itemsText = "";
    cart.forEach((item, index) => {
        
        const itemColor = item.specs && item.specs.color ? item.specs.color : "غير محدد";
        
        itemsText += `${index + 1}. *${item.name}*\n   اللون: ${itemColor} | النوع: ${item.genderText} | الكمية: ${item.quantity} | السعر: ${(item.price * item.quantity).toLocaleString('ar-EG')} ج.م\n`;
    });

    const message = 
`👑 *طلب شراء جديد من متجر Aqrab* 👑
----------------------------------
👤 *بيانات المشتري:*
• *الاسم رباعي:* ${fullName}
• *رقم الموبايل الأساسي:* ${primaryPhone}
• *رقم الموبايل الاحتياطي:* ${secondaryPhone}
• *المحافظة:* ${governorate}
• *العنوان التفصيلي:* ${address}

🛒 *المشتريات بالسلة:*
${itemsText}
💰 *الإجمالي المطلوب:* ${totalPrice.toLocaleString('ar-EG')} ج.م
💳 *طريقة الدفع:* الدفع عند الاستلام المعاينة أولاً
----------------------------------
يرجى تأكيد الطلب وتجهيز الشحن، وشكراً لكم!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${targetNumber}&text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');

    const orderDetailsBox = document.getElementById('successOrderDetails');
    if (orderDetailsBox) {
        orderDetailsBox.innerHTML = `
            <div style="text-align: right;">
                <p><strong>اسم العميل:</strong> ${fullName}</p>
                <p><strong>أرقام الموبايل:</strong> ${primaryPhone} / ${secondaryPhone}</p>
                <p><strong>العنوان:</strong> ${governorate} - ${address}</p>
                <p><strong>عدد المنتجات:</strong> ${cart.length} أنواع (${cart.reduce((s,i)=>s+i.quantity,0)} قطعة)</p>
                <p><strong>المبلغ الإجمالي:</strong> <span class="gold-gradient-text" style="font-size: 1.2rem;">${totalPrice.toLocaleString('ar-EG')} ج.م</span></p>
                
                <div style="margin-top: 15px; background: rgba(37, 211, 102, 0.1); border: 1px solid #25D366; padding: 12px; border-radius: 8px; text-align: center;">
                    <p style="color: #25D366; font-weight: 700; margin-bottom: 6px;">
                        <i class="fa-brands fa-whatsapp"></i> يتم نقل الرسالة الآن إلى الواتساب (01080860634)
                    </p>
                    <a href="${whatsappUrl}" target="_blank" class="btn btn-whatsapp btn-block glow-effect" style="margin-top: 6px;">
                        اضغط هنا إذا لم يتفتح الواتساب تلقائياً
                    </a>
                </div>
            </div>
        `;
    }

    cart = [];
    saveCartToStorage();

    closeCheckoutModal();
    document.getElementById('successModalOverlay')?.classList.add('active');
}

function setupEventListeners() {
    // Scroll Event Listener
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    });

    // Theme Toggle Event Listener
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const themeIcon = document.getElementById('themeIcon');

    // ضبط الأيقونة المبدئية عند التحميل
    if (document.body.classList.contains('light-mode')) {
        themeIcon?.classList.replace('fa-sun', 'fa-moon');
    }

    themeToggleBtn?.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const isLight = document.body.classList.contains('light-mode');

        if (isLight) {
            themeIcon?.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('chrono_royal_theme', 'light');
        } else {
            themeIcon?.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('chrono_royal_theme', 'dark');
        }
    });
}

    document.getElementById('openCartBtn')?.addEventListener('click', openCartDrawer);
    document.getElementById('closeCartBtn')?.addEventListener('click', closeCartDrawer);
    document.getElementById('cartOverlay')?.addEventListener('click', closeCartDrawer);

    document.getElementById('proceedCheckoutBtn')?.addEventListener('click', openCheckoutModal);
    document.getElementById('closeCheckoutModal')?.addEventListener('click', closeCheckoutModal);

    document.getElementById('checkoutForm')?.addEventListener('submit', handleCheckoutSubmit);

    document.getElementById('closeSuccessBtn')?.addEventListener('click', () => {
        document.getElementById('successModalOverlay')?.classList.remove('active');
    });

    document.getElementById('closeQuickViewModal')?.addEventListener('click', closeQuickView);

    // Gender filter tab buttons
    const genderBtns = document.querySelectorAll('.gender-btn');
    genderBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            genderBtns.forEach(b => b.classList.remove('active'));
            const target = e.currentTarget;
            target.classList.add('active');
            
            const gender = target.getAttribute('data-gender') || 'all';
            const category = document.querySelector('.filter-btn.active')?.getAttribute('data-filter') || 'all';
            const sortBy = document.getElementById('sortSelect')?.value || 'featured';
            
            renderCatalogProducts(category, sortBy, gender);
        });
    });

    // Category filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            const target = e.currentTarget; 
            target.classList.add('active');
        
            const category = target.getAttribute('data-filter') || 'all';
        
            // إعادة ضبط فلتر النوع إلى "الكل" عند تحديد ماركة معينة لإظهار جميع منتجاتها
            if (category !== 'all') {
                const genderBtns = document.querySelectorAll('.gender-btn');
                genderBtns.forEach(b => b.classList.remove('active'));
                document.querySelector('.gender-btn[data-gender="all"]')?.classList.add('active');
            }

            const gender = document.querySelector('.gender-btn.active')?.getAttribute('data-gender') || 'all';
            const sortBy = document.getElementById('sortSelect')?.value || 'featured';
        
            renderCatalogProducts(category, sortBy, gender);
        });
    });

    document.getElementById('sortSelect')?.addEventListener('change', (e) => {
        const activeCategory = document.querySelector('.filter-btn.active')?.getAttribute('data-filter') || 'all';
        const activeGender = document.querySelector('.gender-btn.active')?.getAttribute('data-gender') || 'all';
        renderCatalogProducts(activeCategory, e.target.value, activeGender);
    });

    const searchBtn = document.getElementById('searchBtn');
    const closeSearchBtn = document.getElementById('closeSearchBtn');
    const searchOverlay = document.getElementById('searchOverlay');
    const searchInput = document.getElementById('searchInput');

    searchBtn?.addEventListener('click', () => {
        searchOverlay?.classList.add('active');
        searchInput?.focus();
    });

    closeSearchBtn?.addEventListener('click', () => {
        searchOverlay?.classList.remove('active');
    });

    const brandMap = {
        'رولكس': 'rolex',
        'باتيك': 'patek',
        'أوديمار': 'audemars',
        'اوديمار': 'audemars',
        'أوميجا': 'omega',
        'اوميجا': 'omega',
        'كارتير': 'cartier',
        'كاسيو': 'casio',
        'هوبلو': 'hublot',
        'تيسوت': 'tissot',
        'بيست وين': 'bestwin',
        'ديلوكس': 'delux',
        'شانيل': 'chanel',
        'ديور': 'dior',
        'سي كاي': 'ck',
        'فيستينا': 'festna',
        'مايكل كورس': 'michael',
        'نظارات': 'glasses',
        'نظاره': 'glasses',
        'نظارة': 'glasses'
    };

    searchInput?.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        const grid = document.getElementById('productsGrid');
        if (!grid) return;

        if (query === '') {
            const activeCategory = document.querySelector('.filter-btn.active')?.getAttribute('data-filter') || 'all';
            const activeGender = document.querySelector('.gender-btn.active')?.getAttribute('data-gender') || 'all';
            const sortBy = document.getElementById('sortSelect')?.value || 'featured';
            renderCatalogProducts(activeCategory, sortBy, activeGender);
            return;
        }

        const filtered = PRODUCTS.filter(p => {
            const name = p.name.toLowerCase();
            const brand = p.brand.toLowerCase();
            const category = p.category.toLowerCase();
            const genderText = p.genderText.toLowerCase();

            if (name.includes(query) || 
                brand.includes(query) || 
                category.includes(query) || 
                genderText.includes(query)) {
                return true;
            }

            if (p.specs) {
                if (p.specs.movement?.toLowerCase().includes(query) ||
                    p.specs.caseMaterial?.toLowerCase().includes(query) ||
                    p.specs.color?.toLowerCase().includes(query)) {
                    return true;
                }
            }

            for (const [arabic, english] of Object.entries(brandMap)) {
                if (query.includes(arabic) && (brand.includes(english) || category.includes(english) || name.includes(english))) {
                    return true;
                }
            }

            return false;
        });

        if (filtered.length === 0) {
            grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px 0;">لا توجد ساعات تطابق بحثك.</div>`;
            return;
        }

        grid.innerHTML = filtered.map(product => createProductCardHTML(product)).join('');
    });

    searchInput?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            searchOverlay?.classList.remove('active');
            document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchOverlay?.classList.contains('active')) {
            searchOverlay.classList.remove('active');
        }
    });


function showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <i class="fa-solid fa-circle-check text-gold"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}