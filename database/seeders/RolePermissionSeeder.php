<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RolePermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // buat bbrp role
        // buat default user untuk owner

        $ownerRole = Role::create([
            'name' => 'owner'
        ]);

        $studentRole = Role::create([
            'name' => 'student'
        ]);

        $teacherRole = Role::create([
            'name' => 'teacher'
        ]);

        $userOwner = User::create([
            'name' => 'Vladimir Elwin Leonard',
            'occupation' => 'Educator',
            'avatar' => 'images/default-avatar.png',
            'email' => 'elwinleonard593@gmail.com',
            'password' => bcrypt('Anasundala03')
        ]);

        $userOwner->assignRole($ownerRole);
    }
}
