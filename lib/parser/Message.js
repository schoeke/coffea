/**
 * Message: An object that holds the information of an IRC message.
 */
var Tag = require(__dirname + '/Tag.js');

var Message = function Message() {
    this.tags = [];
    this.prefix = '';
    this.command = '';
    this.params = '';
    this.trailing = '';
};

/**
 * Message.getTag(key)
 * This method gets the tag by the key `key` and returns a Tag object representing
 * the tag.
 *
 * @params {String} key
 * @return {Object} tag
 */
Message.prototype.getTag = function(key) {
    for (var i=0; i < this._tags.length; i++) {
        if (this._tags[i].key === key) {
            return this._tags[i];
        }
    }

    return null;
};

/**
 * Message.prototype.hasTag(key)
 * This method gets the tag by the key `key` and returns true if it exists, false
 * otherwise.
 *
 * @params {String} key
 * @return {Boolean} tagExists
 */
Message.prototype.hasTag = function(key) {
    for (var i=0; i < this._tags.length; i++) {
        if (this._tags[i].key === key) {
            return true;
        }
    }

    return false;
};

module.exports = Message;