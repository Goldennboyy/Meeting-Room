
// create a seed to populate the database with data


import { Booking, PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

async function seedUsers() {
    try {
        const users = [
            { email: 'john.doe@test.com' },
            { email: 'jane.doe@test.com' },
            { email: 'james.doe@test.com' },
            { email: 'jill.doe@test.com' },



        ];

        for (const user of users) {
            await prisma.user.create({
                data: user
            });
        }

        console.log('Seed data has been successfully inserted.');
    } catch (error) {
        console.error('Error seeding data:', error);
    } finally {
        await prisma.$disconnect();
    }
}

async function seedRoom() {
    try {
        const roomsData = [
            { name: "Sirius", capacity: 2 },
            { name: "Arcturus", capacity: 4 },
            { name: "Antares", capacity: 8 },
            { name: "Canis Major", capacity: 24 },
        ];

        for (const roomData of roomsData) {
            await prisma.room.create({
                data: roomData,
            });
        }

        console.log("Seed data has been successfully inserted.");
    } catch (error) {
        console.error("Error seeding data:", error);
    } finally {
        await prisma.$disconnect();
    }
}

async function seedBookings() {
    try {
        // 1 : john  2 jane 3 james 4 jill
        const bookingsData = [
            {
                room_id: 1,
                owner_id: 1,
                start_date: "2025-01-01T11:00:00+02:00",
                end_date: "2025-01-01T13:00:00+02:00",
            },
            {
                room_id: 2,
                owner_id: 2,
                start_date: "2025-01-01T08:00:00+02:00",
                end_date: "2025-01-01T12:00:00+02:00",
            },
            {
                id: 3,
                room_id: 2,
                owner_id: 3,
                start_date: "2025-01-01T14:00:00+02:00",
                end_date: "2025-01-01T15:30:00+02:00",
            },
            {
                id: 4,
                room_id: 4,
                owner_id: 1,
                start_date: "2025-01-02T07:00:00+02:00",
                end_date: "2025-01-02T12:30:00+02:00",
            },
            {
                id: 5,
                room_id: 1,
                owner_id: 3,
                start_date: "2025-01-02T09:00:00+02:00",
                end_date: "2025-01-02T10:00:00+02:00",
            },
            {
                id: 6,
                room_id: 2,
                owner_id: 3,
                start_date: "2025-01-06T08:00:00+02:00",
                end_date: "2025-01-06T17:00:00+02:00",
            },
            {
                id: 7,
                room_id: 3,
                owner_id: 4,
                start_date: "2025-01-02T07:00:00+02:00",
                end_date: "2025-01-02T16:30:00+02:00",
            },
        ];

        for (const bookingData of bookingsData) {
            await prisma.booking.create({
                data: bookingData,
            });
        }

        console.log("Seed data has been successfully inserted.");
    } catch (error) {
        console.error("Error seeding data:", error);
    } finally {
        await prisma.$disconnect();
    }
}

seedBookings();
//seedRoom();


//seedUsers();
