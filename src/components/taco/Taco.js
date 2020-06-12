import React, {useState, useEffect} from 'react';
import './taco.css';
import * as yup from 'yup';
import {Link} from 'react-router-dom';

const formSchema = yup.object().shape({
    name: yup.string().required('Must add name for order'),
    size: yup.mixed().oneOf(['small', 'medium', 'large'], 'Choose a size').required('Must specify size'),
    avo: yup.boolean(),
    onions: yup.boolean(),
    pico: yup.boolean(),
    sauce: yup.boolean(),
    special: yup.string(),
})

const Taco = ({order, setOrder}) => {
  

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [errors, setErrors] = useState({
    name: '',
    size: '',
    avo: '',
    onions: '',
    pico: '',
    sauce: '',
    special: ''
  })

  useEffect(() => {
    console.log(formSchema.isValid(order))
    formSchema.isValid(order).then(valid => {
      setButtonDisabled(!valid)
    })
  }, [order])

  const handleSubmit = e => {
    e.preventDefault();

    
  }

  const validateChange = e => {
    yup.reach(formSchema, e.target.name)
    .validate(e.target.value)
    .then(valid => {
      setErrors({
        ...errors,
        [e.target.name]: ''
      })
    })
    .catch(err => {
      setErrors({
        ...errors,
        [e.target.name]: err.errors[0]
      })
    })
  }

  const handleChange = e => {
    e.persist();
    validateChange(e);
    setOrder({...order, [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value})
    console.log(order)
  }

  return (
    <div className='form-container'>
      <h3>Build your taco</h3>
      <div className='img2'></div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name' >
          Name:
          <input id='name' type='text' name='name' value={order.name} onChange={handleChange} />
          {errors.name.length > 0 ? <p className='error'>{errors.name}</p> : null}
        </label>
        <label htmlFor='size'>
          Taco size
          <select id='size' name='size'  value={order.size} onChange={handleChange} >
            <option>-- selsect size--</option>
            <option value='small'>small</option>
            <option value='medium'>medium</option>
            <option value='large'>large</option>
          </select>
          {errors.size.length > 0 ? <p className='error'>{errors.size}</p> : null}
        </label>
        <label htmlFor='avo'>
          Avocado
          <input id='avo' type='checkbox' name='avo' checked={order.avo} onChange={handleChange} />
        </label>
        <label htmlFor='onion'>
          Onions
          <input id='onion' type='checkbox' name='onions' checked={order.onions} onChange={handleChange} />
        </label>
        <label htmlFor='pico'>
          Pico de gallo 
          <input id='pico' type='checkbox' name='pico' checked={order.pico} onChange={handleChange} />
        </label>
        <label htmlFor='sauce'>
          Hot sauce
          <input id='sauce' type='checkbox' name='sauce' checked={order.sauce} onChange={handleChange} />
        </label>
        <label htmlFor='special'>
          Special instructions: 
          <textarea id='special' name='special' value={order.special} onChange={handleChange} />
        </label>
        <Link to='/success'><button type='submit' disabled={buttonDisabled}>Place Order!</button></Link>
      </form>
    </div>
    
  )
}

export default Taco;