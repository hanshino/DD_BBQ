<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class YoutubeVideos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('youtube_videos', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->string('channel_id')->comment('所屬頻道id')->nullable(false);
            $table->string('video_id')->comment('影片id')->unique()->nullable(false);
            $table->string('title')->comment('影片標題')->nullable(false);
            $table->string('description')->comment('影片內文')->nullable(false);

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
        Schema::dropIfExists('youtube_videos');
    }
}
