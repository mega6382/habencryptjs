
var habEncrypt = function()
{

    /**
     * Encrypt a string using HAB encrypting method.
     * @param string string String to be encrypted using HAB encodding method.
     * @param string key Key to be used for encrypting the string
     * @return string HAB Encrypted string
     */
    this.enc = function(string, key) {
        var enc = "";
        var count = string.length;
        var keyCount = key.length;
		var j = 0;
        for (var i = 0;i < count;i++) {
            var char = string[i].charCodeAt();
            var keyChar = !isNaN(key[j]) ? key[j] : key[j].charCodeAt();
            var encChar = parseFloat(char) + parseFloat(keyChar);
            enc += String.fromCharCode(encChar);
            j++;
            if (j == keyCount) {
                j = 0;
            }
        }
        return enc;
    }

    /**
     * Decrypt a HAB encrypted string.
     * @param string string HAB encrpyted String
     * @param string key Key that was used to encrypt the string
        * @return string HAB Decrypted string
     */
    this.dec = function(string, key) {
        var dec = "";
        var count = string.length;
        var keyCount = key.length;
		var j = 0;
        for (var i = 0;i < count;i++) {
            var char = string[i].charCodeAt();
            var keyChar = !isNaN(key[j]) ? key[j] : key[j].charCodeAt();
            var decChar = char - keyChar;
            dec += String.fromCharCode(decChar);
            j++;
            if (j == keyCount) {
                j = 0;
            }
        }
        return dec;
    }

    /**
     * Encrypt the string using HAB than Base64 encode it.
     * @param string string String to be encrypted using HAB encodding method.
     * @param string key Key to be used for encrypting the string
     * @return string Base64 encoded (HAB encrypted) String
     */
    this.b64enc = function(string, key) {
        return btoa(this.enc(string, key));
    }

    /**
     * HAB decrypt Base64encoded (HAB encrypted) string 
     * @param string string Base64 encoded HAB encrypted string.
     * @param string key Key that was used to encrypt the string
     * @return string HAB Decrypted string
     */
    this.b64dec = function(string, key) {
        return this.dec(atob(string), key);
    }


}

