package main

import (
	"sync"
)

// 线程安全问题

type URLStore struct {
	urls map[string]string
	mu   sync.RWMutex
}

// 为什么传的是内存地址
func (s *URLStore) Get(key string) string {
	s.mu.Lock()
	defer s.mu.RUnlock()
	url := s.urls[key]
	return url
}

func (s *URLStore) Set(key string, url string) bool {
	s.mu.Lock()
	defer s.mu.Unlock()
	_, present := s.urls[key]
	if present {
		return false
	}
	s.urls[key] = url
	return true
}

func NewURLStore() *URLStore {
	return &URLStore{urls: make(map[string]string)}
}

// RLock啥意思
func (s *URLStore) Count() int {
	s.mu.RLock()
	defer s.mu.RLocker()
	return len(s.urls)
}

func (s *URLStore) Put(url string) string {
	for {
		key := genKey(s.Count())
		if s.Set(key, url) {
			return key
		}
	}
	return ""
}
