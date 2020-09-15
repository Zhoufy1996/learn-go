package main

import (
	"flag"
	"fmt"
	"net/http"
	"runtime"
	"time"
)

const addForm = `
<form method="POST" action="/add">
URL: <input type="text" name="url">
<input type="submit" value="Add">
</form>
`

var (
	listenAddr = flag.String("http", ":8080", "http listen address")
	dataFile   = flag.String("file", "store.json", "data store file name")
	hostname   = flag.String("host", "localhost:8080", "host name and port")
)
var s *urlStore
var c = make(chan int)

func add(w http.ResponseWriter, r *http.Request) {
	url := r.FormValue("url")
	if url == "" {
		w.Header().Set("Content-Type", "text/html")
		fmt.Fprint(w, addForm)
		return
	}
	key := s.put(url)
	fmt.Printf("key is %s, url is %s", key, url)
	fmt.Fprintf(w, "http://%s/%s \n", *hostname, key)
}

func redirect(w http.ResponseWriter, r *http.Request) {
	key := r.URL.Path[1:]
	url := s.get(key)
	if url == "" {
		http.NotFound(w, r)
		return
	}
	fmt.Printf("redirect to %s. \n", url)
	http.Redirect(w, r, url, http.StatusFound)
}

func main() {
	go listenNumGoroutine()
	go printNum()
	s = newURLStore(*dataFile)
	http.HandleFunc("/", redirect)
	http.HandleFunc("/add", add)
	http.ListenAndServe(*listenAddr, nil)
}

func printNum() {
	for {
		r := <-c
		fmt.Print(r, "\n")
	}
}

func listenNumGoroutine() {
	for {
		time.Sleep(5000)
		n := runtime.NumGoroutine()
		c <- n
		fmt.Printf("send %v \n", n)
	}
}
