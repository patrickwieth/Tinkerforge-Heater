/**
 * Created by prawda on 13.01.2015.
 */

var Controller = require('node-pid-controller');

exports.feedData = feed;
exports.setTarget = setTarget;
exports.getCorrection = getCorrection;

// parameters are k_P, k_I and k_D, where P is proportional, I integral and D differential
var ctr = new Controller(0.20, 0.00, 2.5);    // integral was 0.01, is now disabled
var correction = -1;

function feed(data) {
    correction = ctr.update(data);
}

function setTarget(value) {
    ctr.setTarget(value);
}

function getCorrection() {
    return correction;
}
