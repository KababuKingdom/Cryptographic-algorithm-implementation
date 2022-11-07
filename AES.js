// Encrypt
var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123');


document.getElementById("enc").innerHTML = "Encrypted: " + ciphertext.toString();

// Decrypt
var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), 'secret key 123');
var plaintext = bytes.toString(CryptoJS.enc.Utf8);

document.getElementById("dec").innerHTML = "Decrypted: " + plaintext;
