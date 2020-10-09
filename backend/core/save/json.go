package save

import (
	"encoding/json"
	"fmt"
	"io"
	"os"
)

// Record is
type Record struct {
	key   string
	value interface{}
}

// Load is
func Load(filename string) (interface{}, error) {
	f, err := os.Open(filename)
	defer f.Close()
	if err != nil {
		fmt.Println("Error opening URLStore:", err)
		return nil, err
	}
	d := json.NewDecoder(f)
	var s = make(map[string]interface{})

	for err != nil {
		var r Record
		if err = d.Decode(&r); err == nil {
			s[r.key] = r.value
		}
	}
	if err == io.EOF {
		return s, nil
	}
	fmt.Println("Error decoding URLStore:", err) // map hasn't been read correctly
	return nil, err
}

// Add is
func Add(r *Record, store map[string]interface{}) error {
	if !isExist(r.key, store) {
		store[r.key] = r.value
	}
	return nil
}

// Update is
func Update(r *Record, store map[string]interface{}) error {
	if isExist(r.key, store) {
		store[r.key] = r.value
	}
	return nil
}

// Read is
func Read(key string, store map[string]interface{}) interface{} {
	if isExist(key, store) {
		return store[key]
	}
	return nil
}

// Delete is
func Delete(key string, store map[string]interface{}) error {
	if isExist(key, store) {
		delete(store, key)
	}
	return nil
}

func isExist(key string, store map[string]interface{}) bool {
	_, ok := store[key]
	return ok
}
