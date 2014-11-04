suite('abs', function() {
	test('positive numbers', function() {
		assert.equal(abs(1), 1);
	});

	test('zero', function() {
		assert.equal(abs(0), 0);
	});

	test('negative numbers', function() {
		assert.equal(abs(-2), 2);
	});
});
