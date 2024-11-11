function checkForSpam(message) {
  // Перевіряємо, чи містить повідомлення слова 'spam' або 'sale' (незалежно від регістру)
  if (
    message.toLowerCase().includes('spam') ||
    message.toLowerCase().includes('sale')
  ) {
    return true; // Повертаємо true, якщо хоча б одне слово знайдено
  } else {
    return false; // Повертаємо false, якщо жодне слово не знайдено
  }
}

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('Amazing SalE, only tonight!')); // true
console.log(checkForSpam('Trust me, this is not a spam message')); // true
console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
