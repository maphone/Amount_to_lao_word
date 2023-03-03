/**
 * @author maphone Phetdavanh <maphonegtth@gmail.com>
 */

// options

const MAX_POSITION = 6
const UNIT_POSITION = 0
const TEN_POSITION = 1

const PRIMARY_UNIT = 'ກີບ'
const SECONDARY_UNIT = 'ກີບ'
const WHOLE_NUMBER_TEXT = 'ຖ້ວນ'

const NUMBER_TEXTS = 'ສູນ,ໜື່ງ,ສອງ,ສາມ,ສີ,ຫ້າ,ຫົກ,ເຈັດ,ແປດ,ເຫົ່າ,ສີບ'.split(',')
const UNIT_TEXTS = 'ສິບ,ຮ້ອຍ,ພັນ,ຊາວ,ແສນ,ລ້ານ'.split(',')

const getIntegerDigits = numberInput => parseInt(numberInput.split('.')[0], 10).toString()
const getFractionalDigits = numberInput => parseInt(numberInput.split('.')[1], 10).toString()

const hasFractionalDigits = numberInput => numberInput !== undefined && numberInput != '0'

const isZeroValue = number => number == 0
const isUnitPosition = position => position == UNIT_POSITION
const isTenPosition = position => position % MAX_POSITION == TEN_POSITION
const isMillionsPosition = position => (position >= MAX_POSITION && position % MAX_POSITION == 0)
const isLastPosition = (position, lengthOfDigits) => position + 1 < lengthOfDigits

const reverseNumber = (number) => {
	const numberStr = number.toString()
	return numberStr.split('').reverse().join('')
}

const getBathUnit = (position, number) => {
	let unitText = ''

	if (!isUnitPosition(position)) {
		unitText = UNIT_TEXTS[Math.abs(position - 1) % MAX_POSITION]
	}

	if (isZeroValue(number) && !isMillionsPosition(position)) {
		unitText = ''
	}

	return unitText
}

const getBathText = (position, number, lengthOfDigits) => {
	let numberText = NUMBER_TEXTS[number]

	if (isZeroValue(number)) {
		return ''
	}

	if (isTenPosition(position) && number == 1) {
		numberText = ''
	}

	if (isTenPosition(position) && number == 2) {
		numberText = 'ຊາວ'
	}

	if (isMillionsPosition(position) && isLastPosition(position, lengthOfDigits) && number == 1) {
		numberText = 'ເອັດ'
	}

	if (lengthOfDigits == 2 && isLastPosition(position, lengthOfDigits) && number == 1) {
		numberText = 'ເອັດ'
	}

	if (lengthOfDigits > 1 && isUnitPosition(position) && number == 1) {
		numberText = 'ເອັດ'
	}

	return numberText
}

// convert function without async
const convert = (numberInput) => {
	const numberReverse = reverseNumber(numberInput)
	let textOutput = ''
	// console.log('>', numberReverse.split(''))
	numberReverse.split('').forEach((number, i) => {
		textOutput = `${getBathText(i, number, numberReverse.length)}${getBathUnit(i, number)}${textOutput}`
	})
	return textOutput
}

const parseFloatWithPrecision = (number, precision = 2) => {
	const numberFloatStr = parseFloat(number).toString().split('.')
	const integerUnitStr = numberFloatStr[0]
	const fractionalUnitStr = (numberFloatStr.length == 2) ? numberFloatStr[1].substring(0, precision) : '00'
	return parseFloat(`${integerUnitStr}.${fractionalUnitStr}`).toFixed(precision)
}

const convertFullMoney = (numberInput) => {
	const numberStr = parseFloatWithPrecision(numberInput)

	const integerDigits = getIntegerDigits(numberStr)
	const fractionalDigits = getFractionalDigits(numberStr)

	const intTextOutput = convert(integerDigits)
	const textOutput = []
	if (intTextOutput) {
		textOutput.push(`${[intTextOutput, PRIMARY_UNIT].join('')}`)
	}
	if (intTextOutput && !hasFractionalDigits(fractionalDigits)) {
		textOutput.push(WHOLE_NUMBER_TEXT)
	}
	if (hasFractionalDigits(fractionalDigits) && convert(fractionalDigits)) {
		textOutput.push(`${[convert(fractionalDigits), SECONDARY_UNIT].join('')}`)
	}

	return textOutput.join('')
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports = convertFullMoney
	exports.default = convertFullMoney
	exports.LAOText = convertFullMoney
} else {
	window.LAOText = convertFullMoney
}