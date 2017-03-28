var expect = require('chai').expect;
var bubbleSort = require('../algorithm/sort/bubbleSort.js');
var selectionSort = require('../algorithm/sort/selectionSort.js');
var insertionSort = require('../algorithm/sort/insertionSort.js');
var quickSort = require('../algorithm/sort/quickSort.js');
var binarySearch = require('../algorithm/binarySearch/index.js');
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

    describe('quickSort()', function () {
      it('should sort well', function () {
        expect(quickSort(before)).to.eql(after);
      });
    });
  });

  describe('binarySearch()', function () {
    var sortedArr = [-15, -3, 2, 5, 6, 9, 10, 10, 20, 99, 104, 999, 1023];
    var existValue = 99;
    var inexistValue = 100;
    describe('recursive', function () {
      it('should give find result correctly', function () {
        var recursive = binarySearch.recursive;
        expect(recursive(sortedArr, existValue)).to.be.true; // eslint-disable-line
        expect(recursive(sortedArr, inexistValue)).to.be.false; // eslint-disable-line
      });
    });
    describe('plain', function () {
      it('should give find result correctly', function () {
        var plain = binarySearch.plain;
        expect(plain(sortedArr, existValue)).to.be.true; // eslint-disable-line
        expect(plain(sortedArr, inexistValue)).to.be.false; // eslint-disable-line
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
