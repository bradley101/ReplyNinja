export default class User {
    private _name: string; 
    private _email: string;
    private _uid: string;
    private _photoUrl: string;

	constructor(name: string, email: string, uid: string, photoUrl: string) {
		this._name = name;
		this._email = email;
		this._uid = uid;
		this._photoUrl = photoUrl;
	}
    

    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
    }
    
    /**
     * Getter email
     * @return {string}
     */
	public get email(): string {
		return this._email;
    }
    
    /**
     * Setter email
     * @param {string} value
     */
	public set email(value: string) {
		this._email = value;
	}

    /**
     * Getter uid
     * @return {string}
     */
	public get uid(): string {
		return this._uid;
	}

    /**
     * Setter uid
     * @param {string} value
     */
	public set uid(value: string) {
		this._uid = value;
    }
    
    /**
     * Getter photoUrl
     * @return {string}
     */
	public get photoUrl(): string {
		return this._photoUrl;
	}

    /**
     * Setter photoUrl
     * @param {string} value
     */
	public set photoUrl(value: string) {
		this._photoUrl = value;
	}
    
}