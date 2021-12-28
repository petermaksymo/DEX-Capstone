import moment from 'moment'
import times from 'lodash/times'

export function getGraphData() {
  const points = 31

  return [{
    id: "Vbucks/Coin1",
    data: times(points, i => ({
      x: moment().subtract(points - i, 'days').toISOString(),
      y: 20 + 5*Math.random()
    }))
  }]
}