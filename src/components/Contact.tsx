import { Contact as CONTACT } from '@/lib/ssr';

type Props = {
	contact: CONTACT;
};

export default function Contact(props: Props) {
	const d = props.contact;
	return (
		<div key={d.id} className='w-72 p-5 border-[1px] rounded-xl shadow-lg'>
			<div className='flex flex-col justify-center items-center'>
				<p className='text-lg mb-2'>{d.name}</p>
				<p className='text-sm'>Phone: {d.phone}</p>
				<p className={d.email ? 'text-sm' : 'text-sm text-white'}>email: {d.email}</p>
			</div>
		</div>
	);
}
