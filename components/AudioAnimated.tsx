import {Audio} from 'react-loader-spinner';

const AudioAnimated = () => {
    return (
        <Audio
            height={15}
            width={15}
            color="white"
            ariaLabel="triangle-loading"
            visible={true}
        />
    );
};

export default AudioAnimated;
