(function(win){
	let circleGenSingleton = (function() {
		let instance

		let init = () => {
			let _aCircle = []
			let _stage = document.querySelector('.advert')

			let _position = (circle, left, top) => {
				circle.style.left = left + 'px'
				circle.style.top = top + 'px'
			}

			let create = (left, top) => {
				let circle = document.createElement('div')
				circle.className = 'circle'
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
			let circle = cg.create(e.pageX-250, e.pageY-250)
			cg.addSelf(circle)
		})
	  })
})(window);
