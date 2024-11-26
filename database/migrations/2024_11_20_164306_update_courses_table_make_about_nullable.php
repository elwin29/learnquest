<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateCoursesTableMakeAboutNullable extends Migration
{
    public function up()
    {
        Schema::table('courses', function (Blueprint $table) {
            $table->text('about')->nullable()->change(); // Allow NULL
        });
    }

    public function down()
    {
        Schema::table('courses', function (Blueprint $table) {
            $table->text('about')->nullable(false)->change(); // Revert back to NOT NULL
        });
    }
}
