// More control when customizing an item
// Easier to add more versions or updates to the object

// Abstract factory
// More dynamic, built to add more features, without changing to much functionality to the factory.
// Avoid complication when its not needed
// Only added after a normal factory, when you need more functionality then a normal factory

(function(win){
    function redCircle() {}
	redCircle.prototype.create = function() {
		this.item = document.createElement('div')
		this.item.className = 'circle red'
		return this
	}

    function blueCircle() {}
	blueCircle.prototype.create = function() {
		this.item = document.createElement('div')
		this.item.className = 'circle blue'
		return this
	}

	// Needs to be written like this to act as constructor
    function circleFactory() {
		// Adding in types dynamicly
		this.types = {}

        this.create = (type) => {
			return new this.types[type]().create()
		}
		
		// Checking if the type (red, blue) has the create class, if so, add it to types
		this.register = (type, cls) => {
			if (cls.prototype.create) this.types[type] = cls
		}
    }

	let circleGenSingleton = (function() {
		let instance

		let init = () => {
			let _aCircle = []
            let _stage = document.querySelector('.advert')
			let _cf = new circleFactory()
			_cf.register('red', redCircle)
			_cf.register('blue', blueCircle)

			let _position = (circle, left, top) => {
				circle.style.left = left + 'px'
				circle.style.top = top + 'px'
			}

			let create = (left, top, type) => {
				let circle = _cf.create(type).item
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
