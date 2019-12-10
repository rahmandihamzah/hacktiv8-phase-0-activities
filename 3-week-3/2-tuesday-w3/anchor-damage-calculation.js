function attack (damage) {
    let damageUse = damage - 2;

    return damageUse;
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
    let damageByAttact = attack(damagePerAttack);
    let totalDamage = damageByAttact * numberOfAttacks;

    return totalDamage;
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90