tasks.module("homework");

tasks.add("sum_of_odd_numbers", {
    instruction: "Write a function `f` which takes an array of integers and returns sum of odd integers from this array.",
    js: "var f = function(array){\n\n}",
    tests: function () {
        test('test f', function () {
            // for testing functions see: http://api.qunitjs.com/category/assert/
            notStrictEqual(f, undefined, 'f is defined');
            strictEqual(typeof f, 'function', 'f is a function');

            var res = [];
            var ans = 0;
            for (var i = 0; i < 100; i++) {
                res[i] = i;
                if (i % 2 === 1)
                    ans += i;
                strictEqual(f(i), ans, 'correct value of f(' + i + ')');
            }

            strictEqual(f([0]), 0, 'correct value for f([0])');
            strictEqual(f([-1]), -1, 'correct value for f([-1])');
            strictEqual(f([-1,-2,0,0,3,2,2,3]),5, 'correct value for f([-1,-2,0,0,3,2,2,3])');
        });
    }
});
