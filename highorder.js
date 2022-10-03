function greeting(name){
  return 'halo!' + ' ' + name;
}
function greeting_name(greeting, message, name){
  console.log(`${greeting(name)} ${message}`);

}
greeting_name (greeting,'Selamat datang ke dunia', 'Namira');