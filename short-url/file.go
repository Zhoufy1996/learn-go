package main

import (
	"encoding/json"
	"io"
	"log"
	"os"
)

/*
	file有关
	load
	save
*/

// 读取文件里的内容到内存
func (s *urlStore) load(filename string) error {
	f, err := os.Open(filename)
	defer f.Close()
	// 有文件吗
	if err != nil {
		log.Println("Error opening URLStore:", err)
		return err
	}

	d := json.NewDecoder(f)
	for err == nil {
		var r record
		if err = d.Decode(&r); err == nil {
			s.set(r.Key, r.URL)
		}
	}
	if err == io.EOF {
		return nil
	}
	log.Println("Error decoding URLStore:", err) // map hasn't been read correctly
	return err
}

func (s *urlStore) saveLoop(filename string) {
	f, err := os.OpenFile(filename, os.O_WRONLY|os.O_CREATE|os.O_APPEND, 0644)
	if err != nil {
		log.Fatal("URLStore:", err)
	}
	defer f.Close()
	e := json.NewEncoder(f)
	for {
		// taking a record from the channel and encoding it
		r := <-s.save
		if err := e.Encode(r); err != nil {
			log.Println("URLStore:", err)
		}
	}
}
