// importing AES
from Crypto.Cipher import AES

// encryption key
key = m!W&9axQyx09iE'

//data to be encrypted
data = "My encyption data test".encode()

// nonce is a random value generated each time we instantiate the cipher using new()
nonce = cipher.nonce

// encrypt the data
ciphertext = cipher.encrypt(data)

// print the encrypted data
print("Cipher text:", ciphertext)
