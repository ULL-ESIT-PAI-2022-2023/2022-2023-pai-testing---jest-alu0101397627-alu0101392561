import { toRna } from './rna-transcription'

describe('Transcriptor', () => {
  test('transcribes cytosine to guanine', () => {
    expect(toRna('C')).toMatch('G')
  })

  test('transcribes guanine to cytosine', () => {
    expect(toRna('G')).toMatch('C')
  })

  test('transcribes adenine to uracil', () => {
    expect(toRna('A')).toMatch('U')
  })

  test('transcribes thymine to adenine', () => {
    expect(toRna('T')).toMatch('A')
  })

  test('transcribes all dna nucleotides to their rna complements', () => {
    expect(toRna('ACGTGGTCTTAA')).toMatch('UGCACCAGAAUU')
  })

  test('correctly handles invalid input', () => {
    expect(() => toRna('U')).toThrowError('Invalid input DNA.')
  })

  test('correctly handles completely invalid input', () => {
    expect(() => toRna('XXX')).toThrowError('Invalid input DNA.')
  })

  test('correctly handles partially invalid input', () => {
    expect(() => toRna('ACGTXXXCTTAA')).toThrowError('Invalid input DNA.')
  })
})
