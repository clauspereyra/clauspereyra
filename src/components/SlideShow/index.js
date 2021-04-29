import './SlideShow.css'

// components
import Slider from './Slider'

function SlideShow() {
	const images = [
		{
			id: '1',
			title: 'Soluciones de pagos',
            subtitle: 'Online para empresas',
			img: './../../images/imgs-1.logos-pay.png',
			image:
				'https://jlm-agency.com/coin/images/imgs-1.jpg',
		},
		{
			id: '2',
			title: 'La mejor solución',
            subtitle: 'para los que cobran y para los que pagan',
			image:
				'https://jlm-agency.com/coin/images/imgs-2.jpg',
		},
		{
			id: '3',
			title: 'Un Gateway',
            subtitle: 'World-Class',          
			image:
				'https://jlm-agency.com/coin/images/imgs-3.jpg',
		},
		{
			id: '4',
			title: 'Personalización Avanzada',
            subtitle: 'múltiples opciones de integración',
			image:
				'https://jlm-agency.com/coin/images/imgs-4.jpg',
		},
		
	]

	return (
		<div className='SlideShow'>
			<Slider images={images} />
		</div>
	)
}

export default SlideShow
