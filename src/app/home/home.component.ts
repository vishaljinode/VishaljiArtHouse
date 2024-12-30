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
      // description: 'Ravabhai bravely protected the traders who came with him without caring for his own life.',
      price: 349,
      image: 'https://res.cloudinary.com/dhyq1xwix/image/upload/v1735542503/Mokhdaji_Tshirt_1_ykptui.png',
      link: "https://wa.me/p/28192260490387618/919664720473"
    },
    {
      id: 2,
      title: 'Jai Ho Veer Sanchoji Parmar T-shirt',
      // description: 'A costume with a warrior outfit. Salute to the brave warriors. Veerta ko naman.',
      price: 349,
      image: 'https://res.cloudinary.com/dhyq1xwix/image/upload/v1735542503/Sachoji_Tshirt_zm002_o1bqvc.png',
      link: "https://wa.me/p/8749798015089843/919664720473",
    },
    {
      id: 3,
      title: 'Veer Vachchraj Dada Solanki T-shirt',
      // description: 'Veer Mokhdaji Dada Gohil was a Rajput ruler of Ghogha near Bhavnagar in Gujarat.',
      price: 349,
      image: 'https://res.cloudinary.com/dhyq1xwix/image/upload/v1735542504/Sachoji_Tshirt_zm003_pwwvrg.png',
      link: "https://wa.me/p/9747282728631796/919664720473" ,
    },
    {
      id: 4,
      title: 'Veer Kadu Makrani T-Shirt',
      // description: 'Shri Odha Khuman was the Darbar of Anshodar village.',
      price: 349,
      image: 'https://res.cloudinary.com/dhyq1xwix/image/upload/v1735542494/KADU_T-SHIRT_ZM004_damoqn.png',
      link: "https://wa.me/p/27854475680867224/919664720473",
    },
    {
      id: 5,
      title: 'Veer Hamirji Gohil T-shirt',
      // description: 'Vachhara Dada is a Solanki Rajput who is worshipped by many communities. He is known for his sacrifice in protecting the cows.',
      price: 349,
      image: 'https://res.cloudinary.com/dhyq1xwix/image/upload/v1735542488/HAMIRJI_T-SHIRT_ZM006_bdgjbr.png',
      link: "https://wa.me/p/8864111227036257/919664720473"
    },
    {
      id: 6,
      title: 'Veer Ajaji Jadeja (Bhuchar Mori) T-Shirt',
      // description: 'Jogidas Khuman : character and actions have become a symbol of pride for the people of Gujarat.',
      price: 349,
      image: 'https://res.cloudinary.com/dhyq1xwix/image/upload/v1735542485/AJAJI_T-SHIRT_ZM007_okfvhw.png',
      link: "https://wa.me/p/8932815240165849/919664720473"
    },
    {
      id: 7,
      title: 'Great Freedom Fighter Vir Birsa Munda T-Shirt',
      // description: 'Muli king Chachoji Parmar brought Lion by ear from Mandavavan and donated it.',
      price: 349,
      image: 'https://res.cloudinary.com/dhyq1xwix/image/upload/v1735542486/BIRSA_MUNDA_T-SHIRT_ZM009_vddvkf.png',
      link: "https://wa.me/p/9232732376770036/919664720473"
    },
    {
      id: 8,
      title: 'Munjo Kutchdo Bare Maas T-Shirt',
      // description: 'The Paliya or Khambhi is a type of a memorial found in the Saurashtra and Kutch.',
      price: 349,
      image: 'https://res.cloudinary.com/dhyq1xwix/image/upload/v1735542498/KUTCH_T-SHIRT_ZM008_piltfd.png',
      link: "https://wa.me/p/8866914306756766/919664720473"
    },
    {
      id: 9,
      title: 'Em Kundla No Khape(Jogidas Khuman) T-Shirt',
      // description: 'Chelaiyya is son of Seth Sagalsha and Changavati of Bilkha Village.',
      price: 349,
      image: 'https://res.cloudinary.com/dhyq1xwix/image/upload/v1735542492/JOGIDAS_T-SHIRT_ZM005_escgre.png',
      link: "https://wa.me/p/8838761612859258/919664720473"
    },
    {
      id: 10,
      title: 'Karma Mode On T-Shirt',
      price: 349,
      image: 'https://res.cloudinary.com/dhyq1xwix/image/upload/v1735542490/KARMA_T-SHIRT_ZM010_qncytb.jpg',
      link: "https://wa.me/p/9679894188704973/919664720473"
    },
    {
      id: 11,
      title: 'Sahitya Premi T-Shirt',    
      price: 349,
      image: 'https://res.cloudinary.com/dhyq1xwix/image/upload/v1735542505/SAHITYA_PREMI_T-SHIRT_ZM011_jmakru.png',
      link: "https://wa.me/p/9419759364702861/919664720473"
    },
    {
      id: 12,
      title: 'Ananam Matha(Tribute To The Great Vihal Raba) Tshirt',    
      price: 349,
      image: 'https://res.cloudinary.com/dhyq1xwix/image/upload/v1735542486/ANANAM_MATHA_T-SHIRT_ZM012_z9czqs.png',
      link: "https://wa.me/p/9805026956192521/919664720473"
    },
    {
      id: 13,
      title: 'Legend Are Born In Kathiawad T-Shirt',    
      price: 349,
      image: 'https://res.cloudinary.com/dhyq1xwix/image/upload/v1735542498/KUTCH_T-SHIRT_ZM008_piltfd.png',
      link: "https://wa.me/p/8428752367226516/919664720473"
    },    
    {
      id: 14,
      title: 'Gandi Gir No Savaj T-Shirt',    
      price: 349,
      image: 'https://res.cloudinary.com/dhyq1xwix/image/upload/v1735542490/GANDI_GIR_T-SHIRT_ZM015_ilfohy.png',
      link: "https://wa.me/p/9628886687140096/919664720473"
    },
    {
      id: 15,
      title: 'Prakruti Premi T-Shirt',    
      price: 349,
      image: 'https://res.cloudinary.com/dhyq1xwix/image/upload/v1735542500/PRAKRUTI_PREMI_T-SHIRT_ZM016_lkqecg.png',
      link: "https://wa.me/p/27973523975628949/919664720473"
    },
    {
      id: 16,
      title: 'Animal Lover T-Shirt',    
      price: 349,
      image: 'https://res.cloudinary.com/dhyq1xwix/image/upload/v1735542489/ANIMAL_LOVER_T-SHIRT_ZM017_wt2qyl.png',
      link: "https://wa.me/p/9080567721965609/919664720473"
    },
    {
      id: 17,
      title: 'Naman Jati Avatar Jogidas Khuman T-Shirt',    
      price: 349,
      image: 'https://res.cloudinary.com/dhyq1xwix/image/upload/v1735542497/NAMAN_JOGIDAS_T-SHIRT_ZM018_pzge3f.png',
      link: "https://wa.me/p/28839253535674248/919664720473"
    },
    {
      id: 18,
      title: 'Man Mor Bani Thangat Kare T-Shirt',    
      price: 349,
      image: 'https://res.cloudinary.com/dhyq1xwix/image/upload/v1735542496/MAN_MOR_BANI_THANGAT_KARE_T-SHIRT_ZM019_a027ik.png',
      link: "https://wa.me/p/8939038249478341/919664720473"
    },
    {
      id: 19,
      title: 'Veer Natha Bhagat Modhvadiya T-Shirt',    
      price: 349,
      image: 'https://res.cloudinary.com/dhyq1xwix/image/upload/v1735542499/NAMAN_VEER_NATHA_BHAGAT_T-SHIRT_ZM020_wbhw1w.png',
      link: "https://wa.me/p/8715608751870999/919664720473"
    },
    {
      id: 20,
      title: 'Ek Tetar Ne Karne T-Shirt',    
      price: 349,
      image: 'https://res.cloudinary.com/dhyq1xwix/image/upload/v1735542486/EK_TETAR_NE_KARNE_T-SHIRT_ZM022_mtlu8u.png',
      link: "https://wa.me/p/9505696092796592/919664720473"
    },
    {
      id: 21,
      title: 'Sharnagat Vatsal Jam Abdaji (Kutch Kesari) T-Shirt',    
      price: 349,
      image: 'https://res.cloudinary.com/dhyq1xwix/image/upload/v1735542491/JAM_ABDAJI_T-SHIRT_ZM023_1_usvmvh.png',
      link: "https://wa.me/p/8877832935645903/919664720473"
    },
    {
      id: 22,
      title: 'Dwarka Panji Aay(Jodha Manek-Mulu Manek) T-Shirt',    
      price: 349,
      image: 'https://res.cloudinary.com/dhyq1xwix/image/upload/v1735542489/DWARKA_PANJI_AAY_T-SHIRT_ZM024_dedrs4.png',
      link: "https://wa.me/p/8844899285599230/919664720473"
    },
    {
      id: 23,
      title: 'Saurashtra Ni Rasdhar T-Shirt',    
      price: 349,
      image: 'https://res.cloudinary.com/dhyq1xwix/image/upload/v1735542505/SR_T-SHIRT_ZM021_rbhmrk.png',
      link: "https://wa.me/p/8906875649394334/919664720473"
    }
  ];

  orderFromWhatsApp(tshirt: any) {
    // const message = `Hello, I would like to order the ${tshirt.title} for ₹${tshirt.price}.`;
    const link = tshirt.link;
    window.open(link, '_blank');
  }
}
