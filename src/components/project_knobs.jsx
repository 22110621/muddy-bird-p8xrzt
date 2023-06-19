import { useEffect, useRef} from "react"
import PropTypes from 'prop-types'

const Knob = ({ percentage, show }) => {    
    const progress = useRef()
    const ppc = useRef()

    useEffect(() => {
        const deg = (360 * percentage) / 100;

        if (percentage > 50) {
          // Add your CSS class for percent > 50 here
          ppc.current.classList.add("gt-50")
        }

        progress.current.style.transform = `rotate(${deg}deg)`
    
      }, [percentage]);
    
    return (
        <div class="progress-pie-chart" ref={ppc} data-percent={percentage}>
        <div class="ppc-progress">
            <div class="ppc-progress-fill" ref={progress}></div>
        </div>
        <div class="ppc-percents">
            <div class="pcc-percents-wrapper">
            {show && <span>{percentage}%</span>}
            </div>
        </div>
        </div>
    )
}

Knob.propTypes = {
    percentage: PropTypes.number,
    show: PropTypes.bool
}

export default Knob