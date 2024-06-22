import React from "react"
// import "../styles.css"
// import {
//   App,
//   Theme,
//   WrapState,
// } from "../goldlabel"

export default function Wrap(props: any) {
  const {children} = props

  return <>
{children}
          </>
}
