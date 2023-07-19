export class Ingridient {

  //behind the scenes, Angular will create the attributes name, and amount,
  //without specifying them in the classs
  constructor(public name: string, public amount: number){}
}
