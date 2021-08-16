const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
});

test("One dollar should be 106.6 yen", () => {
    const { fromDollarToYen } = require('./app.js')
    const yen = fromDollarToYen(5)
    const expected = 5 * 106.6;
    expect(fromDollarToYen(5)).toBe(533); //1 dollar is 106.6 yen, then 5 dollars should be = (5 * 106.6)
});

test("One yen should be 0.006255 pounds", () => {
    const { fromYenToPound } = require('./app.js')
    const pound = fromYenToPound(1000)
    const expectes = 1000 * 0.006255;
    expect(fromYenToPound(1000)).toBe(6.255); //1 yen is 0.006255 pound, then 1000 yen should be = (1000 * 0.006255)
})