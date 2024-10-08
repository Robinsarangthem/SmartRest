import { Avatar, AvatarImage } from '@/components/ui/avatar'
import food from '../../../assets/images/food_15.png'

export default function WelcomePage() {
	return (
		<div className='p-3 px-5'>
			<div className=''>
				<img
					width={300}
					className='
					rounded-full
					h-[300px]
					bg-cover bg-center
				'
					src={food}
				/>
			</div>
			<div></div>
		</div>
	)
}
