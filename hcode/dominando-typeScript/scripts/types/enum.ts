enum Pemission {
  ADMIN = 1,
  USER = "USER",
  READONLY = "READONLY",
}

console.log(Pemission.ADMIN);
console.log(Pemission.USER);
console.log(Pemission["READONLY"]);
