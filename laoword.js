
/* eslint-disable import/no-extraneous-dependencies */

import { expect } from 'chai'
import LAOText from './number'

describe('Lao Word Text', () => {
	it('should be a function', () => {
		expect(LAOText).to.be.a('function')
	})

	it('should not convert very small amount', () => {
		expect(LAOText(0.0001)).to.equal('')
		expect(LAOText(0.001)).to.equal('')
		expect(LAOText(0.009)).to.equal('')
	})

	it('should convert to Satang', () => {
		expect(LAOText(0.01)).to.equal('หนึ่งสตางค์')
		expect(LAOText(0.1)).to.equal('สิบสตางค์')
		expect(LAOText(0.10)).to.equal('สิบสตางค์')
		expect(LAOText(0.11)).to.equal('สิบเอ็ดสตางค์')
		expect(LAOText(0.12)).to.equal('สิบสองสตางค์')
		expect(LAOText(0.123)).to.equal('สิบสองสตางค์')
		expect(LAOText(0.2)).to.equal('ยี่สิบสตางค์')
		expect(LAOText(0.20)).to.equal('ยี่สิบสตางค์')
		expect(LAOText(0.21)).to.equal('ยี่สิบเอ็ดสตางค์')
		expect(LAOText(0.25)).to.equal('ยี่สิบห้าสตางค์')
		expect(LAOText(0.255)).to.equal('ยี่สิบห้าสตางค์')
		expect(LAOText(0.50)).to.equal('ห้าสิบสตางค์')
		expect(LAOText(0.75)).to.equal('เจ็ดสิบห้าสตางค์')
		expect(LAOText(0.99)).to.equal('เก้าสิบเก้าสตางค์')
		expect(LAOText(0.999)).to.equal('เก้าสิบเก้าสตางค์')
	})

	it('should convert to Kip', () => {
		expect(LAOText(1)).to.equal('หนึ่งบาทถ้วน')
		expect(LAOText(10)).to.equal('สิบบาทถ้วน')
		expect(LAOText(11)).to.equal('สิบเอ็ดบาทถ้วน')
		expect(LAOText(12)).to.equal('สิบสองบาทถ้วน')
		expect(LAOText(20)).to.equal('ยี่สิบบาทถ้วน')
		expect(LAOText(21)).to.equal('ยี่สิบเอ็ดบาทถ้วน')
		expect(LAOText(22)).to.equal('ยี่สิบสองบาทถ้วน')
		expect(LAOText(100)).to.equal('หนึ่งร้อยบาทถ้วน')
		expect(LAOText(101)).to.equal('หนึ่งร้อยเอ็ดบาทถ้วน')
		expect(LAOText(111)).to.equal('หนึ่งร้อยสิบเอ็ดบาทถ้วน')
		expect(LAOText(121)).to.equal('หนึ่งร้อยยี่สิบเอ็ดบาทถ้วน')
	})

	it('should convert big number to Kip', () => {
		expect(LAOText(1000000)).to.equal('หนึ่งล้านบาทถ้วน')
		expect(LAOText(1000001)).to.equal('หนึ่งล้านเอ็ดบาทถ้วน')
		expect(LAOText(11000001)).to.equal('สิบเอ็ดล้านเอ็ดบาทถ้วน')
		expect(LAOText(11000000)).to.equal('สิบเอ็ดล้านบาทถ้วน')
	})

	it('should convert multiple million round to Kip', () => {
		expect(LAOText(1000000000000000000)).to.equal('หนึ่งล้านล้านล้านบาทถ้วน')
		expect(LAOText(1000000000001)).to.equal('หนึ่งล้านล้านเอ็ดบาทถ้วน')
		expect(LAOText(1000000000000)).to.equal('หนึ่งล้านล้านบาทถ้วน')
		expect(LAOText(1001000000001)).to.equal('หนึ่งล้านหนึ่งพันล้านเอ็ดบาทถ้วน')
		expect(LAOText(1001000001001)).to.equal('หนึ่งล้านหนึ่งพันล้านหนึ่งพันเอ็ดบาทถ้วน')
		expect(LAOText(1001000000000)).to.equal('หนึ่งล้านหนึ่งพันล้านบาทถ้วน')
		expect(LAOText(1000000000)).to.equal('หนึ่งพันล้านบาทถ้วน')
		expect(LAOText(10000000)).to.equal('สิบล้านบาทถ้วน')
		expect(LAOText(100000000)).to.equal('หนึ่งร้อยล้านบาทถ้วน')
	})

	it('should convert complex number to Kip', () => {
		expect(LAOText(6321298)).to.equal('หกล้านสามแสนสองหมื่นหนึ่งพันสองร้อยเก้าสิบแปดบาทถ้วน')
		expect(LAOText(10034567)).to.equal('สิบล้านสามหมื่นสี่พันห้าร้อยหกสิบเจ็ดบาทถ้วน')
		expect(LAOText(20034567)).to.equal('ยี่สิบล้านสามหมื่นสี่พันห้าร้อยหกสิบเจ็ดบาทถ้วน')
		expect(LAOText(30034567.00)).to.equal('สามสิบล้านสามหมื่นสี่พันห้าร้อยหกสิบเจ็ดบาทถ้วน')
	})

	it('should convert number to Kip with Satang', () => {
		expect(LAOText(11.25)).to.equal('สิบเอ็ดบาทยี่สิบห้าสตางค์')
		expect(LAOText(100.50)).to.equal('หนึ่งร้อยบาทห้าสิบสตางค์')
		expect(LAOText(567.01)).to.equal('ห้าร้อยหกสิบเจ็ดบาทหนึ่งสตางค์')
		expect(LAOText(123456789.999)).to.equal('หนึ่งร้อยยี่สิบสามล้านสี่แสนห้าหมื่นหกพันเจ็ดร้อยแปดสิบเก้าบาทเก้าสิบเก้าสตางค์')
	})
})