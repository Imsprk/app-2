function greet(name) {
  return `Hello ${name} from app-2`;
}

module.exports = { greet };

if (require.main === module) {
  console.log(greet('world'));
}

function farewell(name) {
  return `Bye ${name} from app-2`;
}

module.exports.farewell = farewell;
