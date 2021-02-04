import {HtmlWiringHelper} from '/jasmine-standalone-3.6.0/src/js/HtmlWiringHelper.js';
import {DonutMaker} from '../../../../module-4-donut-maker-ChristinCode-with-jasmine-master/module-4-donut-maker-ChristinCode-with-jasmine-master/src/js/DonutMaker.js';
describe ('HtmlWiringHelper wires up elements to the DonutMaker object.', () => {
  it ('Wire up the donut count to the DonutMaker count.', () => {
    const donutMaker = new DonutMaker ();
    const underTest = new HtmlWiringHelper (donutMaker);
    const testDisplay = document.createElement ('span');
    underTest.updateDonutCountDisplay (testDisplay);
    expect (testDisplay.innerText).toBe ('0');
  });
  it ('Wire up the donut count to the DonutMaker count.', () => {
    const donutMaker = new DonutMaker ();
    const underTest = new HtmlWiringHelper (donutMaker);
    const testDisplay = document.createElement ('span');
    donutMaker.recordClick ();
    underTest.updateDonutCountDisplay (testDisplay);
    expect (testDisplay.innerText).toBe ('1');
  });
});