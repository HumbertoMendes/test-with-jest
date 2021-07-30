class User {
  constructor({ firstName, lastName }) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get name() {
    return `${this._firstName} ${this._lastName}`;
  }
}

export default User;