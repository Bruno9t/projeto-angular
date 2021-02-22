import {
    trigger,
    state,
    style,
    animate,
    transition,
    query,
    animateChild,
    group
  } from '@angular/animations';

const appAnimations = {

  openClose: trigger('openClose',[
    state('closed',style({
      width:'var(--menu-size-closed)',
    })),
    state('open', style({
      width:'var(--menu-size-open)',
    })),
    transition('open => closed', [
      animate('0.24s ease-out')
    ]),
    transition('closed => open', [
      animate('0.24s ease-out')
    ])
  ]),

  slideIn:trigger('routeAnimations', [
    transition('MusicsPage <=> PlaylistsPage', [
      style({ position: 'absolute' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height:'100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('400ms ease-out', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('400ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    // transition('PlaylistsPage => MusicsPage', [
    //   style({ position: 'relative' }),
    //   query(':enter, :leave', [
    //     style({
    //       position: 'absolute',
    //       top: 0,
    //       left: 0,
    //       width: '100%'
    //     })
    //   ]),
    //   query(':enter', [
    //     style({ left: '-100%' })
    //   ]),
    //   query(':leave', animateChild()),
    //   group([
    //     query(':leave', [
    //       animate('200ms ease-out', style({ left: '100%' }))
    //     ]),
    //     query(':enter', [
    //       animate('300ms ease-out', style({ left: '0%' }))
    //     ])
    //   ]),
    //   query(':enter', animateChild()),
    // ])
  ]),

  labelAnimation:trigger('labelAnimation',[
    state("close",style({
      top: '50%',
      //left: '50%',
      //transform: 'translate(-50%,-50%)',
      transform: 'translateY(-50%)',
      fontSize:"1.5rem",
    })),
    state('open',style({
      top: '-5px',
      fontSize:"1rem",
    })),
    transition("close <=> open",[
      animate("200ms ease-out")
    ])
  ]),

  spanAnimation:trigger('spanAnimation',[
    state("close",style({
      width:0
    })),
    state('open',style({
      width:"100%"
    })),
    transition("close <=> open",[
      animate("200ms ease-out")
    ])
  ]),

  placeholderAnimation:trigger('placeholderAnimation',[
    state("close",style({
      opacity:0
    })),
    state('open',style({
      opacity:1
    })),
    transition("close <=> open",[
      animate("250ms ease-out")
    ])
  ]),



}


export {
  appAnimations
}