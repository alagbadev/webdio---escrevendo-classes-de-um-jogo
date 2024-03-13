class Hero {
    constructor(name, age, type) {
      this.name = name;
      this.age = age;
      this.type = type;
    }
  
    attack() {
      let attack;
      switch (this.type) {
        case 'bruxo':
          attack = 'usando magia';
          break;
        case 'guerreiro':
          attack = 'usando espada';
          break;
        case 'monge':
          attack = 'usando artes marciais';
          break;
        case 'ninja':
          attack = 'usando shuriken';
          break;
        default:
          attack = 'mas não há um ataque definido.';
          break;
      }
      console.log(`O ${this.type} atacou ${attack}`);
    }
  }
  
  // Example of usage
  const hero = new Hero('Shrakk', 57, 'ninja');
  hero.attack(); // Output: The wizard attacked by using magic
  