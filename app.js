function getRamdomValue(min, max) {
  const attackValue = Math.floor(Math.random() * (max - min));
  this.monsterHealth -= attackValue;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
  methods: {
    attackMonster() {
      const attackValue = getRamdomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRamdomValue(8, 15);
      this.playerHealth -= attackValue;
    },
  },
});

app.mount('#game');
