// import {
//     createElement,
//     createHeader,
// } from  '../../script/layout'

// const page = document.querySelector('.page')
// const header = createHeader()
// page.append(header)

// const title = createElement('h1', 'title', 'Мій блог')

// page.append(title)


// const POST_LIST = [
//     {
//         category: [
//             {text: 'Важливо', id: 1},
//             {text: 'Нова', id: 2},
//         ],
//         info: 'Не плануєм, наймемо дизайнера і готуємося до презентації',
//         date: '25.01',
//         viewed: false,
//     },
//     {
//         category: [
//             {text: 'Нова', id: 2},
//         ],
//         info: 'Ми хотіли у цьому чаті близько 150 людей',
//         date: '24.01',
//         viewed: true,
//     },
// ]

// const createPost = () => {
//     const postList = createElement('main', 'post__list')

//     POST_LIST.forEach((postData) => {
//         const post = createElement(
//             'div',
//             postData.viewed
//             ? 'post button post--viewed'
//             : 'post button',
//         )

//         const postHeader = createElement('div', 'post__header')

//         const categoryList = createElement(
//             'div',
//             'post__category-list',
//         )

//         postData.category.forEach((category) => {
//             const categorySpan = createElement(
//                 'span',
//                 `post__category post__category--${category.id}`,
//                 category.text,
//             )
//             categoryList.append(categorySpan)
//         })

//         const dateSpan = createElement(
//             'span',
//             'post__date',
//             postData.date,
//         )
//         postHeader.append(categoryList, dateSpan)

//         const infoParagraph = createElement(
//             'p',
//             'post__info',
//             postData.info,
//         )
//         post.append(postHeader, infoParagraph) 

//         postList.append(post)
//     })
//         return postList
// }

// const post = createPost()
// page.append(post)

//==============================

// імпорт ф-й із файла layout
import {
    createElement,
    createHeader,
} from  '../../script/layout'

//створ.змін.page2 в який зберіг.елем.page2 з файла index.hbs
const page2 = document.querySelector('.page2')
//створ.заголовка ф-єю createHeader()
const header2 = createHeader()
//додаєм заголовок header2 на сторінку page2
page2.append(header2)
//створ.елем.з парам(тип елем,клас,текст)
const title2 = createElement('h1', 'title', "Ком'юніті")
//додаєм заголовок title2 на сторінку page2
page2.append(title2)



// Створюєм елемент <div> з класом 'post__header2'
const postHeader2 = document.createElement('div');
postHeader2.classList.add('post__header2');

// Створюєм перший <span> з класом 'post__category2 post__header2--1' і текстом 'База знань'
const category1 = document.createElement('span');
category1.classList.add('post__category2', 'post__header2--1');
category1.textContent = 'База знань';

// Створюєм другий <span> з класом 'post__category2 post__header2--2' і текстом 'Інформація'
const category2 = document.createElement('span');
category2.classList.add('post__category2', 'post__header2--2');
category2.textContent = 'Інформація';

// Додаємо обидва <span> в <div class="post__header2">
postHeader2.append(category1, category2);


// Створюєм елемент <main> з класом 'post__list'
const postList = document.createElement('main');
postList.classList.add('post__list');

// Створюєм перший <div> з класом 'post2'
const postDiv1 = document.createElement('div');
postDiv1.classList.add('post2');

// Створюєм <span> з класом 'post__info2' і текстом 'Зустрічай!'
const infoSpan1 = document.createElement('span');
infoSpan1.classList.add('post__info2');
infoSpan1.textContent = 'Зустрічай!';

// Створюєм другий <span> з класом 'post__info2' і текстом "Наше ком'юніті в telegram!"
const infoSpan2 = document.createElement('span');
infoSpan2.classList.add('post__info2');
infoSpan2.textContent = "Наше ком'юніті в telegram!";

// Створюєм <button> з класом 'button2'
const button = document.createElement('button');
button.classList.add('button2');

// Створюєм <img> і додаєм в кнопку
const img = document.createElement('img');
img.setAttribute('width', '32px');
img.setAttribute('height', '32px');
img.setAttribute('src', '/img/telegram.png');
button.appendChild(img);

// Додаєм елементи в перший <div>
postDiv1.append(infoSpan1, infoSpan2, button);

// Создаем <span> с классом 'post__text--1' и текстом 'Що таке База Знань?'
const textSpan1 = document.createElement('span');
textSpan1.classList.add('post__text--1');
textSpan1.textContent = 'Що таке База Знань?';

// Створюєм <span> з класом 'post__text--2' і текстом 'База Знань - це база даних...'
const textSpan2 = document.createElement('span');
textSpan2.classList.add('post__text--2');
textSpan2.textContent = 'База Знань - це база даних, яка містить правила виводу і інформацію про людський досвід і знання в деякій предметній області.';

// Створюєм другий <div> з класом 'post2'
const postDiv2 = document.createElement('div');
postDiv2.classList.add('post2');

// Створюєм <span> з класом 'post__info2' і текстом "Перейти до ком'юніті в telegram"
const infoSpan3 = document.createElement('span');
infoSpan3.classList.add('post__info2');
infoSpan3.textContent = 'Перейти до ком\'юніті в telegram';

// Додаєм елемент <span> в другий <div>
postDiv2.appendChild(infoSpan3);

// Додаєм всі елементи в <main>
postList.append(postDiv1, textSpan1, textSpan2, postDiv2);

// Додаєм створений <div> і <main> на сторінку 
document.querySelector('.page2').append(postHeader2, postList);
