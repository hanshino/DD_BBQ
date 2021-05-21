<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class YoutubeChannels extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('youtube_channels', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->string('channel_id')->comment('頻道ID')->unique()->nullable(false);
            $table->string('name')->comment('頻道名稱')->nullable(false);
            $table->string('avatar')->comment('頻道頭像網址')->nullable(false);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('youtube_channels');
    }
}
