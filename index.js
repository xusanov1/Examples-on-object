"use strict";

// 1-misol

// let bookshelf = [];

// function addBook(title, author, genre, pages) {
//   let newBook = {
//     title: title,
//     author: author,
//     genre: genre,
//     pages: pages,
//     isRead: false, 
//   };

//   bookshelf.push(newBook); 
// }

// function markAsRead(title) {
//   for (let book of bookshelf) {
//     if (book.title === title) {
//       book.isRead = true; 
//       break;
//     }
//   }
// }

// addBook("Tinchlik Xaqida", "Nodirbek Sobirov", "Psixologiya", 200);
// addBook("Olmoqor", "Abdulla Qahhor", "Romantika", 300);
// markAsRead("Olmoqor");
// console.log(bookshelf);

// -------------------------------------------------------------------------------------------------------\\

// 2-misol

let contactList = [];

function addContact(name, email, phone, street, city, country) {
  let newContact = {
    name,
    email,
    phone,
    address: {
      street,
      city,
      country,
    },
  };

  contactList.push(newContact); 
}

function updateContact(contactIndex, newName, newEmail, newPhone, newStreet, newCity, newCountry) {
  if (contactList[contactIndex]) {
    const { name } = contactList[contactIndex]; 

    contactList[contactIndex] = {
      ...contactList[contactIndex],
      name: newName,
      email: newEmail,
      phone: newPhone,
      address: {
        street: newStreet,
        city: newCity,
        country: newCountry,
      },

    };

    console.log(`Kontakt "${name}" bazaga muvaffaqiyatli yangilandi.`);
  } else {
    console.log(`Berilgan indeksdagi kontakt topilmadi.`);
  }
}

addContact("Izzatillo Xusanov", "xusanov@gmail.com", "123456789", "Botirma ko'chasi", "Chilonzor", "Uzbekistan");
addContact("Farxod Adixamov", "adixamov@gmail.com", "987654321", "Sharq ko'chasi", "Yunusobod", "Uzbekistan");
updateContact(0,"Xusniddin Atoullayev", "xusniddin@gmail.com", "987654321", "G'arb kochasi", "Mirobod", "Uzbekistan");  
console.log(contactList)
