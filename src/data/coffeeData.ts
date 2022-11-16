import CoffeeTRADICIONAL from '../assets/coffees/coffee-TRADICIONAL.svg'
import CoffeeExpresso from '../assets/coffees/coffee-expresso.svg'
import CoffeeCremoso from '../assets/coffees/coffee-cremoso.svg'
import CoffeeGelado from '../assets/coffees/coffee-gelado.svg'
import CoffeeLeite from '../assets/coffees/coffee-leite.svg'
import CoffeeLatte from '../assets/coffees/coffee-latte.svg'
import CoffeeCapuccino from '../assets/coffees/coffee-cappucino.svg'
import CoffeeMacchiato from '../assets/coffees/coffee-macchiato.svg'
import CoffeeMocaccino from '../assets/coffees/coffee-mocaccino.svg'
import CoffeeChocolateQuente from '../assets/coffees/coffee-chocolate-quente.svg'
import CoffeeCubano from '../assets/coffees/coffee-cubano.svg'
import CoffeeHavaiano from '../assets/coffees/coffee-havaiano.svg'
import CoffeeArabe from '../assets/coffees/coffee-arabe.svg'
import CoffeeIrlandes from '../assets/coffees/coffee-irlandes.svg'

interface CoffeeType {
  id: number
  img: string
  tags: string[]
  title: string
  description: string
  price: number
  stockQuantity: number
}

export const coffeesData: CoffeeType[] = [
  {
    id: 1,
    img: CoffeeTRADICIONAL,
    tags: ['TRADICIONAL'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    stockQuantity: 0,
  },
  {
    id: 2,
    img: CoffeeExpresso,
    tags: ['TRADICIONAL'],
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.95,
    stockQuantity: 12,
  },
  {
    id: 3,
    img: CoffeeCremoso,
    tags: ['TRADICIONAL'],
    title: 'Café Cremoso',
    description: 'Café com leite, mais cremoso e doce',
    price: 19.9,
    stockQuantity: 4,
  },
  {
    id: 4,
    img: CoffeeGelado,
    tags: ['TRADICIONAL', 'GELADO'],
    title: 'Café Gelado',
    description: 'Café gelado, ideal para dias quentes',
    price: 4.23,
    stockQuantity: 8,
  },
  {
    id: 5,
    img: CoffeeLeite,
    tags: ['TRADICIONAL', 'COM LEITE'],
    title: 'Café com Leite',
    description: 'Café cmo leite, mais cremoso e doce',
    price: 53.9,
    stockQuantity: 0,
  },
  {
    id: 6,
    img: CoffeeLatte,
    tags: ['TRADICIONAL', 'COM LEITE'],
    title: 'Café Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 2.9,
    stockQuantity: 0,
  },
  {
    id: 7,
    img: CoffeeCapuccino,
    tags: ['TRADICIONAL', 'COM LEITE'],
    title: 'Café Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 7.9,
    stockQuantity: 12,
  },
  {
    id: 8,
    img: CoffeeMacchiato,
    tags: ['TRADICIONAL', 'COM LEITE'],
    title: 'Café Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 39.9,
    stockQuantity: 15,
  },
  {
    id: 9,
    img: CoffeeMocaccino,
    tags: ['TRADICIONAL', 'COM LEITE'],
    title: 'Café Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
    stockQuantity: 19,
  },
  {
    id: 10,
    img: CoffeeChocolateQuente,
    tags: ['ESPECIAL', 'COM LEITE'],
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
    stockQuantity: 10,
  },
  {
    id: 11,
    img: CoffeeCubano,
    tags: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    title: 'Café Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 15.9,
    stockQuantity: 4,
  },
  {
    id: 12,
    img: CoffeeHavaiano,
    tags: ['ESPECIAL'],
    title: 'Café Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 94.9,
    stockQuantity: 0,
  },
  {
    id: 13,
    img: CoffeeArabe,
    tags: ['ESPECIAL'],
    title: 'Café Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
    stockQuantity: 0,
  },
  {
    id: 14,
    img: CoffeeIrlandes,
    tags: ['ESPECIAL', 'ALCOÓLICO'],
    title: 'Café Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
    stockQuantity: 0,
  },
]
