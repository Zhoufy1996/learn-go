package main

type rect struct {
	width  int
	height int
}

func (r *rect) area() int {
	return r.width * r.height
}

func (r *rect) perim() int {
	return (r.width + r.height) * 2
}

func main() {
	rp := &rect{
		width:  100,
		height: 50,
	}
	println(rp.area())
	println(rp.perim())
}
