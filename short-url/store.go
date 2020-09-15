package main

import (
	"fmt"
	"log"
	"sync"
)

/*
	new
	set
	get
	put
	count
*/

// 线程安全问题
type urlStore struct {
	urls map[string]string
	mu   sync.RWMutex
	save chan record
}

type record struct {
	Key, URL string
}

// RLock啥意思
func (s *urlStore) count() int {
	s.mu.RLock()
	defer s.mu.RLocker()
	return len(s.urls)
}

// 为什么传的是内存地址
func (s *urlStore) get(key string) string {
	s.mu.RLock()
	defer s.mu.RUnlock()
	url := s.urls[key]
	return url
}

func newURLStore(filename string) *urlStore {
	s := &urlStore{
		urls: make(map[string]string),
		save: make(chan record, 1000),
	}

	if err := s.load(filename); err != nil {
		log.Println("Error loading data in URLStore:", err)
	}
	go s.saveLoop(filename)
	return s
}

func (s *urlStore) put(url string) string {
	for {
		key := genKey(s.count())
		fmt.Printf("key is %s url is %s \n", key, url)
		if ok := s.set(key, url); ok {
			s.save <- record{key, url}
			return key
		}
	}
	panic("shouldn’t get here")
}

// Lock为什么会导致不能写入
func (s *urlStore) set(key string, url string) bool {
	_, present := s.urls[key]
	if present {
		return false
	}
	s.mu.RLock()
	defer s.mu.RUnlock()

	s.urls[key] = url
	fmt.Print(key, url, "\n")
	return true
}
