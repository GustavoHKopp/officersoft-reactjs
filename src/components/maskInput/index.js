import InputMask from 'react-input-mask'

const onlyNumbers = (str) => str.replace(/[^0-9]/g, '')

const MaskedInput = ({className, value, onChange}) => {
  const cleanMask = (e) => {
    onChange({
      ...e,
      target: {
        ...e.target,
        value: onlyNumbers(e.target.value)
      }
    })
  }

  return <InputMask mask="999.999.999-99" 
    className={className}
    value={value}
    onChange={cleanMask}
  />
}

export {MaskedInput}