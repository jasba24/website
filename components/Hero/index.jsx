import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import styles from '../../styles/components/hero'

const useStyles = makeStyles(styles)

export default function Hero ({ title, img }) {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <LazyLoadImage
        src={img}
        alt='Daniel Esteves | Desarrollador Web Frontend - @danestves'
        className={classes.img}
        effect='blur'
      />
      <Typography component='h1' className={classes.title}>
        {title}
      </Typography>
    </div>
  )
}
