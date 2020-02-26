export class Debounce {
  static timeout = null;

  static  setTime (fun, time){
      this.timeout = setTimeout(fun, time);
  }

  static  clearTime () {
      clearTimeout(this.timeout);
  }
};