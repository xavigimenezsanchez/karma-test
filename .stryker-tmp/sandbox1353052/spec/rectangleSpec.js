describe("Class Rectangle", function() {
    var rectangle,
        height = 2,
        width = 3;
  
    beforeEach(() => {
        rectangle = new Rectangle(height, width)
    });
    it("Area calculate", function() {  
      expect(rectangle.calcArea()).toBe(height * width);
    });

    // it("get is working correctly", () => {
    //     debugger;
    //     expect(rectangle.area).toBe(height * width);
    // })
  });