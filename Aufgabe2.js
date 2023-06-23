const zahlen = process.argv.slice(2);

if (zahlen.length !== 3) {
  console.log("Bitte gib 3 Zahlen an!");
} else {
  const max = Math.max(...zahlen);
  const min = Math.min(...zahlen);

  console.log(`Größte Zahl: ${max}`);
  console.log(`Kleinste Zahl: ${min}`);
}