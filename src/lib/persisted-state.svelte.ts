/**
 * Reactive value that is persisted to localStorage and synced across tabs.
 *
 * Drop-in replacement for `runed`'s `PersistedState`, limited to the features this
 * app uses. Values are stored JSON-serialized, matching what `runed` already wrote,
 * so existing persisted settings keep working.
 */
export class PersistedState<T> {
	#current = $state<T>() as T;
	#key: string;
	#storage: Pick<Storage, 'getItem' | 'setItem'> | undefined;

	constructor(key: string, initialValue: T) {
		this.#key = key;

		if (typeof window === 'undefined') {
			// SSR / prerender: no storage available, keep the in-memory value
			this.#current = initialValue;
			return;
		}

		this.#storage = window.localStorage;

		const existingValue = this.#storage.getItem(key);
		if (existingValue !== null) {
			this.#current = this.#deserialize(existingValue) ?? initialValue;
		} else {
			this.#current = initialValue;
			this.#serialize(initialValue);
		}

		window.addEventListener('storage', this.#handleStorageEvent);
	}

	#handleStorageEvent = (event: StorageEvent) => {
		if (event.key !== this.#key || event.newValue === null) return;
		this.#current = this.#deserialize(event.newValue) ?? this.#current;
	};

	#deserialize(raw: string): T | undefined {
		try {
			return JSON.parse(raw) as T;
		} catch (error) {
			console.error(`Error when parsing "${raw}" from persisted state "${this.#key}"`, error);
			return undefined;
		}
	}

	#serialize(value: T) {
		if (!this.#storage) return;
		try {
			if (value !== undefined) {
				this.#storage.setItem(this.#key, JSON.stringify(value));
			}
		} catch (error) {
			console.error(`Error when writing value for persisted state "${this.#key}"`, error);
		}
	}

	get current(): T {
		return this.#current;
	}

	set current(newValue: T) {
		this.#current = newValue;
		this.#serialize(newValue);
	}
}
