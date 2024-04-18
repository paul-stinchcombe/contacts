'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export type Contact = {
	id?: number;
	name: string;
	phone: string;
	email: string;
};

export async function CreateContact(contact: Contact): Promise<Boolean> {
	try {
		await prisma.contacts.create({
			data: contact,
		});
		return true;
	} catch (err) {
		return false;
	}
}

export async function GetAllContacts(): Promise<Contact[]> {
	try {
		return await prisma.contacts.findMany();
	} catch (err) {
		return [];
	}
}
