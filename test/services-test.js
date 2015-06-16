describe('Phone', function() {
	var Phone;
	beforeEach(module('demoApp'));
	beforeEach(inject(function(_Phone_) {
		Phone = _Phone_;
	}));

	/*
	describe('The Phone Service', function() {
		it('Should have a constructer that assigns the anme passed to it', function() {
			expect(new Phone('Dell Streak 7')).to.have.property('name', 'Dell Streak 7');
		});

		it('Should auto-assign an id based on the lowercase name replacing spaces with dashes', function() {
			var newPhone = new Phone('dell-streak-7');
			expect(newPhone).to.have.property('id', 'dell-streak-7');
		});
	});
	*/

	describe('The Phone Service', function() {
		it('Should have a constructer that assigns the anme passed to it', function() {
			expect(new Phone('iPhone 6')).to.have.property('name', 'iPhone 6');
		});

		it('Should auto-assign an id based on the lowercase name replacing spaces with dashes', function() {
			var newPhone = new Phone('iphone-6');
			expect(newPhone).to.have.property('id', 'iphone-6');
		});
	});
});