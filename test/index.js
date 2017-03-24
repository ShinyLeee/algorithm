var expect = require('chai').expect;
var bubbleSort = require('../algorithm/sort/bubbleSort.js');
var selectionSort = require('../algorithm/sort/selectionSort.js');
var insertionSort = require('../algorithm/sort/insertionSort.js');
var dedupe = require('../algorithm/dedupe/index.js');

describe('Algorithm', function () {
  describe('sort', function () {
    var before = [98, 2, 8, -1, 0, 64, 46];
    var after = [-1, 0, 2, 8, 46, 64, 98];
    describe('bubbleSort()', function () {
      it('should sort well', function () {
        expect(bubbleSort(before)).to.eql(after);
      });

      it('should not mutate original array', function () {
        var original = before.slice();
        bubbleSort(before);
        expect(original).to.eql(before);
      });
    });

    describe('selectionSort()', function () {
      it('should sort well', function () {
        expect(selectionSort(before)).to.eql(after);
      });

      it('should not mutate original array', function () {
        var original = before.slice();
        selectionSort(before);
        expect(original).to.eql(before);
      });
    });

    describe('insertionSort()', function () {
      it('should sort well', function () {
        expect(insertionSort(before)).to.eql(after);
      });

      it('should not mutate original array', function () {
        var original = before.slice();
        insertionSort(before);
        expect(original).to.eql(before);
      });
    });
  });

  describe('uniq()', function () {
    it('should remove all duplicated value', function () {
      var before = [1, 1, -1, 2, 3, 4, 4, 0, 0, 2, 5, -1];
      var after = [1, -1, 2, 3, 4, 0, 5];
      expect(dedupe(before)).to.eql(after);
    });
  });
});
