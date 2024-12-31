import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  tshirts = [
    {
      id: 1,
      title: 'Veer Mokhdaji Dada Gohil T-Shirt',
      price: 349,
      image: "https://res.cloudinary.com/dhyq1xwix/image/upload/v1735555114/Mokhdaji_Tshirt_VishaljiArtHouse_nhwrpc.jpg",
      link: "https://wa.me/p/28192260490387618/919664720473"
    },
    {
      id: 2,
      title: 'Jai Ho Veer Sanchoji Parmar T-shirt',
      price: 349,
      image:"https://res.cloudinary.com/dhyq1xwix/image/upload/v1735555118/Sachoji_Tshirt_zm002_VishaljiArtHouse_tagout.jpg",
      link: "https://wa.me/p/8749798015089843/919664720473",
    },
    {
      id: 3,
      title: 'Veer Vachchraj Dada Solanki T-shirt',
      price: 349,
      image:"https://res.cloudinary.com/dhyq1xwix/image/upload/v1735555119/Sachoji_Tshirt_zm003_VishaljiArtHouse_kgoo2a.jpg",
      link: "https://wa.me/p/9747282728631796/919664720473" ,
    },
    {
      id: 4,
      title: 'Veer Kadu Makrani T-Shirt',
      price: 349,
      image: "https://res.cloudinary.com/dhyq1xwix/image/upload/v1735555110/KADU_T-SHIRT_ZM004_VishaljiArtHouse_c7ijap.jpg",
      link: "https://wa.me/p/27854475680867224/919664720473",
    },
    {
      id: 5,
      title: 'Veer Hamirji Gohil T-shirt',
      price: 349,
      image: "https://res.cloudinary.com/dhyq1xwix/image/upload/v1735555107/HAMIRJI_T-SHIRT_ZM006_VishaljiArtHouse_xwb2nb.jpg",
      link: "https://wa.me/p/8864111227036257/919664720473"
    },
    {
      id: 6,
      title: 'Veer Ajaji Jadeja (Bhuchar Mori) T-Shirt',
      price: 349,
      image: "https://res.cloudinary.com/dhyq1xwix/image/upload/v1735555102/AJAJI_T-SHIRT_ZM007_VishaljiArtHouse_jczomw.jpg",
      link: "https://wa.me/p/8932815240165849/919664720473"
    },
    {
      id: 7,
      title: 'Great Freedom Fighter Vir Birsa Munda T-Shirt',
      price: 349,
      image: "https://res.cloudinary.com/dhyq1xwix/image/upload/v1735555103/BIRSA_MUNDA_T-SHIRT_ZM009_VishaljiArtHouse_b4gnbo.jpg",
      link: "https://wa.me/p/9232732376770036/919664720473"
    },
    {
      id: 8,
      title: 'Munjo Kutchdo Bare Maas T-Shirt',
      price: 349,
      image: "https://res.cloudinary.com/dhyq1xwix/image/upload/v1735555110/KUTCH_T-SHIRT_ZM008_VishaljiArtHouse_zbvy7l.jpg",
      link: "https://wa.me/p/8866914306756766/919664720473"
    },
    {
      id: 9,
      title: 'Em Kundla No Khape(Jogidas Khuman) T-Shirt',
      price: 349,
      image: "https://res.cloudinary.com/dhyq1xwix/image/upload/v1735555110/JOGIDAS_T-SHIRT_ZM005_VishaljiArtHouse_dmfpcg.jpg",
      link: "https://wa.me/p/8838761612859258/919664720473"
    },
    {
      id: 10,
      title: 'Karma Mode On T-Shirt',
      price: 349,
      image: "https://res.cloudinary.com/dhyq1xwix/image/upload/v1735555110/KARMA_T-SHIRT_ZM010_VishaljiArtHouse_yesxim.jpg",
      link: "https://wa.me/p/9679894188704973/919664720473"
    },
    {
      id: 11,
      title: 'Sahitya Premi T-Shirt',    
      price: 349,
      image:"https://res.cloudinary.com/dhyq1xwix/image/upload/v1735555121/SAHITYA_PREMI_T-SHIRT_ZM011_VishaljiArtHouse_wmoo7q.jpg",
      link: "https://wa.me/p/9419759364702861/919664720473"
    },
    {
      id: 12,
      title: 'Ananam Matha(Tribute To The Great Vihal Raba) Tshirt',    
      price: 349,
      image: "https://res.cloudinary.com/dhyq1xwix/image/upload/v1735555102/ANANAM_MATHA_T-SHIRT_ZM012_VishaljiArtHouse_pnaw3k.jpg",
      link: "https://wa.me/p/9805026956192521/919664720473"
    },
    {
      id: 13,
      title: 'Legend Are Born In Kathiawad T-Shirt',    
      price: 349,
      image: "https://res.cloudinary.com/dhyq1xwix/image/upload/v1735555114/LEGEND_T-SHIRT_ZM013_VishaljiArtHouse_yx9hhc.jpg",
      link: "https://wa.me/p/8428752367226516/919664720473"
    },    
    {
      id: 14,
      title: 'Gandi Gir No Savaj T-Shirt',    
      price: 349,
      image: "https://res.cloudinary.com/dhyq1xwix/image/upload/v1735555103/GANDI_GIR_T-SHIRT_ZM015_VishaljiArtHouse_cj76ya.jpg",
      link: "https://wa.me/p/9628886687140096/919664720473"
    },
    {
      id: 15,
      title: 'Prakruti Premi T-Shirt',    
      price: 349,
      image:"https://res.cloudinary.com/dhyq1xwix/image/upload/v1735555118/PRAKRUTI_PREMI_T-SHIRT_ZM016_VishaljiArtHouse_h4sevq.jpg",
      link: "https://wa.me/p/27973523975628949/919664720473"
    },
    {
      id: 16,
      title: 'Animal Lover T-Shirt',    
      price: 349,
      image: "https://res.cloudinary.com/dhyq1xwix/image/upload/v1735555102/ANIMAL_LOVER_T-SHIRT_ZM017_VishaljiArtHouse_nkn8ex.jpg",
      link: "https://wa.me/p/9080567721965609/919664720473"
    },
    {
      id: 17,
      title: 'Naman Jati Avatar Jogidas Khuman T-Shirt',    
      price: 349,
      image: "https://res.cloudinary.com/dhyq1xwix/image/upload/v1735555115/NAMAN_JOGIDAS_T-SHIRT_ZM018_VishaljiArtHouse_dc7zi3.jpg",
      link: "https://wa.me/p/28839253535674248/919664720473"
    },
    {
      id: 18,
      title: 'Man Mor Bani Thangat Kare T-Shirt',    
      price: 349,
      image: "https://res.cloudinary.com/dhyq1xwix/image/upload/v1735555114/MAN_MOR_BANI_THANGAT_KARE_T-SHIRT_ZM019_VishaljiArtHouse_idfjzt.jpg",
      link: "https://wa.me/p/8939038249478341/919664720473"
    },
    {
      id: 19,
      title: 'Veer Natha Bhagat Modhvadiya T-Shirt',    
      price: 349,
      image:"https://res.cloudinary.com/dhyq1xwix/image/upload/v1735555118/NAMAN_VEER_NATHA_BHAGAT_T-SHIRT_ZM020_VishaljiArtHouse_wpxe2l.jpg",
      link: "https://wa.me/p/8715608751870999/919664720473"
    },
    {
      id: 20,
      title: 'Ek Tetar Ne Karne T-Shirt',    
      price: 349,
      image: "https://res.cloudinary.com/dhyq1xwix/image/upload/v1735555104/EK_TETAR_NE_KARNE_T-SHIRT_ZM022_VishaljiArtHouse_utqrb8.jpg",
      link: "https://wa.me/p/9505696092796592/919664720473"
    },
    {
      id: 21,
      title: 'Sharnagat Vatsal Jam Abdaji (Kutch Kesari) T-Shirt',    
      price: 349,
      image: "https://res.cloudinary.com/dhyq1xwix/image/upload/v1735555109/JAM_ABDAJI_T-SHIRT_ZM023_VishaljiArtHouser_pyaakn.jpg",
      link: "https://wa.me/p/8877832935645903/919664720473"
    },
    {
      id: 22,
      title: 'Dwarka Panji Aay(Jodha Manek-Mulu Manek) T-Shirt',    
      price: 349,
      image: "https://res.cloudinary.com/dhyq1xwix/image/upload/v1735555103/DWARKA_PANJI_AAY_T-SHIRT_ZM024_VishaljiArtHouse_hmyslp.jpg",
      link: "https://wa.me/p/8844899285599230/919664720473"
    },
    {
      id: 23,
      title: 'Saurashtra Ni Rasdhar T-Shirt',    
      price: 349,
      image:"https://res.cloudinary.com/dhyq1xwix/image/upload/v1735555126/SR_T-SHIRT_ZM021_VishaljiArtHouse_b6cctb.jpg",
      link: "https://wa.me/p/8906875649394334/919664720473"
    },
    {
      id: 24,
      title: 'Cyber Crime Awareness T-Shirt',    
      price: 349,
      image:"https://res.cloudinary.com/dhyq1xwix/image/upload/v1735667082/CYBER_CRIME_HELPLINE_025_VishaljiArtHouse_cpra74.jpg",
      link: "https://wa.me/p/9593766560634435/919664720473"
    }
  ];
  orderFromWhatsApp(tshirt: any) {
    // const message = `Hello, I would like to order the ${tshirt.title} for ₹${tshirt.price}.`;
    const link = tshirt.link;
    window.open(link, '_blank');
  }
}
