const company = {
  "id": 1,
  "name": "My Cloathing Store",
  "business_type": "Retail",
  "product_categories": [
      "Shirt",
      "Shoes",
      "Pants",
      "Sweater",
      "T-shirt",
      "Underwear",
      "Sweatpants",
      "Socks",
      "Tie",
      "Suits",
      "Belt",
      "Wallet"
  ],
  "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
  "employees": [
      "#<User:0x000056069a10c808>"
  ]
}

const products = [
  {
      "id": 4,
      "name": "White Suits",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Tie",
      "price": 84.2,
      "features": {
          "size": "lg"
      },
      "sku": "1607048",
      "quantity": 42
  },
  {
      "id": 9,
      "name": "White T-shirt",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Sweater",
      "price": 22.31,
      "features": {
          "size": "sm"
      },
      "sku": "1113040",
      "quantity": 58
  },
  {
      "id": 10,
      "name": "Black Sweatpants",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Wallet",
      "price": 58.8,
      "features": {
          "size": "md"
      },
      "sku": "1700773",
      "quantity": 94
  },
  {
      "id": 11,
      "name": "Blue Sweatpants",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Underwear",
      "price": 60.77,
      "features": {
          "size": "md"
      },
      "sku": "1441141",
      "quantity": 61
  },
  {
      "id": 12,
      "name": "Black Belt",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Underwear",
      "price": 69.35,
      "features": {
          "size": "sm"
      },
      "sku": "1603097",
      "quantity": 85
  },
  {
      "id": 13,
      "name": "Black Pants",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Socks",
      "price": 69.7,
      "features": {
          "size": "sm"
      },
      "sku": "1502406",
      "quantity": 91
  },
  {
      "id": 16,
      "name": "Green Shoes",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Socks",
      "price": 34.58,
      "features": {
          "size": "lg"
      },
      "sku": "1304699",
      "quantity": 69
  },
  {
      "id": 21,
      "name": "Yellow T-shirt",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Shoes",
      "price": 72.29,
      "features": {
          "size": "lg"
      },
      "sku": "1445013",
      "quantity": 87
  },
  {
      "id": 22,
      "name": "Brown Pants",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Suits",
      "price": 91.35,
      "features": {
          "size": "sm"
      },
      "sku": "1257961",
      "quantity": 50
  },
  {
      "id": 23,
      "name": "Grey Pants",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Socks",
      "price": 59.44,
      "features": {
          "size": "lg"
      },
      "sku": "1949596",
      "quantity": 51
  },
  {
      "id": 24,
      "name": "Blue T-shirt",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Sweater",
      "price": 72.85,
      "features": {
          "size": "sm"
      },
      "sku": "1070217",
      "quantity": 99
  },
  {
      "id": 35,
      "name": "White T-shirt",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Shoes",
      "price": 9.31,
      "features": {
          "size": "md"
      },
      "sku": "1587306",
      "quantity": 90
  },
  {
      "id": 39,
      "name": "White Sweatpants",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Wallet",
      "price": 23.34,
      "features": {
          "size": "md"
      },
      "sku": "1169415",
      "quantity": 49
  },
  {
      "id": 44,
      "name": "Yellow Socks",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "T-shirt",
      "price": 21.1,
      "features": {
          "size": "sm"
      },
      "sku": "1477687",
      "quantity": 87
  },
  {
      "id": 46,
      "name": "Grey Underwear",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Sweater",
      "price": 90.75,
      "features": {
          "size": "sm"
      },
      "sku": "1773544",
      "quantity": 85
  },
  {
      "id": 48,
      "name": "Black Sweatpants",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "T-shirt",
      "price": 72.13,
      "features": {
          "size": "sm"
      },
      "sku": "1145324",
      "quantity": 52
  },
  {
      "id": 49,
      "name": "Grey Sweatpants",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Tie",
      "price": 72.35,
      "features": {
          "size": "lg"
      },
      "sku": "1982752",
      "quantity": 65
  },
  {
      "id": 58,
      "name": "White Belt",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Socks",
      "price": 21.69,
      "features": {
          "size": "lg"
      },
      "sku": "1385209",
      "quantity": 55
  },
  {
      "id": 59,
      "name": "Green Suits",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Underwear",
      "price": 50.68,
      "features": {
          "size": "md"
      },
      "sku": "1599122",
      "quantity": 62
  },
  {
      "id": 62,
      "name": "Brown Wallet",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Tie",
      "price": 47.16,
      "features": {
          "size": "sm"
      },
      "sku": "1951930",
      "quantity": 69
  },
  {
      "id": 64,
      "name": "White Wallet",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Shoes",
      "price": 64.36,
      "features": {
          "size": "lg"
      },
      "sku": "1269300",
      "quantity": 47
  },
  {
      "id": 66,
      "name": "Grey Underwear",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Sweatpants",
      "price": 36.12,
      "features": {
          "size": "lg"
      },
      "sku": "1565677",
      "quantity": 97
  },
  {
      "id": 70,
      "name": "Brown Wallet",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Sweatpants",
      "price": 95.45,
      "features": {
          "size": "md"
      },
      "sku": "1950511",
      "quantity": 96
  },
  {
      "id": 71,
      "name": "Grey Sweater",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Tie",
      "price": 45.61,
      "features": {
          "size": "lg"
      },
      "sku": "1669092",
      "quantity": 60
  },
  {
      "id": 74,
      "name": "Black Pants",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "T-shirt",
      "price": 77.35,
      "features": {
          "size": "sm"
      },
      "sku": "1971083",
      "quantity": 76
  },
  {
      "id": 77,
      "name": "White Sweater",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Pants",
      "price": 15.46,
      "features": {
          "size": "xl"
      },
      "sku": "1122699",
      "quantity": 89
  },
  {
      "id": 80,
      "name": "Green Sweatpants",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "T-shirt",
      "price": 12.08,
      "features": {
          "size": "sm"
      },
      "sku": "1364572",
      "quantity": 80
  },
  {
      "id": 83,
      "name": "Green Sweatpants",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Shirt",
      "price": 31.41,
      "features": {
          "size": "xl"
      },
      "sku": "1764595",
      "quantity": 55
  },
  {
      "id": 86,
      "name": "Blue Suits",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Tie",
      "price": 51.03,
      "features": {
          "size": "lg"
      },
      "sku": "1242079",
      "quantity": 91
  },
  {
      "id": 88,
      "name": "White Belt",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Sweater",
      "price": 47.15,
      "features": {
          "size": "md"
      },
      "sku": "1392581",
      "quantity": 72
  },
  {
      "id": 89,
      "name": "Brown Underwear",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Suits",
      "price": 12.11,
      "features": {
          "size": "lg"
      },
      "sku": "1736605",
      "quantity": 45
  },
  {
      "id": 92,
      "name": "Black Belt",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Socks",
      "price": 41.56,
      "features": {
          "size": "sm"
      },
      "sku": "1272740",
      "quantity": 72
  },
  {
      "id": 95,
      "name": "White Shoes",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Belt",
      "price": 46.8,
      "features": {
          "size": "lg"
      },
      "sku": "1782028",
      "quantity": 99
  },
  {
      "id": 101,
      "name": "Blue T-shirt",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Suits",
      "price": 94.65,
      "features": {
          "size": "xl"
      },
      "sku": "1822776",
      "quantity": 51
  },
  {
      "id": 102,
      "name": "Green Wallet",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Socks",
      "price": 62.82,
      "features": {
          "size": "md"
      },
      "sku": "1223310",
      "quantity": 98
  },
  {
      "id": 105,
      "name": "Green Underwear",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Wallet",
      "price": 43.45,
      "features": {
          "size": "xl"
      },
      "sku": "1621419",
      "quantity": 91
  },
  {
      "id": 109,
      "name": "Black Wallet",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Suits",
      "price": 99.28,
      "features": {
          "size": "sm"
      },
      "sku": "1689351",
      "quantity": 33
  },
  {
      "id": 111,
      "name": "White Belt",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Belt",
      "price": 20.36,
      "features": {
          "size": "sm"
      },
      "sku": "1047341",
      "quantity": 54
  },
  {
      "id": 112,
      "name": "White Socks",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Sweater",
      "price": 28.67,
      "features": {
          "size": "xl"
      },
      "sku": "1149296",
      "quantity": 45
  },
  {
      "id": 120,
      "name": "White Underwear",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Suits",
      "price": 40.93,
      "features": {
          "size": "xl"
      },
      "sku": "1169528",
      "quantity": 87
  },
  {
      "id": 123,
      "name": "Black Wallet",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Wallet",
      "price": 98.49,
      "features": {
          "size": "sm"
      },
      "sku": "1439680",
      "quantity": 56
  },
  {
      "id": 124,
      "name": "Blue Underwear",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Suits",
      "price": 8.03,
      "features": {
          "size": "xl"
      },
      "sku": "1430883",
      "quantity": 47
  },
  {
      "id": 128,
      "name": "Green Shoes",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Shoes",
      "price": 13.4,
      "features": {
          "size": "md"
      },
      "sku": "1551661",
      "quantity": 82
  },
  {
      "id": 131,
      "name": "Blue Underwear",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Underwear",
      "price": 84.44,
      "features": {
          "size": "md"
      },
      "sku": "1047007",
      "quantity": 38
  },
  {
      "id": 137,
      "name": "White Shirt",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Shoes",
      "price": 38.98,
      "features": {
          "size": "lg"
      },
      "sku": "1991560",
      "quantity": 44
  },
  {
      "id": 141,
      "name": "Yellow Sweater",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Sweatpants",
      "price": 30.88,
      "features": {
          "size": "xl"
      },
      "sku": "1325370",
      "quantity": 86
  },
  {
      "id": 143,
      "name": "Black T-shirt",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Belt",
      "price": 98.26,
      "features": {
          "size": "md"
      },
      "sku": "1000980",
      "quantity": 97
  },
  {
      "id": 146,
      "name": "Black Sweater",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Underwear",
      "price": 44.42,
      "features": {
          "size": "xl"
      },
      "sku": "1408258",
      "quantity": 31
  },
  {
      "id": 149,
      "name": "Brown Wallet",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Shoes",
      "price": 73.27,
      "features": {
          "size": "lg"
      },
      "sku": "1806402",
      "quantity": 100
  },
  {
      "id": 152,
      "name": "White Belt",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Sweatpants",
      "price": 8.34,
      "features": {
          "size": "md"
      },
      "sku": "1164643",
      "quantity": 39
  },
  {
      "id": 154,
      "name": "White Sweatpants",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Wallet",
      "price": 82.45,
      "features": {
          "size": "lg"
      },
      "sku": "1932389",
      "quantity": 56
  },
  {
      "id": 161,
      "name": "Green Underwear",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Socks",
      "price": 32.64,
      "features": {
          "size": "md"
      },
      "sku": "1397766",
      "quantity": 80
  },
  {
      "id": 168,
      "name": "Black Sweatpants",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Sweatpants",
      "price": 5.38,
      "features": {
          "size": "md"
      },
      "sku": "1362863",
      "quantity": 74
  },
  {
      "id": 170,
      "name": "Yellow Belt",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Socks",
      "price": 78.55,
      "features": {
          "size": "xl"
      },
      "sku": "1677648",
      "quantity": 77
  },
  {
      "id": 171,
      "name": "Black Socks",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Socks",
      "price": 50.95,
      "features": {
          "size": "md"
      },
      "sku": "1048494",
      "quantity": 97
  },
  {
      "id": 173,
      "name": "Black Shirt",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Shirt",
      "price": 85.28,
      "features": {
          "size": "lg"
      },
      "sku": "1227767",
      "quantity": 82
  },
  {
      "id": 176,
      "name": "White Pants",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Sweatpants",
      "price": 10.72,
      "features": {
          "size": "md"
      },
      "sku": "1810080",
      "quantity": 34
  },
  {
      "id": 181,
      "name": "Yellow Wallet",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Belt",
      "price": 61.29,
      "features": {
          "size": "lg"
      },
      "sku": "1133080",
      "quantity": 50
  },
  {
      "id": 186,
      "name": "Grey Sweatpants",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Socks",
      "price": 13.31,
      "features": {
          "size": "lg"
      },
      "sku": "1406187",
      "quantity": 52
  },
  {
      "id": 189,
      "name": "Brown Belt",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "T-shirt",
      "price": 49.13,
      "features": {
          "size": "md"
      },
      "sku": "1764144",
      "quantity": 87
  },
  {
      "id": 190,
      "name": "Yellow Sweater",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Shoes",
      "price": 66.85,
      "features": {
          "size": "md"
      },
      "sku": "1251208",
      "quantity": 36
  },
  {
      "id": 195,
      "name": "Blue Socks",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Shoes",
      "price": 48.95,
      "features": {
          "size": "sm"
      },
      "sku": "1857429",
      "quantity": 88
  },
  {
      "id": 198,
      "name": "Blue Shoes",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Pants",
      "price": 55.82,
      "features": {
          "size": "lg"
      },
      "sku": "1836653",
      "quantity": 37
  },
  {
      "id": 202,
      "name": "White Pants",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Tie",
      "price": 62.11,
      "features": {
          "size": "md"
      },
      "sku": "1383237",
      "quantity": 91
  },
  {
      "id": 203,
      "name": "Brown Sweatpants",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Tie",
      "price": 11.3,
      "features": {
          "size": "sm"
      },
      "sku": "1658637",
      "quantity": 100
  },
  {
      "id": 205,
      "name": "Black Shirt",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Sweatpants",
      "price": 51.28,
      "features": {
          "size": "lg"
      },
      "sku": "1758658",
      "quantity": 47
  },
  {
      "id": 211,
      "name": "Blue Sweatpants",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Belt",
      "price": 97.02,
      "features": {
          "size": "xl"
      },
      "sku": "1122244",
      "quantity": 68
  },
  {
      "id": 217,
      "name": "Black Sweater",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Socks",
      "price": 35.62,
      "features": {
          "size": "md"
      },
      "sku": "1528888",
      "quantity": 94
  },
  {
      "id": 218,
      "name": "Grey Shoes",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Wallet",
      "price": 20.65,
      "features": {
          "size": "xl"
      },
      "sku": "1583815",
      "quantity": 37
  },
  {
      "id": 219,
      "name": "Brown Wallet",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Belt",
      "price": 81.8,
      "features": {
          "size": "md"
      },
      "sku": "1006797",
      "quantity": 73
  },
  {
      "id": 229,
      "name": "Black Wallet",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Belt",
      "price": 68.44,
      "features": {
          "size": "lg"
      },
      "sku": "1241562",
      "quantity": 92
  },
  {
      "id": 231,
      "name": "White Socks",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Shirt",
      "price": 43.8,
      "features": {
          "size": "lg"
      },
      "sku": "1621507",
      "quantity": 95
  },
  {
      "id": 233,
      "name": "Yellow Tie",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Belt",
      "price": 91.35,
      "features": {
          "size": "sm"
      },
      "sku": "1943591",
      "quantity": 68
  },
  {
      "id": 235,
      "name": "Green Sweatpants",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Wallet",
      "price": 94.39,
      "features": {
          "size": "lg"
      },
      "sku": "1278351",
      "quantity": 77
  },
  {
      "id": 245,
      "name": "Blue Belt",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Shoes",
      "price": 65.17,
      "features": {
          "size": "md"
      },
      "sku": "1332700",
      "quantity": 45
  },
  {
      "id": 246,
      "name": "Blue T-shirt",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Sweater",
      "price": 55.9,
      "features": {
          "size": "lg"
      },
      "sku": "1557513",
      "quantity": 54
  },
  {
      "id": 248,
      "name": "Black Underwear",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Socks",
      "price": 89.96,
      "features": {
          "size": "sm"
      },
      "sku": "1724949",
      "quantity": 88
  },
  {
      "id": 250,
      "name": "Grey Suits",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Belt",
      "price": 91.96,
      "features": {
          "size": "md"
      },
      "sku": "1555781",
      "quantity": 95
  },
  {
      "id": 252,
      "name": "Grey Shirt",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Sweater",
      "price": 48.22,
      "features": {
          "size": "xl"
      },
      "sku": "1743729",
      "quantity": 49
  },
  {
      "id": 257,
      "name": "White T-shirt",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "T-shirt",
      "price": 85.33,
      "features": {
          "size": "xl"
      },
      "sku": "1694744",
      "quantity": 32
  },
  {
      "id": 259,
      "name": "Yellow Wallet",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Shirt",
      "price": 71.64,
      "features": {
          "size": "xl"
      },
      "sku": "1325865",
      "quantity": 100
  },
  {
      "id": 261,
      "name": "Grey Suits",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Wallet",
      "price": 8.39,
      "features": {
          "size": "lg"
      },
      "sku": "1749201",
      "quantity": 85
  },
  {
      "id": 262,
      "name": "Grey Sweater",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "T-shirt",
      "price": 9.23,
      "features": {
          "size": "sm"
      },
      "sku": "1104572",
      "quantity": 51
  },
  {
      "id": 271,
      "name": "Yellow Wallet",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Socks",
      "price": 68.49,
      "features": {
          "size": "lg"
      },
      "sku": "1672528",
      "quantity": 45
  },
  {
      "id": 275,
      "name": "Grey T-shirt",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Socks",
      "price": 84.3,
      "features": {
          "size": "md"
      },
      "sku": "1474905",
      "quantity": 59
  },
  {
      "id": 282,
      "name": "Brown Sweater",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Socks",
      "price": 67.06,
      "features": {
          "size": "sm"
      },
      "sku": "1822675",
      "quantity": 46
  },
  {
      "id": 285,
      "name": "Blue Pants",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Shirt",
      "price": 65.84,
      "features": {
          "size": "sm"
      },
      "sku": "1995780",
      "quantity": 55
  },
  {
      "id": 287,
      "name": "Grey Pants",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Suits",
      "price": 32.65,
      "features": {
          "size": "xl"
      },
      "sku": "1752129",
      "quantity": 52
  },
  {
      "id": 288,
      "name": "Black Socks",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Belt",
      "price": 82.01,
      "features": {
          "size": "md"
      },
      "sku": "1871332",
      "quantity": 77
  },
  {
      "id": 289,
      "name": "Grey Suits",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Shoes",
      "price": 17.48,
      "features": {
          "size": "md"
      },
      "sku": "1729265",
      "quantity": 100
  },
  {
      "id": 298,
      "name": "Green Underwear",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Wallet",
      "price": 91.89,
      "features": {
          "size": "sm"
      },
      "sku": "1243143",
      "quantity": 53
  },
  {
      "id": 301,
      "name": "Black Shirt",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Tie",
      "price": 57.1,
      "features": {
          "size": "sm"
      },
      "sku": "1513553",
      "quantity": 55
  },
  {
      "id": 304,
      "name": "White Underwear",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Sweater",
      "price": 64.79,
      "features": {
          "size": "xl"
      },
      "sku": "1658646",
      "quantity": 44
  },
  {
      "id": 306,
      "name": "White Socks",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Wallet",
      "price": 54.73,
      "features": {
          "size": "md"
      },
      "sku": "1097693",
      "quantity": 76
  },
  {
      "id": 313,
      "name": "Blue Shoes",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Underwear",
      "price": 84.23,
      "features": {
          "size": "md"
      },
      "sku": "1745272",
      "quantity": 69
  },
  {
      "id": 317,
      "name": "Brown Wallet",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Tie",
      "price": 42.87,
      "features": {
          "size": "lg"
      },
      "sku": "1046043",
      "quantity": 67
  },
  {
      "id": 320,
      "name": "White Tie",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Shirt",
      "price": 52.21,
      "features": {
          "size": "sm"
      },
      "sku": "1591313",
      "quantity": 69
  },
  {
      "id": 322,
      "name": "Yellow Tie",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Suits",
      "price": 21.62,
      "features": {
          "size": "xl"
      },
      "sku": "1541277",
      "quantity": 31
  },
  {
      "id": 323,
      "name": "Blue Shoes",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Wallet",
      "price": 20.56,
      "features": {
          "size": "sm"
      },
      "sku": "1498891",
      "quantity": 87
  },
  {
      "id": 328,
      "name": "Grey Underwear",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Suits",
      "price": 54.91,
      "features": {
          "size": "lg"
      },
      "sku": "1396584",
      "quantity": 63
  },
  {
      "id": 334,
      "name": "Black Tie",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Shirt",
      "price": 21.74,
      "features": {
          "size": "xl"
      },
      "sku": "1780316",
      "quantity": 75
  },
  {
      "id": 335,
      "name": "Brown Underwear",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Shoes",
      "price": 83.87,
      "features": {
          "size": "xl"
      },
      "sku": "1231040",
      "quantity": 100
  },
  {
      "id": 338,
      "name": "Green T-shirt",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Shoes",
      "price": 47.47,
      "features": {
          "size": "xl"
      },
      "sku": "1252805",
      "quantity": 75
  },
  {
      "id": 340,
      "name": "Blue Sweatpants",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Sweatpants",
      "price": 77.56,
      "features": {
          "size": "lg"
      },
      "sku": "1062642",
      "quantity": 51
  },
  {
      "id": 342,
      "name": "Grey Pants",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Shoes",
      "price": 93.47,
      "features": {
          "size": "md"
      },
      "sku": "1765929",
      "quantity": 50
  },
  {
      "id": 343,
      "name": "Green Shirt",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Belt",
      "price": 99.2,
      "features": {
          "size": "xl"
      },
      "sku": "1353610",
      "quantity": 64
  },
  {
      "id": 347,
      "name": "Black Tie",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Shoes",
      "price": 55.18,
      "features": {
          "size": "md"
      },
      "sku": "1193269",
      "quantity": 33
  },
  {
      "id": 349,
      "name": "Yellow Shirt",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Suits",
      "price": 62.12,
      "features": {
          "size": "md"
      },
      "sku": "1546662",
      "quantity": 50
  },
  {
      "id": 352,
      "name": "Green Shoes",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Tie",
      "price": 22.03,
      "features": {
          "size": "sm"
      },
      "sku": "1800820",
      "quantity": 92
  },
  {
      "id": 353,
      "name": "Brown Suits",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Tie",
      "price": 24.28,
      "features": {
          "size": "sm"
      },
      "sku": "1573089",
      "quantity": 83
  },
  {
      "id": 356,
      "name": "White Belt",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum optio reprehenderit est ex dolorem ipsum! Voluptates omnis animi numquam ullam assumenda distinctio, vitae, magni dicta quis laboriosam dolorum. Dicta quas adipisci nam in commodi, explicabo aperiam. Rem dolore beatae deleniti commodi facere aliquid, odit voluptates adipisci dolorum sed? Tempora, soluta?",
      "category": "Suits",
      "price": 67.89,
      "features": {
          "size": "xl"
      },
      "sku": "1287150",
      "quantity": 43
  }
]
const Data = () =>{
    const renderedProducts = products.map(elem =>{
        return(
            <tr key={elem.id}>
                <td>
                    {elem.name}
                </td>
                <td>
                    {elem.price}
                </td>
                <td>
                    <input type="number" className="quantity-input" />
                </td>
                <td>
                    {elem.category}
                </td>
            </tr>
        )
    })
    return(
        <div className="table">
        <table className="striped highlight centered">
            <thead>
                <tr>
                    <th data-field="id">
                    Name
                    </th>
                    <th data-field="price">
                    Price
                    </th>
                    <th data-field="quantity">
                    Quantity
                    </th>
                    <th data-field="category">
                    category
                    </th>   
                </tr>
            </thead>  
            <tbody>
                {renderedProducts}
            </tbody>
        </table>
        </div>
    )
}
 export default Data;