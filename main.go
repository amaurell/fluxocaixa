package main

import (
	"fmt"
	"net/http"
)

func main() {
	fmt.Println("...port:3000")

	dirHTML := http.FileServer(http.Dir("./"))
	http.Handle("/", dirHTML)
	http.ListenAndServe(":3000", nil)
}
