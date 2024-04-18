import Contact from '@/components/Contact';
import { GetAllContacts } from '@/lib/ssr';

export default async function Home() {
	const data = await GetAllContacts();

	return (
		<>
			<div className='mt-10 flex items-center justify-center'>
				<h1 className='text-5xl font-bold'>Contacts</h1>
			</div>
			<div className='mt-10 mx-20 flex flex-col items-start justify-center'>
				<div className='flex items-center justify-start gap-5'>
					{data.map((d) => (
						<Contact key={d.id} contact={d} />
					))}
				</div>
			</div>
		</>
	);
}
