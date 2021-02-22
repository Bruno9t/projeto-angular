import { HomeComponent } from './home/home.component';
import { MusicsComponent } from './musics/musics.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { RegisterComponent } from './register/register.component';

import { Routes } from '@angular/router';

const appRoutes = {

    DEFAULT: [
        {
            path:'',
            pathMatch:'full',
            redirectTo:'home',
        }
    ],

    HOME: [
        {
            path:'home',
            component:HomeComponent
        }
    ],

    REGISTER: [
        {
            path:'auth/register',
            component:RegisterComponent
        }
    ],

    DASHBOARD:[
        {
            path:'dashboard',
            component: OpenCloseComponent,

            children: [
                {
                    path:'musics',

                    data:{
                        icon:'library_music',
                        title:'Músicas',
                        animation:'MusicsPage'
                    },

                    component: MusicsComponent
                },
                {
                    path:'playlists',

                    data:{
                        icon:'album',
                        title:'Playlists',
                        animation:'PlaylistsPage'
                    },

                    component: PlaylistsComponent
                }
            ]
        }
    ]   
} as {[key:string]: Routes}

export {
    appRoutes
}