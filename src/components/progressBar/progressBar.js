import './progressBar.scss';

const ProgressBar = () => {
    const progressArr = []

    for(let i = 0; i < 62; i++) {
        progressArr.push(<div className="progress_item"></div>)
    }

    return (
        <div className="progress">
            {progressArr}
        </div>
    )
}

export default ProgressBar;