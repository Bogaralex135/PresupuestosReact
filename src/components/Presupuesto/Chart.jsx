/* eslint-disable react/prop-types */
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export function Chart({ presupuesto, porcentaje, gastado }) {
  return (
    <>
      <CircularProgressbar
        value={gastado}
        text={`${porcentaje}% Gastado`}
        maxValue={presupuesto}
        minValue={0}
        styles={buildStyles({
          textSize: '11px',
          pathColor: '#0284c7',
          textColor: '#0284c7',
          trailColor: '#d6d6d6',
        })}
      />
    </>
  )
}

export default Chart
