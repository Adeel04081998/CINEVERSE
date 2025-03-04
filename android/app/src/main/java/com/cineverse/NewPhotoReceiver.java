package com.cineverse;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.util.Log;

public class NewPhotoReceiver extends BroadcastReceiver {
    @Override
    public void onReceive(Context context, Intent intent) {
        Uri imageUri = intent.getData();
        if (imageUri != null) {
            Log.d("NewPhotoReceiver", "New image detected: " + imageUri.toString());

            // Launch the app when a new image is taken
            Intent launchIntent = new Intent(context, MainActivity.class);
            launchIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            launchIntent.putExtra("newPhotoUri", imageUri.toString());
            context.startActivity(launchIntent);
        }
    }
}
