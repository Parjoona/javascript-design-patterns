// Factory 
// More control when customizing an item
// Easier to add more versions or updates to the object

// Abstract factory
// More dynamic, built to add more features, without changing to much functionality to the factory.
// Avoid complication when its not needed
// Only added after a normal factory, when you need more functionality then a normal factory

// Builder
// Created to let one function do multiple things

(function(win){

	/////////////
	// Circle // 
	///////////
	function circle() {
		this.item = document.createElement('div')
		this.item.className = 'circle'
	}
	circle.prototype.move = function(left, top) {
		this.item.style.left = left + 'px'
		this.item.style.top = top + 'px'
	}
	circle.prototype.color = function(color) {
		this.item.style.background = color
	}
	circle.prototype.get = function() {
		return this.item
	}

	//////////
	// RED // 
	////////
	function redCircleBuilder() {
		this.item = new circle()
		this.init()
	}
	redCircleBuilder.prototype.init = function() {
		this.item.color('red')
	}
	redCircleBuilder.prototype.get = function() {
		return this.item
	}

	///////////
	// Blue // 
	/////////
	function blueCircleBuilder() {
		this.item = new circle()
		this.init()
	}
	blueCircleBuilder.prototype.init = function() {
		this.item.color('blue')
	}
	blueCircleBuilder.prototype.get = function() {
		return this.item
	}

	// Needs to be written like this to act as constructor
    function circleFactory() {
		// Adding in types dynamicly
		this.types = {}

        this.create = (type) => {
				return new this.types[type]().get()
		}
		
		// Checking if the type (red, blue) has the create class, if so, add it to types
		this.register = (type, cls) => {			
			if (cls.prototype.init && cls.prototype.get) this.types[type] = cls
		}
    }

	let circleGenSingleton = (function() {
		let instance

		let init = () => {
			let _aCircle = []
            let _stage = document.querySelector('.advert')
			let _cf = new circleFactory()

			// Adding support for the these type of circles
			_cf.register('red', redCircleBuilder)
			_cf.register('blue', blueCircleBuilder)			

			let _position = (circle, left, top) => {
				circle.style.left = left + 'px'
				circle.style.top = top + 'px'
			}

			let create = (left, top, type) => {
				let circle = _cf.create(type).get()	
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
			let circle = cg.create(e.clientX-500, e.clientY-360, 'red')
			cg.addSelf(circle)
		})
	  })
})(window);
