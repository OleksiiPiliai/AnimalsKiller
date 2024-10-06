const player = {
    name: "Player",
    hp: 100,
    lvl: 1,
    exp: 0,
    power: 10,
};

const monsterAligator = {
    hp: 100,
    exp: 15
}

const btn = document.querySelector(".btn-attack");
const aliggator = document.querySelector(".alig_1");
const bum = document.querySelector(".fier-img");
btn.addEventListener("click", attackToMonster = () => {
    monsterAligator.hp = monsterAligator.hp - player.power;
    bum.classList.remove("dead-monster");
        setTimeout(() => {
            bum.classList.add("dead-monster");
        }, 100);
    if (monsterAligator.hp === 0) {
        aliggator.classList.add("dead-monster");
        player.exp = player.exp + monsterAligator.exp;
        btn.removeEventListener("click", attackToMonster);
        console.log(`exp Player = ${player.exp}`);
    
    }
    console.log(monsterAligator.hp);
    
});

