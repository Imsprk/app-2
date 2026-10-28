function greet(name) {
  return `Hello ${name} from app-2`;
}

module.exports = { greet };

if (require.main === module) {
  console.log(greet('world'));
}
