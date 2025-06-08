export interface Book {
    id: number;
    title: string;
    content: string;
    price: number;
    author: string;
    star: string;
}

const bookdata: Book[] = [
    {
        id: 3,
        title: '1퍼센트 부자들의 법칙',
        content: '거지들을 위한 부자 입문서입니다.',
        price: 34000,
        author: '가나다',
        star: '☆☆☆☆☆'
    },
    {
        id: 4,
        title: '그가 내린 곳',
        content: '감성이 죽은 직장인을 위한 문학 소설입니다.',
        price: 22000,
        author: '박혜상',
        star: '☆☆☆☆☆'
    },
    {
        id: 5,
        title: '달러굿트 꿈 백화점',
        content: '꿈을 파는 백화점입니다.',
        price: 26000,
        author: '이미애',
        star: '☆☆☆☆☆'
    },
];

export default bookdata;