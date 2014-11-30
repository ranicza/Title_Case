describe('titleCase', function() {
    it(" if word is 'cat' we get 'Cat'", function(){
        titleCase("cat").should.equal("Cat ");
    });
    it(" if word is 'VALERA' we get 'Valera'", function(){
        titleCase("VALERA").should.equal("Valera ");
    });
    it( " if sentence is 'VALERA and cat BF' we get 'Valera And Cat Bf", function(){
        titleCase("VALERA and cat BF").should.equal("Valera And Cat Bf ");
    })
});