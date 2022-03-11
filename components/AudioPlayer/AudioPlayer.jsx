import { useEffect, useRef } from 'react';
// Style
import Styles from './AudioPlayer.module.css';

const playIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3D3132">
		<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
</svg>`;
const pauseIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3D3132">
		<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
</svg>`;

const AudioPlayer = () => {
	const playerButton = useRef(null);
	const audio = useRef(null);

	useEffect(() => {
		function toggleAudio() {
			if (audio.current.paused) {
				audio.current.play();
				playerButton.current.innerHTML = pauseIcon;
			} else {
				audio.current.pause();
				playerButton.current.innerHTML = playIcon;
			}
		}
		playerButton.current.addEventListener('click', toggleAudio);

		function audioEnded() {
			playerButton.current.innerHTML = playIcon;
		}
		audio.current.onended = audioEnded;
	}, []);

	return (
		<div className={Styles.audio_player}>
			<audio src='/audio/themeSong.mp3' ref={audio} />
			<div className={Styles.controls}>
				<button
					className={Styles.player_button}
					id='player-button'
					ref={playerButton}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 20 20'
						fill='#3D3132'>
						<path
							fillRule='evenodd'
							d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z'
							clipRule='evenodd'
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default AudioPlayer;
