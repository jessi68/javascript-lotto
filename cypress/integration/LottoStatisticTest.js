describe("lotto 통계 테스트", () => {
    beforeEach(() => {
        cy.visit("http://localhost:5500/");
    });
    
    const typePurchasePriceAndClickSubmitButton = (purchasePrice) => {
      cy.get('input[id="'+ ID_OF_LOTTO_PRICE_ELEMENT  + '"]').type(purchasePrice);
      cy.get('button[id="'+ PURCHASED_CONFIRM  + '"]').click();
    };

    it("당첨 번호 중 ", () => {
        typePurchasePriceAndClickSubmitButton(3000);
        
        cy.get('input[id="'+ SHOW_NUMBER + '"]').click({force: true});

        cy.get('span[id="lottoTicket"]')
        .its('length')
        .then((len) => {
            expect(len).to.equal(5);
        });

    });


  });