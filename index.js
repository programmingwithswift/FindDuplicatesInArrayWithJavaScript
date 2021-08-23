const shoppingList = [
	'bread',
	'bread',
	'milk',
	'pie',
	'juice'
]

function doesArrayContainDuplicates(list) {
	return new Set(list).size < list.length
}

console.log(doesArrayContainDuplicates(shoppingList))

function findAndReturnDuplicatesInArray(list) {
	const inputList = new Set()
	const duplicates = new Set()

	for (const item of list) {
		if (inputList.has(item)) {
			duplicates.add(item)
		} else {
			inputList.add(item)
		}
	}

	return duplicates
}

console.log(findAndReturnDuplicatesInArray(shoppingList))
