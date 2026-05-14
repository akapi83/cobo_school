
// ハンバーガーメニュー
const menuBtn = document.querySelector('.menu_button');
const spNav = document.querySelector('.sp_nav');

menuBtn.addEventListener('click', () => {
  spNav.classList.toggle('open');
});

const title = document.querySelector('.title');

title.style.color = "rgb(110, 10, 55)";

title.style.fontSize = "50px";

title.style.fontWeight = "normal";

const colorBtn = document.getElementById('color_btn');

colorBtn.addEventListener('click', () => {
  const weightType = ["normal", "bold"];
  const index = Math.floor(Math.random() * 2);
  title.style.fontWeight = weightType[index];
});

// クラスのメンバー表
const classMates = ['たろう', 'じろう', 'はなこ', 'としき', 'だいすけ'];

// 氏名の表示要素を取得
const member = document.getElementById('name');

// 氏名にメンバー表からインデックス 1 のメンバーを選んで氏名の要素に代入
member.textContent = classMates[1];

const members = document.getElementById('members');

// ulの要素を取得
const memberList = document.getElementById('member_list');

// メンバー表の配列の個数分、繰り返し処理
for (let i = 0; i < classMates.length; i++) {
  // classMatesのメンバー表から i の番号を取り出してmeberに代入
  const member = classMates[i];
  
  // li要素を作成
  const li = document.createElement('li');

  // li要素のテキストとして memberを代入
  li.textContent = member;

  // ul要素の子要素として最後尾に li要素を挿入
  memberList.appendChild(li);
}

// テーブルに追加しよう
const memberTable = document.getElementById('member_table');

const teamMebers = [
  {
    number: '01',
    name: 'Yamada',
    position: 'センター'
  },
  {
    number: '02',
    name: 'Saito',
    position: 'セカンド'
  },
  {
    number: '03',
    name: 'Tanaka',
    position: 'レフト'
  },
  {
    number: '17',
    name: 'Otani',
    position: 'ピッチャー'
  },
];

const data = [
  ['number', '17'],
  ['name', 'Otani'],
  ['position', 'ピッチャー'],
]

for (let i = 0; i < teamMebers.length; i++) {
  const tr = document.createElement('tr');
  const memberData = teamMebers[i];
  // const td1 = document.createElement('td');
  // const td2 = document.createElement('td');
  // const td3 = document.createElement('td');
  // td1.textContent = memberData.number;
  // td2.textContent = memberData.name;
  // td3.textContent = memberData.position;
  // tr.appendChild(td1);
  // tr.appendChild(td2);
  // tr.appendChild(td3);
  // memberTable.appendChild(tr);

  for (const [key, value] of Object.entries(memberData)) {
    const td = document.createElement('td');
    td.textContent = value;
    tr.appendChild(td);
  }
  memberTable.appendChild(tr);
}


class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getSubtotal() {
    return this.price * this.quantity;
  }
}

const ramen = new Product('しょうゆラーメン', 850, 2);
const chahan = new Product('あんかけチャーハン', 750, 1);

console.log(ramen.getSubtotal());
console.log(chahan.getSubtotal());