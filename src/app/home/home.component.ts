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
      title: 'Rang Chhe Ravabhai',
      description: 'Ravabhai bravely protected the traders who came with him without caring for his own life.',
      price: 349,
      image: 'https://res.cloudinary.com/dhyq1xwix/image/upload/v1734626412/lefnxyz56iwolviavdwp.jpg'
    },
    {
      id: 2,
      title: 'Veer Yodha T-shirt',
      description: 'A costume with a warrior outfit. Salute to the brave warriors. Veerta ko naman.',
      price: 349,
      image: 'https://res.cloudinary.com/dhyq1xwix/image/upload/v1734626720/sji4fbp5wxaxdaddj8vn.jpg'
    },
    {
      id: 3,
      title: 'Veer Mokhadaji Dada T-shirt',
      description: 'Veer Mokhdaji Dada Gohil was a Rajput ruler of Ghogha near Bhavnagar in Gujarat.',
      price: 349,
      image: 'https://res.cloudinary.com/dhyq1xwix/image/upload/v1734626720/j5juvt1rgqwk77wsrytl.jpg'
    },
    {
      id: 4,
      title: 'Veer Darbaar Shree Odha Khuman T-shirt',
      description: 'Shri Odha Khuman was the Darbar of Anshodar village.',
      price: 349,
      image: 'https://res.cloudinary.com/dhyq1xwix/image/upload/v1734626720/zcp2a9uhftvzgqip0d8o.jpg'
    },
    {
      id: 5,
      title: 'Veer Vachchraj Dada T-shirt',
      description: 'Vachhara Dada is a Solanki Rajput who is worshipped by many communities. He is known for his sacrifice in protecting the cows.',
      price: 349,
      image: 'https://res.cloudinary.com/dhyq1xwix/image/upload/v1734626720/iwkxzwpeipcwmtipzmdl.jpg'
    },
    {
      id: 6,
      title: 'Jai Ho Jogidas Khuman T-shirt',
      description: 'Jogidas Khuman : character and actions have become a symbol of pride for the people of Gujarat.',
      price: 349,
      image: 'https://res.cloudinary.com/dhyq1xwix/image/upload/v1734626720/yk2lfyfhreqawm8fwgt5.jpg'
    },
    {
      id: 7,
      title: 'Veer Sanchoji Parmar T-shirt',
      description: 'Muli king Chachoji Parmar brought Lion by ear from Mandavavan and donated it.',
      price: 349,
      image: 'https://res.cloudinary.com/dhyq1xwix/image/upload/v1734626720/cnitplonomsncijl3i4h.jpg'
    },
    {
      id: 8,
      title: 'Paliyo And Yodha T-shirt',
      description: 'The Paliya or Khambhi is a type of a memorial found in the Saurashtra and Kutch.',
      price: 349,
      image: 'https://res.cloudinary.com/dhyq1xwix/image/upload/v1734626721/k9bxqxojk1z7g5ox7jkg.jpg'
    },
    {
      id: 9,
      title: 'Khamakhama Kuvar Chelaiya T-shirt',
      description: 'Chelaiyya is son of Seth Sagalsha and Changavati of Bilkha Village.',
      price: 349,
      image: 'https://res.cloudinary.com/dhyq1xwix/image/upload/v1734626721/cdnflzvdxys5xpim6yud.jpg'
    }
  ];

  orderFromWhatsApp(tshirt: any) {
    const message = `Hello, I would like to order the ${tshirt.title} for ₹${tshirt.price}.`;
    const link = `https://wa.me/+919664720473?text=${encodeURIComponent(message)}`;
    window.open(link, '_blank');
  }
}
