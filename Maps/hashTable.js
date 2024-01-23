class HashTable {
    constructor(size = 10) {
      this.size = size;
      this.table = new Array(size);
    }
  
    // Hash function to convert a key into an index
    hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash = (hash << 5) + key.charCodeAt(i);
        hash = hash & hash; // Convert to 32bit integer
        hash = Math.abs(hash);
      }
      return hash % this.size;
    }
  
    // Insert a key-value pair into the hashtable
    insert(key, value) {
      const index = this.hash(key);
      if (!this.table[index]) {
        this.table[index] = [];
      }
      this.table[index].push({ key, value });
    }
  
    // Retrieve the value associated with a key
    get(key) {
      const index = this.hash(key);
      if (this.table[index]) {
        for (const entry of this.table[index]) {
          if (entry.key === key) {
            return entry.value;
          }
        }
      }
      return undefined; // Key not found
    }
  
    // Remove a key-value pair from the hashtable
    remove(key) {
      const index = this.hash(key);
      if (this.table[index]) {
        this.table[index] = this.table[index].filter(entry => entry.key !== key);
      }
    }
  }
  
  // Example usage
  const myHashTable = new HashTable();
  
  myHashTable.insert("name", "John");
  myHashTable.insert("age", 25);
  myHashTable.insert("city", "Example City");
  
  console.log("Name:", myHashTable.get("name")); // John
  console.log("Age:", myHashTable.get("age")); // 25
  console.log("City:", myHashTable.get("city")); // Example City
  
  myHashTable.remove("age");
  console.log("After removing age:", myHashTable.get("age")); // undefined
  