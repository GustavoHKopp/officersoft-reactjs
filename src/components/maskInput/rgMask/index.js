import InputMask from 'react-input-mask'

const onlyNumbers = (str) => str.replace(/[^0-9]/g, '')

const RgMaskedInput = ({className, value, onChange}) => {
  const cleanMask = (e) => {
    onChange({
      ...e,
      target: {
        ...e.target,
        value: onlyNumbers(e.target.value)
      }
    })
  }

  return <InputMask mask="99.999.999-9" 
    className={className}
    value={value}
    onChange={cleanMask}
  />
}

export {RgMaskedInput}