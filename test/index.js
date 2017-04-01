/* eslint-disable no-unused-expressions */
var expect = require('chai').expect;
var sinon = require('sinon');
var binarySearch = require('../algorithm/binarySearch/index.js');
var dedupe = require('../algorithm/dedupe/index.js');
var deepCopy = require('../algorithm/deepCopy/index.js');
var debounce = require('../algorithm/function/debounce.js');
var throttle = require('../algorithm/function/throttle.js');
var bubbleSort = require('../algorithm/sort/bubbleSort.js');
var selectionSort = require('../algorithm/sort/selectionSort.js');
var insertionSort = require('../algorithm/sort/insertionSort.js');
var quickSort = require('../algorithm/sort/quickSort.js');

describe('Algorithm', function () {
  describe('binarySearch()', function () {
    var sortedArr = [-15, -3, 2, 5, 6, 9, 10, 10, 20, 99, 104, 999, 1023];
    var existValue = 99;
    var inexistValue = 100;
    describe('recursive', function () {
      it('should give find result correctly', function () {
        var recursive = binarySearch.recursive;
        expect(recursive(sortedArr, existValue)).to.be.true;
        expect(recursive(sortedArr, inexistValue)).to.be.false;
      });
    });
    describe('plain', function () {
      it('should give find result correctly', function () {
        var plain = binarySearch.plain;
        expect(plain(sortedArr, existValue)).to.be.true;
        expect(plain(sortedArr, inexistValue)).to.be.false;
      });
    });
  });

  describe('dedupe()', function () {
    it('should remove all duplicated value', function () {
      var before = [1, 1, -1, 2, 3, 4, 4, 0, 0, 2, 5, -1];
      var after = [1, -1, 2, 3, 4, 0, 5];
      expect(dedupe(before)).to.eql(after);
    });
  });

  describe('deepCopy()', function () {
    function Person(name, sex) {
      this.name = name;
      this.sex = sex || 'male';
      this.age = new Date();
      this.likes = /^944$/i;
      this.sayName = function () {
        return this.name;
      };
    }
    var human = {
      constructor: Person,
      type: 'mammal'
    };
    Person.prototype = human;
    var shiny = new Person('shiny');
    var anotherShiny = deepCopy(shiny);

    it('should duplicate constructor', function () {
      expect(anotherShiny).to.not.equal(shiny);
      expect(anotherShiny).to.be.instanceof(Person);
    });

    it('should also duplicate RegExp / Date and all other property', function () {
      expect(anotherShiny).to.have.property('name', 'shiny').that.is.a('string');
      expect(anotherShiny).to.have.property('sex', 'male').that.is.a('string');
      expect(anotherShiny).to.have.property('age').that.is.an.instanceof(Date);
      expect(anotherShiny).to.have.property('likes').that.is.an.instanceof(RegExp);
      expect(anotherShiny.sayName()).to.equal('shiny');
    });

    it('should abandon constructor and RegExp... when use JSON', function () {
      var jsonShiny = deepCopy(shiny, true);
      expect(jsonShiny).to.be.instanceof(Object);
      expect(jsonShiny.likes).to.be.empty;
      expect(jsonShiny).to.not.have.property('sayName');
    });
  });

  describe('function', function () {
    describe('debounce()', function () {
      var fakerTimer;
      beforeEach(function () {
        fakerTimer = sinon.useFakeTimers();
      });

      afterEach(function () {
        fakerTimer.restore();
      });

      it('should only triggered once whthin the wait time', function () {
        var fn = sinon.spy();

        var debouncedFn = debounce(fn, 300);

        setTimeout(debouncedFn, 0);
        setTimeout(debouncedFn, 100);
        setTimeout(debouncedFn, 300);
        setTimeout(debouncedFn, 400);

        fakerTimer.tick(500);

        sinon.assert.calledOnce(fn);
      });
    });

    describe('throttle()', function () {
      var fakerTimer;
      beforeEach(function () {
        fakerTimer = sinon.useFakeTimers();
      });

      afterEach(function () {
        fakerTimer.restore();
      });

      it('should trigger once per wait milliseconds', function () {
        var fn = sinon.spy();

        var throttledFn = throttle(fn, 300);

        var intervalId = setInterval(throttledFn, 100);

        setTimeout(function () {
          clearInterval(intervalId);
        }, 1200);

        fakerTimer.tick(1250);
        sinon.assert.callCount(fn, 4);
      });

      it('should not trigger at once when leading false', function () {
        var fn = sinon.spy();

        var throttledFn = throttle(fn, 300, { leading: false, trailing: true });

        var intervalId = setInterval(throttledFn, 100);

        setTimeout(function () {
          clearInterval(intervalId);
        }, 300);

        fakerTimer.tick(350);
        sinon.assert.callCount(fn, 0);
      });

      it('should not trigger at last when trailing false', function () {
        var fn = sinon.spy();

        var throttledFn = throttle(fn, 300, { leading: true, trailing: false });

        var intervalId = setInterval(throttledFn, 100);

        setTimeout(function () {
          clearInterval(intervalId);
        }, 1150);

        fakerTimer.tick(1200);
        sinon.assert.callCount(fn, 3);
      });
    });
  });

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
});
