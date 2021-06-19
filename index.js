class SortedList {
  constructor() {
    this.items = [],
    this.length = this.items.length
  }
  add(item){
    this.items.push(item)
    this.items.sort(function(a, b) {
    return a - b;
    } )
  }
  get(pos){
    if ( pos >= 0 && pos < this.length){
      return this.items[pos]
    }else{
      throw new Error("OutOfBounds")
  }
}
  max(){
    if (this.length === 0){
      throw new Error("EmptySortedList")
    }else{
      return this.items[this.length-1]
    }
    // return Math.max.apply(null, this.items);
  }
  min(){
    if (this.length === 0){
      throw new Error("EmptySortedList")
      }else{
        return this.items[0]
      }
      // return Math.min.apply(null, this.items);
  }
  sum(){
    this.items.reduce(function(acc, valorAtual){
      return acc + valorAtual
    },0)
  }
  avg(){
    this.items.reduce(function(acc, valorAtual, index){
      acc = acc + valorAtual
      if (index == this.items.length-1){
        return acc / this.items.length
      }
      return acc
    })

  }
}
const list = new SortedList
