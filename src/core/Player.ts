export default class Player {
    private _id: string;
    private _name: string;
    private _username: string;
    private _email: string;
    private _photo: string | null | undefined;
    private _friends: string[];
    private _games: string[];

    constructor(id: string = '', name: string | null, username: string, email: string | null, photo?: string | null, friends: string[] = [], games: string[] = []) {
        this._id = id;
        this._name = name;
        this._username = username;
        this._email = email;
        this._photo = photo;
        this._friends = friends;
        this._games = games;
    }

    static fromJSON(json: any): Player {
        return new Player(json.id, json.name, json.username, json.email, json.photo, json.friends, json.games);
    }

    toJSON(): any {
        return {
            id: this.id,
            name: this.name,
            username: this.username,
            email: this.email,
            photo: this.photo,
            friends: this.friends,
            games: this.games
        }
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get photo(): string {
        return <string>this._photo;
    }

    set photo(value: string) {
        this._photo = value;
    }

    get friends(): string[] {
        return this._friends;
    }

    set friends(value: string[]) {
        this._friends = value;
    }

    get games(): string[] {
        return this._games;
    }

    set games(value: string[]) {
        this._games = value;
    }
}