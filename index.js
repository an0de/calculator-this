import readlineSync from 'readline-sync';

const calc = {
  read() {
    this.a = Number(readlineSync.question('May I have your a? '));
    this.b = Number(readlineSync.question('May I have your b? '));
  },

  sum() {
    return this.a + this.b;
  },
  mult() {
    return this.a * this.b;
  },
};

export default calc;
