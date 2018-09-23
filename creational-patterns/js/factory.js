// Factory 
// More control when customizing an item
// Easier to add more versions or updates to the object

(function(win){
    function redCircle() {
        this.item = document.createElement('div')
        this.item.className = 'circle red'
    }

    function blueCircle() {
        this.item = document.createElement('div')
        this.item.className = 'circle blue'
    }

	// Needs to be written like this to act as constructor
    function circleFactory() {
        this.create = (color) => {
            return (color === 'blue') ? new blueCircle() : new redCircle()
        }
    }

	let circleGenSingleton = (function() {
		let instance

		let init = () => {
			let _aCircle = []
            let _stage = document.querySelector('.advert')
            let _cf = new circleFactory()

			let _position = (circle, left, top) => {
				circle.style.left = left + 'px'
				circle.style.top = top + 'px'
			}

			let create = (left, top, color) => {
				let circle = _cf.create(color).item
				_position(circle, left, top)
				return circle
			}

			let addSelf = (circle) => {
				_stage.append(circle)
				_aCircle.push(circle)
			}

			let index = () => {
				return _aCircle.length
			}

			return {
				index,
				create,
				addSelf
			}
		}

		return {
			getInstance() {
				if (!instance) instance = init() 
				return instance;
			}
		}
	})()

	win.document.addEventListener("DOMContentLoaded",function(){
		let adv = document.querySelector('.advert')
		adv.addEventListener('click', function(e) {
			let cg = circleGenSingleton.getInstance()
			let circle = cg.create(e.pageX-250, e.pageY-250, 'red')
			cg.addSelf(circle)
		})
	  })
})(window);
