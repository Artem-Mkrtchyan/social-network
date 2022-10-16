import React, {InputHTMLAttributes} from 'react';
import styles from './captchaSecure.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  img: string | null
}


export const CaptchaSecure: React.FC<InputProps> = ({img, ...props}) => {
  return (
    <div className={styles.captchaWrap}>
      {img && <img src={img} alt="captcha" />}
      <input className={styles.captchaInput} placeholder='Enter text from image' type="text" {...props}/>
    </div>
  )
}
